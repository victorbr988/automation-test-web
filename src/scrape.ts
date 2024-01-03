import { Response } from "express";
import puppeteer from "puppeteer";

export async function scrape(response: Response) {
  const browser = await puppeteer.launch({
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--single-process",
      "--no-zygote"
    ],
    executablePath: process.env.NODE_ENV === "production" ? process.env.PUPPETEER_EXECUTABLE_PATH : puppeteer.executablePath()
  });
    const page = await browser.newPage();
  
    // Navigate the page to a URL
    await page.goto('https://developer.chrome.com/');
  
    const fullTitle = await page.title()

    response.send(`The title of this blog post is ${fullTitle}`)
  
    await browser.close();
    
}