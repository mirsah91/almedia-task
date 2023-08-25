export const descriptionMappersByProviderType = {
    'provider-c': (offer) => {
        if (!offer.offer_desc) {
            return null;
        }
        return offer.offer_desc
    },
    'provider-b': ({Offer}) => {
        if (!Offer.description) {
            return null;
        }

        return Offer.description;
    },
    'provider-a': (offer) => {
        if (!offer.offer_desc) {
            return null;
        }

        return offer.offer_desc
    },
}
