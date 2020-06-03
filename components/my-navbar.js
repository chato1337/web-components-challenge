
class myNavBar extends HTMLElement {
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
        <header>
            <div class="">
                
                <ul class="navBar">
                    <li class="logo" style="float: left;"><a>ShomPonent store</a></li>
                    <li><a href="#">Vende tus productos</a></li>
                    <li><a href="#">Ofertas</a></li>
                    <li><a href="#">Incio</a></li>
                </ul>
            </div>
        </header>

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

                .navBar{
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                    background-color: #333;
                }
                .navBar li {
                    float: right;
                }
        
                .navBar li a{
                    display: block;
                    padding: 8px;
                    color: white;
                    text-align: center;
                    padding: 14px 16px;
                    text-decoration: none;
                }
        
                .navBar li a:hover {
                    background-color: #111;
                }
        
                .logo{
                    float: left;
                }
                        
            </style>
        `; 
    }
}

customElements.define('my-navbar', myNavBar);