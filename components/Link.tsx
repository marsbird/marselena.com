interface Props {
  label: string;
  href: string;
  src: string;
  alt: string;
}

export function Link({
  label,
  href,
  src,
  alt,
}: Props) {
  return (
    <a class="mb-1 flex w-fit items-center" href={href}>
      <img
        class="mr-1 size-3"
        src={src}
        alt={alt}
      />
      <p class="text-xs font-light">{label}</p>
    </a>
  );
}
