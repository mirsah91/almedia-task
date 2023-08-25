import {Injectable} from "@nestjs/common";
import {HttpService} from "../../helper/http";
import {
    IPayloadA,
    IPayloadB, IPayloadC,
    payloadA,
    payloadB, payloadC,
} from "./utils/provider-payloads";
import {IOffer, Offer} from "../../offer/domain/offer";
import {OfferMapperManager} from "../../offer/mappers/offer-mapper-manager";

@Injectable()
export class ProviderService {
    constructor(private readonly httpService: HttpService) {
    }

    async getProviderAOffers(): Promise<IOffer[]> {
        const providerResponse = await this.httpService.get<IPayloadA>(payloadA);
        return OfferMapperManager.validateAndTransform(providerResponse, Offer('provider-a'), 'provider-a');
    }

    async getProviderBOffers(): Promise<IOffer[]> {
        const providerResponse = await this.httpService.get<IPayloadB>(payloadB);
        return OfferMapperManager.validateAndTransform(providerResponse, Offer('provider-b'), 'provider-b');
    }

    async getProviderCOffers(): Promise<IOffer[]> {
        const providerResponse = await this.httpService.get<IPayloadC>(payloadC);
        return OfferMapperManager.validateAndTransform(providerResponse, Offer('provider-c'), 'provider-c');
    }
}
