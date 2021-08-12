class MenuItemMeal extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                overflow: hidden;
                margin-bottom: 18px;
                border-radius: 10px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
        
            menu-item-meal {
                display: block;
                overflow: hidden;
                margin-bottom: 18px;
                border-radius: 10px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
              
            .meal-img {
                width: 100%;
                max-height: 300px;
                object-fit: cover;
                object-position: center;
            }
              
            .menu-info {
                padding: 24px;
            }
              
            .menu-info > h1 {
                font-weight: lighter;
                text-transform: capitalize;
            }
              
            .menu-info > p {
                overflow: hidden;
                margin-top: 10px;
                display: -webkit-box;
                -webkit-line-clamp: 10;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
            }
        </style>
        <img class="meal-img" src="${this._meal.strMealThumb}" alt="Meal">
        <div class="menu-info">
            <h1>${this._meal.strMeal}</h1>
            <p><strong>Category :</strong> ${this._meal.strCategory} <br> <strong>Area :</strong> ${this._meal.strArea}</p>
            <p>${this._meal.strInstructions}</p>
        </div>`;
    }
}

customElements.define("menu-item-meal", MenuItemMeal);