# @salesforce/eslint-config-lwc

> Opinionated ESLint configurations for LWC projects.

## Installation

```
$ npm install eslint @salesforce/eslint-config-lwc --save-dev
```

## Usage

Add the appropriate [configuration](#Configurations) to the `extends` field in your configuration.

Example of `.eslintrc`:

```json
{
    "extends": ["@salesforce/eslint-config-lwc/recommended", "@salesforce/eslint-config-lwc/style"]
}
```

For more details about configuration please refer to the dedicated section in the ESLint documentation: https://eslint.org/docs/user-guide/configuring#using-a-shareable-configuration-package

## Configurations

This package exposes 4 configurations for your usage.

### `@salesforce/eslint-config-lwc/base` configuration

**Goal:**
Prevent common pitfalls with LWC, and other Salesforce platform restrictions.

**Rules:**
LWC specific rules only.

### `@salesforce/eslint-config-lwc/recommended` configuration

**Goal:**
Prevent common Javascript pitfalls and enforces all best practices.

**Rules:**
`@salesforce/eslint-config-lwc/base` rules + Most of the base [_Potential errors_](https://eslint.org/docs/rules/#possible-errors) rules + Some of the [_Best Practices_](https://eslint.org/docs/rules/#best-practices) rules.

### `@salesforce/eslint-config-lwc/extended` configuration

**Goal:**
Restrict usage of some Javascript language features known to be slow after the _COMPAT_ transformation. LWC runs in _COMPAT_ mode on older browsers (eg. IE11). In order to support new javascript syntax and language features on those browser, the LWC compiler need to do some transformations to the LWC module. Some of those transformations are known to be slow, this linting config targets certain patterns that are known to be expensive at runtime.

**Rules:**
`@salesforce/eslint-config-lwc/recommended` rules + restrict usage of some slow patterns in _COMPAT_.

### `@salesforce/eslint-config-lwc/style` configuration

**Goal:**
Enforces Salesforce code style rules for LWC modules.

**Rules:**
Some of the [Stylistic Issues](https://eslint.org/docs/rules/#stylistic-issues) and [_Best Practices_](https://eslint.org/docs/rules/#best-practices) rules.
