export default class homepage
{
    homemenubutton(){
        return cy.get('a[class = "home"]');
    }

    smartboard_nvgn_frm_home(){

        return cy.get('a[href="/ui/Content/Smartboard/Syn/"]');

    }
}