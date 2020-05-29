import { v4 as uuid } from 'uuid';

const name = uuid().slice(3, 10);
const info = uuid().slice(3, 10);

const Topping1 = 'onion';
const Topping2 = 'chicken';
const Topping3 = 'cheese';
const Topping4 = 'hawaiian';

it('can navigate to the site', () => {
  cy.visit('/pizza');
  cy.url().should('include', 'localhost');
});

//testing that I can add text to the box
it('can add text to the box submit user', () => {
  cy.get('input[name="name"]').type(name).should('have.value', name);
});

//testing that I can select multiple toppings
it('can select multiple toppings! ', () => {
  cy.get('input[name="hawaiian"]').check().should('have.checked');
});

it('can select multiple toppings! ', () => {
  cy.get('input[name="Onions"]').check().should('have.checked');
});

it('can select multiple toppings! ', () => {
  cy.get('input[name="Chicken"]').check().should('have.checked');
});

it('can select multiple toppings! ', () => {
  cy.get('input[name="Cheese"]').check().should('have.checked');
});

//Special instructions
it('can add text to the box submit user', () => {
  cy.get('[name="Instructions"]').type(info).should('have.value', info);
});

it('can select quantity', () => {
    cy.get('input[name="quantity"]')
    .type('number')
    
})

//testing that I can submit the form
it("submit the user", () => {
    cy.get("form button").click();
  })
  // Check to make sure all fields worked.
