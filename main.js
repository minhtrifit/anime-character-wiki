const API_URL = 'https://api.jikan.moe/v4/random/characters';

var get_btn = document.getElementById('btn');
var app = document.getElementById('app');
var box = document.getElementById('box');

class Character {
    constructor(name, name_kanji, images, url) {
        this.name = name;
        this.name_kanji = name_kanji;
        this.images = images;
        this.url = url;
    }
}

async function getAPI(URL) {
    const rs = await fetch(URL);
    const data = await rs.json();
    return data.data;
}

async function handleAPI() {
    box.innerHTML = '';
    const data = await getAPI(API_URL);
    console.log(data);
    const characterData = new Character(data.name, data.name_kanji, data.images.jpg.image_url, data.url);
    box.innerHTML = `
    <img src="${characterData.images}" alt="">
    <div class="content">
        <div class="name">${characterData.name}</div>
        <div class="name-kanji">${characterData.name_kanji}</div>
        <a class="url" href="${characterData.url}">Wiki</a>
    </div>
    `
}

get_btn.addEventListener('click', () => {
    handleAPI();
})
