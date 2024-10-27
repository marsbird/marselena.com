interface Props {
  userLabel: string;
  domainLabel: string;
  src: string;
  alt: string;
}

export function LinkObfuscated({
  userLabel,
  domainLabel,
  src,
  alt,
}: Props) {
  return (
    <div class="mb-1 flex w-fit items-center">
      <img
        class="mr-1 size-3"
        src={src}
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
