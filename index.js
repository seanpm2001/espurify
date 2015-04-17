/**
 * espurify - Clone new AST without extra properties
 * 
 * https://github.com/estools/espurify
 *
 * Copyright (c) 2014-2015 Takuto Wada
 * Licensed under the MIT license.
 *   https://github.com/estools/espurify/blob/master/MIT-LICENSE.txt
 */
'use strict';

var createWhitelist = require('./lib/create-whitelist');
var cloneWithWhitelist = require('./lib/clone-ast');

function createCloneFunction (options) {
    return cloneWithWhitelist(createWhitelist(options));
}

var espurify = createCloneFunction();
espurify.clone = function (ast, options) {
    return createCloneFunction(options)(ast);
};
module.exports = espurify;
