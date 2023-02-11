import * as React from 'react'
import { cn } from '@/utils'

export type TextType = typeof Text & {
  H1: typeof H1
  H2: typeof H2
  H3: typeof H3
  H4: typeof H4
  Blockquote: typeof Blockquote
  InlineCode: typeof InlineCode
  Lead: typeof Lead
  Large: typeof Large
  Small: typeof Small
  Subtle: typeof Subtle
}

const Text = ({ className, ...props }: React.ComponentProps<'p'>) => (
  <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...props} />
)
Text.displayName = 'Text'

const H1 = ({ className, ...props }: React.ComponentProps<'h1'>) => (
  <h1
    className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)}
    {...props}
  />
)
H1.displayName = 'H1'
;(Text as TextType).H1 = H1

const H2 = ({ className, ...props }: React.ComponentProps<'h2'>) => (
  <h2
    className={cn(
      'mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
      className,
    )}
    {...props}
  />
)
H2.displayName = 'H2'
;(Text as TextType).H2 = H2

const H3 = ({ className, ...props }: React.ComponentProps<'h3'>) => (
  <h3
    className={cn('mt-8 scroll-m-20 text-2xl font-semibold tracking-tight', className)}
    {...props}
  />
)
H3.displayName = 'H3'
;(Text as TextType).H3 = H3

const H4 = ({ className, ...props }: React.ComponentProps<'h4'>) => (
  <h4
    className={cn('mt-8 scroll-m-20 text-xl font-semibold tracking-tight', className)}
    {...props}
  />
)
H4.displayName = 'H4'
;(Text as TextType).H4 = H4

const Blockquote = ({ className, ...props }: React.ComponentProps<'blockquote'>) => (
  <blockquote
    className={cn(
      'mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 dark:border-slate-600 dark:text-slate-200',
      className,
    )}
    {...props}
  />
)
Blockquote.displayName = 'Blockquote'
;(Text as TextType).Blockquote = Blockquote

const InlineCode = ({ className, ...props }: React.ComponentProps<'code'>) => (
  <code
    className={cn(
      'relative rounded bg-slate-100 py-[0.2rem] px-[0.3rem] font-mono text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400',
      className,
    )}
    {...props}
  />
)
InlineCode.displayName = 'InlineCode'
;(Text as TextType).InlineCode = InlineCode

const Lead = ({ className, ...props }: React.ComponentProps<'p'>) => (
  <p className={cn('text-xl text-slate-700 dark:text-slate-400', className)} {...props} />
)
Lead.displayName = 'Lead'
;(Text as TextType).Lead = Lead

const Large = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    className={cn('text-lg font-semibold text-slate-900 dark:text-slate-50', className)}
    {...props}
  />
)
Large.displayName = 'Large'
;(Text as TextType).Large = Large

const Small = ({ className, ...props }: React.ComponentProps<'small'>) => (
  <small className={cn('text-sm font-medium leading-none', className)} {...props} />
)
Small.displayName = 'Small'
;(Text as TextType).Small = Small

const Subtle = ({ className, ...props }: React.ComponentProps<'p'>) => (
  <p className={cn('text-sm text-slate-500 dark:text-slate-400', className)} {...props} />
)
Subtle.displayName = 'Subtle'
;(Text as TextType).Subtle = Subtle

export default Text as TextType
