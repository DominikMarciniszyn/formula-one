import { registerAs } from "@nestjs/config";
import { config } from "../config";

export interface ApiConfig {
    port: number;
}

export const apiConfig = registerAs('api', (): ApiConfig => {
    return config.api;
});
