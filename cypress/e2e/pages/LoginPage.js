class LoginPage {
  constructor() {
    this.emailInput = "#user_email"; // Selektor pola email
    this.passwordInput = "#user_password"; // Selektor pola hasła
    this.loginButtonText = "Log in"; // Tekst przycisku logowania
  }

  // Metoda do logowania
  login(email, password) {
    cy.get(this.emailInput).type(email);
    cy.get(this.passwordInput).type(password);
    cy.contains(this.loginButtonText).click(); // Używamy metody contains
  }
}

export default LoginPage;
