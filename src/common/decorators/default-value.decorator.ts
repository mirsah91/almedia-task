import { Transform } from 'class-transformer';

export const DefaultValue = (defaultValue: unknown) => {
    return Transform(({ value }) => {
        if (value === null || value === undefined || value === '') {
            return defaultValue;
        }
        return value;
    });
}
