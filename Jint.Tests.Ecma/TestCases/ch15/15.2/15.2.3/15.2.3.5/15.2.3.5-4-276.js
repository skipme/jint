/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.5/15.2.3.5-4-276.js
 * @description Object.create - 'set' property of one property in 'Properties' is own accessor property without a get function (8.10.5 step 8.a)
 */


function testcase() {
        var descObj = {};
        Object.defineProperty(descObj, "set", {
            set: function () { }
        });

        var newObj = Object.create({}, {
            prop: descObj
        });

        var hasProperty = newObj.hasOwnProperty("prop");

        var desc = Object.getOwnPropertyDescriptor(newObj, "prop");

        return hasProperty && typeof desc.set === "undefined";
    }
runTestCase(testcase);
