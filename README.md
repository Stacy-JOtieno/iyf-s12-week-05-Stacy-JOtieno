# Week {5}: {DOM-MANIPULATION}

## Author
- **Name:** Stacy Otieno
- **GitHub:** [@Stacy-JOtieno](https://github.com/Stacy-JOtieno)
- **Email:** (jjaqkuxhi@gmail.com)
- **Date:** November 9, 2026

## Project Description
This project consists of five daily JavaScript challenges designed to practise DOM (Document Object Model) manipulation and JavaScript event handling.

The project demonstrates how JavaScript can interact with HTML elements, dynamically create and remove content, change webpage styles, copy content between elements, and implement a dark mode feature.

## Technologies Used
- HTML5
- CSS3
- JavaScript (Vanilla JavaScript)
- DOM Manipulation
- Git and GitHub

## Features
- Add tasks with Enter or the Add button (empty and whitespace-only tasks are rejected, and the input clears after adding)
- Click a task to mark it complete or incomplete (completed tasks get a strikethrough)
- Delete button on each task, shown on hover
- Filter by All, Active or Completed
- Live "items left" counter
- "Clear Completed" button, disabled when nothing is completed
- Double-click a task to edit it (Enter saves, Escape cancels)
- Empty-state messages for an empty list or filter

## How to Run
1. Clone this repository:
- git clone https://github.com/Stacy-JOtieno/your-repository-name.git
2. Open the cloned project folder in VS Code.
3. Open any of the five HTML files in your browser:
- day1-color-changer.html
- day2-element-creator.html
- day3-image-remover.html
- day4-content-copier.html
4. day5-dark-mode.html
Click the buttons on each page to test the functionality.

No npm installation is required.

## Lessons Learned
Through this project, I learned:

 Keeping an array of todo objects as the single source of truth and re-rendering from it is easier to reason about than editing the DOM piece by piece.
- Event delegation: one listener on the `<ul>` handles clicks for every task, including ones added later.
- Using `textContent` instead of `innerHTML` keeps user input as plain text and prevents HTML injection.
- Array methods such as `filter`, `find` and `some` handle most of the data logic.

## Challenges Faced
 - **Click versus double-click:** a double-click also fires two single clicks, which toggled the task twice (and in the Active filter, hit the wrong item). I fixed it by delaying the toggle slightly and cancelling it when a double-click arrives.
- **Edit mode firing twice:** `blur` fires after Enter or Escape, so saving could run twice. A `finished` flag stops this.
- **Whitespace-only tasks:** the `required` attribute allows spaces, so I also trim and check the text in JavaScript.


## Live Demo (if deployed)
[View Live Demo](https://stacy-jotieno.github.io/iyf-s12-week-05-Stacy-JOtieno/)