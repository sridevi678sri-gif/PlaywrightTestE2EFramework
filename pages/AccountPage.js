export default class AccountPage
{
    constructor(page)
    {
        this.myOrders=
       page.getByRole('heading',{name:'My Orders'});
       this.productTabs=page.locator(".nav.navbar-nav>li>a");
       this.cameras=page.getByRole("link",{name:'Cameras'});
       this.sortBy=page.locator("#input-sort");
       this.cameraProduct=page.locator("#product-category .product-thumb",{
        has: page.getByRole("heading",{name:'Nikon D300'})

       });
      this.productAddedSuccess=page.getByText("Success: You have added Nikon D300 to your shopping cart!");
    this.checkout=page.locator("a[title='Checkout']");
    this.outOfStock=page.locator(".alert-danger");   
    }
}