import { SchurivkaContext } from "../utils/context.js";
import { SCENES_REPO } from "../utils/scenes.repo.js";
import { Command } from "./command.js";

const registerHandler = async (ctx: SchurivkaContext) => {
	await ctx.scene.enter(SCENES_REPO.Registration);
	ctx.reply("Що ж, почнемо реєстрацію");
};

export const menu = new Command("register", registerHandler);
