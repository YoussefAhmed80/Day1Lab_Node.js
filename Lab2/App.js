var Emitter=require('./Task1');
var emtr = new Emitter();

emtr.on('greet', function(){
    console.log('event 1')
  })
  emtr.on('greet', function(){
    console.log('event 2')
  })
  
  console.log('--------------')
  emtr.emit('greet')