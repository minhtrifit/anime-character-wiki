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
    const data = await getAPI(API_URL);
    box.innerHTML = '';
    characterData = new Character(data.name, data.name_kanji, data.images.jpg.image_url, data.url);

    //var box = document.createElement('div');
    var content = document.createElement('div');
    var imgTag = document.createElement('img');
    var nameTag = document.createElement('div');
    var nameKenjiTag = document.createElement('div');
    var urlTag = document.createElement('a');

    //box.id = 'box';
    content.id = 'content';

    imgTag.width = '300';
    imgTag.height = '400';
    imgTag.src = characterData.images;

    nameTag.className = 'name';
    nameTag.textContent = characterData.name;

    nameKenjiTag.className = 'nam-kanji';
    nameKenjiTag.textContent = characterData.name_kanji;

    urlTag.className = 'url';
    urlTag.href = characterData.url;
    urlTag.textContent = 'Wiki';

    content.appendChild(imgTag);
    content.appendChild(nameTag);
    content.appendChild(nameKenjiTag);
    content.appendChild(urlTag);
    box.appendChild(content);
    app.appendChild(box);
}

get_btn.addEventListener('click', () => {
    handleAPI();
})
