function Util() {
    function calculateTotalDistributedPassengers(seatDistribution) {
        let passengerCount = 0;
        Object.keys(seatDistribution).forEach(key => passengerCount += seatDistribution[key]);
        return passengerCount;
    }

    function calculateTotalNumberOfPassengers(passengerCounts) {
        return passengerCounts.reduce((a, b) => a + b, 0);
    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};
}

module.exports = Util();

