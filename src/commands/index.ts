import { start } from "./start.js";
import { createMenu } from "./menu.js";

export const setupCommands = (bot: any, menu: any) => {
	const commands = [start, createMenu(menu)];
	for (const comm of commands) {
		bot.command(comm.name, comm.handler);
	}
};
