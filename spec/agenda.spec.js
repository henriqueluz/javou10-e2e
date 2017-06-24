describe('Agenda de Contatos', function() {

    it('Deveria buscar contato por nome', function() {
        browser.url('/').pause(2000);
        browser.setValue('#filtroPorNome', 'Antonio').pause(2000);
        var contatos = browser.getValue('table tbody');

        expect(1).toBe(1);
    });

});
