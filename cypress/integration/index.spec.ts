describe('/', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it("shows the 'on construction' message", () => {
		cy.findByText("We're cooking delicious things here!").should('exist');
		cy.findByText('Just grab some popcorn and wait a little longer 😄').should('exist');

		cy.url().should('eq', 'http://localhost:3000/');
	});
});
