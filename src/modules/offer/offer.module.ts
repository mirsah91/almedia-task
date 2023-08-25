import {Module} from "@nestjs/common";
import {ProviderModule} from "../external/provider";
import {ScheduleModule} from "@nestjs/schedule";
import {OfferService} from "./offer.service";

@Module({
    imports: [ScheduleModule.forRoot(), ProviderModule],
    providers: [OfferService],
})
export class OfferModule {}
