import { signal } from "@preact/signals";

interface Props {
  text: string;
  delay: number;
}

export function BlinkingCursor({ text, delay }: Props) {
  const cursor = signal("_");

  setInterval(() => {
    cursor.value = cursor.value ? "" : "_";
  }, delay);

  return (
    <>
      {text}
      <span class="select-none">{cursor}</span>     
    </>
  );
}
