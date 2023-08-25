
export const isAndroidMappersByProviderType = {
    'provider-c': (offer) => {
        if (!offer.platform || !offer.device) {
            return null;
        }

        if (offer.platform === 'mobile' && offer.device !== 'iphone_ipad') {
            return 1;
        }

        return 0;
    },
    'provider-b': ({OS}) => {
        if (OS.android === null || OS.android === undefined) {
            return null;
        }

        return Number(!!OS.android);
    },
    'provider-a': (offer) => {
        if (!offer.platform || !offer.device) {
            return null;
        }

        if (offer.platform === 'mobile' && offer.device !== 'iphone_ipad') {
            return 1;
        }

        return 0;
    },
}
