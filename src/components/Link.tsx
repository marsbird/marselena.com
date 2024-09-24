import { type Component } from 'solid-js';

const Link: Component<{
  label: string;
  href: string;
  src: string;
  srcDark: string;
}> = (props) => {
  return (
    <a class='mb-1 flex items-center' href={props.href}>
      <img class='mr-1 size-3 dark:hidden' src={props.src} />
      <img class='mr-1 hidden size-3 dark:inline' src={props.srcDark} />
      <p class='text-xs font-light'>{props.label} </p>
    </a>
  );
};

export default Link;
