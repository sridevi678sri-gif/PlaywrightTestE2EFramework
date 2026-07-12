export default class HomePage
{

   constructor(page)
    {
       
        this.myAccount=page.getByRole("link",{name:'My ccount'}).first();
        this.register=page.getByRole("link",{name:'Register'});
        this.login=page.getByRole("link",{name:'Login'});
        

    }
   
}