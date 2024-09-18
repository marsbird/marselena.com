import { createSignal } from 'solid-js';

export default function Home() {
  const [bool, setBool] = createSignal(false);

  setInterval(() => {
    setBool((val) => !val);
  }, 750);

  return <main>marselena sequoia - software engineer{bool() ? '_' : ''}</main>;
}
