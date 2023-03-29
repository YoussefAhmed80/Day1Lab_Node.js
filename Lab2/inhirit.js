var Emitter = require('events');
// var emitter = new Emitter();
var utils=require('util');

function Greetr(){
    this.greeting = 'Hello';
}

utils.inherits(Greetr,Emitter);

Greetr.prototype.greet = function(data){
	console.log(this.greeting + ':' + data)
	this.emit('greet', 'Greeting')
}
var grt = new Greetr();

grt.on('greet', function(greet){
	console.log('hello from on ' + greet)
})
grt.greet('iti')
