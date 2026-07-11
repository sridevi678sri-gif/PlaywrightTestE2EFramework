export default class orangeDemoPage{
    constructor(page)
    {
        this.orangeLinkedIn=page.locator("a[href*='linked']");
        this.userName=page.getByPlaceholder("Username");
        this.password=page.getByPlaceholder("Password");
        this.login=page.getByRole("button",{name:'Login'});

    }
}