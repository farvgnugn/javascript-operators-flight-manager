"use strict"

function Prices() {

    function calculateFinalPrice(basePrice, passengerTypeVariation, flightTypeVariation) {
        let ptvDec = passengerTypeVariation / 100,
            ftvDec = flightTypeVariation / 100;
        let adjustedPrice = basePrice + (ptvDec * basePrice);

        adjustedPrice = adjustedPrice + (ftvDec * adjustedPrice);

        return adjustedPrice.toFixed(2);
    }

    function calculateDefaultFinalPrice(basePrice, passengerType, flightType) {
        const rates ={
            regular: -5,
            vip: 5,
            economy: -3,
            business: 10
        };

        return calculateFinalPrice(
            basePrice,
            rates[passengerType.toLowerCase()],
            rates[flightType.toLowerCase()]
        );
    }

    function calculateTotalFinalPrice(seatCount, passengerType, flightType, basePrice) {
        return seatCount * calculateDefaultFinalPrice(basePrice, passengerType, flightType);
    }

    return {calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice};
}

module.exports = Prices();