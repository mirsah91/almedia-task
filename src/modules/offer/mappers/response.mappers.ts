import {IPayloadB, IPayloadA, IPayloadC} from "../../external/provider/utils/provider-payloads";

export const responseMappers = {
    'provider-c': (payload: IPayloadC) => {
        return payload.response.offers;
    },
    'provider-b': (payload: IPayloadB) => {
        const [offer] = Object.values(payload.data);
        return offer;
    },
    'provider-a': (payload: IPayloadA) => {
        return payload.response.offers;
    },
}
