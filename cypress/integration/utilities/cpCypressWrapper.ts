export default class CypressWrapper
{
    verifyTextOfCommonElementsContainsTextOrTexts(elementCSSSelector: string, textsToVerify: Array<string>)
    {
        let textFromElements: string[] = [];
        cy.get(elementCSSSelector).should('be.visible').each(($el) => {
            textFromElements.push($el.prop('innerText'));
        })

        textsToVerify.forEach(element => {
            expect(textsToVerify.some((x) => x.includes(element))).to.be.true;
        });
    }
}