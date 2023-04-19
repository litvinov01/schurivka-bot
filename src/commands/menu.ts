import { BotMenu } from "../systems/menu.js";
import { SchurivkaContext } from "../utils/context.js";
import { Command } from "./command.js";
import { Markup } from "telegraf";
export const createMenu = (menu: BotMenu) => {
	const menuHandler = (ctx: SchurivkaContext) => {
		const board = Markup.keyboard(menu.getKeyboard(2));
		console.log(JSON.stringify(board));
		ctx.reply("Ваше меню", board);
	};

	return new Command("menu", menuHandler);
};
