import {Injectable} from "@nestjs/common";
import {ProviderService} from "../external/provider";
import {Cron, CronExpression} from "@nestjs/schedule";

@Injectable()
export class OfferService {
    constructor(private readonly providerService: ProviderService) {}

    @Cron(CronExpression.EVERY_5_SECONDS)
    async processProvidersData() {
        const providerData = await Promise.allSettled([
            this.providerService.getProviderAOffers(),
            this.providerService.getProviderBOffers(),
            this.providerService.getProviderCOffers()
        ]);

        const filteredProviderData = providerData
            .map((promise) => {
                if (promise.status === 'fulfilled') {
                    return promise.value;
                }

                return null;
            })
            .filter(data => !!data)

        console.log('filteredProviderData -->', filteredProviderData);
        // save to db
    }
}
