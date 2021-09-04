function Flights() {

    function calculateNumberOfFlights(numberOfPassengers, flightCapacity) {
        if (numberOfPassengers < 0 || !isInteger(numberOfPassengers)) {
            throw new Error("The number of passengers must be a positive integer value");
        }
        if (flightCapacity < 0 || !isInteger(flightCapacity)) {
            throw new Error("The capacity of the flight must be a positive integer value");
        }
        return Math.ceil(numberOfPassengers / flightCapacity);
    }

    function checkAircraftRevision(distanceLimit, distances) {
        let sum = 0,
            response;
        distances.map(distance => sum += distance);

        if (sum <= distanceLimit / 2) {
            response = "The revision needs to be done within the next 3 months";
        } else if (sum <= .75 * distanceLimit ) {
            response = "The revision needs to be done within the next 2 months";
        } else if (sum <= distanceLimit) {
            response = "The revision needs to be done within the next month";
        } else {
            throw new Error("The maximum allowed flight distance has been exceeded")
        }

        return response;
    }

    return {calculateNumberOfFlights, checkAircraftRevision};
}

module.exports = Flights();