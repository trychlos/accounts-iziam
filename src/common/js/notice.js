/*
 * pwix:accounts-iziam/src/common/js/notice .js
 */

if( Package['pwix:accounts-ui']
    && !Package['service-configuration']
    && !Object.prototype.hasOwnProperty.call( Package, 'iziam-config-ui' )){

        console.warn(
            "Note: You're using (pwix:)accounts-ui and accounts-iziam,\n" +
            "but didn't install the configuration UI for the izIAM\n" +
            "OpenID Provider. You can install it with:\n" +
            "\n" +
            "    meteor add iziam-config-ui" +
            "\n"
        );
}
