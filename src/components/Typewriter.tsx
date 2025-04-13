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

  // on initial load, add a delay
  useEffect(() => {
    if (isDelayed) {
      const id = setTimeout(() => {
        setIsDelayed(false);
      }, delay);
      return () => clearTimeout(id);
    }
  }, [isDelayed, delay]);

  // after initial delay, start typing between 1 and 1.5 typeSpeed
  useEffect(() => {
    if (!isDelayed && i < text.length) {
      const id = setTimeout(
        () => {
          setDisplayText(displayText + text[i]);
          setI(i + 1);
        },
        typeSpeed * (1 + Math.random() * 0.5),
      );
      return () => clearTimeout(id);
    }
  }, [isDelayed, text, displayText, i, typeSpeed]);

  // after typing concludes, blink cursor
  useEffect(() => {
    if (!isDelayed && i >= text.length) {
      const id = setTimeout(() => {
        setDisplayCursor(displayCursor ? "" : cursor);
      }, cursorSpeed);
      return () => clearTimeout(id);
    }
  }, [isDelayed, i, text, displayCursor, cursor, cursorSpeed]);

  return (
    <>
      {displayText}
      {displayCursor}
    </>
  );
}
