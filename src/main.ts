import typewriter from "./scripts/typewriter";
import getBooks from "./scripts/getBooks";

// Find the typewriter element and start the effect
const typewriterElement = document.querySelector("#typewriter");
if (typewriterElement) {
  // Start typewriter effect: "software engineer" at 80ms per character, 750ms cursor blink
  typewriter(typewriterElement, "software engineer", 80, 750);
}

const currentlyReadingElement = document.querySelector("#currentlyReading");
if (currentlyReadingElement)
  getBooks(currentlyReadingElement, "currentlyReading");

const lastReadElement = document.querySelector("#lastRead");
if (lastReadElement) getBooks(lastReadElement, "lastRead");
