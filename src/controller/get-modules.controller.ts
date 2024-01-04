import { Response, Request } from "express"
import { Browser, Page } from "puppeteer"
import { Logger } from "winston"
import { GetModulesProcedure } from "../procedures/get-modules.procedures"

export class GetModulesController {
  private browser: Browser
  private logger: Logger

  constructor(browser: Browser, logger: Logger) {
    this.browser = browser,
    this.logger = logger
  }

  public async handler(request: Request, response: Response) {
    try {
      const page: Page = await this.browser.newPage()
      const modules = await new GetModulesProcedure(page, this.logger).listModules()
  
      return response.status(200).json({ title: modules })
    } catch(error) {
      return response.status(400).json({ message: "Falha ao obter os módulos" })
    } finally {
      await this.browser.close()
    }
  }
}