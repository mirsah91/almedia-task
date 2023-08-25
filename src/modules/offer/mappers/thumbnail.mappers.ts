export const thumbnailMappersByProviderType = {
    'provider-c': (offer) => {
        if (!offer.image_url) {
            return null;
        }

        return offer.image_url;
    },
    'provider-b': ({ Offer }) => {
        if (!Offer.icon) {
            return null;
        }

        return Offer.icon;
    },
    'provider-a': (offer) => {
        if (!offer.image_url) {
            return null;
        }

        return offer.image_url;
    },
}
