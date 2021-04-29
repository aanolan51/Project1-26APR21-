//Script to get bulma modal opening and closing with button clicks:
var modalButton = document.getElementById("modalButton");
var modalCloseButton = document.getElementById('cancel');
var modalForm = document.getElementById("searchModal");
//Get the search input from the user
var searchInput;

//Add and remove the "is-active" class for the modal based on button clicks:
modalButton.addEventListener('click', function(e){
    e.preventDefault();
    modalForm.style.display = "block";

    //Set search bar back to default:
    document.querySelector('#input').value = '';
});
modalCloseButton.addEventListener('click', function(e){
    e.preventDefault();
    modalForm.style.display = "none";
});


// Event listenters to toggle the dropdown menu from showing to not showing:
var dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdown.classList.toggle('is-active');
});

