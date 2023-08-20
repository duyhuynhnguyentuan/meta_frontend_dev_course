function logDairy() {

    const logDairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
    for (let dairy of logDairy) {
      console.log(`${dairy}`);
    }
  
  }
  logDairy();
  // Task 2
  const animal = {
      canJump: true
    };
    const bird = Object.create(animal);
    bird.canFly = true;
    bird.hasFeathers = true;
  
  function birdCan() {
    for (let value of Object.keys(bird)) {
    
      console.log(`${value}: ${bird[value]}`)
      // Output Like 
      // canFly: true
      //hasFeathers: true
      
    }
  }
  birdCan();
  //Step 3
  function animalCan() {
  
    for (let value in bird)
   {     
     console.log(`${value}: ${bird[value]}`);
      }
  }
  animalCan();

//   for..in iterates over all enumerable property keys of an object
// for..of iterates over the values of an iterable object. Examples of iterable objects are arrays, strings, and NodeLists.