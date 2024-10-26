import { JSX } from "preact";

interface Props {
  label: string;
  href: string;
  src: string;
  srcDark: string;
  alt: string;
}

export function Link({
  label,
  href,
  src,
  srcDark,
  alt,
}: Props): JSX.Element {
  return (
    <a class="mb-1 flex w-fit items-center" href={href}>
      <img class="mr-1 size-3 dark:hidden" src={src} alt={alt} />
      <img
        class="mr-1 hidden size-3 dark:inline"
        src={srcDark}
        alt={alt}
      />
      <p class="text-xs font-light">{label}</p>
    </a>
  );
}
