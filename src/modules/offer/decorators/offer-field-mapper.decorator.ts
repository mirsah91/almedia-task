import { Transform } from 'class-transformer';

export function OfferFieldMapper(providerType: string, mappersByProviderType: object) {
    return Transform(({ obj }) => {
        return mappersByProviderType[providerType](obj);
    });
}
