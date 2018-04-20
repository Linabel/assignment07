/*eslint-env browser*/

window.addEventListener('load', function () {
    'use strict';
    var recipe = {
        title: 'Guacamole',
        servings: 4,
        ingredients: ['3 avocados', '1 lime', '1/2 Cup Onion', '3 Tablespoons Cilantro', '2 Diced Tomatoes', '1 Teaspoon Garlic', '1 Pinch Ground Pepper'],
        display: function () {
            window.console.log(this.title);
            window.console.log(`Serves: ${this.servings}`);
            window.console.log('Ingredients:');
            this.ingredients.forEach(function(item){
                window.console.log('-' + item);
            });
        }
    };
    
    recipe.display();
});
