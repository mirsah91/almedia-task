
export const isDesktopMappersByProviderType = {
    'provider-c': (offer) => {
        if (!offer.platform) {
            return null;
        }

        return Number(offer.platform === 'desktop');
    },
    'provider-b': ({OS}) => {
        if (OS.web === null || OS.web === undefined) {
            return null;
        }

        return Number(!!OS.web);
    },
    'provider-a': (offer) => {
        if (!offer.platform) {
            return null;
        }

        return Number(offer.platform === 'desktop');
    },
}
