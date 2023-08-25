import {Module} from "@nestjs/common";
import {ProviderService} from "./provider.service";
import {HttpModule} from "../../helper/http";

@Module({
    imports: [HttpModule],
    providers: [ProviderService],
    exports: [ProviderService]
})
export class ProviderModule {}
