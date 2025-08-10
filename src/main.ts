/**
 * Creates a typewriter effect that gradually types out text character by character,
 * then displays a blinking cursor when complete.
 *
 * @param typewriterElement - The DOM element where the typewriter effect will be displayed
 * @param text - The text to type out character by character
 * @param typingSpeed - Delay in milliseconds between each character being typed
 * @param cursorSpeed - Delay in milliseconds for cursor blinking animation
 * @param cursor - The cursor character to display (defaults to "|")
 */
function typewriter(
  typewriterElement: Element,
  text: string,
  typingSpeed: number,
  cursorSpeed: number,
  cursor: string = "|",
): void {
  let displayText = ""; // Accumulates the text as it's being typed out
  let displayCursor = cursor; // Tracks the current state of the cursor for display
  let i = 0; // Index to track current position in the text being typed

  // Main typing interval - adds one character at a time
  const typingIntervalID = setInterval(() => {
    if (i < text.length) {
      // Add next character and update display with cursor
      displayText += text[i++];
      typewriterElement.textContent = displayText + displayCursor;
    } else {
      // Typing is complete, stop the typing interval
      clearInterval(typingIntervalID);
      // Start cursor blinking animation
      setInterval(() => {
        displayCursor = displayCursor ? "" : cursor; // Toggle cursor visibility
        typewriterElement.textContent = displayText + displayCursor;
      }, cursorSpeed);
    }
  }, typingSpeed);
}

async function getBooks(
  hardcoverElement: Element,
  endpoint: "currentlyReading" | "lastRead",
) {
  const response = await fetch(`/api/hardcover/${endpoint}`);
  const data = await response.json();

  data.data.user_books.forEach((book) => {
    const imgElement = document.createElement("img");
    imgElement.src = book.book.image.url;
    imgElement.classList = "w-1/10";
    hardcoverElement.appendChild(imgElement);
  });
}

// Find the typewriter element and start the effect
const typewriterElement = document.querySelector("#typewriter");
if (typewriterElement) {
  // Start typewriter effect: "software engineer" at 80ms per character, 750ms cursor blink
  typewriter(typewriterElement, "software engineer", 80, 750);
}

const hardcoverElement = document.querySelector("#hardcover");
if (hardcoverElement) {
  getBooks(hardcoverElement, "currentlyReading");
  getBooks(hardcoverElement, "lastRead");
}
