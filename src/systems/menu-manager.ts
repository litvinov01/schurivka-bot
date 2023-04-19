import { SchurivkaContext } from "../utils/context.js";
import { Button } from "./button.js";
import { Telegraf } from "telegraf";
import { SCENES_REPO } from "../utils/scenes.repo.js";
import { BotMenu } from "./menu.js";

class MenuManager {
	private _setupBotMenuActions(bot: Telegraf<SchurivkaContext>, defaultButtons: Button[]) {
		console.log("Setting up bot menu actions", defaultButtons.length);
		for (const button of defaultButtons) {
			// console.log("setting action", button.name, button.callback);
			bot.hears(button.name, (ctx) => {
				// console.log("bot.action context" /*ctx*/);
				try {
					button.callback(ctx, bot);
				} catch (error) {
					console.log(error);
				}
			});
		}

		console.log("setted up buttons");
	}

	initMenu(bot: Telegraf<SchurivkaContext>) {
		new Button("Зареєструватися", (ctx: SchurivkaContext) => ctx.scene?.enter(SCENES_REPO.Registration), "initReg", true, false);
		this._setupBotMenuActions(bot, Button.main);
		return new BotMenu();
	}
}

export const menuManager = new MenuManager();
