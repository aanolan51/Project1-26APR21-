function getApi() {
    fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "0665350332msh1985abd708cb901p1e779fjsn146d8777e84f",
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
  
        document.getElementById("quote").innerHTML = "'" + response.content + "'";
        document.getElementById("author").innerHTML =
          "author: " + response.originator.name;
      })
      .catch((err) => {
        console.error(err);
      });
  }
  
  var fetchButton = document.getElementById("fetch-button");
  
  fetchButton.addEventListener("click", getApi);