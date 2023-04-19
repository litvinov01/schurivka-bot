import { SchurivkaContext } from "../utils/context.js";
import { apiService, ApiService } from "./service.js";

export class ApiController {
	constructor(private _apiService: ApiService) {}
	async registyUser(ctx: SchurivkaContext) {
		const { chatId, nickname } = ctx.scene.session.registration;
		const result = await apiService.registryUser(chatId, nickname);

		return result;
	}

	async verifyNickname(nickname: string) {}
}

export const apiController = new ApiController(apiService);
