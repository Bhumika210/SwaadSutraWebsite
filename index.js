// Search box
const searchInput = document.querySelector(".search_box");
const submit = document.querySelector(".ok_btn");
const showBox = document.querySelector(".mainDivShowBox");

// Add event listener
searchInput.addEventListener('click', function showOptions() {
    event.stopPropagation();
    showBox.classList.remove("hidden");
});

// Prevent hiding when clicking the OK button
submit.addEventListener("click", function (event) {
    event.stopPropagation();
});

// Hide the dropdown when clicking elsewhere on the document
document.addEventListener("click", function () {
    showBox.classList.add("hidden");
});


//function to open add recipe form
function addRecipeForm(){
    window.location.href="./addRecipeForm.html"
}

//adding recipe
document.getElementById("recipeForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get values from input fields
    const recipeName = document.getElementById("recipeName").value;
    const ingredients = document.getElementById("ingredients").value;
    const steps = document.getElementById("steps").value;
    const recipeImage = document.getElementById("recipeImage").files[0]; // Get file

    // Convert image to Base64 (for storage)
    let reader = new FileReader();
    reader.readAsDataURL(recipeImage);
    reader.onload = function () {
        let imageUrl = reader.result;

        // Create recipe object
        const recipe = {
            name: recipeName,
            ingredients: ingredients,
            steps: steps,
            image: imageUrl
        };

        // Store in localStorage
        let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
        recipes.push(recipe);
        localStorage.setItem("recipes", JSON.stringify(recipes));

        // Redirect to home page
        window.location.href = "index.html";
    };
});


