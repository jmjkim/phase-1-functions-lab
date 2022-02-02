// Code your solution in this file!

function distanceFromHqInBlocks(street) {
    const distance = Math.abs(street - 42); 

    return distance;
}

function distanceFromHqInFeet(street) {
    const distanceInFeet = distanceFromHqInBlocks(street) * 264;

    return distanceInFeet;
}

function distanceTravelledInFeet(start, destination) {
    const travelledDistance = Math.abs(start - destination) * 264;
    
    return travelledDistance;
}

function calculatesFarePrice(start, destination) {
    const travelledDistance = Math.abs(start - destination) * 264;

    if (travelledDistance <= 400) {
        return 0;
    }
    if (travelledDistance > 400 && travelledDistance < 2000) {
        return ((travelledDistance - 400) * 2) / 100;
    }
    if (travelledDistance > 2000 && travelledDistance < 2500) {
        return 25;
    }
    if (travelledDistance > 2500) {
        return 'cannot travel that far';
    }
}
