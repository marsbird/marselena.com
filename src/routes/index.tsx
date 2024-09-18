import { createSignal, onCleanup } from 'solid-js';

export default function Home() {
  const [bool, setBool] = createSignal(false);

  const interval = setInterval(() => {
    setBool(!bool());
  }, 750);

  onCleanup(() => clearInterval(interval));

  return <main>marselena sequoia - software engineer{bool() ? '_' : ''}</main>;
}
