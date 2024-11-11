// Get the form and button elements
const form = document.querySelector('form');
const button = document.querySelector('button[type="submit"]');

// Add event listener to the button
button.addEventListener('click', (e) => {
    // Prevent default form submission behavior
    e.preventDefault();
    
    // Get the selected preferences and number of meals
    const preferences = document.querySelector('select').value;
    const numMeals = document.querySelector('input[type="number"]').value;
    
    // Generate a meal plan based on the preferences and number of meals
    const mealPlan = generateMealPlan(preferences, numMeals);
    
    // Display the meal plan
    displayMealPlan(mealPlan);
});

// Function to generate a meal plan
function generateMealPlan(preferences, numMeals) {
    // TO DO: implement meal plan generation logic here
    // For demonstration purposes, return a sample meal plan
    return [
        { name: 'Breakfast', meal: 'Oatmeal with fruit' },
        { name: 'Lunch', meal: 'Grilled chicken salad' },
        { name: 'Dinner', meal: 'Quinoa and vegetable stir-fry' }
    ];
}

// Function to display the meal plan
function displayMealPlan(mealPlan) {
    // TO DO: implement meal plan display logic here
    // For demonstration purposes, log the meal plan to the console
    console.log(mealPlan);
}