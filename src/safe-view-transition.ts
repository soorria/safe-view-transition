// This chunk of code stops of the transition from happening if the user
// doesn't want it
const motionSafeMediaQuery = window.matchMedia(
  '(prefers-reduced-motion: no-preference)'
)
let motionSafe = motionSafeMediaQuery.matches
motionSafeMediaQuery.onchange = () => {
  motionSafe = motionSafeMediaQuery.matches
}

export type ViewTransitionCallback = () => void | Promise<void>
export type StartViewTransitionFn = (callback: ViewTransitionCallback) => void

type ObjectWithStartViewTransition = {
  startViewTransition: StartViewTransitionFn
}

export function safeViewTransition(
  callback: ViewTransitionCallback,
  opts: {
    /**
     * Should we ignore the user's motion preference and always try to run the
     * transition?
     */
    ignoreMotionPreference?: boolean
  } = {}
): void {
  const isMotionOk = motionSafe || opts.ignoreMotionPreference

  if (
    isMotionOk &&
    typeof document !== 'undefined' &&
    'startViewTransition' in document
  ) {
    // Needed until TypeScript catches up
    const doc = document as ObjectWithStartViewTransition
    doc.startViewTransition(callback)
  } else {
    callback()
  }
}
