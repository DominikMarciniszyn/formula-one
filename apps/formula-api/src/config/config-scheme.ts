import { DatabaseConfig } from "./config-values/databse.config";

export interface ConfigValues {
    api: ApiConfig;
    environment: EnvironmentConfig;
    database: DatabaseConfig;
}