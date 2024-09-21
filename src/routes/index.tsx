import { createSignal, onCleanup } from "solid-js";

export default function Home() {
  const [bool, setBool] = createSignal(false);

  const interval = setInterval(() => {
    setBool(!bool());
  }, 750);

  onCleanup(() => clearInterval(interval));

  return (
    <main class="flex justify-center items-center h-screen">
      <div>
        <h1 class="font-satoshi font-bold leading-10 text-5xl">
          marselena <br /> sequoia
        </h1>
        <h2 class="font-satoshi text-xl mt-4">
          software engineer{bool() ? "_" : ""}
        </h2>
      </div>
    </main>
  );
}
