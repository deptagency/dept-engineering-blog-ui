import { ElementType } from 'react'

import { GridProps } from '@components/Grid'

export interface CareersPageSplitViewProps {
  inverted?: boolean
  extraTopPadding?: boolean
  extraBottomPadding?: boolean
  leftGridProps?: GridProps
  leftContents?: React.ReactNode
  rightContents?: React.ReactNode
}

export interface CareersPageHeadingProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: ElementType<any>
  children: React.ReactNode
  inverted?: boolean
}
export interface CareersPageSubheadingsProps extends CareersPageHeadingProps {
  children: React.ReactNode | React.ReactNode[]
}

export enum CareersPageImageHeight {
  REGULAR = 600,
  TALL = 800
}

export interface CareersPageImageProps {
  src: string
  alt?: string
  quality?: string | number
  height?: CareersPageImageHeight
}
