/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
'use strict';

module.exports = {
    extends: [require.resolve('./base')],

    rules: {
        // I18N Rules
        '@lwc/lwc/no-aura-localization-service': 'warn',
        '@lwc/lwc/no-moment': 'warn',
        '@lwc/lwc/prefer-localizer': 'warn',
    },
};
