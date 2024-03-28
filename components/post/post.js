import Component from "../../scripts/component.js";

window.customElements.define('web-post', class extends Component {
    constructor() {
        super();
    }

    connectedCallback() {
        const publishedAt = document.head.querySelector('meta[name="published-at"]')?.content;
        if (publishedAt) {
            this.querySelector('.published-at span').textContent = new Date(publishedAt).toLocaleDateString();
        }

        const tags = document.head.querySelector('meta[name="keywords"]')?.content;
        if (tags) {
            this.querySelector('.tags').innerHTML = tags.split(',').map(keyword => `<li>${keyword.trim()}</li>`).join('');
        }
    }
});
