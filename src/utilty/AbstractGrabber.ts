import puppeteer from "puppeteer";
import { IGrabber } from "./IGrabber";

export abstract class AbstractGrabber<T> implements IGrabber<T> {
  abstract grab(): Promise<T[]>;

  protected shopList: T[] = [];

  public constructor() {}

  public getShopList(): T[] {
    return this.shopList;
  }
}
