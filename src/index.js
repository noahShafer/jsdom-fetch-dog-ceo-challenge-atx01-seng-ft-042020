console.log('%c HI', 'color: firebrick')

window.addEventListener('load', e => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    let dogBreeds = [];

    fetch(imgUrl)
    .then(res => res.json())
    .then(json => {
        let dogImgs = json.message;
        dogImgs.forEach(img => document.querySelector('#dog-image-container').innerHTML += `<img src="${img}">`);
    });

    fetch(breedUrl)
    .then(res => res.json())
    .then(json => {
        dogBreeds = Object.keys(json.message);
        dogBreeds.forEach(breed => {
            let dogBreedsList = document.querySelector('#dog-breeds');
            let dogBreedLi = document.createElement('li');
            dogBreedLi.id = breed;
            dogBreedLi.textContent = breed;
            dogBreedsList.appendChild(dogBreedLi);
            dogBreedLi.addEventListener('click', (e) => dogBreedLi.style.color = 'blue')
        });
    });

    document.querySelector('#breed-dropdown').addEventListener('change', (event) => {
        let dogBreedsList = document.querySelector('#dog-breeds');
        dogBreedsList.innerHTML = "";
        dogBreeds.filter(breed => breed[0] == event.target.value).forEach(breed => {
            let dogBreedLi = document.createElement('li');
            dogBreedLi.id = breed;
            dogBreedLi.textContent = breed;
            dogBreedsList.appendChild(dogBreedLi);
            dogBreedLi.addEventListener('click', (e) => dogBreedLi.style.color = 'blue')
        });
      });
});




