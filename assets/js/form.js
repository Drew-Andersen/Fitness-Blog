const usernameJS = document.querySelector('#username');
const postTitle = document.querySelector('#postTitle');
const postContent = document.querySelector('#postContent');
const formJS = document.querySelector('#content-form');

function handleFormSubmit(event) {
    event.preventDefault();

    // Checks for any previously posted posts
    let postsInStorage = JSON.parse(localStorage.getItem('storedInStorage'));
    // If there are no posts stored make a new array of posts
    if (postsInStorage === null) {
        postsInStorage = [];
    }

    // Check to make sure all fields have content
    if (username.value === '') {
        alert(`Please enter a username.`)
    } else if (postTitle.value === '') {
        alert(`Please enter a post title.`)
    } else if (postContent.value === '') {
        alert(`Please enter the post content.`)
    } else {
        const post = {
            username: usernameJS.value,
            postTitle: postTitle.value, 
            postContent: postContent.value.trim()
        };
        // Store the post in an array
        postsInStorage.push(post);
        localStorage.setItem('postsInStorage', JSON.stringify(postsInStorage));

        // Redirect to the blog
        location.href="./blog.html";
    }
}

formJS.addEventListener('submit', handleFormSubmit);