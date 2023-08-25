import {Injectable} from "@nestjs/common";
import {ProviderService} from "../external/provider";
import {Cron, CronExpression} from "@nestjs/schedule";

@Injectable()
export class OfferService {
    constructor(private readonly providerService: ProviderService) {}

    @Cron(CronExpression.EVERY_5_SECONDS)
    async processProvidersData() {
        const [providerAData, providerBData, providerCData] = await Promise.allSettled([
            this.providerService.getProviderAOffers(),
            this.providerService.getProviderBOffers(),
            this.providerService.getProviderCOffers()
        ]);

        console.log('providerAData --->', providerAData);
        console.log('providerBData --->', providerBData);
        console.log('providerCData --->', providerCData);

        // save to db
    }

}
