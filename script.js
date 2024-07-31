//This is a fortune teller program for Codecademy JS course
const intro = ["I see", "Stars say", "My crystal ball says"];
 const subject = ["you", 'somebody','they'];
 const verb = ['come','go','hurt'];
 const object = ['here','there'];

 const pickingFunction = (arr)=>{
let chosenIndex = Math.floor(Math.random()*arr.length);
return arr[chosenIndex];
 }
 console.log(`${pickingFunction(intro)} ${pickingFunction(subject)} will ${pickingFunction(verb)} ${pickingFunction(object)}`)
 
