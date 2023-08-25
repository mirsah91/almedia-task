
export const offerUrlTemplateMappersByProviderType = {
    'provider-c': (offer) => {
        if (!offer.offer_url) {
            return null;
        }

        return offer.offer_url;
    },
    'provider-b': ({ Offer }) => {
        if (!Offer.tracking_url) {
            return null;
        }

        return Offer.tracking_url;
    },
    'provider-a': (offer) => {
        if (!offer.offer_url) {
            return null;
        }

        return offer.offer_url;
    },
}
