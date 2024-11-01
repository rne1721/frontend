describe('Mon application', () => {
    it('devrait afficher la page d\'accueil', () => {
      cy.visit('/');  // Visite la racine de l'application
      cy.contains('articles');  // Remplacez par du texte présent sur votre page
    });
  });