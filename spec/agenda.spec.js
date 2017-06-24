describe('Agenda de Contatos', function() {

    it('Deveria buscar contato por nome', function() {
        var filtro = 'Antonio';
        browser.url('/').pause(2000);
        browser.setValue('#filtroPorNome', filtro).pause(2000);
        var rows = $$("table tbody tr");
        var columns = rows[0].$$('td');
        var nomeDoContato = columns[0];

        expect(nomeDoContato.getText()).toBe(filtro);
    });

    it('Deveria buscar contato por sobrenome', function() {
        var filtro = 'Cox';
        browser.url('/').pause(2000);
        browser.click('//*[@id="ordernacao"]/option[2]').pause(1000);
        browser.setValue('#filtroPorNome', filtro).pause(2000);
        var rows = $$("table tbody tr");
        var columns = rows[0].$$('td');
        var nomeDoContato = columns[1];

        expect(nomeDoContato.getText()).toBe(filtro);
    });

});
