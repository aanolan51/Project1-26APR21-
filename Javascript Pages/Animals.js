var dogImage = document.getElementById("dogIMG");
var catImage = document.getElementById("catIMG");

//Create the function that will run on dog image click:
function randomDog(event) {
    event.preventDefault();
  
    //Use geocoding API to convert city name into coordinates:
    var dogapiURL = "https://dog.ceo/api/breeds/image/random";
  
    fetch(dogapiURL).then(function(response){
        if(response.ok){
            response.json().then(function(dog){
                //change the src of the HTML image with the content from the API object:
                dogImage.src = dog.message;  
            });
        }
    });
};

//Create the function that will run on cat image click:
function randomCat(event) {
    event.preventDefault();
  
    //Use geocoding API to convert city name into coordinates:
    var catapiURL = "https://api.thecatapi.com/v1/images/search/";
  
    fetch(catapiURL).then(function(response){
        if(response.ok){
            response.json().then(function(cat){
                console.log(cat);
                //change the src of the HTML image with the content from the API object:
                catImage.src = cat[0].url;                 
            });
        }
    });
};

dogImage.addEventListener("click", randomDog);
catImage.addEventListener("click", randomCat);
