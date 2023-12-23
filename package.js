Package.describe({
    name: 'pwix:accounts-iziam',
    version: '1.0.0-rc',
    summary: 'Login service for izIAM accounts',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
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
    api.use( 'ecmascript' );
    api.use( 'accounts-base', ['client', 'server'] );
    // Export Accounts (etc) to packages using this one.
    api.imply( 'accounts-base', ['client', 'server'] );
    api.use( 'accounts-oauth', ['client', 'server']);
    api.use( 'pwix:iziam-oauth');
    api.imply( 'pwix:iziam-oauth');
    api.use(
        ['pwix:accounts-ui', 'github-config-ui'],
        ['client', 'server'],
        { weak: true }
    );
    api.addFiles( 'notice.js' );
    api.addFiles( 'iziam.js' );
    api.use( 'pwix:core-ui' );
    api.use( 'pwix:i18n@1.5.2' );
    api.use( 'tmeasday:check-npm-versions@1.0.2', 'server' );
    api.use( 'tracker' );
}

// NPM dependencies are checked in /src/server/js/check_npms.js
// See also https://guide.meteor.com/writing-atmosphere-packages.html#npm-dependencies
