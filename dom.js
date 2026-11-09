//Tasks 9.x and 10.x practice code//

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
