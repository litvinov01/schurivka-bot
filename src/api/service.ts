import axios from "axios";

export class ApiService {
	async registryUser(chatId: number | undefined, username: string | undefined) {
		if (!chatId || !username) return false;

		try {
			const res = await axios.post(process.env.API_URL + "/user", { chatId, username });
			return !!res;
		} catch (e) {
			console.error(e);
			return false;
		}
	}

	async getUser(chatId: number) {
		try {
			const res = await axios.get(process.env.API_URL + `user/chatId:${chatId}`);
			return res;
		} catch (e) {
			console.error(e);
			return false;
		}
	}

	async verifyNickname(username: string): Promise<boolean> {
		try {
			const res = await axios.get(process.env.API_URL + `verify/user/nickname:${username}`);
			return !!res.data;
		} catch (e) {
			console.error(e);
			return false;
		}
	}
}

export const apiService = new ApiService();
