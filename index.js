function distanceFromHqInBlocks(someValue) {
    let distance = 0;
    while (someValue !== 42) {
        if (someValue < 42) {
            someValue++;
            distance++;
        } else {
            someValue--;
            distance++;
        }
    }
    return distance;
}

function distanceFromHqInFeet(someValue) {
    let feet = distanceFromHqInBlocks(someValue) * 264;
    return feet;
}

function distanceTravelledInFeet(start, destination) {
    let distanceTraveled = 0;
    while (start !== destination) {
        if (start < destination) {
            start++;
            distanceTraveled += 264;
        } else {
            start--;
            distanceTraveled += 264;
        }
    }
    return distanceTraveled;
}


function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400) {
        return 0;
    }

    else if (feet >= 400 && feet <= 2000) {
        let total = feet - 400;
        return total * 0.02;
    }

    else if (feet > 2000 && feet < 2500) {
        return 25;
    }

     else if(feet > 2500) {
        return 'cannot travel that far';
    }

}
