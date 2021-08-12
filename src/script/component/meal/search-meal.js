class SearchMeal extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchMealElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
            .search-container {
                position: sticky;
                top: 10px;
                display: flex;
                padding: 16px;
                border-radius: 5px;
                background-color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            
            .search-container > input {
                border: 0;
                width: 75%;
                padding: 16px;
                font-weight: bold;
                border-bottom: 1px solid #17a2b8;
            }
            
            .search-container > input:focus {
                outline: 0;
                border-bottom: 2px solid #17a2b8;
            }
            
            .search-container > input:focus::placeholder {
                font-weight: bold;
            }
            
            .search-container >  input::placeholder {
                color: #17a2b8;
                font-weight: normal;
            }
            
            .search-container > button {
                border: 0;
                width: 23%;
                color: white;
                padding: 16px;
                cursor: pointer;
                margin-left: auto;
                font-weight: bold;
                text-transform: uppercase;
            }

            .btn-success {
                background-color: #28a745;
            }
            
            @media screen and (max-width: 550px){
                .search-container {
                    position: static;
                    flex-direction: column;
                }
            
                .search-container > input {
                    width: 100%;
                    margin-bottom: 12px;
                }
            
                .search-container > button {
                    width: 100%;
                }
            }
        </style>
        <div id="search-container" class="search-container">
            <input placeholder="Search meal..." id="searchMealElement" type="search">
            <button id="searchButtonMealElement" type="submit" class="btn btn-success">Search</button>
        </div>
        `;
        this.shadowDOM.querySelector("#searchButtonMealElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-meal", SearchMeal);