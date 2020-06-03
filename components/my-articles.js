
class myArticles extends HTMLElement {
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
        <section>
            <div class="articulos">
                <div class="articulo">
                    <p align="center">
                        <img src="img/1.jpg" alt="imagen producot">
                    </p>
                    <h4>Guantes de latex</h4>
                    <h4>Precio: 15 $</h4>
                    <p>Guantes de buena calida</p>
                    <button>añadir al carrito</button>
                </div>
                <div class="articulo">
                    <p align="center">
                        <img src="img/2.jpg" alt="imagen producot">
                    </p>
                    <h4>Mascarilla tapabocas</h4>
                    <h4>Precio: 6 $</h4>
                    <p>Desechable, antifluidos</p>
                    <button>añadir al carrito</button>
                </div>
                <div class="articulo">
                    <p align="center">
                        <img src="img/3.jpg" alt="imagen producot">
                    </p>
                    <h4>Alcohol antibacterial en gel</h4>
                    <h4>Precio: 40 $</h4>
                    <p>No requiere agua para lavar</p>
                    <button>añadir al carrito</button>
                </div>
    
            </div>
        </section>
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

                .articulos{
                    margin-top: 50px;
                    float: right;
                    display: flex;
                }
                .articulos h2{
                    display: block;
                }
                .articulos img {
                    width: 90px;
                    height: auto;
                }
                .articulo{
                    margin-right: 30px;
                }
        
            </style>
        `; 
    }
}

customElements.define('my-articles', myArticles);