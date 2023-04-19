import { Composer, Markup } from "telegraf";
import { apiController } from "../../api/controller.js";
import { SchurivkaContext } from "../../utils/context.js";
import { GeneralAction } from "../../utils/types.js";
export const renameComposer = new Composer<SchurivkaContext>();
