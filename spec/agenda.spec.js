describe('Agenda de Contatos', function() {

    it('Deveria buscar contato por nome', function() {
        browser.url('/').pause(2000);
        browser.setValue('#filtroPorNome', 'Antonio').pause(2000);
        var rows = $$("table tbody tr");
        var columns = rows[0].$$('td');
        var nomeDoContato = columns[0];

        expect(nomeDoContato.getText()).toBe('Antonio');
    });

});
