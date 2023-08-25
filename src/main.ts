import {NestFactory} from "@nestjs/core";
import {AppModule} from "./modules/app.module";
import {ConfigService} from "@nestjs/config";
import {ValidationPipe} from "@nestjs/common";

const bootstrap = async () => {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
        stopAtFirstError: true,
        transform: true,
        transformOptions: { enableImplicitConversion: true },
    }));
    const configService = app.get<ConfigService>(ConfigService);

    await app.listen(configService.get('global.port'));
}

bootstrap();
