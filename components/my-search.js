
class mySearch extends HTMLElement {
    constructor() {
        super(); 

        this.attachShadow({ mode: 'open'}); 
        this.render();
    }
    render() {
        this.shadowRoot.innerHTML = this.getTemplate();
    }
    getTemplate() {
        return `
        <aside>
            <div class="buscar">
                <input type="text" placeholder="Buscar un producto">
                <button>Buscar</button>
            </div>
        </aside>
            ${this.getStyles()}
        `; 
    }
    getStyles() {
        return `
            <style>
                :host {
                    --primary-color: blue; 
                    --secundary-color: red; 
                    --heading-size: 18px;
                }
                :host([dark]) * {
                    color: #fff;
                    background: #2d2d2d;
                }
                h2 {
                    color: var(--primary-color);
                    font-size: var(--heading-size);
                }
                p {
                    color: var(--secundary-color);
                }

                p {
                    color: var(--my-app-color, red);
                    font-size: var(--my-app-font-size, 16px);
                }

                .buscar {
                    margin-top: 50px;
                    float: left;
                   }
           
                   .buscar input{
                       height: 30px;
                   }
                   button{
                       background-color: #008CBA;
                       border: none;
                       color: white;
                       padding: 8px 16px;
                       text-align: center;
                       text-decoration: none;
                       display: inline-block;
                       font-size: 16px;
                   }
           
            </style>
        `; 
    }
}

customElements.define('my-search', mySearch);