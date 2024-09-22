import { createSignal, onCleanup } from 'solid-js';

export default function Home() {
  const [bool, setBool] = createSignal(false);

  const interval = setInterval(() => {
    setBool(!bool());
  }, 750);

  onCleanup(() => clearInterval(interval));

  return (
    <main class='flex h-dvh items-center justify-center font-satoshi'>
      <div class='relative bottom-5'>
        <h1
          class='text-5xl font-bold leading-10'
          aria-label='Marselena Sequoia'
        >
          marselena <br />
          <span class='relative left-[2px]'>sequoia</span>
        </h1>
        <h2
          class='relative left-[2px] mt-4 text-xl'
          aria-label='software engineer'
        >
          software engineer{bool() ? '_' : ''}
        </h2>
      </div>
    </main>
  );
}
