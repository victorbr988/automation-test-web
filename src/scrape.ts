import { Response } from "express";
import puppeteer from "puppeteer";

export async function scrape(response: Response) {
  const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    // Navigate the page to a URL
    await page.goto('https://developer.chrome.com/');
  
    const fullTitle = await page.title()

    response.send(`The title of this blog post is ${fullTitle}`)
  
    await browser.close();
    
}