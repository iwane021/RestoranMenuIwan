class MenuItemCocktail extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set menu(menu) {
        this._menu = menu;
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
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
            }
        
            menu-item-cocktail {
                display: block;
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
            }
              
            .cocktail-img {
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
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10; /* number of lines to show */
            }
        </style>
        <img class="cocktail-img" src="${this._menu.strDrinkThumb}" alt="Cocktail">
        <div class="menu-info">
            <h1>${this._menu.strDrink}</h1>
            <p><strong>Category :</strong> ${this._menu.strCategory} <br> <strong>Criteria :</strong> ${this._menu.strAlcoholic}</p>
            <p>${this._menu.strInstructions}</p>
        </div>`;
    }
}

customElements.define("menu-item-cocktail", MenuItemCocktail);