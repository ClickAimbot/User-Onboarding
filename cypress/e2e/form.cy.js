describe('Form', () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234");
    })

    const nameInput = () => cy.get("input[name=username]");
    const emailInput = () => cy.get("input[name=email]");
    const passwordInput = () => cy.get("input[name=password");

    it("Get the inputs and type a string in it", () => {
        nameInput().should("have.value", "").type("ClickAimbot").should("have.value", "ClickAimbot");
        emailInput().should("have.value", "").type("austin.amaral3@gmail.com").should("have.value", "austin.amaral3@gmail.com");
        passwordInput().should("have.value", "").type("sandgnat10").should("have.value", "sandgnat10");
    })
















})