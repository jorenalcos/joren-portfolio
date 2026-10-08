import {
  useLayoutEffect,
  type RefObject,
} from 'react'

import { gsap } from '../lib/gsap'

export function useGsap(
  callback: (
    context: gsap.Context
  ) => void,
  scope?: RefObject<HTMLElement | null>,
) {
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      callback(context)
    }, scope)

    return () => {
      context.revert()
    }
  }, [callback, scope])
}