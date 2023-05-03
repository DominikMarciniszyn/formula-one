import { ConfigValues } from "./config-scheme";

export interface Config extends ConfigValues {}

export class Config {
    public static baseValues: ConfigValues;
    private static instance?: Config;

    constructor(values: ConfigValues) {
        Object.assign(this, values);
    }

    static load(test?: boolean): Config {
        return null;
    }
}

export const config = Config.load();
