import { JSX } from "preact";

interface Props {
  userLabel: string;
  domainLabel: string;
  src: string;
  srcDark: string;
  alt: string;
}

export function LinkObfuscated({
  userLabel,
  domainLabel,
  src,
  srcDark,
  alt,
}: Props): JSX.Element {
  return (
    <div class="mb-1 flex w-fit items-center">
      <img class="mr-1 size-3 dark:hidden" src={src} alt={alt} />
      <img
        class="mr-1 hidden size-3 dark:inline"
        src={srcDark}
        alt={alt}
      />
      {/* https://spencermortensen.com/articles/email-obfuscation/#text-display */}
      <p class="text-xs font-light">
        <b class="hidden">contact</b>
        {userLabel}
        <b class="hidden">me</b>
        {"@"}
        <b class="hidden">here</b>
        {domainLabel}
      </p>
    </div>
  );
}
