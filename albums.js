function loadAlbums(){
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayAlbums(data))
}

function displayAlbums(albums){
    const albumsContainer = document.getElementById("albums-container");
    for(const album of albums){
        console.log(album)
        const div = document.createElement('div');
        div.classList.add('album');
        div.innerHTML = `
        <h2>Album:-${album.id}</h2>
        <p>Title:-${album.title}</p>
        `;
        albumsContainer.appendChild(div);
    }
}
loadAlbums();