import { ApiConfig } from "./config-values/api.config";
import { DatabaseConfig } from "./config-values/databse.config";
import { EnvironmentConfig } from "./config-values/environment.config";

export interface ConfigValues {
    api: ApiConfig;
    environment: EnvironmentConfig;
    database: DatabaseConfig;
}