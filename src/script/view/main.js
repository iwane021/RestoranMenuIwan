import '../component/meal/meal-list.js';
import '../component/meal/search-meal.js';
import '../component/cocktail/cocktail-list.js';
import '../component/cocktail/search-cocktail.js';
import DataSource from '../data/data-source.js';

const main = () => {

    const searchMealElement = document.querySelector("search-meal");
    const menuMealListElement = document.querySelector("meal-list");

    const searchCocktailElement = document.querySelector("search-cocktail");
    const menuCocktailListElement = document.querySelector("cocktail-list");

    var path = window.location.pathname;
    var urlName = path.match(/.*\/([^/]+)\.([^?]+)/i)[1];

    if (urlName == 'meal') {
        //Meal
        const onButtonSearchMealClicked = async () => {
            try {
                const meal_result = await DataSource.searchMealMenu(searchMealElement.value);
                renderMealResult(meal_result)
            } catch (message) {
                fallbackMealResult(message)
            }
        };

        const renderMealResult = results => {
            menuMealListElement.meal = results;
        };

        const fallbackMealResult = message => {
            menuMealListElement.renderError(message);
        };

        searchMealElement.clickEvent = onButtonSearchMealClicked;
    }
    else if (urlName == 'cocktail') {
        //Cocktail
        const onButtonSearchCocktailClicked = async () => {
            try {
                const cocktail_result = await DataSource.searchCocktailMenu(searchCocktailElement.value);
                renderCocktailResult(cocktail_result)
            } catch (message) {
                fallbackCocktailResult(message)
            }
        };

        const renderCocktailResult = results => {
            menuCocktailListElement.menus = results;
        };

        const fallbackCocktailResult = message => {
            menuCocktailListElement.renderError(message);
        };

        searchCocktailElement.clickEvent = onButtonSearchCocktailClicked;
    }
};

export default main;