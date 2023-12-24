/*
 * pwix:accounts-iziam/src/common/js/iziam.js
 *
 * See https://docs.meteor.com/api/accounts#Meteor-loginWith%3CExternalService%3E
 */

import { Accounts } from 'meteor/accounts-base';
import { izIAM } from 'meteor/pwix:iziam-oidc';

Accounts.oauth.registerService( 'iziam' );

if( Meteor.isClient ){
    const loginWithIzIAM = ( options, callback ) => {
        console.debug( 'loginWithIzIAM', options );

        // support a callback without options
        if( ! callback && typeof options === 'function' ){
            callback = options;
            options = null;
        }

        const credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler( callback );
        izIAM.requestCredential( options, credentialRequestCompleteCallback );
    };

    Accounts.registerClientLoginFunction( izIAM.C.Service, loginWithIzIAM );
    Meteor.loginWithIzIAM = ( ...args ) => Accounts.applyLoginFunction( izIAM.C.Service, args );

} else {

    Accounts.addAutopublishFields({
        // not sure whether the github api can be used from the browser,
        // thus not sure if we should be sending access tokens; but we do it
        // for all other oauth2 providers, and it may come in handy.
        forLoggedInUser: [ 'services.'+izIAM.C.Service ],
        forOtherUsers: [ 'services.'+izIAM.C.Service+'.username' ]
    });
}
