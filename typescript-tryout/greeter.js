/*
function greeter(person) {
    return "hello" + person;
}
document.body.innerHTML = greeter("sriram");
*/
var Greeter = (function () {
    function Greeter(name) {
        this.name = name;
    }
    Greeter.prototype.greet = function () {
        return "hello" + this.name;
    };
    return Greeter;
})();
var greeter = new Greeter("Sriram");
document.body.innerHTML = greeter.greet();
