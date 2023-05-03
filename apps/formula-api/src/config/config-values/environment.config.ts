import { registerAs } from "@nestjs/config";
import { config } from "../config";

export enum NodeEnv {
    DEVELOPMENT = 'development',
    TEST = 'test',
}

export interface EnvironmentConfig {
    nodeEnv: NodeEnv;
}

export const environmentConfig = registerAs('environment', (): EnvironmentConfig => {
    return config.environment;
});
