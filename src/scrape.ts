import puppeteer, { Browser } from "puppeteer";

export async function browserConfig(): Promise<Browser> {
  const browser: Browser = await puppeteer.launch({
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--single-process",
      "--no-zygote",
      '--disable-features=site-per-process'
    ],
    executablePath: process.env.NODE_ENV === "production" ? process.env.PUPPETEER_EXECUTABLE_PATH : puppeteer.executablePath()
  });

  return browser
}
