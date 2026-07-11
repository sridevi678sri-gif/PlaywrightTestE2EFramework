import GreenKartPage from './GreenKartPage';

export default class POMManager {
  constructor(page) {
    this.page = page;
  }

  get greenKart() {
    this._greenKart ??= new GreenKartPage(this.page);
    return this._greenKart;
  }
}
