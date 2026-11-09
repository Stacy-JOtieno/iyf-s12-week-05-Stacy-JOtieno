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

// Restore the original article structure
article.innerHTML = `
    <h2 class="title">Article Title</h2>
    <p class="content">This is the first paragraph.</p>
    <p class="content">This is the second paragraph.</p>
`;

// ===================================
// TASK 9.4: ADDING & REMOVING ELEMENTS
// ===================================

// EXERCISE 1: CREATING ELEMENTS

// Create a new paragraph
const newParagraph = document.createElement("p");

newParagraph.textContent = "This is a new paragraph!";
newParagraph.className = "content highlight";

// Select the article
// Reuse the article variable from Task 9.2

// Add to the end of the article
article.appendChild(newParagraph);

console.log("New paragraph added:", newParagraph);


// Insert before the first paragraph
const firstParagraph = article.querySelector("p");

const anotherParagraph = document.createElement("p");
anotherParagraph.textContent = "This paragraph was inserted before the first paragraph.";

article.insertBefore(anotherParagraph, firstParagraph);

console.log("Paragraph inserted before:", anotherParagraph);


// Modern insertion methods

const prependParagraph = document.createElement("p");
prependParagraph.textContent = "This paragraph was added at the beginning.";
article.prepend(prependParagraph);

const appendParagraph = document.createElement("p");
appendParagraph.textContent = "This paragraph was added at the end.";
article.append(appendParagraph);

const beforeParagraph = document.createElement("p");
beforeParagraph.textContent = "This paragraph is before the first paragraph.";
firstParagraph.before(beforeParagraph);

const afterParagraph = document.createElement("p");
afterParagraph.textContent = "This paragraph is after the first paragraph.";
firstParagraph.after(afterParagraph);


// EXERCISE 2: REMOVING ELEMENTS

// Remove the footer
const footerElement = document.querySelector("footer");

footerElement.remove();

console.log("Footer removed");


// Remove the last navigation item (Contact)
const lastNavItem = nav.querySelector("li:last-child");

lastNavItem.parentElement.removeChild(lastNavItem);

console.log("Last navigation item removed");


// EXERCISE 3: CLONING ELEMENTS

// Select the first navigation item
const originalNavItem = document.querySelector(".nav-link").parentElement;

// Clone the navigation item
const clonedNavItem = originalNavItem.cloneNode(true);

// Change the text of the cloned link
clonedNavItem.querySelector("a").textContent = "New Link";

// Add the cloned item to the navigation list
document.querySelector(".nav-list").appendChild(clonedNavItem);

console.log("Cloned navigation item:", clonedNavItem);


// ===================================
// BUILD: DYNAMIC NAVIGATION ITEMS
// ===================================

function addNavItem(text, href) {

    // Create a new list item
    const newItem = document.createElement("li");

    // Create a new link
    const newLink = document.createElement("a");

    // Add the link text
    newLink.textContent = text;

    // Set the link destination
    newLink.href = href;

    // Give the link a class
    newLink.className = "nav-link";

    // Put the link inside the list item
    newItem.appendChild(newLink);

    // Add the list item to the navigation
    document.querySelector(".nav-list").appendChild(newItem);

    console.log("New navigation item added:", newItem);
}

// Call the function
addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");

element.addEventListener("event", function() {
    // Code to execute
});


// ===================================
// TASK 10.1: EVENT LISTENERS
// ===================================

// EXERCISE 1: BASIC EVENTS

// Create a button
const eventButton = document.createElement("button");

eventButton.textContent = "Click Me";

// Add button to webpage
document.body.appendChild(eventButton);

// Adding event listener using a normal function
eventButton.addEventListener("click", function() {
    console.log("Button clicked!");
});

// Arrow function
eventButton.addEventListener("click", () => {
    console.log("Clicked again!");
});

// Named function
function handleClick() {
    console.log("Handled!");
}

eventButton.addEventListener("click", handleClick);

// Remove named event listener
eventButton.removeEventListener("click", handleClick);


// ===================================
// TASK 10.1: EVENT LISTENERS
// ===================================

// EXERCISE 1: BASIC EVENTS

// Create a button
const eventButton = document.createElement("button");

eventButton.textContent = "Click Me";

// Add button to webpage
document.body.appendChild(eventButton);

// Adding event listener using a normal function
eventButton.addEventListener("click", function() {
    console.log("Button clicked!");
});

// Arrow function
eventButton.addEventListener("click", () => {
    console.log("Clicked again!");
});

// Named function
function handleClick() {
    console.log("Handled!");
}

eventButton.addEventListener("click", handleClick);

// Remove named event listener
eventButton.removeEventListener("click", handleClick);


// EXERCISE 2: EVENT TYPES

// MOUSE EVENTS
eventButton.addEventListener("dblclick", () => {
    console.log("Button double-clicked!");
});

eventButton.addEventListener("mouseenter", () => {
    console.log("Mouse entered the button!");
});

eventButton.addEventListener("mouseleave", () => {
    console.log("Mouse left the button!");
});

eventButton.addEventListener("mousemove", () => {
    console.log("Mouse moving over button!");
});


// KEYBOARD EVENTS
const eventInput = document.querySelector("#name");

eventInput.addEventListener("keydown", (event) => {
    console.log("Key pressed:", event.key);
});

eventInput.addEventListener("keyup", (event) => {
    console.log("Key released:", event.key);
});


// FORM EVENTS
const eventForm = document.querySelector("#contact-form");

eventForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form submitted!");
});

eventInput.addEventListener("focus", () => {
    console.log("Input is focused!");
});

eventInput.addEventListener("blur", () => {
    console.log("Input lost focus!");
});

eventInput.addEventListener("input", () => {
    console.log("Current input:", eventInput.value);
});

eventInput.addEventListener("change", () => {
    console.log("Input value changed:", eventInput.value);
});


// WINDOW EVENTS
window.addEventListener("resize", () => {
    console.log("Window resized!");
});

window.addEventListener("scroll", () => {
    console.log("Page scrolled!");
});


// ===================================
// BUILD: CLICK COUNTER
// ===================================

// Create counter container
const counterContainer = document.createElement("div");

counterContainer.className = "counter-container";

// Create heading
const counterHeading = document.createElement("h2");

counterHeading.textContent = "My Click Counter";

// Create count display
const counterDisplay = document.createElement("h1");

counterDisplay.textContent = "0";

// Create increase button
const increaseButton = document.createElement("button");

increaseButton.textContent = "+";

// Create decrease button
const decreaseButton = document.createElement("button");

decreaseButton.textContent = "-";

// Create reset button
const resetButton = document.createElement("button");

resetButton.textContent = "Reset";

// Add everything to the container
counterContainer.appendChild(counterHeading);
counterContainer.appendChild(counterDisplay);
counterContainer.appendChild(increaseButton);
counterContainer.appendChild(decreaseButton);
counterContainer.appendChild(resetButton);

// Add container to webpage
document.body.appendChild(counterContainer);


// Counter variable
let count = 0;

// Increase count
increaseButton.addEventListener("click", () => {
    count++;
    counterDisplay.textContent = count;
});

// Decrease count
decreaseButton.addEventListener("click", () => {
    if (count > 0) {
        count--;
    }

    counterDisplay.textContent = count;
});

// Reset count
resetButton.addEventListener("click", () => {
    count = 0;
    counterDisplay.textContent = count;
});

// TASK 10.2: THE EVENT OBJECT

// Exercise 1: Mouse event properties
document.addEventListener("click", function(event) {
    console.log("Target:", event.target);
    console.log("Current Target:", event.currentTarget);
    console.log("Type:", event.type);
    console.log("Position:", event.clientX, event.clientY);
});

// Exercise 2: Keyboard event properties
document.addEventListener("keydown", function(event) {
    console.log("Key:", event.key);
    console.log("Code:", event.code);
    console.log("Shift:", event.shiftKey);
    console.log("Ctrl:", event.ctrlKey);
    console.log("Alt:", event.altKey);
});

// BUILD: KEYBOARD SHORTCUTS

document.addEventListener("keydown", function(event) {

    // Ctrl + S: Show Saved alert
    if (event.ctrlKey && event.key.toLowerCase() === "s") {
        event.preventDefault();
        alert("Saved!");
    }

    // Escape: Clear all form inputs
    if (event.key === "Escape") {
        const allInputs = document.querySelectorAll(
            "form input, form textarea"
        );

        allInputs.forEach(function(input) {
            input.value = "";
        });

        console.log("All form inputs cleared!");
    }

    // Ctrl + Enter: Submit the form
    if (event.ctrlKey && event.key === "Enter") {
        event.preventDefault();

        const shortcutForm = document.getElementById("contact-form");

        if (shortcutForm) {
            shortcutForm.requestSubmit();
        }
    }

});

