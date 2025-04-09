// Toggle the "open" class for box2 when box is clicked
document.getElementById("box").addEventListener("click", () => {
    let box2 = document.getElementById("box2");
    box2.classList.toggle("open");
});
console.log(document.body.innerHTML); // Log the entire body HTML (be cautious with this)

// Add IDs and navigation links for posts in nav
document.addEventListener('DOMContentLoaded', () => {
    let postLists = document.getElementsByClassName("content-of-page");
    let postTitles = document.getElementsByClassName("main-post-heading");
    let postNavParent = document.getElementById("post-lists");
    let homePagePost = document.getElementById("blog-content-box");
    let i = 1; // Counter for post IDs

    for (let post of postLists) {
        // Assign ID to each post
        post.setAttribute("id", `post${i}`);

        // Create navigation link
        let navLink = document.createElement("a");
        navLink.setAttribute("href", `#post${i}`);

        let navTitle = document.createElement("p");
        navTitle.textContent = postTitles[i - 1]?.textContent || "Untitled Post"; // Fallback if title is missing
        navLink.appendChild(navTitle);
        postNavParent.appendChild(navLink);

        // Create home page post link
        let homeLink = document.createElement("a");
        homeLink.setAttribute("href", `/posts#post${i}`);
        homeLink.setAttribute("class", "blog-content");

        let postImg = document.createElement("div");
        postImg.setAttribute("class", "content-img");
        homeLink.appendChild(postImg);

        let headingOfHomePost = document.createElement("h1");
        headingOfHomePost.setAttribute("class", "blog-title");
        headingOfHomePost.textContent = postTitles[i - 1]?.textContent || "Untitled Post";
        homeLink.appendChild(headingOfHomePost);

        let time = document.createElement("p");
        time.setAttribute("class", "publish_time");
        time.textContent = "today";
        homeLink.appendChild(time);

        // homePagePost.appendChild(homeLink);
        i++; // Increment post ID counter
    }
});

// Toggle the "post-list-open" class for post-lists when post-lists-box is clicked
document.getElementById("post-lists-box").addEventListener("click", () => {
    let box3 = document.getElementById("post-lists");
    box3.classList.toggle("post-list-open");
});

       






// 1. Selecting Elements
        function demoSelectors() {
            const output = document.getElementById('selector-output');
            output.innerHTML = '';
            
            // By ID
            const header = document.getElementById('demo-header');
            header.style.color = 'blue';
            output.innerHTML += '<p>Changed header color using getElementById</p>';
            
            // By class name
            const items = document.getElementsByClassName('demo-item');
            for (let item of items) {
                item.style.fontWeight = 'bold';
            }
            output.innerHTML += '<p>Bolded all items using getElementsByClassName</p>';
            
            // Query selector
            const firstItem = document.querySelector('.demo-item');
            firstItem.style.textDecoration = 'underline';
            output.innerHTML += '<p>Underlined first item using querySelector</p>';
        }

        // 2. Traversing the DOM
        function demoTraversal() {
            const target = document.getElementById('traversal-target');
            
            // Parent
            const parent = target.parentNode;
            parent.style.border = '2px solid #3498db';
            parent.style.padding = '10px';
            
            // Siblings
            const next = target.nextElementSibling;
            const prev = target.previousElementSibling;
            next.style.color = 'green';
            prev.style.color = 'red';
        }

        // 3. Modifying Elements
        function demoModification() {
            // Content
            const content = document.getElementById('content-demo');
    
            // Attributes
            const attrDemo = document.getElementById('attr-demo');
            attrDemo.setAttribute('title', 'New hover text');
            attrDemo.classList.add('modified');
            attrDemo.classList.toggle('original');
            
            // Style
            content.style.backgroundColor = '#f0f0f0';
            content.style.padding = '10px';
        }

        // 4. Creating Elements
        function demoCreateElements() {
            const container = document.getElementById('element-container');
            
            // Create element
            const newDiv = document.createElement('div');
            newDiv.className = 'demo-box';
            newDiv.textContent = 'New';
            container.appendChild(newDiv);
            
            // Insert adjacent
            container.insertAdjacentHTML('beforeend', '<div class="demo-box">Adjacent</div>');
        }

        // 5. Event Handling
        document.getElementById('click-demo').addEventListener('click', function() {
            document.getElementById('event-output').textContent = 'Button was clicked!';
        });
        
        // Event delegation
        document.addEventListener('click', function(event) {
            if (event.target.matches('.dynamic-item')) {
                document.getElementById('event-output').textContent = 
                    `Clicked: ${event.target.textContent}`;
            }
        });
        
        function addNewItem() {
            const container = document.getElementById('event-delegation');
            const count = container.children.length + 1;
            const newItem = document.createElement('div');
            newItem.className = 'dynamic-item';
            newItem.textContent = `Item ${count}`;
            container.appendChild(newItem);
        }

        // 6. Form Handling
        document.getElementById('sample-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const output = document.getElementById('form-output');
            
            let html = '<h3>Submitted Data:</h3>';
            for (let [key, value] of formData.entries()) {
                html += `<p><strong>${key}:</strong> ${value}</p>`;
            }
            
            output.innerHTML = html;
        });

        // 7. Performance
        function demoPerformance() {
            const container = document.getElementById('performance-demo');
            container.innerHTML = '';
            
            // Without fragment (slower)
            // for (let i = 0; i < 100; i++) {
            //     const div = document.createElement('div');
            //     div.textContent = i;
            //     container.appendChild(div);
            // }
            
            // With fragment (faster)
            const fragment = document.createDocumentFragment();
            for (let i = 0; i < 100; i++) {
                const div = document.createElement('div');
                div.textContent = `Item ${i}`;
                div.style.margin = '2px';
                div.style.padding = '2px';
                div.style.border = '1px solid #ddd';
                fragment.appendChild(div);
            }
            container.appendChild(fragment);
        }

// Toggle the "open" class for box2 when box is clicked
document.getElementById("box").addEventListener("click", () => {
    let box2 = document.getElementById("box2");
    box2.classList.toggle("open");
});
console.log(document.body.innerHTML); // Log the entire body HTML (be cautious with this)

// Add IDs and navigation links for posts in nav
document.addEventListener('DOMContentLoaded', () => {
    let postLists = document.getElementsByClassName("content-of-page");
    let postTitles = document.getElementsByClassName("main-post-heading");
    let postNavParent = document.getElementById("post-lists");
    let homePagePost = document.getElementById("blog-content-box");
    let i = 1; // Counter for post IDs

    for (let post of postLists) {
        // Assign ID to each post
        post.setAttribute("id", `post${i}`);

        // Create navigation link
        let navLink = document.createElement("a");
        navLink.setAttribute("href", `#post${i}`);

        let navTitle = document.createElement("p");
        navTitle.textContent = postTitles[i - 1]?.textContent || "Untitled Post"; // Fallback if title is missing
        navLink.appendChild(navTitle);
        postNavParent.appendChild(navLink);

        // Create home page post link
        let homeLink = document.createElement("a");
        homeLink.setAttribute("href", `/posts#post${i}`);
        homeLink.setAttribute("class", "blog-content");

        let postImg = document.createElement("div");
        postImg.setAttribute("class", "content-img");
        homeLink.appendChild(postImg);

        let headingOfHomePost = document.createElement("h1");
        headingOfHomePost.setAttribute("class", "blog-title");
        headingOfHomePost.textContent = postTitles[i - 1]?.textContent || "Untitled Post";
        homeLink.appendChild(headingOfHomePost);

        let time = document.createElement("p");
        time.setAttribute("class", "publish_time");
        time.textContent = "today";
        homeLink.appendChild(time);

        // homePagePost.appendChild(homeLink);
        i++; // Increment post ID counter
    }
});

// Toggle the "post-list-open" class for post-lists when post-lists-box is clicked
document.getElementById("post-lists-box").addEventListener("click", () => {
    let box3 = document.getElementById("post-lists");
    box3.classList.toggle("post-list-open");
});








// 1. Selecting Elements
        function demoSelectors() {
            const output = document.getElementById('selector-output');
            output.innerHTML = '';

            // By ID
            const header = document.getElementById('demo-header');
            header.style.color = 'blue';
            output.innerHTML += '<p>Changed header color using getElementById</p>';

            // By class name
            const items = document.getElementsByClassName('demo-item');
            for (let item of items) {
                item.style.fontWeight = 'bold';
            }
            output.innerHTML += '<p>Bolded all items using getElementsByClassName</p>';

            // Query selector
            const firstItem = document.querySelector('.demo-item');
            firstItem.style.textDecoration = 'underline';
            output.innerHTML += '<p>Underlined first item using querySelector</p>';
        }

        // 2. Traversing the DOM
        function demoTraversal() {
            const target = document.getElementById('traversal-target');

            // Parent
            const parent = target.parentNode;
            parent.style.border = '2px solid #3498db';
            parent.style.padding = '10px';

            // Siblings
            const next = target.nextElementSibling;
            const prev = target.previousElementSibling;
            next.style.color = 'green';
            prev.style.color = 'red';
        }

        // 3. Modifying Elements
        function demoModification() {
            // Content
            const content = document.getElementById('content-demo');

            // Attributes
            const attrDemo = document.getElementById('attr-demo');
            attrDemo.setAttribute('title', 'New hover text');
            attrDemo.classList.add('modified');
            attrDemo.classList.toggle('original');

            // Style
            content.style.backgroundColor = '#f0f0f0';
            content.style.padding = '10px';
        }

        // 4. Creating Elements
        function demoCreateElements() {
            const container = document.getElementById('element-container');

            // Create element
            const newDiv = document.createElement('div');
            newDiv.className = 'demo-box';
            newDiv.textContent = 'New';
            container.appendChild(newDiv);

            // Insert adjacent
            container.insertAdjacentHTML('beforeend', '<div class="demo-box">Adjacent</div>');
        }

        // 5. Event Handling
        document.getElementById('click-demo').addEventListener('click', function() {
            document.getElementById('event-output').textContent = 'Button was clicked!';
        });

        // Event delegation
        document.addEventListener('click', function(event) {
            if (event.target.matches('.dynamic-item')) {
                document.getElementById('event-output').textContent = 
                    `Clicked: ${event.target.textContent}`;
            }
        });

        function addNewItem() {
            const container = document.getElementById('event-delegation');
            const count = container.children.length + 1;
            const newItem = document.createElement('div');
            newItem.className = 'dynamic-item';
            newItem.textContent = `Item ${count}`;
            container.appendChild(newItem);
        }

        // 6. Form Handling
        document.getElementById('sample-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const output = document.getElementById('form-output');

            let html = '<h3>Submitted Data:</h3>';
            for (let [key, value] of formData.entries()) {
                html += `<p><strong>${key}:</strong> ${value}</p>`;
            }

            output.innerHTML = html;
        });

        // 7. Performance
        function demoPerformance() {
            const container = document.getElementById('performance-demo');
            container.innerHTML = '';

            // Without fragment (slower)
            // for (let i = 0; i < 100; i++) {
            //     const div = document.createElement('div');
            //     div.textContent = i;
            //     container.appendChild(div);
            // }

            // With fragment (faster)
            const fragment = document.createDocumentFragment();
            for (let i = 0; i < 100; i++) {
                const div = document.createElement('div');
                div.textContent = `Item ${i}`;
                div.style.margin = '2px';
                div.style.padding = '2px';
                div.style.border = '1px solid #ddd';
                fragment.appendChild(div);
            }
            container.appendChild(fragment);
        }


let posts=document.getElementsByClassName("main-post-heading");
for(let i=1;i<=posts.length;i++){
    let title=document.getElementById(`post${i}`).textContent;
    let a_tag=document.createElement("a");
    a_tag.setAttribute("class","blog-content");
    a_tag.setAttribute("href",`post.html#post${i}`);
     let content_img=document.createElement("div");
    content_img.setAttribute("class","content-img");
    content_img.textContent=title.split("")[1];
    a_tag.appendChild(content_img);
   let headingtitle=document.createElement("h1");
    headingtitle.setAttribute("class","blog-title");
    headingtitle.textContent=title;
   a_tag.appendChild(headingtitle);
    let datepost=document.createElement("p");
    datepost.setAttribute("class","publish_time");
    datepost.textContent="posted:- today";
    a_tag.appendChild(datepost);
    let boxofposts=document.getElementById("blog-content-box-home");
boxofposts.appendChild(a_tag);
}
