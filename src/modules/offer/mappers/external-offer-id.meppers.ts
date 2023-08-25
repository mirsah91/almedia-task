export const externalOfferIdMappersByProviderType = {
    'provider-c': (offer) => {
        if (!offer.offer_id) {
            return null;
        }

        return offer.offer_id
    },
    'provider-b': ({Offer}) => {
        if (!Offer.campaign_id) {
            return null;
        }

        return String(Offer.campaign_id);
    },
    'provider-a': (offer) => {
        if (!offer.offer_id) {
            return null;
        }

        return offer.offer_id
    },
}
