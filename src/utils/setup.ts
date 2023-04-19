import { setupCommands } from "../commands/index.js";
import { setupScenes } from "../scenes/setup.js";
import { menuManager } from "../systems/menu-manager.js";

export const setupBot = (bot: any) => {
	const menu = menuManager.initMenu(bot);

	setupCommands(bot, menu);
	setupScenes(bot);
};
