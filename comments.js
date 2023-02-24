function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
}

function displayComments(comments){
    const commentContainer = document.getElementById("comments-container")
    for(const comment of comments){
        console.log(comment);
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML =`
        <h3>Name :- ${comment.name}</h3>
        <p>Email:-${comment.email}</p>
        <p>Description:- ${comment.body}</p>
        `;
        commentContainer.appendChild(commentDiv);
    }
}
loadComments();