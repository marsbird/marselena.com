import { Link } from "../components/Link.tsx";
import { LinkObfuscated } from "../components/LinkObfuscated.tsx";
import { Cursor } from "../islands/Cursor/Cursor.tsx";

export default function Home() {
  return (
    <div>
      <div class="mb-8">
        <h1
          class="text-5xl font-bold leading-10"
          aria-label="Marselena Sequoia"
        >
          {/* shift "marselena" slightly left so the letters in "sequoia" line up perfectly */}
          <span class="inline-block transform translate-x-[-2.75px]">
            marselena
          </span>
          <br />
          sequoia
        </h1>
        <h2 class="mt-4 text-xl" aria-label="software engineer">
          <Cursor text={"software engineer"} delay={750} />
        </h2>
      </div>
      <ul>
        <li>
          <Link
            label="marsbird"
            href="https://github.com/marsbird"
            src="/logos/github.svg"
            alt="github"
          />
        </li>
        <li>
          <LinkObfuscated
            userLabel="marselena"
            domainLabel="proton.me"
            src="/logos/mail.svg"
            alt="email"
          />
        </li>
        <li>
          <Link
            label="lenapehoking"
            href="https://en.wikipedia.org/wiki/Lenapehoking"
            src="/logos/maptag.svg"
            alt="location"
          />
        </li>
      </ul>
    </div>
  );
}
