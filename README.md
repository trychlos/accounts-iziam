# pwix:accounts-iziam

## What is it ?

A login service for izIAM accounts which implements OpenID Connect login flow.

This package is based on:

- [accounts-github](https://github.com/meteor/meteor/tree/devel/packages/accounts-github)
- [salleman:accounts-oidc](https://github.com/salleman33/meteor-accounts-oidc/tree/master/packages/switch_accounts-oidc) v 1.0.12
- [Meteor documentation](https://docs.meteor.com/api/accounts#Meteor-loginWith%3CExternalService%3E)

On client side, this package defines `Meteor.loginWithIzIAM()` function, which itself calls `izIAM.requestCredential()`.

On server side, the package calls `Accounts.addAutopublishFields()` whith fields brought up by izIAM Identity Manager.

## Configuration

None at the moment.

## Login flow description

See pwix:iziam-oidc/maintainer/README.md

## NPM peer dependencies

None at the moment.

## Translations

None at the moment.

## Cookies and comparable technologies

None at the moment.

---
P. Wieser
- Last updated on 2023, June 5th
