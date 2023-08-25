import {IsNumber, IsString, MaxLength} from "class-validator";
import { v4 as uuidv } from 'uuid';
import {DefaultValue} from "../../../common";
import {Expose} from "class-transformer";
import {OfferFieldMapper} from "../decorators/offer-field-mapper.decorator";
import {nameMappersByProviderType} from "../mappers/name.mappers";
import {descriptionMappersByProviderType} from "../mappers/description.mappers";
import {requirementsMappersByProviderType} from "../mappers/requirements.mappers";
import {thumbnailMappersByProviderType} from "../mappers/thumbnail.mappers";
import {isDesktopMappersByProviderType} from "../mappers/is-desktop.mappers";
import {isAndroidMappersByProviderType} from "../mappers/is-android.mappers";
import {isIosMappersByProviderType} from "../mappers/is-ios.mappers";
import {offerUrlTemplateMappersByProviderType} from "../mappers/offer-url-template.mappers";
import {externalOfferIdMappersByProviderType} from "../mappers/external-offer-id.meppers";

export interface IOffer {
    name: string;
    slug: string;
    description: string;
    requirements: string;
    thumbnail: string;
    isDesktop?: number;
    isAndroid?: number;
    isIos?: number;
    offerUrlTemplate: string;
    providerName?: string;
    externalOfferId?: string;
}

export const Offer = (providerType: string): new () => IOffer => {
    class ProviderOffer implements IOffer {
        @IsString()
        @MaxLength(255)
        @Expose()
        @OfferFieldMapper(providerType, nameMappersByProviderType)
        name: string;

        @IsString()
        @MaxLength(255)
        @Expose()
        @DefaultValue(uuidv())
        slug: string;

        @IsString()
        @Expose()
        @OfferFieldMapper(providerType, descriptionMappersByProviderType)
        description: string;

        @IsString()
        @Expose()
        @OfferFieldMapper(providerType, requirementsMappersByProviderType)
        requirements: string;

        @IsString()
        @MaxLength(255)
        @Expose()
        @OfferFieldMapper(providerType, thumbnailMappersByProviderType)
        thumbnail: string;

        @IsNumber()
        @Expose()
        @OfferFieldMapper(providerType, isDesktopMappersByProviderType)
        isDesktop?: number;

        @IsNumber()
        @Expose()
        @OfferFieldMapper(providerType, isAndroidMappersByProviderType)
        isAndroid?: number;

        @IsNumber()
        @Expose()
        @OfferFieldMapper(providerType, isIosMappersByProviderType)
        isIos?: number;

        @IsString()
        @MaxLength(256)
        @Expose()
        @OfferFieldMapper(providerType, offerUrlTemplateMappersByProviderType)
        offerUrlTemplate: string;

        @IsString()
        @MaxLength(256)
        @DefaultValue(providerType)
        @Expose()
        providerName?: string;

        @IsString()
        @MaxLength(256)
        @DefaultValue(null)
        @Expose()
        @OfferFieldMapper(providerType, externalOfferIdMappersByProviderType)
        externalOfferId?: string;
    }

    return ProviderOffer;
}
