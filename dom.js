//Tasks 9.x and 10.x practice code//


// ===================================
// TASK 9.1: SELECTING ELEMENTS
// ===================================

// 1. getElementById
const header = document.getElementById("main-header");
console.log("getElementById:", header);

// 2. getElementsByClassName
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

// 3. getElementsByTagName
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// 4. querySelector
const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

// 5. querySelectorAll
const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);


// PRACTICE EXERCISES

// 1. Select the h1 element
const heading = document.querySelector("h1");
console.log("H1:", heading);

// 2. Select all elements with class content
const allContents = document.querySelectorAll(".content");
console.log("All contents:", allContents);

// 3. Select the form with id contact-form
const form = document.getElementById("contact-form");
console.log("Form:", form);

// 4. Select the email input
const email = document.getElementById("email");
console.log("Email:", email);

// 5. Select all list items in the navigation
const navItems = document.querySelectorAll(".nav-list li");
console.log("Navigation items:", navItems);

// 6. Select the first nav-link
const firstNavLink = document.querySelector(".nav-link");
console.log("First navigation link:", firstNavLink);

// 7. Select the last paragraph
const lastParagraph = paragraphs[paragraphs.length - 1];
console.log("Last paragraph:", lastParagraph);


// ===================================
// TASK 9.2: TRAVERSING THE DOM
// ===================================

// DOM Navigation

const nav = document.querySelector("nav");

// Parent
console.log("Parent:", nav.parentElement);

// Children
console.log("Children:", nav.children);
console.log("First child:", nav.firstElementChild);
console.log("Last child:", nav.lastElementChild);

// Siblings
const article = document.querySelector("article");

console.log("Next sibling:", article.nextElementSibling);
console.log("Previous sibling:", article.previousElementSibling);

// Descendants
const navLinks = nav.querySelectorAll("a");

console.log("All navigation links:", navLinks);


// ===================================
// PRACTICE TASKS
// ===================================

// 1. Select the header, then navigate to the nav inside it
// Reuse the existing header variable
const headerNav = header.querySelector("nav");

console.log("1. Navigation inside header:", headerNav);


// 2. Select the first nav-link, then get its parent li
// Reuse the existing firstLink variable
const parentLi = firstLink.parentElement;

console.log("2. Parent list item:", parentLi);


// 3. Select the article, then get its next sibling (section)
// Reuse the existing article variable
const nextSection = article.nextElementSibling;

console.log("3. Next sibling:", nextSection);


// 4. Select the ul, then get all its child li elements
const navList = document.querySelector(".nav-list");
const listItems = navList.children;

console.log("4. Navigation list items:", listItems);


// 5. Start from the footer and navigate up to the body
const footer = document.querySelector("footer");
const body = footer.parentElement;

console.log("5. Footer:", footer);
console.log("5. Body:", body);


// ===================================
// TASK 9.3: MODIFYING CONTENT
// ===================================

// EXERCISE 1: TEXT CONTENT

// Select the h1 element
const titleHeading = document.querySelector("h1");

// Read text
console.log("Text Content:", titleHeading.textContent);
console.log("Inner Text:", titleHeading.innerText);

// Modify text
titleHeading.textContent = "Welcome to My DOM Practice";

console.log("Updated heading:", titleHeading.textContent);


// EXERCISE 2: HTML CONTENT

// Select the article
const articleContent = document.querySelector("article");

// Read HTML
console.log("Original HTML:", articleContent.innerHTML);

// Modify HTML
articleContent.innerHTML = `
    <h2>Updated Article</h2>
    <p>This is new content.</p>
    <p>I am learning JavaScript DOM manipulation.</p>
`;

console.log("Updated HTML:", articleContent.innerHTML);

// Demonstrate safe handling of user input
const userInput = `<img src="x" onerror="alert('hacked!')">`;

// SAFE: displays the characters as text
articleContent.textContent = userInput;

console.log("User input displayed safely:", articleContent.textContent);


// EXERCISE 3: ATTRIBUTES

// Select the first navigation link
const attributeLink = document.querySelector(".nav-link");

// Get attribute
console.log("Original href:", attributeLink.getAttribute("href"));
console.log("Href property:", attributeLink.href);

// Set attribute
attributeLink.setAttribute(
    "href",
    "https://developer.mozilla.org"
);

// Check attribute
console.log("Has target:", attributeLink.hasAttribute("target"));

// Remove attribute
attributeLink.removeAttribute("target");

// DATA ATTRIBUTES

const dataElement = document.querySelector("[data-id]");

console.log("Data ID:", dataElement.dataset.id);
console.log("Data Category:", dataElement.dataset.category);

// Create a new data attribute
dataElement.dataset.newAttr = "value";

console.log("New data attribute:", dataElement.dataset.newAttr);


// EXERCISE 4: STYLES

// Select the container
const container = document.querySelector(".container");

// Apply inline styles
container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";

// Apply multiple styles
Object.assign(container.style, {
    backgroundColor: "#333",
    color: "white",
    padding: "20px"
});

console.log("Container styles updated:", container);
