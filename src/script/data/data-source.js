
class DataSource {
    static searchMealMenu(keyword) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                } else {
                    return Promise.reject(`Upps sorry, <span style="color:#cc0000;font-style:italic;font-weight:bold;">${keyword}</span> is not found`);
                }
            })
    }

    static searchCocktailMenu(keyword) {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.drinks) {
                    return Promise.resolve(responseJson.drinks);
                } else {
                    return Promise.reject(`Upps sorry, <span style="color:#cc0000;font-style:italic;font-weight:bold;">${keyword}</span> is not found`);
                }
            })
    }
}

export default DataSource;