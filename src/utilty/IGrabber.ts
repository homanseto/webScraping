export interface IGrabber<T> {
  grab(): Promise<T[]>;
  getShopList(): T[];
}
