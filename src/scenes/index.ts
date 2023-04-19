import { Composer } from "telegraf";
import { SchurivkaContext } from "../utils/context.js";
import { addName } from "./composers/addName.js";
import { renameComposer } from "./composers/rename.js";
export const SCENES = new Map<string, Array<any>>();

SCENES.set("REGISTRATION", [
	(ctx: any) => {
		ctx.reply("Для того щоб зареєструватися впишіть нижче ваш нікчнейм на сервері");
		ctx.wizard.next();
	},
	addName,
]);

SCENES.set("ACCOUNT_DATA", [(ctx: any) => {}]);

// class Scenes {
// 	constructor() {
// 		this._handlers = {
// 			REGISTRATION: [
// 				(ctx: any) => {
// 					ctx.reply("Для того щоб зареєструватися впишіть нижче ваш нікчнейм на сервері");
// 					ctx.wizard.next();
// 				},
// 				addName,
// 			],
// 			ACCOUNT_DATA:,
// 		};
// 	}

// 	private _handlers;

// 	public getHandlers(key: string): Array<Function> {
// 		return this._handlers[key];
// 	}
// }
// export const SCENES = new Scenes();
