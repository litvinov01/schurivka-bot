import { Markup } from "telegraf";
import { Button } from "./button.js";

let menu: BotMenu;
export class BotMenu {
	constructor(buttons: Button[] = Button.main) {
		if (menu) return;
		// for (const defaultButton of buttons) {
		//     button.callback(defaultButton.name as string, defaultButton.callback);
		// }

		// }
		this.buttons = buttons;
		return this;
	}

	private buttons: Button[] = [];

	addButton(button: Button) {
		this.buttons.push(button);
	}

	getButtons() {
		return this.buttons;
	}

	getButtonById(id: string) {
		return this.buttons.find((button) => button.id === id);
	}

	getKeyboard(size: number = 2): any {
		const keyboard = [];
		if (!this.buttons || !this.buttons.length) {
			this.buttons = Button.main;
		}

		const copiedButtons = [...this.buttons];
		while (copiedButtons.length) {
			keyboard.push(
				copiedButtons.splice(0, size).map((el) => {
					return Markup.button.callback(el.name, el.callbackKey);
					//  { text:, callback_data: };
				})
			);
		}

		return keyboard;
	}
}
