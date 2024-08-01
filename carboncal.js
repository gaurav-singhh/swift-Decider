// Define emission factors (in grams of CO2 per passenger-kilometer)
const emissionFactors = {
    "Train": 20,
    "Plane": 200,
    "Diesel Bus": 100,
    "Petrol Bus": 120, // Example value, adjust as needed
    "Electric Bus": 50, // Example value, adjust as needed
    "CNG Bus": 70, // Example value, adjust as needed
    "Petrol Cab": 150,
    "Diesel Cab": 130, // Example value, adjust as needed
    "Electric Cab": 40, // Example value, adjust as needed
    "CNG Cab": 60, // Example value, adjust as needed
    "Normal Hotel": 90,
    "City Bunglow": 55, // Example value, adjust as needed
    "In Town Apartment": 40, // Example value, adjust as needed
    "5 star Hotel": 120, // Example value, adjust as needed
    "City Villa": 65, // Example value, adjust as needed
    "GreenEarth Certified Hotel": 30, // Example value, adjust as needed
    "Travel-Life Certified Resort": 70, // Example value, adjust as needed
    "Green Apartment": 15, // Example value, adjust as needed
    "Nature-friendly Villa": 20, // Example value, adjust as needed
    "Sustainable Cottage": 60, // Example value, adjust as needed
    "Motor Cycle": 100, // Example value, adjust as needed
    "CNG Scooty": 40, // Example value, adjust as needed
    "Auto-Rickshaw": 70, // Example value, adjust as needed
    "Diesel Motor Cycle": 120, // Example value, adjust as needed
    "Diesel Auto-Rickshaw": 90, // Example value, adjust as needed
    "Petrol Motor Cycle": 140, // Example value, adjust as needed
    "Petrol Scooty": 90, // Example value, adjust as needed
    "Petrol Auto-Rickshaw": 110, // Example value, adjust as needed
    "Fossil fueled Tram": 70, // Example value, adjust as needed
    "Manual Rickshaw": 10, // Example value, adjust as needed
    "Eco Rickshaw": 20, // Example value, adjust as needed
    "Electric Scooty": 30, // Example value, adjust as needed
    "CNG Auto-Rickshaw": 30, // Example value, adjust as needed
    "Nature-friendly Cycle": 20, // Example value, adjust as needed
    "Electric Metro": 25 // Example value, adjust as needed
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
  
    // Display the result
    document.getElementById("totalFare").innerText = totalEmission.toFixed(2);
  }
  