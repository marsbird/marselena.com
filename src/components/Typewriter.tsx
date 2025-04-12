import { useEffect, useState } from "preact/hooks";

interface TypewriterProps {
  text: string;
  cursor?: string;
  delay?: number;
  typeSpeed?: number;
  cursorSpeed?: number;
}

export default function Typewriter({
  text,
  cursor = "│",
  delay = 400,
  typeSpeed = 80,
  cursorSpeed = 750,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [displayCursor, setDisplayCursor] = useState(cursor);
  const [i, setI] = useState(0);
  const [isDelayed, setIsDelayed] = useState(true);

  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;

    if (isDelayed) {
      // on initial load, add a delay
      id = setTimeout(() => {
        setIsDelayed(false);
      }, delay);
    } else if (i < text.length) {
      // after initial delay, start typing between 1 and 1.5 typeSpeed
      const randomSpeed = typeSpeed * (1 + Math.random() * 0.5);
      id = setTimeout(() => {
        setDisplayText(displayText + text[i]);
        setI((prev) => prev + 1);
      }, randomSpeed);
    } else {
      // after typing concludes, blink cursor
      id = setTimeout(
        () => setDisplayCursor(displayCursor ? "" : cursor),
        cursorSpeed,
      );
    }

    return () => clearTimeout(id);
  }, [
    displayText,
    displayCursor,
    i,
    isDelayed,
    text,
    cursor,
    delay,
    typeSpeed,
    cursorSpeed,
  ]);

  return (
    <>
      {displayText}
      {displayCursor}
    </>
  );
}
