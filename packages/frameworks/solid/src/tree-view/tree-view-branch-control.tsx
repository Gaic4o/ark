import { mergeProps } from '@zag-js/solid'
import { ark, type ArkComponent, type HTMLArkProps } from '../factory'
import { useTreeViewBranchContext } from './tree-view-branch-context'
import { useTreeViewContext } from './tree-view-context'

export interface TreeViewBranchControlProps extends HTMLArkProps<'div'> {}

export const TreeViewBranchControl: ArkComponent<'div'> = (props: TreeViewBranchControlProps) => {
  const api = useTreeViewContext()
  const branchProps = useTreeViewBranchContext()
  const mergedProps = mergeProps(() => api().getBranchControlProps(branchProps), props)

  return <ark.div {...mergedProps} />
}
