import { plainToClass } from 'class-transformer';

import { Type } from '@nestjs/common';
import {validate} from "class-validator";
import {responseMappers} from "./response.mappers";

export class OfferMapperManager {
    public static async validateAndTransform<T extends object>(
        data: unknown,
        toType: Type<T>,
        providerType: string
    ): Promise<T[]> {
        const offer = responseMappers[providerType](data);

        if (Array.isArray(offer)) {
            const mappedObjects = await Promise.all(offer.map(offer => OfferMapperManager.validate(offer, toType)))
            return mappedObjects.filter(offer => !!offer);
        }

        const mappedObject = await OfferMapperManager.validate(offer, toType);
        return mappedObject ? [mappedObject] : [];
    }

    private static async validate<T extends object>(object: unknown, toType: Type<T>): Promise<T> {
        try {
            const transformedPayload = plainToClass(toType, object, { excludeExtraneousValues: true });

            const errors = await validate(transformedPayload);

            if (errors.length > 0) {
                console.error('Validation errors', errors);
                return null;
            }

            return transformedPayload;
        } catch {
            return null;
        }

    }
}
