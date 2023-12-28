/*
 * pwix:accounts-iziam/src/client/components/iziamLoginButton/iziamLoginButton.js
 */

import { pwixI18n } from 'meteor/pwix:i18n';

import './iziamLoginButton.html';
import './iziamLoginButton.less';

Template.iziamLoginButton.helpers({
    // string translation
    i18n( arg ){
        return pwixI18n.label( I18N, arg.hash.key );
    }
});

Template.iziamLoginButton.events({
    'click .iziamLoginButton button'( event, instance ){
        Meteor.loginWithIzIAM( {}, ( res ) => {
            console.debug( 'callback res', res );
        });
    }
});
