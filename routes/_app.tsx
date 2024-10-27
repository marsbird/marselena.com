import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="software engineer based in lenapehoking, building open-source tools for local community"
        />
        <title>marselena sequoia</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <main class="flex h-dvh items-center justify-center bg-[url('images/leaves.jpg')] bg-cover font-satoshi text-light">
          <Component />
        </main>
      </body>
    </html>
  );
}
