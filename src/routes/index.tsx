import { createSignal, onCleanup } from 'solid-js';

export default function Home() {
  const [bool, setBool] = createSignal(false);

  const interval = setInterval(() => {
    setBool(!bool());
  }, 750);

  onCleanup(() => clearInterval(interval));

  return (
    <main class='flex justify-center items-center h-screen'>
      <div>
        <h1
          class='font-satoshi font-bold leading-10 text-5xl'
          aria-label='Marselena Sequoia'
        >
          marselena <br />
          <span class='relative left-[2px]'>sequoia</span>
        </h1>
        <h2 class='font-satoshi text-xl mt-4' aria-label='software engineer'>
          software engineer{bool() ? '_' : ''}
        </h2>
      </div>
    </main>
  );
}
