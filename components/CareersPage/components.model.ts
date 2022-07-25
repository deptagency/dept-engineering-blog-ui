import React, { ElementType } from 'react'

import { GridProps } from '@components/Grid'
import { BREAKPOINT, spaces } from '@components/common/spaces'
import { Colors } from '@components/common/colors'

export type CareersPageAmountsByBreakpoint = Partial<Record<BREAKPOINT, number>>

export const CareersPagePaddingProfiles: Record<
  string,
  CareersPageAmountsByBreakpoint
> = {
  NONE: {
    xs: spaces.none
  },
  REGULAR: {
    xs: spaces.lg,
    md: spaces.xxl
  },
  MEDIUM: {
    xs: spaces.lg,
    md: spaces.xxxxl
  },
  LARGE: {
    xs: spaces.xl,
    md: spaces.xxxxxl
  }
}

export type CareersPagePaddingProfile = keyof typeof CareersPagePaddingProfiles

export interface CareersPageSplitViewProps {
  innerClassNames?: string
  containerGridProps?: GridProps
  leftGridProps?: GridProps
  rightGridProps?: GridProps
  leftContents?: React.ReactNode
  rightContents?: React.ReactNode
  leftClassNames?: string
  rightClassNames?: string
}

export interface CareersPageWrappedSplitViewProps
  extends CareersPageSplitViewProps {
  wrapperClassNames?: string
  wrapperExtraStyles?: string
  inverted?: boolean
  topPadding?: CareersPagePaddingProfile
  bottomPadding?: CareersPagePaddingProfile
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

export interface CareersPageExpandableSection {
  inverted?: boolean
  color: Colors
  title: string
  contents: React.ReactNode
}

export interface CareersPageExpandableSectionsViewProps {
  leftContents: React.ReactNode
  sections: CareersPageExpandableSection[]
  onExpand: (sectionIndex: number) => void
  moreText: string
}

export interface CareersPageExpandedSectionProps {
  expandedSection: CareersPageExpandableSection | undefined
  closeText: string
  onClose: () => void
}

export const CareersPageHeightProfiles: Record<
  string,
  CareersPageAmountsByBreakpoint
> = {
  REGULAR: {
    xs: 300,
    sm: 400,
    md: 600
  },
  TALL: {
    xs: 400,
    sm: 600,
    md: 700,
    lg: 800
  }
}

export type CareersPageHeightProfile = keyof typeof CareersPageHeightProfiles

export interface CareersPageImageProps {
  src: string
  alt?: string
  quality?: string | number
  priority?: boolean
  heightProfile?: CareersPageHeightProfile
}

export interface CareersPageContactViewProps {
  leftContents: React.ReactNode
  rightContents: React.ReactNode
}
