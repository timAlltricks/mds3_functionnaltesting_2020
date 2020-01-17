describe('Ecosia.org Demo', function() {

    
    beforeEach(browser => browser.url('https://www.uber.com/fr')
    );
    afterEach(browser => browser.end());
  
    /*test('Title header uber', function (browser) {
      browser
        .assert.titleContains('Uber')
        .waitForElementPresent('header');

    });

    test('Espace membre Uber', function (browser) {
        browser
            .useXpath() // every selector now must be xpath
            .waitForElementPresent('//*[@id="/sign-in/"]')
            .waitForElementPresent('//*[@id="/signup/"]')
            .useCss();
    });
    
    test('Check sign in', function (browser) {
        browser
            .useXpath() // every selector now must be xpath
            .click('//*[@id="/sign-in/"]')
            .assert.containsText('//*[@id="root"]/div/div/header/div[2]/div/div/div/div/div[6]/div/div[2]/a', "Connexion passager")
            .assert.containsText('//*[@id="root"]/div/div/header/div[2]/div/div/div/div/div[6]/div/div[1]/a', "Connexion chauffeur");
    });*/

    test('Passager', function (browser) {
        browser
            .useXpath() // every selector now must be xpath
            .click('//*[@id="/sign-in/"]')
            .click('//*[@id="root"]/div/div/header/div[2]/div/div/div/div/div[6]/div/div[1]/a')
            .waitForElementPresent('xpath', '//*[@id="app-body"]/div/div[1]/form/button')
            .waitForElementPresent('css selector', '#useridInput');
    });


    /*test('Passager', function (browser) {
        browser
            .useXpath()
            .click('//*[@id="/sign-in/"]')
            .useCss()
            .waitForElementPresent('css selector', '#root > div > div > header > div.dv.dm.al.an.a0c.a0d.a0e.ei.ry.bk.ek.el.em.en.eo.ep.eq.er.es > div > div > div > div > div:nth-child(6) > div > div.dotcom-header-cta-group-item.bw.h2.hx.hy.hz > a > span')
            .click('#root > div > div > header > div.dv.dm.al.an.a0c.a0d.a0e.ei.ry.bk.ek.el.em.en.eo.ep.eq.er.es > div > div > div > div > div:nth-child(6) > div > div.dotcom-header-cta-group-item.bw.h2.hx.hy.hz > a > span')
        browser.expect.url().to.contain('https://auth.uber.com/login/');
    });
    /*test('Test registration page Ventes privées', function (browser) {
        browser
            .url('https://www.veepee.fr/registration/registration?CountryCodeUser=FR')
            .title(function(title) {
                this.assert.equal(typeof title.value, 'string');
            })
            .assert.titleContains('Veepee')
            .url(function(result) {
                this.assert.equal(typeof result.value, 'string');
            });
    });

    test('Test registration page Radio Homme Ventes privées', function (browser) {
        browser
            .url('https://www.veepee.fr/registration/registration?CountryCodeUser=FR')
            .waitForElementPresent('.civilityRadio input[value="1"]')
            .click('.civilityRadio input[value="1"]')
            .pause(1000);
    });

    test('Test registration page Radio Femme Ventes privées', function (browser) {
        browser
            .url('https://www.veepee.fr/registration/registration?CountryCodeUser=FR')
            .waitForElementPresent('.civilityRadio input[value="2"]')
            .click('.civilityRadio input[value="2"]')
            .pause(1000);
    });

    test('Test registration page Input birthdate Ventes privées', function (browser) {
        browser
            .url('https://www.veepee.fr/registration/registration?CountryCodeUser=FR')
            .waitForElementPresent('#divddlbirthdate')
    });

    test('Test registration page Input mdp Ventes privées', function (browser) {
        browser
            .url('https://www.veepee.fr/registration/registration?CountryCodeUser=FR')
            .waitForElementPresent('#txtPassword')
    });

    test('Test registration page Input mail Ventes privées', function (browser) {
        browser
            .url('https://www.veepee.fr/registration/registration?CountryCodeUser=FR')
            .waitForElementPresent('#txtMail')
    });

    test('Test registration page Checkbox agree Ventes privées', function (browser) {
        browser
            .url('https://www.veepee.fr/registration/registration?CountryCodeUser=FR')
            .waitForElementPresent('#ckbInvitMailPartner')
    });

    test('Test registration page Button go Ventes privées', function (browser) {
        browser
            .url('https://www.veepee.fr/registration/registration?CountryCodeUser=FR')
            .waitForElementPresent('#registerBt')
    });

    test('Test registration page Button go Ventes privées', function (browser) {
        browser
            .url('https://www.veepee.fr/registration/registration?CountryCodeUser=FR')
            .waitForElementPresent('#regForm')
            //.submit("#regForm")
            .click("#registerBt")
            .waitForElementPresent("#regForm .errorField");
    });

    test('Test registration page Button go Ventes privées', function (browser) {
        browser
            .url('https://www.veepee.fr/registration/registration?CountryCodeUser=FR')
            .waitForElementPresent('#regForm')
            //.submit("#regForm")
            .click("#registerBt")
            .waitForElementPresent("#regForm .errorField");
    });

    test('Test title Ventes privées', function (browser) {
        browser
            .url('https://www.veepee.fr/registration/registration?CountryCodeUser=FR')
            .waitForElementPresent('#regForm')
            .waitForElementPresent('.civilityRadio input[value="2"]')
            .click('.civilityRadio input[value="2"]')
            .waitForElementPresent('#txtMail')
            .setValue('#txtMail', 'pablitoescobariadelcartel@gmail.com')
            .waitForElementPresent('#txtPassword')
            .setValue('#txtPassword', 'cegenreDeMDPclaquéx1000!')
            .waitForElementPresent('#ckbInvitMailPartner')
            .click('#ckbInvitMailPartner')
            .waitForElementPresent('#divddlbirthdate')
            .setValue("#ddlBirthdayDay", "27")
            .click('#ddlBirthdayMonth option[value="6"]')
            .setValue("#ddlBirthdayYear", "1997")
            .click("#registerBt")
            .assert.not.titleContains('https://www.veepee.fr/registration/');
    });*/
});