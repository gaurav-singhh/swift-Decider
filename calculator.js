function calculateFare() {
  const destination = document.getElementById("destination").value;
  const days = document.getElementById("days").value;
  const person = document.getElementById("person").value;
  const transportation = document.getElementById("transportation").value;
  const Stay = document.getElementById("Stay").value;

  let fare = 0;
  switch (destination) {
    case "Pondicherry":
      fare = (1000 + 1000 * days) * person;
      break;
    case "Rajasthan":
      fare = (2000 + 1000 * days) * person;
      break;
    case "Ladakh":
      fare = (5000 + 22 * days) * person;
      break;

    case "Kerala":
      fare = (2000 + 1000 * days) * person;
      break;

    case "Kedarnath":
      fare = (3000 + 2000 * days) * person;
      break;

    case "Goa":
      fare = (3000 + 2000 * days) * person;
      break;
  }

  if (transportation === "Plane") {
    fare *= 2.5;
  }
  if (transportation === "Train") {
    fare *= 1.25;
  }
  if (transportation === "Bus") {
    fare *= 1.1;
  }
  if (transportation === "Cab") {
    fare *= 1.5;
  }

  if (Stay === "Hotel") {
    fare *= 1.2;
  }
  if (Stay === "Resort") {
    fare *= 1.3;
  }
  if (Stay === "Apartment") {
    fare *= 1.05;
  }
  if (Stay === "Villa") {
    fare *= 1.4;
  }
  if (Stay === "Cottage") {
    fare *= 1.5;
  }

  if (local === "Eco Rickshaw") {
    fare *= 1.1;
  }
  if (local === "Electric Scooty") {
    fare *= 1.1;
  }
  if (local === "CNG Auto-Rickshaw") {
    fare *= 1.05;
  }
  if (local === "Nature-friendly Cycle") {
    fare *= 1.054;
  }
  if (local === "Electric Metro") {
    fare *= 1.02;
  }
  document.getElementById("totalFare").textContent = fare.toFixed(2);
}
