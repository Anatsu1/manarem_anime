async function bannersAniList() {
    const query = `{
        Page(perPage: 20) {
            media(type: ANIME, sort: TRENDING_DESC) {
                bannerImage
            }
        }
    }`;
    const res = await fetch('https://graphql.anilist.co', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
    });
    if (!res.ok) throw new Error('AniList ' + res.status);
    const json = await res.json();
    return json.data.Page.media
        .map((m) => m.bannerImage)
        .filter(Boolean);
}

async function bannersJikan() {
    const res = await fetch('https://api.jikan.moe/v4/top/anime?limit=8');
    if (!res.ok) throw new Error('Jikan ' + res.status);
    const json = await res.json();
    return json.data
        .map((a) => a.images && a.images.jpg && a.images.jpg.large_image_url)
        .filter(Boolean);
}

function precargar(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = reject;
        img.src = url;
    });
}

async function iniciarHeroCarrousel() {
    const slides = document.querySelectorAll('.hero-slide');
    if (!slides.length) return;

    let urls = [];
    try {
        urls = await bannersAniList();
    } catch (e) {
        try {
            urls = await bannersJikan();
        } catch (e2) {
            return;
        }
    }

    const elegidas = urls.slice(0, slides.length);
    if (elegidas.length < slides.length) return;

    try {
        await Promise.all(elegidas.map(precargar));
    } catch (e) {
        return;
    }

    slides.forEach((slide, i) => {
        slide.style.backgroundImage = `url("${elegidas[i]}")`;
    });
}

iniciarHeroCarrousel();
