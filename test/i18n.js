/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

const assert = require('assert');
const eslint = require('eslint');

const { linkConfig, unlinkConfig } = require('./utils');

describe('base i18n config', () => {
    before(() => {
        linkConfig();
    });

    after(() => {
        unlinkConfig();
    });

    it('should load properly base-i18n config', () => {
        const cli = new eslint.CLIEngine({
            useEslintrc: false,
            baseConfig: {
                extends: '@salesforce/eslint-config-lwc/base-i18n',
            },
        });

        const report = cli.executeOnText(`
            import { api } from 'lwc';
            class Foo {
                @api({ param: true })
                foo;
            }
        `);

        const { messages } = report.results[0];
        assert.equal(messages.length, 1);
        assert.equal(messages[0].ruleId, '@lwc/lwc/valid-api');
    });

    it('recommended set should include @lwc/lwc/no-moment rule', () => {
        const cli = new eslint.CLIEngine({
            useEslintrc: false,
            baseConfig: {
                extends: '@salesforce/eslint-config-lwc/recommended',
            },
        });

        const report = cli.executeOnText(`
        var moment = require('moment');
        var a = moment('2016-01-01'); 
        a.format();
        `);

        const { messages } = report.results[0];
        assert.equal(messages.length, 1);
        assert.equal(messages[0].ruleId, '@lwc/lwc/no-moment');
    });

    it('recommended-without-i18n should not include @lwc/lwc/no-moment rule', () => {
        const cli = new eslint.CLIEngine({
            useEslintrc: false,
            baseConfig: {
                extends: '@salesforce/eslint-config-lwc/recommended-without-i18n',
            },
        });

        const report = cli.executeOnText(`
        var moment = require('moment');
        var a = moment('2016-01-01'); 
        a.format();
        `);

        const { messages } = report.results[0];
        assert.equal(messages.length, 0);
    });
});
