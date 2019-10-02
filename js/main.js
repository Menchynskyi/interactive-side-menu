const content = document.querySelector('#content'),
      nav = document.querySelector('#list');

const musicList = document.createElement('UL');
musicList.classList.add('music-list');

const addListElements = arr => {
    arr.forEach(el => {
        const musicListElement = document.createElement('LI'),
            musicListTitle = document.createTextNode(el.title);

        musicListElement.classList.add('music-list-element');
        musicListElement.dataset.index = arr.indexOf(el);
        musicListElement.appendChild(musicListTitle);
        musicList.appendChild(musicListElement);
    })
};

addListElements(musicData);

nav.appendChild(musicList).firstChild.classList.add('active');

const addContent = data => {
    content.innerHTML = `
    <h2>${data.title}</h2>
    <p class="music-price">Price: ${data.price}</p>
    <p>${data.description}</p>
    <img src="${data.imgPath}" alt="${data.title}" class="music-img">
    `
};

addContent(musicData[0]);

nav.addEventListener('click', event => {
    let navElement = event.target;

    if (document.querySelector('.active')) {
        document.querySelector('.active').classList.remove('active');
    }

    if (navElement.tagName != 'LI') {
        return;
    }

    navElement.classList.add('active');
    let musicService = musicData[navElement.dataset.index];
    addContent(musicService);
});
      

