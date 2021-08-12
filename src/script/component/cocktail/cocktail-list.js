import './menu-item-cocktail.js';

class CocktailList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set menus(menus) {
        this._menus = menus;
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
        this._menus.forEach(menu => {
            const menuItemElement = document.createElement("menu-item-cocktail");
            menuItemElement.menu = menu
            this.shadowDOM.appendChild(menuItemElement);
        })
    }
}

customElements.define("cocktail-list", CocktailList);