// Define emission factors (in grams of CO2 per passenger-kilometer)
const emissionFactors = {
    "Rajasthan":2,
    "Pondicherry":1,
    "Ladakh":4,
    "Kerla":1.7,
    "Kedarnath":2.2,
    "Goa":1.4,


    "Train": 20,
    "Plane": 200,
    "DieselBus": 100,
    "PetrolBus": 120, // Example value, adjust as needed
    "ElectricBus": 50, // Example value, adjust as needed
    "CNGBus": 70, // Example value, adjust as needed
    "PetrolCab": 150,
    "DieselCab": 130, // Example value, adjust as needed
    "ElectricCab": 40, // Example value, adjust as needed
    "CNGCab": 60, // Example value, adjust as needed
    
    "NormalHotel":40,
    "CityBunglow": 55, // Example value, adjust as needed
    "InTownApartment": 40, // Example value, adjust as needed
    "5starHotel": 120, // Example value, adjust as needed
    "CityVilla": 65, // Example value, adjust as needed
    "GreenEarthCertifiedHotel": 30, // Example value, adjust as needed
    "TravelLifeCertifiedResort": 70, // Example value, adjust as needed
    "GreenApartment": 40, // Example value, adjust as needed
    "NaturefriendlyVilla": 50, // Example value, adjust as needed
    "SustainableCottage": 60, // Example value, adjust as needed
    "MotorCycle": 100, // Example value, adjust as needed
    "CNGScooty": 80, // Example value, adjust as needed
    "AutoRickshaw": 70, // Example value, adjust as needed
    "DieselMotorCycle": 120, // Example value, adjust as needed
    "DieselAutoRickshaw": 90, // Example value, adjust as needed
    "PetrolMotorCycle": 110, // Example value, adjust as needed
    "PetrolScooty": 90, // Example value, adjust as needed
    "PetrolAutoRickshaw": 80, // Example value, adjust as needed
    "FossilfueledTram": 70, // Example value, adjust as needed
    "ManualRickshaw": 60, // Example value, adjust as needed
    "EcoRickshaw": 50, // Example value, adjust as needed
    "ElectricScooty": 30, // Example value, adjust as needed
    "CNGAutoRickshaw": 50, // Example value, adjust as needed
    "NaturefriendlyCycle": 20, // Example value, adjust as needed
    "ElectricMetro": 25 // Example value, adjust as needed
  };
  
  function calculateFare() {
    const destination = document.getElementById("destination").value;
    const transportation = document.getElementById("transportation").value;
    const stay = document.getElementById("Stay").value;
    const localTour = document.getElementById("local").value;
    const days = parseInt(document.getElementById("days").value);
    const person = parseInt(document.getElementById("person").value);
  
    let totalEmission = 0;
  

    // Calculate emission for transportation
    if (emissionFactors.hasOwnProperty(transportation)) {
      totalEmission += emissionFactors[transportation] * days * person;
    }
  
    // Calculate emission for stay
    if (emissionFactors.hasOwnProperty(stay)) {
      totalEmission += emissionFactors[stay] * days * person;
    }
  
    // Calculate emission for local tour
    if (emissionFactors.hasOwnProperty(localTour)) {
      totalEmission += emissionFactors[localTour] * days * person;
    }

    if(emissionFactors.hasOwnProperty(destination)){
        totalEmission *=emissionFactors[destination];
        
    }
  
    // Display the result
    document.getElementById("totalFare").innerText = totalEmission.toFixed(2);
  }
  