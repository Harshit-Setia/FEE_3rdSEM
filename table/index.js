const indianNonVegMeals = {
    breakfast: [
        "Egg Bhurji with Paratha",
        "Chicken Keema Paratha",
        "Mutton Kheema Dosa",
        "Egg Masala Dosa",
        "Chicken Sandwich with Mint Chutney",
        "Kerala Style Egg Roast with Appam",
        "Egg Curry with Parotta",
        "Chicken Uttapam",
        "Mutton Sandwich",
        "Egg Rice Idli"
    ],
    lunch: [
        "Chicken Biryani with Raita",
        "Mutton Curry with Rice",
        "Fish Curry with Rice",
        "Butter Chicken with Naan",
        "Chicken Chettinad with Parotta",
        "Mutton Rogan Josh with Rice",
        "Fish Masala with Chapati",
        "Chicken Do Pyaza with Jeera Rice",
        "Mutton Korma with Naan",
        "Prawn Curry with Rice"
    ],
    snacks: [
        "Chicken Pakora",
        "Fish Fingers",
        "Egg Puffs",
        "Chicken Roll",
        "Keema Samosa",
        "Chicken 65",
        "Fish Cutlet",
        "Egg Bonda",
        "Chicken Spring Roll",
        "Mutton Cutlet"
    ],
    dinner: [
        "Chicken Kadai with Roti",
        "Mutton Keema with Paratha",
        "Fish Tikka Masala with Naan",
        "Chicken Hyderabadi with Rice",
        "Egg Curry with Chapati",
        "Mutton Masala with Rice",
        "Chicken Kolhapuri with Roti",
        "Prawn Masala with Parotta",
        "Fish Curry with Rice"
    ]
};

const indianVegMeals = {
    breakfast: [
        "Idli with Sambar and Coconut Chutney",
        "Masala Dosa with Potato Filling",
        "Poha with Peanuts",
        "Upma with Mixed Vegetables",
        "Aloo Paratha with Curd",
        "Besan Chilla with Mint Chutney",
        "Vada Sambar",
        "Puri Bhaji",
        "Methi Thepla with Curd",
        "Uttapam with Tomato & Onion"
    ],
    lunch: [
        "Dal Chawal with Jeera Aloo",
        "Rajma Chawal with Raita",
        "Chole Bhature",
        "Palak Paneer with Roti",
        "Dal Makhani with Jeera Rice",
        "Vegetable Biryani with Raita",
        "Kadhi Chawal",
        "Pav Bhaji with Butter",
        "Mixed Veg Curry with Chapati",
        "Paneer Butter Masala with Naan"
    ],
    snacks: [
        "Samosa with Mint Chutney",
        "Dhokla with Green Chutney",
        "Masala Chai with Pakora",
        "Bhel Puri",
        "Pani Puri",
        "Dahi Vada",
        "Corn Bhel",
        "Masala Vada",
        "Vegetable Cutlet",
        "Aloo Bonda"
    ],
    dinner: [
        "Mix Veg Curry with Chapati",
        "Dal Fry with Jeera Rice",
        "Paneer Tikka Masala with Naan",
        "Vegetable Korma with Roti",
        "Baingan Bharta with Chapati",
        " Chana Masala with Jeera Rice",
        "Vegetable Jalfrezi with Roti",
        "Dal Makhani with Jeera Rice",
        "Vegetable Biryani with Raita",
        "Palak Paneer with Roti"
    ]
};

const indianVeganMeals = {
    breakfast: [
        "Oatmeal with Banana and Honey",
        "Chia Seed Pudding with Coconut Milk",
        "Avocado Toast with Tomato",
        "Quinoa Idli with Coconut Chutney",
        "Chickpea Scramble with Whole Wheat Bread",
        "Soy Milk Pancakes with Fresh Fruits",
        "Tofu Scramble with Whole Wheat Toast",
        "Vegan Omelette with Whole Wheat Bread",
        "Chickpea Flour Pancakes with Fresh Fruits",
        "Quinoa Upma with Mixed Vegetables"
    ],
    lunch: [
        "Vegan Chana Masala with Brown Rice",
        "Lentil Soup with Whole Wheat Bread",
        "Vegan Vegetable Biryani with Raita",
        "Chickpea and Avocado Salad with Whole Wheat Bread",
        "Vegan Dal Makhani with Brown Rice",
        "Vegan Palak Paneer with Whole Wheat Roti",
        "Vegan Vegetable Korma with Brown Rice",
        "Chickpea and Spinach Curry with Whole Wheat Roti",
        "Vegan Baingan Bharta with Whole Wheat Roti",
        "Vegan Chole Bhature with Whole Wheat Bhature"
    ],
    snacks: [
        "Roasted Chickpeas with Herbs",
        "Vegan Samosa with Tamarind Chutney",
        "Vegan Dhokla with Green Chutney",
        "Vegan Pani Puri with Tamarind Water",
        "Vegan Bhel Puri with Tamarind Chutney",
        "Vegan Dahi Vada with Coconut Milk",
        "Vegan Corn Bhel with Lemon Juice",
        "Vegan Masala Vada with Coconut Milk",
        "Vegan Vegetable Cutlet with Whole Wheat Bread",
        "Vegan Aloo Bonda with Coconut Milk"
    ],
    dinner: [
        "Vegan Vegetable Jalfrezi with Brown Rice",
        "Vegan Dal Fry with Brown Rice",
        "Vegan Paneer Tikka Masala with Whole Wheat Naan",
        "Vegan Vegetable Korma with Brown Rice",
        "Vegan Baingan Bharta with Whole Wheat Roti",
        "Vegan Chana Masala with Brown Rice",
        "Vegan Vegetable Biryani with Raita",
        "Vegan Palak Paneer with Whole Wheat Roti",
        "Vegan Dal Makhani with Brown Rice",
        "Vegan Chole Bhature with Whole Wheat Bhature"
    ]
};
let preference = prompt("Which meal preference do you have? (Non-Vegetarian, Vegetarian, Vegan)");
let selectedMeals;
switch(preference) {
    case 'Non-Vegetarian':
        selectedMeals = indianNonVegMeals;
        break;
    case 'Vegetarian':
        selectedMeals = indianVegMeals;
        break;
    case 'Vegan':
        selectedMeals = indianVeganMeals;
        break;
}
document.addEventListener('DOMContentLoaded', function() {
    // Get all table cells except headers and days
    const cells = document.querySelectorAll('td:not(.days)');
    
    // Function to generate random meal plan
    function generateMealPlan() {
        const rows = document.querySelectorAll('tbody tr');
        
        rows.forEach(row => {
            const breakfastCell = row.querySelector('td:nth-child(2)');
            const lunchCell = row.querySelector('td:nth-child(3)');
            const snacksCell = row.querySelector('td:nth-child(4)');
            const dinnerCell = row.querySelector('td:nth-child(5)');

            breakfastCell.textContent = getRandomMeal('breakfast');
            lunchCell.textContent = getRandomMeal('lunch');
            snacksCell.textContent = getRandomMeal('snacks');
            dinnerCell.textContent = getRandomMeal('dinner');
        });
    }

    // Function to get random meal from category
    function getRandomMeal(category) {
        const meals = selectedMeals[category];
        return meals[Math.floor(Math.random() * meals.length)];
    }

    // Function to save meal plan
    function saveMealPlan() {
        const mealPlan = {};
        const rows = document.querySelectorAll('tbody tr');
        
        rows.forEach(row => {
            const day = row.querySelector('.days').textContent;
            const meals = Array.from(row.querySelectorAll('td:not(.days)')).map(cell => cell.textContent);
            mealPlan[day] = {
                breakfast: meals[0],
                lunch: meals[1],
                snacks: meals[2],
                dinner: meals[3]
            };
        });

        localStorage.setItem('mealPlan', JSON.stringify(mealPlan));
        alert('Meal plan saved!');
    }

    // Function to load meal plan
    function loadMealPlan() {
        const savedMealPlan = localStorage.getItem('mealPlan');
        if ( savedMealPlan) {
            const mealPlan = JSON.parse(savedMealPlan);
            const rows = document.querySelectorAll('tbody tr');
            
            rows.forEach(row => {
                const day = row.querySelector('.days').textContent;
                const cells = row.querySelectorAll('td:not(.days)');
                cells[0].textContent = mealPlan[day].breakfast;
                cells[1].textContent = mealPlan[day].lunch;
                cells[2].textContent = mealPlan[day].snacks;
                cells[3].textContent = mealPlan[day].dinner;
            });
        }
    }

    // Function to clear meal plan
    function clearMealPlan() {
        if (confirm('Are you sure you want to clear the meal plan?')) {
            const cells = document.querySelectorAll('td:not(.days)');
            cells.forEach(cell => cell.textContent = '');
            localStorage.removeItem('mealPlan');
        }
    }

    // Create buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    buttonContainer.style.marginTop = '20px';
    buttonContainer.style.textAlign = 'center';

    const generateButton = document.createElement('button');
    generateButton.textContent = 'Generate Meal Plan';
    generateButton.onclick = generateMealPlan;
    generateButton.className = 'meal-plan-button';

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save Meal Plan';
    saveButton.onclick = saveMealPlan;
    saveButton.className = 'meal-plan-button';

    const loadButton = document.createElement('button');
    loadButton.textContent = 'Load Meal Plan';
    loadButton.onclick = loadMealPlan;
    loadButton.className = 'meal-plan-button';

    const clearButton = document.createElement('button');
    clearButton.textContent = 'Clear Meal Plan';
    clearButton.onclick = clearMealPlan;
    clearButton.className = 'meal-plan-button';

    buttonContainer.appendChild(generateButton);
    buttonContainer.appendChild(saveButton);
    buttonContainer.appendChild(loadButton);
    buttonContainer.appendChild(clearButton);

    document.querySelector('.table-container').after(buttonContainer);

    // Add some basic styles for buttons
    const style = document.createElement('style');
    style.textContent = `
        .meal-plan-button {
            margin: 0 10px;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            font-size: 16px;
        }

        .meal-plan-button:hover { background-color: #3e8e41;
        }
    `;
    document.head.appendChild(style);
});