function loadPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data))
}

function displayPhotos(photos){
    const photosContainer = document.getElementById("photos-container")
    for(const photo of photos){
        console.log(photo);
        const div = document.createElement('div');
        div.classList.add('photo');
        div.innerHTML =`
        <h3>Title:-${photo.title}</h3>
        <img src=${photo.thumbnailUrl}>
        `;
        photosContainer.appendChild(div);
    }
}
loadPhotos();