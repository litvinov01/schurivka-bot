import { config } from "dotenv";
import { Telegraf, session } from "telegraf";
import { setupBot } from "./utils/setup.js";
import { SchurivkaContext } from "./utils/context.js";

config();
// (() => {
console.log("Starting bot");

const bot = new Telegraf<SchurivkaContext>(process.env.BOT_TOKEN as string);
bot.use(session());

setupBot(bot);

bot.launch().then(() => {
	console.log("Hello, world, bot is working");
});

// Enable graceful stop
// process.once("SIGINT", () => bot.stop("SIGINT"));
// process.once("SIGTERM", () => bot.stop("SIGTERM"));
// })();
