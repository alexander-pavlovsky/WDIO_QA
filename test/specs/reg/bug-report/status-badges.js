import {assert} from 'chai';
import sel from '../../../selectors/bug-report';
import exp from '../../../expected/bug-report';
import helpBug from '../../../helpers/bug-report';
import help from '../../../helpers/helpers';


describe('Properties', function () {

    it('Badge Font Size Is Proper', function () {
        help.login();
        $(sel.bugReport).click();
        let fontSize = $(sel.statusBadgeEl).getCSSProperty('font-size').parsed.value;
        assert.equal(fontSize, exp.badgeFontSize);
    });

    it('Badge Font Weight Is Proper', function () {
        let fontWeight = $(sel.statusBadgeEl).getCSSProperty('font-weight').value;
        assert.equal(fontWeight, exp.badgeFontWeight);
    });

    it('Badge Font Family Is Proper', function () {
        let fontFamily = $(sel.statusBadgeEl).getCSSProperty('font-family').value;
        assert.equal(fontFamily, exp.fontFamily);
    });

    it('Badge Text Align Is Proper', function () {
        let textAlign = $(sel.statusBadgeEl).getCSSProperty('text-align').value;
        assert.equal(textAlign, exp.badgeButtonTextAlign);
    });

    it('Open Status Badge Font Color Is Proper', function () {
        $(sel.allIssues).click();
        $(sel.allSpanInTable).waitForDisplayed(1000);
        let badgeColor;
        let badgeIndex;
        let summaryIndex;
        for (let index = 1; index < $$(sel.allSpanInTable).length; index++) {
            badgeIndex = '#status_' + index;
            summaryIndex = '#summary_' + index;
            if ($(badgeIndex).getText() === sel.openStatus) {
                $(summaryIndex).click();
                $(sel.statusBadgeEl).waitForDisplayed(1000);
                badgeColor = helpBug.badgeFontColor();
                assert.equal(badgeColor, exp.badgeButtonFontColor);
                break
            }
        }
    });

    it('Open Status Badge Background Color Is Proper', function () {
        $(sel.allIssues).click();
        $(sel.allSpanInTable).waitForDisplayed(1000);
        let badgeColor;
        let badgeIndex;
        let summaryIndex;
        for (let index = 1; index < $$(sel.allSpanInTable).length; index++) {
            badgeIndex = '#status_' + index;
            summaryIndex = '#summary_' + index;
            if ($(badgeIndex).getText() === sel.openStatus) {
                $(summaryIndex).click();
                $(sel.statusBadgeEl).waitForDisplayed(1000);
                badgeColor = helpBug.badgeBackgroundColor();
                assert.equal(badgeColor, exp.badgeOpenColor);
                break;
            }
        }
    });

    it('Closed Status Badge Font Color Is Proper', function () {
        $(sel.allIssues).click();
        $(sel.allSpanInTable).waitForDisplayed(1000);
        let badgeColor;
        let statusIndex;
        let summaryIndex;
        for (let index = 1; index < $$(sel.allSpanInTable).length; index++) {
            statusIndex = '#status_' + index;
            summaryIndex = '#summary_' + index;
            if ($(statusIndex).getText() === sel.closedStatus) {
                $(summaryIndex).click();
                $(sel.statusBadgeEl).waitForDisplayed(1000);
                badgeColor = helpBug.badgeFontColor();
                assert.equal(badgeColor, exp.badgeButtonFontColor);
                break;
            }
        }
    });

    it('Closed Status Badge Background Color Is Proper', function () {
        $(sel.allIssues).click();
        $(sel.allSpanInTable).waitForDisplayed(1000);
        let badgeColor;
        let badgeIndex;
        let summaryIndex;
        for (let index = 1; index < $$(sel.allSpanInTable).length; index++) {
            badgeIndex = '#status_' + index;
            summaryIndex = '#summary_' + index;
            if ($(badgeIndex).getText() === sel.closedStatus) {
                $(summaryIndex).click();
                $(sel.statusBadgeEl).waitForDisplayed(1000);
                badgeColor = helpBug.badgeBackgroundColor();
                assert.equal(badgeColor, exp.badgeClosedColor);
               break;
            }
        }
    });

    it('Duplicate Status Badge Font Color Is Proper', function () {
        $(sel.allIssues).click();
        $(sel.allSpanInTable).waitForDisplayed(1000);
        let badgeColor;
        let badgeIndex;
        let summaryIndex;
        for (let index = 1; index < $$(sel.allSpanInTable).length; index++) {
            badgeIndex = '#status_' + index;
            summaryIndex = '#summary_' + index;
            if ($(badgeIndex).getText() === sel.duplicateStatus) {
                $(summaryIndex).click();
                $(sel.statusBadgeEl).waitForDisplayed(1000);
                badgeColor = helpBug.badgeFontColor();
                assert.equal(badgeColor, exp.badgeButtonFontColor);
               break;
            }
        }
    });

    it('Duplicate Status Badge Background Color Is Proper', function () {
        $(sel.allIssues).click();
        $(sel.allSpanInTable).waitForDisplayed(1000);
        let badgeColor;
        let badgeIndex;
        let summaryIndex;
        for (let index = 1; index < $$(sel.allSpanInTable).length; index++) {
            badgeIndex = '#status_' + index;
            summaryIndex = '#summary_' + index;
            if ($(badgeIndex).getText() === sel.duplicateStatus) {
                $(summaryIndex).click();
                $(sel.statusBadgeEl).waitForDisplayed(1000);
                badgeColor = helpBug.badgeBackgroundColor();
                assert.equal(badgeColor, exp.badgeDuplicateColor);
                break;
            }
        }
    });

    it('In Progress Status Badge Font Color Is Proper', function () {
        $(sel.allIssues).click();
        $(sel.allSpanInTable).waitForDisplayed(1000);
        let badgeColor;
        let badgeIndex;
        let summaryIndex;
        for (let index = 1; index < $$(sel.allSpanInTable).length; index++) {
            badgeIndex = '#status_' + index;
            summaryIndex = '#summary_' + index;
            if ($(badgeIndex).getText() === sel.inProgressStatus) {
                $(summaryIndex).click();
                $(sel.statusBadgeEl).waitForDisplayed(1000);
                badgeColor = helpBug.badgeFontColor();
                assert.equal(badgeColor, exp.badgeButtonFontColor);
                break;
            }
        }
    });

    it('In Progress Status Badge Background Color Is Proper', function () {
        $(sel.allIssues).click();
        $(sel.allSpanInTable).waitForDisplayed(1000);
        let badgeColor;
        let badgeIndex;
        let summaryIndex;
        for (let index = 1; index < $$(sel.allSpanInTable).length; index++) {
            badgeIndex = '#status_' + index;
            summaryIndex = '#summary_' + index;
            if ($(badgeIndex).getText() === sel.inProgressStatus) {
                $(summaryIndex).click();
                $(sel.statusBadgeEl).waitForDisplayed(1000);
                badgeColor = helpBug.badgeBackgroundColor();
                assert.equal(badgeColor, exp.badgeProgressColor);
                break;
            }
        }
    });

    it('Verification Status Badge Font Color Is Proper', function () {
        $(sel.allIssues).click();
        $(sel.allSpanInTable).waitForDisplayed(1000);
        let badgeColor;
        let badgeIndex;
        let summaryIndex;
        for (let index = 1; index < $$(sel.allSpanInTable).length; index++) {
            badgeIndex = '#status_' + index;
            summaryIndex = '#summary_' + index;
            if ($(badgeIndex).getText() === sel.inVerificationStatus) {
                $(summaryIndex).click();
                $(sel.statusBadgeEl).waitForDisplayed(1000);
                badgeColor = helpBug.badgeFontColor();
                assert.equal(badgeColor, exp.badgeButtonFontColor);
                break;
            }
        }
    });

    it('Verification Status Badge Background Color Is Proper', function () {
        $(sel.allIssues).click();
        $(sel.allSpanInTable).waitForDisplayed(1000);
        let badgeColor;
        let badgeIndex;
        let summaryIndex;
        for (let index = 1; index < $$(sel.allSpanInTable).length; index++) {
            badgeIndex = '#status_' + index;
            summaryIndex = '#summary_' + index;
            if ($(badgeIndex).getText() === sel.inVerificationStatus) {
                $(summaryIndex).click();
                $(sel.statusBadgeEl).waitForDisplayed(1000);
                badgeColor = helpBug.badgeBackgroundColor();
                assert.equal(badgeColor, exp.badgeVerificationColor);
                break;
            }
        }
    });

    it('Reopened Status Badge Font Color Is Proper', function () {
        $(sel.allIssues).click();
        $(sel.allSpanInTable).waitForDisplayed(1000);
        let badgeColor;
        let badgeIndex;
        let summaryIndex;
        for (let index = 1; index < $$(sel.allSpanInTable).length; index++) {
            badgeIndex = '#status_' + index;
            summaryIndex = '#summary_' + index;
            if ($(badgeIndex).getText() === sel.reopenedStatus) {
                $(summaryIndex).click();
                $(sel.statusBadgeEl).waitForDisplayed(1000);
                badgeColor = helpBug.badgeFontColor();
                assert.equal(badgeColor, exp.badgeButtonFontColor);
                break;
            }
        }
    });

    it('Reopened Status Badge Background Color Is Proper', function () {
        $(sel.allIssues).click();
        $(sel.allSpanInTable).waitForDisplayed(1000);
        let badgeColor;
        let badgeIndex;
        let summaryIndex;
        for (let index = 1; index < $$(sel.allSpanInTable).length; index++) {
            badgeIndex = '#status_' + index;
            summaryIndex = '#summary_' + index;
            if ($(badgeIndex).getText() === sel.reopenedStatus) {
                $(summaryIndex).click();
                $(sel.statusBadgeEl).waitForDisplayed(1000);
                badgeColor = helpBug.badgeBackgroundColor();
                assert.equal(badgeColor, exp.badgeReopenedColor);
                break;
            }
        }
    });

    it('Cannot Reproduce Status Badge Font Color Is Proper', function () {
        $(sel.allIssues).click();
        $(sel.allSpanInTable).waitForDisplayed(1000);
        let badgeColor;
        let badgeIndex;
        let summaryIndex;
        for (let index = 1; index < $$(sel.allSpanInTable).length; index++) {
            badgeIndex = '#status_' + index;
            summaryIndex = '#summary_' + index;
            if ($(badgeIndex).getText() === sel.cantRepStatus) {
                $(summaryIndex).click();
                $(sel.statusBadgeEl).waitForDisplayed(1000);
                badgeColor = helpBug.badgeFontColor();
                assert.equal(badgeColor, exp.badgeCannotReproduceFontColor);
                break;
            }
        }
    });

    it('Cannot Reproduce Status Badge Background Color Is Proper', function () {
        $(sel.allIssues).click();
        $(sel.allSpanInTable).waitForDisplayed(1000);
        let badgeColor;
        let badgeIndex;
        let summaryIndex;
        for (let index = 1; index < $$(sel.allSpanInTable).length; index++) {
            badgeIndex = '#status_' + index;
            summaryIndex = '#summary_' + index;
            if ($(badgeIndex).getText() === sel.cantRepStatus) {
                $(summaryIndex).click();
                $(sel.statusBadgeEl).waitForDisplayed(1000);
                badgeColor = helpBug.badgeBackgroundColor();
                assert.equal(badgeColor, exp.badgeCannotReproduceColor);
                break;
            }
        }
    });

    it('Wont Fix Status Badge Font Color Is Proper', function () {
        $(sel.allIssues).click();
        $(sel.allSpanInTable).waitForDisplayed(1000);
        let badgeColor;
        let badgeIndex;
        let summaryIndex;
        for (let index = 1; index < $$(sel.allSpanInTable).length; index++) {
            badgeIndex = '#status_' + index;
            summaryIndex = '#summary_' + index;
            if ($(badgeIndex).getText() === sel.wontFixStatus) {
                $(summaryIndex).click();
                $(sel.statusBadgeEl).waitForDisplayed(1000);
                badgeColor = helpBug.badgeFontColor();
                assert.equal(badgeColor, exp.badgeButtonFontColor);
               break;
            }
        }
    });

    it('Wont Fix Badge Background Color Is Proper', function () {
        $(sel.allIssues).click();
        $(sel.allSpanInTable).waitForDisplayed(1000);
        let badgeColor;
        let badgeIndex;
        let summaryIndex;
        for (let index = 1; index < $$(sel.allSpanInTable).length; index++) {
            badgeIndex = '#status_' + index;
            summaryIndex = '#summary_' + index;
            if ($(badgeIndex).getText() === sel.wontFixStatus) {
                $(summaryIndex).click();
                $(sel.statusBadgeEl).waitForDisplayed(1000);
                badgeColor = helpBug.badgeBackgroundColor();
                assert.equal(badgeColor, exp.badgeWontFixColor);
                break;
            }
        }
    });
});

