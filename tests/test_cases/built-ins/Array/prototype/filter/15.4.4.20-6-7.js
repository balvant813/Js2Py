// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.20-6-7
description: >
    Array.prototype.filter returns an empty array if 'length' is 0
    (subclassed Array, length overridden with obj w/o valueOf
    (toString))
includes: [runTestCase.js]
---*/

function testcase() {
  foo.prototype = new Array(1, 2, 3);
  function foo() {}
  var f = new foo();
  
  var o = { toString: function () { return '0';}};
  f.length = o;
  
  // objects inherit the default valueOf method of the Object object;
  // that simply returns the itself. Since the default valueOf() method
  // does not return a primitive value, ES next tries to convert the object
  // to a number by calling its toString() method and converting the
  // resulting string to a number.

  function cb(){}
  var a = f.filter(cb);
  
  if (Array.isArray(a) &&
      a.length === 0) {
    return true;
  }
 }
runTestCase(testcase);
