// Generic function to make a request
async function makeRequest(url, options) {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Request failed: ' + response.statusText);
        }
        return await response.json();
    } catch (error) {
        console.error('Request error:', error);
        throw error;
    }
}

// Function to get all blog posts
function getBlogPosts() {
    makeRequest("http://localhost:8080/o/headless-delivery/v1.0/sites/20119/blog-postings", {
        headers: {
            Authorization: 'Basic ' + btoa('test@liferay.com:test')
        }
    })
    .then(data => {
        console.log("Successful execution:", data);
    });
}

// Function to create a new blog post
function createBlogPost() {
    makeRequest("http://localhost:8080/o/headless-delivery/v1.0/sites/20119/blog-postings", {
        method: "POST",
        headers: {
            Authorization: 'Basic ' + btoa('test@liferay.com:test'),
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            headline: "Liferay API DXP (PLACEHOLDER)",
            articleBody: "Liferay API (PLACEHOLDER).",
        })
    })
    .then(data => {
        console.log("Successful execution:", data);
    });
}

// Function to get a blog post by ID
function getBlogPostById() {
    const id = document.getElementById("1prjs").value;
    const url = `http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${id}`;
    makeRequest(url, {
        headers: {
            Authorization: 'Basic ' + btoa('test@liferay.com:test'),
        }
    })
    .then(data => {
        console.log("Successful execution:", data);
    });
}

// Function to delete a blog post by ID
function deleteBlogPostById() {
    const id = document.getElementById("1pr").value;
    const url = `http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${id}`;
    makeRequest(url, {
        method: "DELETE",
        headers: {
            Authorization: 'Basic ' + btoa('test@liferay.com:test'),
        }
    })
    .then(data => {
        console.log("Successful execution:", data);
    });
}
