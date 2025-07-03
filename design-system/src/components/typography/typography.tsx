import React from 'react'
import type { Props } from './type'
export function Typography({ text, tag }: Props) { 
  return (
   React.createElement(tag,{},text)
  )
}
