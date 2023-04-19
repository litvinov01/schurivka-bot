import md5 from "md5";

export class Button {
	constructor(name: string, callback: Function, callbackKey: string, isMenu = false, hide = false) {
		const found = Button.all.find((button) => button.name === name);
		if (found) {
			throw new Error("Button with name " + name + " already exists");
		}

		this.name = name;
		this.callback = callback;
		this.callbackKey = callbackKey;
		this.id = md5(name);
		this.hide = hide;

		Button.all.push(this);

		isMenu && Button.main.push(this);
	}

	static readonly main: Button[] = [];
	static readonly all: Button[] = [];
	readonly name: string;
	readonly callback: Function;
	readonly callbackKey: string;
	readonly id: string;

	private hide: boolean;

	isHideble() {
		return this.hide;
	}

	destroy() {
		const index = Button.all.findIndex((b) => b.id === this.id);
		if (index > -1) {
			Button.all.splice(index, 1);
		}
	}
}
