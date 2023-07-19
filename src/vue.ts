import {
  safeViewTransition as _safeViewTransition,
  ViewTransitionCallback,
  SafeViewTransitionOptions,
} from './safe-view-transition'
import { nextTick } from 'vue'

export type VueSafeViewTransitionOptions = SafeViewTransitionOptions & {
  /**
   * Whether or not to wait for the next tick after handling state updates.
   *
   * @default true
   */
  useNextTick?: boolean
}

function safeViewTransitionReact(
  callback: ViewTransitionCallback,
  {
    useNextTick = true,
    ...passthroughOptions
  }: VueSafeViewTransitionOptions = {}
): void {
  const wrappedCallback = async () => {
    await callback()

    if (useNextTick) {
      await nextTick()
    }
  }

  return _safeViewTransition(wrappedCallback, passthroughOptions)
}

export { safeViewTransitionReact as safeViewTransition }
