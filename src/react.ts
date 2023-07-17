import {
  safeViewTransition as _safeViewTransition,
  ViewTransitionCallback,
  SafeViewTransitionOptions,
} from './safe-view-transition'
import { flushSync } from 'react-dom'

function safeViewTransitionReact(
  callback: ViewTransitionCallback,
  options: SafeViewTransitionOptions = {}
): void {
  const wrappedCallback = () => flushSync(() => callback())
  return _safeViewTransition(wrappedCallback, options)
}

export { safeViewTransitionReact as safeViewTransition }
