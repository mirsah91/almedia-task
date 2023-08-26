## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e
```


## Add new provider

```bash
 # Define how provider data should be fetched 
 async getProviderAOffers(): Promise<IOffer[]> {
    const providerResponse = await this.httpService.get<IPayloadA>(payloadA);
    return OfferMapperManager.validateAndTransform(providerResponse, Offer(<provider-name>), <provider-name>);
}

# Define how the response should be mapped
export const responseMappers = {
    'provider-X': (payload: IPayloadX) => {
        // your mapping logic here
    }
    ...
}

# Define how a specific provider field should be mapped in <field-name>.mappers.ts file
export const descriptionMappersByProviderType = {
    'provider-X': (offer: IOffer) => {
        // your mapping logic here
    }
    ...
}

```
