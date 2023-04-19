import { Context, Scenes } from "telegraf";
import { WizardContextWizard } from "telegraf/scenes";

type IRegistrationData = {
	chatId?: number;
	nickname?: string;
};

interface WizardSession extends Scenes.WizardSessionData {
	registration: IRegistrationData;
}

export interface SchurivkaContext extends Context {
	session: any;
	scene: Scenes.SceneContextScene<SchurivkaContext, WizardSession>;
	wizard: Scenes.WizardContextWizard<SchurivkaContext>;
}
