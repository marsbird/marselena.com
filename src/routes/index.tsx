import { createSignal, onCleanup } from 'solid-js';

export default function Home() {
  const [bool, setBool] = createSignal(false);

  const interval = setInterval(() => {
    setBool(!bool());
  }, 750);

  onCleanup(() => clearInterval(interval));

  return (
    // slightly bottom-weight the centered div
    <div class='relative bottom-5'>
      <h1 class='text-5xl font-bold leading-10' aria-label='Marselena Sequoia'>
        marselena <br />
        {/* push sequoia slightly right so that strokes line up perfectly */}
        <span class='relative left-[2px]'>sequoia</span>
      </h1>
      <h2
        class='relative left-[2px] mt-4 text-xl'
        aria-label='software engineer'
      >
        software engineer{bool() ? '_' : ''}
      </h2>
    </div>
  );
}
