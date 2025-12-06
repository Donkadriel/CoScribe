// Wait until the entire HTML document is fully loaded before running the code
document.addEventListener("DOMContentLoaded", () => {

    // Fetch the JSON file located at "./json/index.json"
    fetch("./json/index.json")
        // Convert the fetched response into a JavaScript object
        .then(response => response.json())
        // Work with the parsed JSON data
        .then(data => {

            // Select the main container where all sections will be added
            const container = document.querySelector(".middle-body-left");

            // Clear any existing content inside the container
            container.innerHTML = "";

            // Loop through each section in the JSON data
            data.sections.forEach(section => {

                // Create a new <section> element to hold this section
                const sectionEl = document.createElement("section");
                // Add a CSS class to the section for styling
                sectionEl.classList.add("article-section");

                // Create an <h2> element for the section title
                const h2 = document.createElement("h2");
                // Set the text of the <h2> to the section title from JSON
                h2.textContent = section.sectionTitle;
                // Add the title to the section element
                sectionEl.appendChild(h2);

                // Create a container div to hold all article cards in a grid layout
                const grid = document.createElement("div");
                // Add a CSS class for the grid styling
                grid.classList.add("display-grid");

                // Loop through each article in this section
                section.Articles.forEach(article => {

                    // Create a div element to represent a single article card
                    const card = document.createElement("div");
                    // Add CSS class for article card styling
                    card.classList.add("article-card");

                    // Create an <img> element for the article image
                    const img = document.createElement("img");
                    // Set the image source from JSON
                    img.src = article.image;
                    // Add a CSS class for styling the image
                    img.classList.add("article-image");
                    // Set alt text; use JSON alt if available, otherwise use article heading
                    img.alt = article.alt || article.heading;
                    // Add the image to the article card
                    card.appendChild(img);

                    // Create an <h3> element for the article heading
                    const heading = document.createElement("h3");
                    // Add a CSS class for the heading styling
                    heading.classList.add("heading");
                    // Set the heading text from JSON
                    heading.textContent = article.heading;
                    // Add the heading to the article card
                    card.appendChild(heading);

                    // Create a <p> element for the article paragraph/content
                    const paragraph = document.createElement("p");
                    // Add a CSS class for paragraph styling
                    paragraph.classList.add("paragraph");
                    // Set the paragraph text from JSON
                    paragraph.textContent = article.paragraph;
                    // Add the paragraph to the article card
                    card.appendChild(paragraph);

                    // Create a container for article buttons/tags
                    const buttonContainer = document.createElement("div");
                    // Add CSS class for styling buttons/tags
                    buttonContainer.classList.add("button2");

                    // Loop through each button/tag text in the article
                    article.buttons.forEach(btnText => {
                        // Create a <span> for each button/tag
                        const span = document.createElement("span");
                        // Set the text for the span
                        span.textContent = btnText;
                        // Add the span to the button container
                        buttonContainer.appendChild(span);
                    });

                    // Add the button container to the article card
                    card.appendChild(buttonContainer);

                    // Create a container div for author and date info
                    const authorDate = document.createElement("div");
                    // Add CSS class for styling
                    authorDate.classList.add("author-date");

                    // Create a <p> for author name
                    const authorP = document.createElement("p");
                    // Add CSS class for styling author name
                    authorP.classList.add("name");
                    // Set author name from JSON
                    authorP.textContent = article.author;

                    // Create a <p> for article date
                    const dateP = document.createElement("p");
                    // Add CSS class for styling date
                    dateP.classList.add("date");
                    // Set date text from JSON
                    dateP.textContent = article.date;

                    // Add author name and date to the author-date container
                    authorDate.appendChild(authorP);
                    authorDate.appendChild(dateP);

                    // Add the author-date container to the article card
                    card.appendChild(authorDate);

                    // Add the fully built article card to the grid container
                    grid.appendChild(card);
                });

                // Add the grid of articles to the section
                sectionEl.appendChild(grid);

                // Add the complete section to the main container in the HTML
                container.appendChild(sectionEl);
            });
        })
        // Catch any errors that occur during fetch or JSON parsing
        .catch(error => console.error("Error loading JSON:", error));

});
