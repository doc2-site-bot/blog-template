// Non LCP components
const lazyComponents = [
    'footer-nav'
];

// Build lazy component selector
let lazyComponentSel = lazyComponents.map(name => `web-${name}`);
// Add potential items
lazyComponentSel.forEach(name => lazyComponentSel.push(`${name}-item`));
lazyComponentSel = lazyComponentSel.join(',');

const variableMap = {
    'year': new Date().getFullYear()
};

const icons = {
    youtube: '<svg height="2500" viewBox="0 .03 2498 2502.47" width="2496" xmlns="http://www.w3.org/2000/svg"><path d="m0 1864.11v.11c1.5 55.5 2 111.32 11.32 166.47 9.92 58.35 24.1 115.25 51.15 168.21q54.86 107.52 150.21 181.66c45.52 35.5 95.25 63.69 150.3 81.47 80.26 25.89 163.07 35.81 247.09 36.3 52.42.33 104.81 1.64 157.25 1.42 380.82-1.6 761.65 2.75 1142.49-2.35 50.53-.68 100.24-6.85 149.84-15.92 95.06-17.4 179.07-58 250.95-122.09 83.77-74.71 140.29-166.16 165.81-276.52 16.69-72.14 20.87-145.32 21.58-218.77v-14.65c0-5.68-2.16-1247.91-2.36-1264.33-.55-45.1-3.88-89.87-12.33-134.25-10.29-54.08-24.82-106.78-50.71-155.7-27.35-51.7-61.6-98.17-104-138.79-64.89-62.23-139.78-106.23-227-129.51-78.74-21-159.07-25.68-240-25.6a2.45 2.45 0 0 1 -.45-1.24h-1224.74c0 .42 0 .83-.07 1.24-45.93.84-91.92.49-137.61 6.16-50.05 6.22-99.63 15.59-147 33.09-74.62 27.6-139.46 70.59-194.84 128-62.75 65-107 140.22-130.44 227.79-20.95 78.13-25.51 157.81-25.62 238.06" fill="#fff"/><path d="m0 .79h2498v2498h-2498z" fill="none"/><path d="m1293.24 1938.65-409.54-7.49c-132.6-2.61-265.53 2.6-395.53-24.44-197.76-40.4-211.77-238.49-226.43-404.65-20.2-233.6-12.38-471.44 25.74-703.09 21.52-129.98 106.21-207.54 237.18-215.98 442.12-30.63 887.18-27 1328.32-12.71 46.59 1.31 93.5 8.47 139.44 16.62 226.77 39.75 232.3 264.23 247 453.2 14.66 190.92 8.47 382.82-19.55 572.44-22.48 157-65.49 288.66-247 301.37-227.42 16.62-449.62 30-677.68 25.74.01-1.01-1.3-1.01-1.95-1.01zm-240.77-397.48c171.38-98.4 339.49-195.16 509.89-292.9-171.7-98.4-339.49-195.16-509.89-292.9z" fill="#f00"/></svg>',
    facebook: '<svg height="2500" viewBox="126.445 2.281 589 589" width="2500" xmlns="http://www.w3.org/2000/svg"><circle cx="420.945" cy="296.781" fill="#3c5a9a" r="294.5"/><path d="m516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357h-44.788v71.271h46.174v205.177h84.847v-206.531h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0v-70.403z" fill="#fff"/></svg>',
    instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 2499.899999999999 2500"><defs><radialGradient id="a" cx="332.14" cy="2511.81" r="3263.54" gradientUnits="userSpaceOnUse"><stop offset=".09" stop-color="#fa8f21"/><stop offset=".78" stop-color="#d82d7e"/></radialGradient><radialGradient id="b" cx="1516.14" cy="2623.81" r="2572.12" gradientUnits="userSpaceOnUse"><stop offset=".64" stop-color="#8c3aaa" stop-opacity="0"/><stop offset="1" stop-color="#8c3aaa"/></radialGradient></defs><path d="M833.4 1250c0-230.11 186.49-416.7 416.6-416.7s416.7 186.59 416.7 416.7-186.59 416.7-416.7 416.7-416.6-186.59-416.6-416.7m-225.26 0c0 354.5 287.36 641.86 641.86 641.86s641.86-287.36 641.86-641.86S1604.5 608.14 1250 608.14 608.14 895.5 608.14 1250m1159.13-667.31a150 150 0 1 0 150.06-149.94h-.06a150.07 150.07 0 0 0-150 149.94M745 2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28 7.27-505.15c5.55-121.87 26-188 43-232.13 22.72-58.36 49.78-100 93.5-143.78s85.32-70.88 143.78-93.5c44-17.16 110.26-37.46 232.13-43 131.76-6.06 171.34-7.27 505-7.27s373.28 1.31 505.15 7.27c121.87 5.55 188 26 232.13 43 58.36 22.62 100 49.78 143.78 93.5s70.78 85.42 93.5 143.78c17.16 44 37.46 110.26 43 232.13 6.06 131.87 7.27 171.34 7.27 505.15s-1.21 373.28-7.27 505.15c-5.55 121.87-25.95 188.11-43 232.13-22.72 58.36-49.78 100-93.5 143.68s-85.42 70.78-143.78 93.5c-44 17.16-110.26 37.46-232.13 43-131.76 6.06-171.34 7.27-505.15 7.27s-373.28-1.21-505-7.27M734.65 7.57c-133.07 6.06-224 27.16-303.41 58.06C349 97.54 279.38 140.35 209.81 209.81S97.54 349 65.63 431.24c-30.9 79.46-52 170.34-58.06 303.41C1.41 867.93 0 910.54 0 1250s1.41 382.07 7.57 515.35c6.06 133.08 27.16 223.95 58.06 303.41 31.91 82.19 74.62 152 144.18 221.43S349 2402.37 431.24 2434.37c79.56 30.9 170.34 52 303.41 58.06C868 2498.49 910.54 2500 1250 2500s382.07-1.41 515.35-7.57c133.08-6.06 223.95-27.16 303.41-58.06 82.19-32 151.86-74.72 221.43-144.18s112.18-139.24 144.18-221.43c30.9-79.46 52.1-170.34 58.06-303.41 6.06-133.38 7.47-175.89 7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95 97.54 2068.86 65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17 1.51 1589.56 0 1250.1 0S868 1.41 734.65 7.57" fill="url(#a)"/><path d="M833.4 1250c0-230.11 186.49-416.7 416.6-416.7s416.7 186.59 416.7 416.7-186.59 416.7-416.7 416.7-416.6-186.59-416.6-416.7m-225.26 0c0 354.5 287.36 641.86 641.86 641.86s641.86-287.36 641.86-641.86S1604.5 608.14 1250 608.14 608.14 895.5 608.14 1250m1159.13-667.31a150 150 0 1 0 150.06-149.94h-.06a150.07 150.07 0 0 0-150 149.94M745 2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28 7.27-505.15c5.55-121.87 26-188 43-232.13 22.72-58.36 49.78-100 93.5-143.78s85.32-70.88 143.78-93.5c44-17.16 110.26-37.46 232.13-43 131.76-6.06 171.34-7.27 505-7.27s373.28 1.31 505.15 7.27c121.87 5.55 188 26 232.13 43 58.36 22.62 100 49.78 143.78 93.5s70.78 85.42 93.5 143.78c17.16 44 37.46 110.26 43 232.13 6.06 131.87 7.27 171.34 7.27 505.15s-1.21 373.28-7.27 505.15c-5.55 121.87-25.95 188.11-43 232.13-22.72 58.36-49.78 100-93.5 143.68s-85.42 70.78-143.78 93.5c-44 17.16-110.26 37.46-232.13 43-131.76 6.06-171.34 7.27-505.15 7.27s-373.28-1.21-505-7.27M734.65 7.57c-133.07 6.06-224 27.16-303.41 58.06C349 97.54 279.38 140.35 209.81 209.81S97.54 349 65.63 431.24c-30.9 79.46-52 170.34-58.06 303.41C1.41 867.93 0 910.54 0 1250s1.41 382.07 7.57 515.35c6.06 133.08 27.16 223.95 58.06 303.41 31.91 82.19 74.62 152 144.18 221.43S349 2402.37 431.24 2434.37c79.56 30.9 170.34 52 303.41 58.06C868 2498.49 910.54 2500 1250 2500s382.07-1.41 515.35-7.57c133.08-6.06 223.95-27.16 303.41-58.06 82.19-32 151.86-74.72 221.43-144.18s112.18-139.24 144.18-221.43c30.9-79.46 52.1-170.34 58.06-303.41 6.06-133.38 7.47-175.89 7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95 97.54 2068.86 65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17 1.51 1589.56 0 1250.1 0S868 1.41 734.65 7.57" fill="url(#b)"/></svg>',
    tiktok: '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#00f6ef;}.cls-2{fill:#fff;}.cls-3{fill:#ff004f;}</style></defs><rect height="427.97" rx="71.15" width="427.97" x="42.01" y="42.95"/><path class="cls-1" d="M389.39,221.92V164.85c-74.6-3.15-77-70.94-77-77.31v-.48H254.73V309.33h0a45.66,45.66,0,1,1-32.36-43.71V206.76a104.57,104.57,0,0,0-13.32-.85A103.42,103.42,0,1,0,312.47,309.33c0-1.45,0-2.89-.1-4.32V195.56C338.92,219.85,389.39,221.92,389.39,221.92Z"/><path class="cls-2" d="M406.37,236V178.9c-74.61-3.15-77-70.94-77-77.31v-.48H271.71V323.38h0a45.66,45.66,0,1,1-32.36-43.7V220.81A104.57,104.57,0,0,0,226,220,103.42,103.42,0,1,0,329.45,323.38c0-1.45,0-2.89-.1-4.32V209.61C355.9,233.9,406.37,236,406.37,236Z"/><path class="cls-3" d="M313.82,101.11c2.78,15.14,10.9,38.81,34.57,52.66-18.09-21.07-19-48.26-19-52.18v-.48Z"/><path class="cls-3" d="M406.37,236V178.9a106.46,106.46,0,0,1-17-2v44.95s-50.47-2.07-77-26.36V304.91c.06,1.43.1,2.87.1,4.32a103.43,103.43,0,0,1-160.72,86.1,103.41,103.41,0,0,0,177.7-71.95c0-1.45,0-2.89-.1-4.32V209.61C355.9,233.9,406.37,236,406.37,236Z"/><path class="cls-3" d="M222.37,265.53a45.69,45.69,0,0,0-33.19,84.85,45.69,45.69,0,0,1,50.17-70.7V220.81A104.57,104.57,0,0,0,226,220c-1.23,0-2.44,0-3.66.07Z"/></svg>'
};

const loadLazyComponent = (component) => {
    const name = component.tagName.toLowerCase().replace('web-', '');
    const template = document.head.querySelector(`template[src*="${name}.js"]`);
    if (template) {
        const script = document.createElement('script');
        [...template.attributes].forEach( attr => { script.setAttribute(attr.nodeName ,attr.nodeValue) });
        document.head.append(script);
        template.remove();
    }
};

const site = document.head.querySelector('meta[name="og:site_name"]')?.content;
if (site) {
    document.title += ` | ${site}`;
}

const icon = document.head.querySelector('meta[name="icon"]')?.content;
if (icon) {
    fetch(icon, {
        headers: {
            'x-cache-ttl': 300
        },
        priority: 'low'
    })
        .then(res => res.blob())
        .then((blob) => {
            document.head.querySelector('link[rel="icon"]').href = URL.createObjectURL(blob);
        });
}

window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle('is-scrolling', window.scrollY !== 0)
});

document.addEventListener('DOMContentLoaded', () => {
    // Hydrate on user interaction
    let isHydrated = false;
    const hydrate = () => {
        if (!isHydrated) {
            document.body.querySelectorAll(lazyComponentSel).forEach((component) => {
                loadLazyComponent(component);
            });

            isHydrated = true;
        }
    };
    window.addEventListener('scroll', hydrate, { once: true, passive: true });
    window.addEventListener('mousemove', hydrate, { once: true, passive: true });
    window.addEventListener('touchmove', hydrate, { once: true, passive: true });
    window.addEventListener('keydown', hydrate, { once: true, passive: true });

    if (window.scrollY !== 0) {
        hydrate();
    }

    document.querySelectorAll('var').forEach((variable) => {
        const value = variableMap[variable.textContent] || icons[variable.textContent];
        if (value) {
            variable.outerHTML = `<span>${value}</span>`
        }
    });

    document.querySelectorAll('.social a').forEach((link) => {
        if (icons[link.textContent]) {
            link.setAttribute('aria-label', link.textContent);
            link.setAttribute('target', '_blank');
            link.innerHTML = icons[link.textContent];
        }
    });
});

// Query posts
const projectId = document.head.querySelector('meta[name="project-id"]').content;
const space = document.head.querySelector('meta[name="project-space"]').content
const props = '{path: path, title: meta.title, thumbnail: meta.thumbnail, description: meta.description, publishedAt: publishedAt, tags: meta.tags, keywords: meta.keywords, tags: tags}';
const query = `reverse(sort_by([?starts_with(path, '/posts/')], &publishedAt)[*].${props})`;

const req = await fetch(`https://api.doc2.site/v1/docs/search/${space}/${projectId}`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({
        engine: 'JMESPath',
        query
    })
});

if (req.ok) {
    const { data } = await req.json();

    document.dispatchEvent(new CustomEvent('posts:loaded', {detail: data}));
}

document.querySelector('footer').hidden = false;
