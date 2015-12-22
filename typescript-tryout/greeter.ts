
/*
function greeter(person) {
    return "hello" + person;
}
document.body.innerHTML = greeter("sriram");
*/


class Greeter
{
	name:String;

	constructor(name:String){
		this.name=name;
	}
	greet() {
		return "hello" + this.name;
	}
}


var greeter = new Greeter("Sriram");

document.body.innerHTML =  greeter.greet();


