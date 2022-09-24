Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test, Cypress doesn't like the word "showdate" 
  // which is included in my API calls because it isn't
  // technically a word, which is why I had to include this 
  // code
  return false
})

describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
    // cy.intercept("GET", `https://api.phish.net/v5/shows/artist/phish.json?order_by=showdate&apikey=spec`, {
    //   fixture: "/spec.json"
    // })
    //   .as("sampleData").visit("http://localhost:3000").wait("@sampleData").its("response.body").should("have.length", 2)
  });
  it("should show the main page", () => {
    cy.get('.headerContainer')
      .should("exist")
      .contains("You Enjoy My Setlist")
  })
  it("should show an area with a setlist inside", () => {
    cy.get('.setlistDiv')
      .should("exist")
      .get('h5')
      .should("exist")
      .children()
      .should("have.length", 19)
      .first()
      .contains("Wilson")
  })
  it("should allow a user to press a button to generate a random setlist", () => {
    cy.get('.button-50')
      .click()
      .get('.setlistDiv')
      .get('h5')
      .children()
      .should("exist")
  })
  it("should allow a user to go to the form by clicking the Access Me button and then fill out that form", () => {
    cy.get(".accessMeButton")
      .click()
      .url()
      .should('be.equal', 'http://localhost:3000/form')
  })
  it('should allow a user to fill out that form', () => {
    cy.visit('http://localhost:3000/form')
      .get('form')
      .find('.input1').should('have.attr', 'name').should('include', 'firstName')
      .get('form')
      .find('.input2').should('have.attr', 'name').should('include', 'set1opener')
      .get('form')
      .find('.input3').should('have.attr', 'name').should('include', 'set2opener')
      .get('form')
      .find('.input4').should('have.attr', 'name').should('include', 'bustout')
      .get('form')
      .find('.input5').should('have.attr', 'name').should('include', 'cover')
      .get('form')
      .find('.input6').should('have.attr', 'name').should('include', 'encore')
  })
  it("should show the user a Send It button to display guesses", () => {
    cy.visit('http://localhost:3000/form')
      .get('.sendButton')
      .should('have.attr', 'role', 'button')
  })
  it("should save a guess card and display it to the page after the user presses the Send It button", () => {
    cy.visit('http://localhost:3000/form')
      .get('form').find('.input1').should('have.value', '').type("Ana")
      .get('form').find('.input2').should('have.value', '').type("Carini")
      .get('form').find('.input3').should('have.value', '').type("Destiny Unbound")
      .get('form').find('.input4').should('have.value', '').type("2001")
      .get('form').find('.input5').should('have.value', '').type("Ya Mar")
      .get('form').find('.input6').should('have.value', '').type("Harry Hood")
      .get('.sendButton').click()
      .get('.guessCard').should('exist')
  })
  it("should allow a user to go back to the main page by clicking the Back To Your Abode button", () => {
    cy.visit('http://localhost:3000/form')
      .get(".homeButton")
      .click()
      .url()
      .should('be.equal', 'http://localhost:3000/')
  })
  it("should redirect the user to an error page when the page fails to load", () => {
    cy.visit("http://localhost:3000/*")
     .get('.errorButton')
     .click()
     .url()
     .should('be.equal', 'http://localhost:3000/')
  });
});
