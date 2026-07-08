export default class HomePage
{

   constructor(page)
    {
       
        this.myAccount=page.getByRole("link",{name:'My Account'});
        this.register=page.getByRole("link",{name:'Register'});
        

    }
   
}