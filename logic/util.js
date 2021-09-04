"use strict"

function Util() {
    function calculateTotalDistributedPassengers(seatDistribution) {
        let passengerCount = 0;
        Object.keys(seatDistribution).forEach(key => passengerCount += seatDistribution[key]);
        return passengerCount;
    }

    function calculateTotalNumberOfPassengers(passengerCounts) {
        return passengerCounts.reduce((a, b) => a + b, 0);
    }

    function checkInput(input) {
        if (!input || !Number.isInteger(input)) {
            throw new Error("Input must be numeric.")
        }
    }

    function calculateTotalDistance(distances) {
        let sum = 0;
        distances.map(distance => sum += (distance > 0) ? distance : 0);
        return sum;
    }

    function calculateBonusPoints(bizDistances, ecoDistances, bizBonusPct, ecoBonusPct) {
        let bizBonus = bizBonusPct / 100,
            ecoBonus = ecoBonusPct / 100;
        let bizDistance = calculateTotalDistance(bizDistances),
            ecoDistance = calculateTotalDistance(ecoDistances);

        return (bizDistance * bizBonus )+ (ecoDistance * ecoBonus);
    }

    return {
        calculateTotalDistributedPassengers,
        calculateTotalNumberOfPassengers,
        checkInput,
        calculateTotalDistance,
        calculateBonusPoints
    };
}

module.exports = Util();