import { signal, useSignalEffect } from "@preact/signals";

interface Props {
  text: string;
  delay: number;
}

export function BlinkingCursor({ text, delay }: Props) {
  const cursor = signal("_");

  useSignalEffect(() => {
    const interval = setInterval(() => {
      cursor.value = cursor.value ? "" : "_";
    }, delay);
    return () => clearInterval(interval);
  });

  return (
    <>
      {text}
      <span class="select-none">{cursor}</span>
    </>
  );
}
