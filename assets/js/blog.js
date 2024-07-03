const containerDiv = document.getElementById('container');

const postsInStorage = JSON.parse(localStorage.getItem('postsInStorage'));

function createBlogs (postsInStorage) {
    // Creating the blog elements from the stored blogs
    const blogCard = document.createElement('div');
    const blogHeading = document.createElement('h2');
    const blogContent = document.createElement('p');
    const blogUsername = document.createElement('h6');
    
    // Setting the HTML elements to the stored blog posts
    blogHeading.textContent = postsInStorage.postTitle;
    blogContent.textContent = postsInStorage.postContent;
    blogUsername.textContent = postsInStorage.username;

    // ToDo: Apply styling (CSS)
    blogCard.setAttribute('class', 'card');
    blogHeading.setAttribute('class', 'blog-heading');

    // Add the blog elements to the blogCard
    blogCard.appendChild(blogHeading);
    blogCard.appendChild(blogContent);
    blogCard.appendChild(blogUsername);

    // Add the blogCard to the container
    containerDiv.appendChild(blogCard);
}

if (postsInStorage) {
    postsInStorage.forEach(post => {
        createBlogs(post)
    });
}