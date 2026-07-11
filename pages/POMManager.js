import HomePage from "./HomePage";
import RegistrationPage from "./RegistrationPage";
import AccountPage from "./AccountPage";
import orangeDemoPage from "./orangeDemoPage"; 
import GreenKartPage from "./GreenKartPage";
export default class POMManager {

    constructor(page) {


    this.page=page;
      

    }

    get homePage() {
        this._homePage??= new HomePage(this.page);
        return this._homePage;
    }
    get registrationPage() {
        this._registrationPage??= new RegistrationPage(this.page);
        return this._registrationPage;
    }
    get accountPage() {
        this._accountPage??= new AccountPage(this.page);
        return this._accountPage;
    }
    get orangeDemo() {
        this._orangeDemo??= new orangeDemoPage(this.page);
        return this._orangeDemo;
    }
    get greenKart() {
        this._greenKart??= new GreenKartPage(this.page);
        return this._greenKart;
    }
}