import './menu-item-meal.js';

class MealList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>
       `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._meal.forEach(meal => {
            const menuItemElement = document.createElement("menu-item-meal");
            menuItemElement.meal = meal
            this.shadowDOM.appendChild(menuItemElement);
        })
    }

}

customElements.define("meal-list", MealList);