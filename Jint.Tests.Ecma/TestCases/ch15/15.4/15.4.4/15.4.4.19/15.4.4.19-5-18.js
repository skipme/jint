/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.19/15.4.4.19-5-18.js
 * @description Array.prototype.map - Error object can be used as thisArg
 */


function testcase() {

        var objError = new RangeError();

        function callbackfn(val, idx, obj) {
            return this === objError;
        }

        var testResult = [11].map(callbackfn, objError);
        return testResult[0] === true;
    }
runTestCase(testcase);
