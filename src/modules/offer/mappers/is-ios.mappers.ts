export const isIosMappersByProviderType = {
    'provider-c': (offer) => {
        if (!offer.platform || !offer.device) {
            return null;
        }

        if (offer.platform === 'mobile' && offer.device === 'iphone_ipad') {
            return 1;
        }

        return 0;
    },
    'provider-b': ({ OS }) => {
        if (OS.ios === null || OS.ios === undefined) {
            return null;
        }

        return Number(!!OS.ios);
    },
    'provider-a': (offer) => {
        if (!offer.platform || !offer.device) {
            return null;
        }

        if (offer.platform === 'mobile' && offer.device === 'iphone_ipad') {
            return 1;
        }

        return 0;
    },
}
