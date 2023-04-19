export class Command {
	constructor(public name: string, public handler: Function) {
		this.name = name;
		this.handler = handler;
	}
}
