import { navigate } from "brisa";

import '@/styles/main.css';

export default function Layout({ children }: { children: JSX.Element }) {

  return (
    <html lang="en">
      <head>
        <title id="title">Brisa</title>
        <meta name="theme-color" content="#ad1457" />
        <link rel="shortcut icon" href="/brisa.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body class="overflow-hidden">
        <div class='dots -z-10' />
        <div class='gradient -z-10' />
        <img class='logo-left' src='/logo.svg' />
        <img class='logo-right' src='/brisa.svg' />
        <main class="size-full z-10">
          {children}
        </main>
      </body>
    </html>
  );
}

