/* This file is automatically rebuilt by the Cesium build process. */
define(['exports', './defined-d7f5f932'], function (exports, defined) { 'use strict';

    /**
         * Freezes an object, using Object.freeze if available, otherwise returns
         * the object unchanged.  This function should be used in setup code to prevent
         * errors from completely halting JavaScript execution in legacy browsers.
         *
         * @private
         *
         * @exports freezeObject
         */
        var freezeObject = Object.freeze;
        if (!defined.defined(freezeObject)) {
            freezeObject = function(o) {
                return o;
            };
        }
    var freezeObject$1 = freezeObject;

    exports.freezeObject = freezeObject$1;

});
