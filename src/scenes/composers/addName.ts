import { Composer, Markup } from "telegraf";
import { apiController } from "../../api/controller.js";
import { SchurivkaContext } from "../../utils/context.js";
import { GeneralAction } from "../../utils/types.js";
export const addName = new Composer<SchurivkaContext>();

addName.on("message", async (ctx: any) => {
	if (!ctx.message?.text || !ctx.message.author) return;

	const nickname = ctx.message?.text;
	ctx.scene.session.registration.nickname = nickname;
	ctx.scene.session.registration.chatId = ctx.from?.id;
	if (!nickname) {
		ctx.reply("Щось пішло не по плану");
		ctx.scene.leave();
	}

	ctx.reply(
		`Ваш нікнейм ${nickname}?`,
		Markup.inlineKeyboard([[Markup.button.callback("Так", "apply_name")], [Markup.button.callback("Ні", "change_name")]])
	);
	// const result = await apiController.registyUser(ctx);
	// result ? ctx.reply(`Ви успішно зареєструвалися під ніком ${nickname}`) : ctx.reply("Щось пішло не по плану і ми вас не зареєстрували");
	ctx.wizard.next();
});

addName.action("apply_name", async (ctx: SchurivkaContext) => {
	const { nickname } = ctx.scene.session.registration;
	if (!nickname) {
		await ctx.reply("Щось пішло не по плану, можливо, ви не ввели нікнейм, веддіть його будь ласка ще раз");
		ctx.wizard.back();
	}

	ctx.reply(`Ваш нікнейм ${nickname}?`);
	const result = await apiController.registyUser(ctx);
	result ? ctx.reply(`Ви успішно зареєструвалися під ніком ${nickname}`) : ctx.reply("Щось пішло не по плану і ми вас не зареєстрували");
	ctx.scene.leave();
});

addName.action("change_name", async (ctx: SchurivkaContext) => {
	ctx.reply(`Впишіть інший нікнейм`);
});
