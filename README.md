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


## Add new providers

```bash
 # Define how provider data should be fetched 
 async getProviderAOffers(): Promise<IOffer[]> {
    const providerResponse = await this.httpService.get<IPayloadA>(payloadA);
    return OfferMapperManager.validateAndTransform(providerResponse, Offer(<provider-name>), <provider-name>);
}

# Define how the response should be mapped
export const responseMappers = {
    'provider-X': (payload: IPayloadX) => {
        return payload['your-field'];
    }
    ...
}

# Define how a specific provider field should be mapped in all <field-name>.mappers.ts files
export const descriptionMappersByProviderType = {
    'provider-c': (offer) => {
        if (!offer['any-field']) {
            return null;
        }
        return offer['any-field']
    }
    ...
}

```
