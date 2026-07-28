import axios from 'axios'

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const GIF_KEY = import.meta.env.VITE_GIF_KEY;

export async function fetchPhotos(query, per_page=30){
    const res = await axios.get('https://api.unsplash.com/search/photos', {
        params:{query, per_page},
        headers:{authorization:`Client-ID ${UNSPLASH_KEY}`}
    })
   return res.data
}


export async function fetchVideos(query, per_page=100) {
    let res = await axios.get('https://api.pexels.com/v1/videos/search', {
        params:{query, per_page},
        headers:{authorization:PEXELS_KEY}
    })
    return res.data
}


export async function fetchGif(query, limit=100) {
    let res = await axios.get('https://api.klipy.com/v2/search', {
        params:{q:query, key:GIF_KEY, limit}
    })
    return res.data
}



export async function fetchPexelsPhotos(query, per_page=10) {
    let res = await axios.get('https://api.pexels.com/v1/search', {
        params:{query, per_page},
        headers:{authorization:PEXELS_KEY}
    });

    return res
}



