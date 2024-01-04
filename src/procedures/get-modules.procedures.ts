import { Page } from "puppeteer"
import { Logger } from "winston"

export class GetModulesProcedure {
  private page: Page;
  private logger: Logger;

  constructor(page: Page, logger: Logger) {
    this.page = page,
    this.logger = logger
  }

  public async listModules() {
    this.logger.log("info", "iniciando busca por módulos de supervisão" )
    try {
      await this.page.goto("https://sigmaecm.com")
      await this.page.waitForNavigation();
      const title = await this.page.title()

      if (!title) throw new Error("Title not found")
      return title

    } catch(error) {
      this.logger.log("error", String(error))
      throw error
    }
  }
}