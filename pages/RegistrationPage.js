export default class RegistrationPage{
    constructor(page)
    {
        
        this.registrationHeading=page.getByRole("heading",{name:'Register Account'});
        this.firstName=page.getByPlaceholder("First Name");
        this.lastName=page.locator("#input-lastname");
        this.email=page.locator("#input-email");
        this.phone=page.getByPlaceholder("Telephone");
        this.password=page.locator("input[type='password']").first();
        this.passwordConfirm=page.locator("#input-confirm");
        this.privacyPolicy=page.locator("input[name='agree']");
        this.continue=page.getByRole("button",{name:'Continue'});
        this.accountCreatedMessage=page.getByRole("heading",{name:'Your Account Has Been Created!'});
        
        
        
    }
}