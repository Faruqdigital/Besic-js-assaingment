// 1. convert radian to degree

function radianToDegree(radians){
    const degree = radians * 57.2958;
    if(typeof radians !== 'number'){
        return 'please enter a vaild number';
    }
    else{
        return degree;
    }
}
const myRadians = '10';
const myDegree = radianToDegree(myRadians);
console.log(myDegree);




// 2. check weather the given file name is javascript file or not

function isJavaScriptFile(){
    if(typeof '.js'){
        return true;
    }
    else {
        return false;
    }
}
const file = isJavaScriptFile('index.js');
console.log(file);



// 3. calculation the total oillPrice that i have to pay

function oilPrice(disel, petrol, octane){
   const perLiterDiselPrice = 114;
   const perLiterPetrolPrice = 130;
   const perLiterOctanePrice = 135;

   const diselPrice = disel * perLiterDiselPrice;
   const petrolPrice = petrol * perLiterPetrolPrice;
   const octanePrice = octane * perLiterOctanePrice;

   const totalPrice = diselPrice + petrolPrice +octanePrice;
   return totalPrice;
}
const totalPrice = oilPrice(0, 2, 3);
// console.log(totalPrice);

//complete/done

// 4. calculation publicBusFare

function publicBusFare(people){
    const perBusCapacity = 50;
    const perMicroCapacity = 11;
    const perTicketPrice = 250;
    if(people = 50){
        const busNeeded = people / 50;
        return busNeeded;
    }
    else if(people = 11){
        const microNeeded = people - perBusCapacity;
        const restTicketprice = people * perTicketPrice;
        return microNeeded;
    }
    else(people < 11){
        const restPeople = people - perMicroCapacity;
        const restPeopleFare = perTicketPrice * people;
        return restPeopleFare;
    }
}
const total = publicBusFare(265);
console.log(total);



// 5. calculation of isBestFriend

const bestFriend = [
    { name: "abul", friend: "babul" },
    { name: "babul", friend: "sabul" }
  ];
  function isBestFriend (){

    if(bestFriend.name === bestFriend.friend){
        return true;
    }
    else if(bestFriend.name !== bestFriend.friend){
        return false;
    }
    else{
        return 'please correct input';
    }
  }
  const myFriend = isBestFriend(bestFriend);
//   console.log(myFriend);
