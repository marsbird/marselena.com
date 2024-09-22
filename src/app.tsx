import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense } from 'solid-js';
import './app.css';

export default function App() {
  return (
    <Router
      root={(props) => (
        <main class='flex h-dvh items-center justify-center bg-light font-satoshi text-dark dark:bg-dark dark:text-light'>
          <Suspense>{props.children}</Suspense>
        </main>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
