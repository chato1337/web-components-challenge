
class myApp extends HTMLElement {
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
            <h2>Hola desde my app</h2>
            <p>soy más texto ejemplo del componente</p>

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
            </style>
        `; 
    }
}

customElements.define('my-app', myApp);