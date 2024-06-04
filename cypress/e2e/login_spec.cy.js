describe("Login Tests", () => {
  const baseUrl = "https://www.edu.goit.global/account/login";

  it("Test 1 - Log in with user888@gmail.com and log out", () => {
    cy.visit(baseUrl);
    cy.login("user888@gmail.com", "1234567890");

    // Sprawdzenie, czy strona została załadowana
    cy.url().should("include", "/homepage"); // Zmienione na właściwy URL po zalogowaniu

    // Wydłużenie czasu oczekiwania przed kolejnym kliknięciem
    cy.wait(2000); // Czekaj 2 sekundy

    // Kliknięcie przycisku "burger menu"
    cy.get("#open-navigation-menu-mobile", { timeout: 10000 })
      .should("be.visible")
      .click(); // Użycie id jako selektora

    // Znajdź i kliknij przycisk "Log out"
    cy.contains("Log out").click();

    // Sprawdzenie, czy użytkownik został przekierowany do strony logowania
    cy.url().should("include", "/login");
  });

  it("Test 2 - Log in with testowyqa@qa.team and log out", () => {
    cy.visit(baseUrl);
    cy.login("testowyqa@qa.team", "QA!automation-1");

    // Sprawdzenie, czy strona została załadowana
    cy.url().should("include", "/homepage"); // Zmienione na właściwy URL po zalogowaniu

    // Wydłużenie czasu oczekiwania przed kolejnym kliknięciem
    cy.wait(2000); // Czekaj 2 sekundy

    // Kliknięcie przycisku "burger menu"
    cy.get("#open-navigation-menu-mobile", { timeout: 10000 })
      .should("be.visible")
      .click(); // Użycie id jako selektora

    // Znajdź i kliknij przycisk "Log out"
    cy.contains("Log out").click();

    // Sprawdzenie, czy użytkownik został przekierowany do strony logowania
    cy.url().should("include", "/login");
  });
});
