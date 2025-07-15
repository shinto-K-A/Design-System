import React from 'react'
import type { Props } from './type'
export function Typography({ className, text, tag, children,style }: Props) { 
  return (
   React.createElement(tag,{className: className,style :style},<>{text}, {children}</>)
  )
}
