import * as React from "react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants,
        destructive,
      },
    },
    defaultVariants,
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps & VariantProps) {
  return (
    
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps) {
  return (
    
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps) {
  return (
    
  )
}

export { Alert, AlertTitle, AlertDescription }

