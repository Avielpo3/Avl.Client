export class Constants {

    // Host Adresses:
    private static readonly BaseUrl: string = 'http://localhost:17118/api/';

    // Controller Names:
    private static readonly SideServiceController: string = 'SideService/';
    private static readonly CountryController: string = 'Country/';
    private static readonly ProductsController: string = 'Products/';
    private static readonly LoginController: string = 'Login/';

    // Mehtod Names:
    private static readonly GetCountryList: string = 'GetCountryList';
    private static readonly GetCampaignList: string = 'GetCampaignList';
    private static readonly GetSalesForceProductList: string = 'GetSalesForceProductList';
    private static readonly PostSalesForceProductRegistration: string = 'PostSalesForceProductRegistration';
    private static readonly Token: string = 'token';
    private static readonly GetUserClaims: string = 'GetUserClaims';
    private static readonly GetRoles: string = 'GetRoles';
    private static readonly UpdateCountries: string = 'UpdateCountries';

    // Url's
    public static GetCountryListUrl: string = Constants.BaseUrl + Constants.CountryController + Constants.GetCountryList;
    public static CampaignListUrl: string = Constants.BaseUrl + Constants.SideServiceController + Constants.GetCampaignList;
    public static SalesForceProductListUrl: string = Constants.BaseUrl + Constants.ProductsController + Constants.GetSalesForceProductList;
    // tslint:disable-next-line:max-line-length
    public static SalesForceProductResitrationUrl: string = Constants.BaseUrl + Constants.ProductsController + Constants.PostSalesForceProductRegistration;
    public static UserTokenUrl: string = Constants.BaseUrl.substring(0, Constants.BaseUrl.length - 4) + Constants.Token;
    public static UserClaimsUrl: string = Constants.BaseUrl + Constants.LoginController + Constants.GetUserClaims;
    public static RolesUrl: string = Constants.BaseUrl + Constants.LoginController + Constants.GetRoles;
    public static UpdateCountryListUrl: string = Constants.BaseUrl + Constants.CountryController + Constants.UpdateCountries;


}
