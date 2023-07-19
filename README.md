# safe-view-transition

Use the awesome [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) safely, without needing to worry about whether it's available, or whether the user prefers reduced motion

## Installation

```sh
npm i safe-view-transition
```

## Usage

You can use this _almost_ the same way as [`document.startViewTransition`](https://developer.mozilla.org/en-US/docs/Web/API/Document/startViewTransition):

```ts
import { safeViewTransition } from 'safe-view-transition'

safeViewTransition(
  () => {
    // do the dom changes
  },
  {
    /* options */
  }
)
```

### `options`

- `ignoreMotionPreference`: when `true`, we'll try to do a transition even if the `(prefers-reduced-motion: no-preference)` media query **isn't** matched.

### React

If you're using react, you should use the helper from `safe-view-transition` like so:

```ts
import { safeViewTransition } from 'safe-view-transition/react';

function Component() {
  const updateState = () => {
    safeViewTransition(() => {
      // Update state here
    })
  }

  return ( /* your cool JSX */ )
}

```

> **Warning**  
> This helper uses [`flushSync`](https://react.dev/reference/react-dom/flushSync), to force side effects for state updates (like updating the real DOM) to happen immediately, but it can hurt the performance of your app.

## Examples

- [Vanilla JS](https://stackblitz.com/edit/vitejs-vite-i9dur1?file=main.js)
- [VueJS (3)](https://stackblitz.com/edit/vitejs-vite-8djczd?file=src%2FApp.vue)
- [React](https://stackblitz.com/edit/vitejs-vite-n6qsvz?file=src%2FApp.tsx)
