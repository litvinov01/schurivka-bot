import { Stage, WizardScene } from "telegraf/scenes";
import { GeneralAction } from "../utils/types.js";
import { SCENES } from "./index.js";

export const setupScenes = (bot: any) => {
	const createdScenes: any[] = [];
	for (const sceneId in SCENES) {
		if (Object.hasOwnProperty.call(SCENES, sceneId)) {
			const handlers = SCENES.get(sceneId);
			if (!handlers) return;
			const createdScene = new WizardScene(sceneId, ...handlers);
			createdScenes.push(createdScene);
		}
	}

	const stage = new Stage(createdScenes);

	stage.action(GeneralAction.Cancel, (ctx) => {
		ctx.reply("Ми відминили вашу дію :)");
		return ctx.scene?.leave();
	});

	bot.use(stage.middleware());
};
