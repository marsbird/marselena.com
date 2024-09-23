import { createSignal, onCleanup } from 'solid-js';
import Link from '~/components/Link';

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
      <ul class='mt-3'>
        <li>
          <Link
            label='Lenapehoking'
            href='https://en.wikipedia.org/wiki/Lenapehoking'
            src='/logos/maptag.svg'
            srcDark='/logos/maptag-dark.svg'
            alt=''
          />
        </li>
        <li>
          <Link
            label='█████'
            src='/logos/mail.svg'
            srcDark='/logos/mail-dark.svg'
            alt=''
          />
        </li>
        <li>
          <Link
            label='marsbird'
            href='https://github.com/marsbird'
            src='/logos/github.svg'
            srcDark='/logos/github-dark.svg'
            alt=''
          />
        </li>
      </ul>
    </div>
  );
}
