Package.describe({
    name: 'pwix:accounts-iziam',
    version: '1.0.0-rc',
    summary: 'Login service for izIAM accounts',
    git: 'https://github.com/trychlos/pwix-accounts-iziam.git',
    documentation: 'README.md'
});

Package.onUse( function( api ){
    configure( api );
    api.mainModule( 'src/client/js/index.js', 'client' );
    api.mainModule( 'src/server/js/index.js', 'server' );
});

Package.onTest( function( api ){
    configure( api );
    api.use( 'tinytest' );
    api.use( 'pwix:accounts-iziam' );
    api.mainModule( 'test/js/index.js' );
});

function configure( api ){
    api.versionsFrom([ '2.9.0', '3.0-rc.1' ]);
    api.use( 'accounts-base@3.0.1', ['client', 'server'] );
    api.use( 'accounts-oauth', ['client', 'server']);
    api.use( 'blaze-html-templates@3.0.0', 'client' );
    api.use( 'ecmascript' );
    api.use( 'less@4.0.0', 'client' );
    api.use( 'pwix:i18n@1.5.2' );
    api.use( 'pwix:iziam-oidc@1.0.0-rc' );
    api.use(
        ['pwix:accounts-ui', 'iziam-config-ui'],
        ['client', 'server'],
        { weak: true }
    );
    api.addFiles( 'src/client/components/iziamChangeButton/iziamChangeButton.js', 'client' );
    api.addFiles( 'src/client/components/iziamLoginButton/iziamLoginButton.js', 'client' );
    api.addFiles( 'src/client/components/iziamLogoutButton/iziamLogoutButton.js', 'client' );
    api.addAssets( 'src/client/resources/svg/iziam.svg', 'client' );
}

// NPM dependencies are checked in /src/server/js/check_npms.js
// See also https://guide.meteor.com/writing-atmosphere-packages.html#npm-dependencies
