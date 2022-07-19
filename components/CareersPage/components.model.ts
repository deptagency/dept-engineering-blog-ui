import { ElementType } from 'react'

import { GridProps } from '@components/Grid'
import { BREAKPOINT } from '@components/common/spaces'

export interface CareersPageSplitViewProps {
  inverted?: boolean
  extraTopPadding?: boolean
  extraBottomPadding?: boolean
  additionalWrapperStyles?: string
  containerGridProps?: GridProps
  leftGridProps?: GridProps
  rightGridProps?: GridProps
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

export type CareersPageHeightProfile = Partial<Record<BREAKPOINT, number>>

export const CareersPageHeightProfiles: Record<
  string,
  CareersPageHeightProfile
> = {
  REGULAR: {
    xs: 300,
    sm: 450,
    md: 600
  },
  TALL: {
    xs: 400,
    sm: 600,
    md: 700,
    lg: 800
  }
}

export interface CareersPageImageProps {
  src: string
  alt?: string
  quality?: string | number
  heightProfile?: keyof typeof CareersPageHeightProfiles
}

export interface CareersPageContactViewProps {
  leftContents?: React.ReactNode
  rightContents?: React.ReactNode
}
