document.addEventListener("DOMContentLoaded", function () {
    // Ingredients
    var lentils = "Lentils";

    var cucumbers = "Cucumbers";

    var potatoes = "Potatoes";

    var tofu = "Tofu";

    var broccoli = "Broccoli";

    var rice = "Rice";

    var pasta = "Pasta";

    var fake_meatballs = "Fake Meatballs";

    var fake_sliced_meat = "Fake Sliced Meat";

    var bread = "Bread";

    var impossible_meat = "Impossible Meat";

    // Ingredient types
    var types = {
        protein: [lentils, tofu, fake_meatballs, fake_sliced_meat, impossible_meat],
        veggie: [cucumbers, broccoli],
        carb: [potatoes, rice, pasta, bread]
    };

    // Recipes
    var buddha_bowl = {
        name: "Buddha Bowl",
        ingredients: [lentils, cucumbers, potatoes]
    };

    var mongolian_tofu = {
        name: "Mongolian Tofu",
        ingredients: [tofu, broccoli, rice]
    };

    var spaghetti_meatballs = {
        name: "Spaghetti and Fake Meatballs",
        ingredients: [pasta, fake_meatballs]
    };

    var grilled_cheese = {
        name: "Grilled Cheese",
        ingredients: [fake_sliced_meat, bread]
    };

    var spaghetti_lentils = {
        name: "Spaghetti and Lentil Balls",
        ingredients: [lentils, pasta]
    };

    var lasagna = {
        name: "Lasagna",
        ingredients: [pasta, impossible_meat]
    };

    var pierogi = {
        name: "Pierogi",
        ingredients: [potatoes, pasta]
    };

    var recipes = [buddha_bowl, mongolian_tofu, spaghetti_meatballs, grilled_cheese, spaghetti_lentils, lasagna, pierogi];

    // Populate dropdowns
    var protein_list = document.getElementById("protein");
    var null_protein = document.createElement("option");
    protein_list.appendChild(null_protein);
    for (var i = 0; i < types.protein.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", types.protein[i]);
        option.textContent = types.protein[i];
        protein_list.appendChild(option);
    };

    var veggie_list = document.getElementById("veggie");
    var null_veggie = document.createElement("option");
    veggie_list.appendChild(null_veggie);
    for (var i = 0; i < types.veggie.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", types.veggie[i]);
        option.textContent = types.veggie[i];
        veggie_list.appendChild(option);
    };

    var carb_list = document.getElementById("carb");
    var null_carb = document.createElement("option");
    carb_list.appendChild(null_carb);
    for (var i = 0; i < types.carb.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", types.carb[i]);
        option.textContent = types.carb[i];
        carb_list.appendChild(option);
    };

    // Populate recipe list
    populateRecipeList(recipes);

    // Filter recipes
    protein_list.addEventListener("change", function () {
        var selection = protein_list.value;
        populateRecipeList(recipes, protein_list, veggie_list, carb_list);
    });
    veggie_list.addEventListener("change", function () {
        var selection = veggie_list.value;
        populateRecipeList(recipes, protein_list, veggie_list, carb_list);
    });
    carb_list.addEventListener("change", function () {
        var selection = carb_list.value;
        populateRecipeList(recipes, protein_list, veggie_list, carb_list);
    });
});

var populateRecipeList = function (recipes, pl, vl, cl) {
    var recipe_list = document.getElementById("recipe_list");
    var ingredient = "test";
    if (pl != null) {
        var protein_ingredient = pl.value;
    };
    if (vl != null) {
        var veggie_ingredient = vl.value;
    };
    if (cl != null) {
        var carb_ingredient = cl.value;
    };
    recipe_list.innerHTML = "";
    var temp_recipes = [];
    for (var i = 0; i < recipes.length; i++) {
        if (protein_ingredient == null && veggie_ingredient == null && carb_ingredient == null) {
            temp_recipes[i] = recipes[i];
        } else {
            if ((recipes[i].ingredients.indexOf(protein_ingredient) != -1 || protein_ingredient == null || protein_ingredient == "")
                && (recipes[i].ingredients.indexOf(veggie_ingredient) != -1 || veggie_ingredient == null || veggie_ingredient == "")
                && (recipes[i].ingredients.indexOf(carb_ingredient) != -1 || carb_ingredient == null || carb_ingredient == "")) {
                temp_recipes[i] = recipes[i];
            };
        };
    };
    temp_recipes.forEach(function(tr) {
        var list_item = document.createElement("div");
        list_item.textContent = tr.name;
        recipe_list.appendChild(list_item);
    });
};