export const nameMappersByProviderType = {
    'provider-c': (offer) => {
        return offer.offer_name;
    },
    'provider-b': ({ Offer }) => {
        return Offer.name;
    },
    'provider-a': (offer) => {
        return offer.offer_name;
    },
}
