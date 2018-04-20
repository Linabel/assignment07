/*eslint-env browser*/

var recipe = {
    title: "Guacamole",
    servings: 4,
    ingredients: ["3 Avocados", "1 Lime", "1 Tsp Salt", "1/2 Cup of Onion", "3 Tbs Cilantro", "2 Diced Tomatoes", "1 Tsp Garlic", "1 Pinch Ground Pepper"],
    getRecipe: function () {
        "use strict";
        var i;
        window.console.log(this.title + "\n" + "Serves: " + this.servings + "\n" + "Ingredients:");
        for (i = 0; i < recipe.ingredients.length; i += 1) {
            window.console.log("-" + this.ingredients[i]);
        }
    }
};
recipe.getRecipe();
