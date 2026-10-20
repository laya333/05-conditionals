//Get references to the form and suggestion elements
const weatherForm = document.getElementById("weatherForm");
const suggestion = document.getElementById("suggestion");

//Add an event listener to handle form submission
weatherForm.addEventListener("submit", function (event) {
  event.preventDefault(); //prevent the form from subbmitting the traditional way

  //Get the selected weather and temperature input values
  const weather = document.getElementById("weather").value;
  const temperature = Number(document.getElementById("temperature").value);

  //Initialize a suggestion message
  let message = "";

  //Determine the suggestion based on weather 
  if (weather === "cloudy" || weather === "rainy") {
    message = `It's ${weather}! A light jacket might be a good idea 🧥.`;
  } else if (weather === "sunny") {
    message = "It's sunny! Bring sunglasses and sunscreen. ☀️😎";
  } else if (weather === "snowy") {
    message = "It's snowy! Bundle up with a warm coat, hat, and gloves. ❄️🧣";
  } else if (weather === "windy") {
    message = "It's windy! A light layer and a hood would help. 💨🧥";
  } else {
    message = "Please pick a weather type first. ☀️";
  }

  //Check if temperature is below 50 degrees
  if (temperature < 50) {
    message += ` Also, it is quite cold, so wear a warm jacket! 🥶`;
  }
  //Display the suggestion message
  suggestion.innerHTML = `<p>${message}</p>`;
});
