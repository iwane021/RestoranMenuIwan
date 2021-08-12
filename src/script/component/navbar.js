class NavBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<nav class="navbar navbar-dark bg-success">
                            <span class="navbar-brand mb-0 h1">Restaurant Ala Cafe</span>
                        </nav>`;
    }
}

customElements.define("nav-bar", NavBar);