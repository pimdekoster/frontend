/*
 * Copyright © Ergonode Sp. z o.o. All rights reserved.
 * See LICENSE for license details.
 */
import {
    Given,
} from 'cypress-cucumber-preprocessor/steps';

Given('I open {string} page', (page) => {
    cy.visit(page);
    cy.checkUrl(page);
});
