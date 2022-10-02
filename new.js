function radianToDegree(radians){
    const degree = radians * 57.2958;
    if(typeof radians !== 'number'){
        return 'please enter a vaild number';
    }
    else{
        return degree;
    }
}

function isJavaScriptFile(){
    if(typeof '.js'){
        return true;
    }
    else {
        return false;
    }
}

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




