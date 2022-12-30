import puppeteer from "puppeteer";
import { AbstractGrabber } from "../../utilty/AbstractGrabber";
import { FireStation } from "./FireStation";

export class FireStationGrabber extends AbstractGrabber<FireStation> {
  public async grab(): Promise<FireStation[]> {
    let result: FireStation[] = [];
    result = await this.scraper();
    return result;
  }

  private async scraper(): Promise<FireStation[]> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto("https://www.map.gov.hk/gm/map/search/faci/FSAD");
    await page.waitForSelector(".btn-search");
    await page.click(".btn-search");
    await page.waitForNavigation();
    await page.waitForSelector(".collapsible");
    const grabbedList = await page.$$eval(
      ".collapsible > .faci_result",
      (lists) => {
        const shopList = lists.map((shop, i) => {
          let list: FireStation = {
            uniqueId: "",
            ename: "",
            cname: "",
            caddress: "",
            eaddress: "",
            x: 0,
            y: 0,
          };
          list.uniqueId = shop.getAttribute("id");
          return list;
        });
        return shopList;
      }
    );
    return grabbedList;
  }
}
