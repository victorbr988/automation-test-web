import express from "express";
import { GetModulesController } from "../controller/get-modules.controller";
import { browserConfig } from "../scrape";
import { logger } from "../log/winston";

export const modulesRoutes = express.Router()
const browser = browserConfig()

modulesRoutes.get("/modules", async (request, response) => new GetModulesController(await browser, logger).handler(request, response))