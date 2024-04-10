export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId("EditableProfileCardHeader.EditButton").click();
  cy.getByTestId("ProfileCard.firstname").clear().type(firstname);
  cy.getByTestId("ProfileCard.lastname").clear().type(lastname);
  cy.getByTestId("EditableProfileCardHeader.SaveButton").click();
};

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: "PUT",
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: "asasf" },
    body: {
      id: "4",
      first: "test",
      lastname: "user",
      age: 465,
      currency: "EUR",
      country: "Russia",
      city: "Moscow",
      username: "testuser",
      avatar:
        // eslint-disable-next-line max-len
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmashable.com%2Farticle%2Fjar-jar-popular-star-wars-gop&psig=AOvVaw2ouAjkt2ji33subVabKdAQ&ust=1711811505469000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjnuvfgmYUDFQAAAAAdAAAAABAJ",
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
