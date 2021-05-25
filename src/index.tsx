import { useEffect, useRef } from 'react'
import isEqual from 'fast-deep-equal'

export default (effectFunction: Function, dependencies: any) => {
  const isFirstRender = useRef(true)
  // Hold the value of the dependencies
  const prepDeps = useRef(dependencies)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    const isChangedDeps = dependencies.some(
      (dep: any, index: number) => !isEqual(dep, prepDeps.current[index])
    )
    if (isChangedDeps) {
      effectFunction()
      prepDeps.current = dependencies
    }
  }, dependencies)
}
