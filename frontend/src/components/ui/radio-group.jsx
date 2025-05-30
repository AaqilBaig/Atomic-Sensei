import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const RadioGroup = React.forwardRef,
  React.ComponentPropsWithoutRef
>(({ className, ...props }, ref) => {
  return (
    
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef,
  React.ComponentPropsWithoutRef
>(({ className, ...props }, ref) => {
  return (

  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
