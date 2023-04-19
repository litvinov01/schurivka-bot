import { SchurivkaContext } from "../utils/context.js";
import { Command } from "./command.js";

const startHandler = (ctx: SchurivkaContext) => {
	ctx.reply("Helloooo");
};

export const start = new Command("start", startHandler);
