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
    api.versionsFrom( '2.9.0' );
    api.use( 'accounts-base', ['client', 'server'] );
    // Export Accounts (etc) to packages using this one.
    api.imply( 'accounts-base', ['client', 'server'] );
    api.use( 'accounts-oauth', ['client', 'server']);
    api.use( 'ecmascript');
    api.use( 'pwix:iziam-oidc');
    api.imply( 'pwix:iziam-oidc');
    api.use(
        ['pwix:accounts-ui', 'iziam-config-ui'],
        ['client', 'server'],
        { weak: true }
    );
}

// NPM dependencies are checked in /src/server/js/check_npms.js
// See also https://guide.meteor.com/writing-atmosphere-packages.html#npm-dependencies
