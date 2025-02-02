import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { useCollapsibleContext } from '../collapsible'
import { ark, type HTMLArkProps } from '../factory'
import { useAccordionContext } from './accordion-context'
import { useAccordionItemContext } from './accordion-item-context'

export interface AccordionItemTriggerProps extends HTMLArkProps<'button'> {}

export const AccordionItemTrigger = forwardRef<HTMLButtonElement, AccordionItemTriggerProps>(
  (props, ref) => {
    const api = useAccordionContext()
    const collapsible = useCollapsibleContext()
    const accordionItem = useAccordionItemContext()
    const triggerProps = api.getItemTriggerProps(accordionItem)
    const mergedProps = mergeProps(
      {
        ...triggerProps,
        'aria-controls': collapsible.isUnmounted ? undefined : triggerProps['aria-controls'],
      },
      props,
    )

    return <ark.button {...mergedProps} ref={ref} />
  },
)

AccordionItemTrigger.displayName = 'AccordionItemTrigger'
