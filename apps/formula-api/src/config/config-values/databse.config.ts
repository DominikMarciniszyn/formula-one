import { registerAs } from "@nestjs/config";
import { config } from '../config';

export interface DatabaseConfig {
    host: string;
    port: number;
    username: string;
    password: string;
    name: string;
    migrationRun: boolean;
}

export const databaseConfig = registerAs('databse', (): DatabaseConfig => {
    return config.database;
});
