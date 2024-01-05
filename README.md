# pwix:accounts-iziam

## What is it ?

A login service for izIAM(©) Identity and Access Manager accounts which implements [OpenID Connect 1.0](https://openid.net/specs/openid-connect-core-1_0.html) login flow.

This package is based on:

- [accounts-github](https://github.com/meteor/meteor/tree/devel/packages/accounts-github)
- [salleman:accounts-oidc](https://github.com/salleman33/meteor-accounts-oidc/tree/master/packages/switch_accounts-oidc) v 1.0.12
- [Meteor documentation](https://docs.meteor.com/api/accounts#Meteor-loginWith%3CExternalService%3E)

On client side, this package defines `Meteor.loginWithIzIAM()` function, which itself calls `izIAM.requestCredential()`.

On server side, the package calls `Accounts.addAutopublishFields()` whith the fields brought up by izIAM Identity and Access Manager.

## Configuration

None at the moment.

## NPM peer dependencies

None at the moment.

## Translations

New and updated translations are willingly accepted, and more than welcome. Just be kind enough to submit a PR on the [Github repository](https://github.com/trychlos/pwix-accounts-iziam/pulls).

## Cookies and comparable technologies

None at the moment.

---
P. Wieser
- Last updated on 2024, Jan. 5th
