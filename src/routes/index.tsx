import { createSignal, onCleanup } from 'solid-js';

export default function Home() {
  const [bool, setBool] = createSignal(false);

  const interval = setInterval(() => {
    setBool(!bool());
  }, 750);

  onCleanup(() => clearInterval(interval));

  return (
    // slightly bottom-weight the centered div
    <div>
      <div class='relative bottom-5'>
        <h1
          class='text-5xl font-bold leading-10'
          aria-label='Marselena Sequoia'
        >
          {/* shift "marselena" slightly left so the letters in "sequoia" line up perfectly */}
          <span class='relative right-[2.75px]'>marselena</span> <br />
          sequoia
        </h1>
        <h2 class='mt-4 text-xl' aria-label='software engineer'>
          software engineer{bool() ? '_' : ''}
        </h2>
      </div>
      <a class='mt-3 flex items-center' href='https://github.com/marsbird'>
        <img
          class='mr-1 hidden size-3 dark:inline'
          src='/logos/github-mark-white.svg'
          alt='GitHub logo'
        />
        <img
          class='mr-1 size-3 dark:hidden'
          src='/logos/github-mark.svg'
          alt='GitHub logo'
        />
        <p class='font-satoshiItalic text-xs font-light'>marsbird </p>
      </a>
    </div>
  );
}
