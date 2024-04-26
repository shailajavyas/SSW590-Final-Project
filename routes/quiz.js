// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('submit').addEventListener('click', recommendCity);
//   });
  
//   function recommendCity() {
//     const totalPoints = getPoints();
  
//     let recommendation = "";
  
//     if (totalPoints >= 12) {
//       recommendation = pickCity(["Barcelona, Spain", "Paris, France", "New York City, USA"]);
//     } else if (totalPoints >= 8) {
//       recommendation = pickCity(["San Francisco, USA", "London, UK", "Berlin, Germany"]);
//     } else if (totalPoints >= 4) {
//       recommendation = pickCity(["Bangalore, India", "Dallas, USA"]);
//     } else {
//       recommendation = "A vacation may not be in the cards for you :(";
//     }
  
//     document.getElementById("result").innerHTML = "<h2>Recommended Destination:</h2><p>" + recommendation + "</p>";
//   }
  
function getPoints() {
    const questions = ["season", "transport", "stay", "activity", "food", "buddy"];
    let totalPoints = 0;
  
    questions.forEach(question => {
      const selectedOption = document.querySelector('input[name="' + question + '"]:checked');
      if (selectedOption) {
        totalPoints = totalPoints + parseInt(selectedOption.value);
      }
    });
  
    return totalPoints;
}
  
function pickCity(cities) {
    const randomCity = Math.floor(Math.random() * cities.length);
    const selectVenueTerm = cities[randomCity];
    // document.getElementById('origin').value = selectVenueTerm;
    return selectVenueTerm;
}

function usersName(name) {
    return name +"'s Recomendations";
}

module.exports.points = getPoints;
module.exports.title = usersName;
module.exports.city = pickCity;