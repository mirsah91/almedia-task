export const requirementsMappersByProviderType = {
    'provider-c': (offer) => {
        if (!offer.call_to_action) {
            return null;
        }

        return offer.call_to_action;
    },
    'provider-b': ({Offer}) => {
        if (!Offer.instructions) {
            return null;
        }

        return Offer.instructions;
    },
    'provider-a': (offer) => {
        if (!offer.call_to_action) {
            return null;
        }

      return offer.call_to_action;
    },
}
