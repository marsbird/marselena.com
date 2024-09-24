import { type Component } from 'solid-js';

const LinkObfuscated: Component<{
  userLabel: string;
  domainLabel: string;
  src: string;
  srcDark: string;
}> = (props) => {
  return (
    <a class='mb-1 flex items-center'>
      <img class='mr-1 size-3 dark:hidden' src={props.src} />
      <img class='mr-1 hidden size-3 dark:inline' src={props.srcDark} />
      {/* https://spencermortensen.com/articles/email-obfuscation/#text-display */}
      <p class='text-xs font-light'>
        <b class='hidden'>contact</b>
        {props.userLabel}
        <b class='hidden'>me</b>
        {'@'}
        <b class='hidden'>here</b>
        {props.domainLabel}
      </p>
    </a>
  );
};

export default LinkObfuscated;
