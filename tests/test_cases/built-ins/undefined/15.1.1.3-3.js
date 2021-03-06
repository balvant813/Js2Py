// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.1.1.3-3
description: >
    undefined is not writable, simple assignment should return the
    rval value (11.13.1-6)
includes: [runTestCase.js]
---*/

function testcase(){
  var newProperty = undefined = 42;
  return (newProperty === 42);
}

runTestCase(testcase);
