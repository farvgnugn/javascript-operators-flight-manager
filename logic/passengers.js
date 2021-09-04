function Passengers() {

    function checkFlightCapacity(flightCapacity, passengers) {
        let sum = 0;
        passengers.map(passengerCount => sum += passengerCount);

        if (sum < flightCapacity) {
            return sum;
        } else {
            throw new Error("Passenger count has exceeded the flight capacity");
        }

    }

    function distributeAllSeatsToAllPassengers(vipCount, stdCount, flightCount, bizSeatCount, ecoSeatCount) {
        let vipInBiz = 0,
            vipInEco = 0,
            regInBiz = 0,
            regInEco = 0,
            totalBizSeats = bizSeatCount * flightCount,
            totalEcoSeats = ecoSeatCount * flightCount;

        // VIP go in biz first
        vipInBiz = Math.min(totalBizSeats, vipCount);
        totalBizSeats -= vipInBiz;

        regInBiz = Math.min(totalBizSeats, stdCount);
        totalBizSeats -= regInBiz;

        vipInEco = Math.min(totalEcoSeats, vipCount - vipInBiz);
        totalEcoSeats -= vipInEco;

        regInEco = Math.min(totalEcoSeats, stdCount - regInBiz);
        totalEcoSeats -= regInEco;

        return {
            vipPassengersWithBusinessSeats: vipInBiz,
            vipPassengersWithEconomySeats: vipInEco,
            regularPassengersWithBusinessSeats: regInBiz,
            regularPassengersWithEconomySeats: regInEco
        };
    }

    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}

module.exports = Passengers();

