import Component from "../../scripts/component.js";

window.customElements.define('web-post-list', class extends Component {
    constructor() {
        super();

        document.addEventListener('posts:loaded', ({detail}) => {
            this.render(detail);
        });
    }

    render(posts) {
        const isTop = this.classList.contains('top');
        const range = 5;

        let offset = 0;
        let limit = range;

        const renderPosts = () => {
            let html = '';

            if (isTop) {
                const topPosts = posts.filter(({tags}) => tags.includes('top'));
                html = topPosts.map(({title, thumbnail, path}) => `
                    <li class="post">
                       <a href="${path}">
                          <div class="thumbnail">
                            <img loading="lazy" alt="" src="${thumbnail.replace('default.webp', '300.webp')}" />
                          </div>
                          <div class="text">
                            <h3>${title}</h3> 
                          </div>
                       </a> 
                    </li>
                `).join('');
            }
            else {
                html = posts.slice(offset, limit).map(({title, thumbnail, path, publishedAt, description, keywords}) => `
                    <li class="post">
                       <a href="${path}">
                          <div class="text">
                            <p class="published-at">${new Date(publishedAt).toLocaleDateString()}</p>
                            <h3>${title}</h3>
                            <p class="description">${description}</p>
                            ${keywords ? `<ul class="tags">${keywords.split(',').map(keyword => `<li>${keyword.trim()}</li>`).join('')}</ul>` : ''} 
                          </div>
                          <div class="thumbnail">
                            <img loading="lazy" alt="" src="${thumbnail.replace('default.webp', '600.webp')}" />
                          </div> 
                       </a> 
                    </li>
                `).join('');
            }

            return html;
        }

        this.insertAdjacentHTML('beforeend', `<ul class="posts ${this.className}">${renderPosts()}</ul>`);

        if (!isTop) {
            const posts = this.querySelector('.posts');
            let lastPost = posts.lastElementChild;
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        offset += range;
                        limit += range;

                        posts.insertAdjacentHTML('beforeend', renderPosts());
                        observer.unobserve(lastPost);

                        if (limit >= posts.length) {
                            observer.unobserve(lastPost);
                        }
                        else {
                            lastPost = posts.lastElementChild;
                            observer.observe(lastPost);
                        }
                    }
                });
            });
            observer.observe(lastPost);
        }
    }
});
