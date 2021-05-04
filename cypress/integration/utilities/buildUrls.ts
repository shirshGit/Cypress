export default class buildUrls {

    baseUrl:string = Cypress.env('url');

    LoginUrl()
    {
        return this.baseUrl + 'Entry/Login.aspx';
    }

    OverViewDashboardUrl() {
        return this.baseUrl + 'Preview/Dashboard/';
    }

    ExplorerUrl() {
        return this.baseUrl + 'Preview/Explorer/';
    }
}