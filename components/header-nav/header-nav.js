import Component from "../../scripts/component.js";

window.customElements.define('web-header-nav', class extends Component {
    constructor() {
        super();

        document.addEventListener('posts:loaded', ({ detail }) => {
            const input = this.querySelector('input[type="search"]');
            const posts = this.querySelector('.posts');

            input.oninput = () => {
                const value = input.value.trim().toLowerCase();
                if (!value.length) {
                    posts.innerHTML = '';
                    return;
                }

                const res = detail
                    .filter(({ title, description, keywords }) => title.toLowerCase().includes(value) ||
                        description.toLowerCase().includes(value) ||
                        (keywords && keywords.toLowerCase().includes(value)))
                    .slice(0, 5);

                if (res.length) {
                    posts.innerHTML = res.map(({title, thumbnail, path}) => `
                        <li class="post">
                            <a href="${path}">
                                <div class="thumbnail">
                                    <img loading="lazy" alt="" src="${thumbnail.replace('default.webp', '300.webp')}" />
                                </div>
                                <h3>${title}</h3>
                            </a>
                        </li>
`                   ).join('');
                }
                else {
                    posts.innerHTML = '<em>No results found</em>';
                }
            };

            document.addEventListener('click', (event) => {
                if (!event.target.closest('[slot="search"]')) {
                    posts.innerHTML = '';
                }
            });
        });
    }
});
