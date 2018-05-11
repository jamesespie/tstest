"use strict";
var HelloWorld = (function () {
    function HelloWorld() {
    }
    HelloWorld.prototype.sayHello = function () {
        alert("Hello");
    };
    return HelloWorld;
}());
