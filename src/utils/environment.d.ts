import { config } from "dotenv";

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			BOT_TOKEN: string;
			PORT: number;
			API_PORT: number;
		}
	}
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
