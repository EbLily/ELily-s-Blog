document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts-container');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        
        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title;
        
        const authorElement = document.createElement('p');
        authorElement.textContent = `By: ${post.username}`;
        
        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;
        
        postElement.appendChild(titleElement);
        postElement.appendChild(authorElement);
        postElement.appendChild(contentElement);
        
        postsContainer.appendChild(postElement);
    });
    
    document.getElementById('toggle-mode').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
    
    document.getElementById('back-button').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});
