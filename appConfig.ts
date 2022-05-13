/**
 * Some of the defaults defined here can be overwritten by environment variables
 * Check lib/environments.ts
 */

// Cache control
export const fileCache: boolean = true

// Google analytics tracking ID (now called measurement ID in version 4)
export const gaMeasurementId: string = 'UA-76046545-1'

// Images
export const nextFeatureImages: boolean = true
export const nextInlineImages: boolean = true
export const imageQuality: number = 80
export const sourceImages: boolean = false

// RSS
export const rssFeed: boolean = true

// Ghost Member Subscriptions
export const memberSubscriptions: boolean = true

// Commenting system
export type CommentingSystem = 'commento' | 'disqus' | null
export const commenting: CommentingSystem = null

export const commentoUrl = 'https://cdn.commento.io' // 'https://commento.your-blog.com'
export const disqusShortname = 'short-name-here'

// PrismJS
export const prism: boolean = true
export const prismIgnoreMissing: boolean = true

// Table of Contents
export const toc: boolean = true
export const maxDepth: number = 2

// Custom site navigation (default: [], label is case sensitive)
// Override: [{ label: 'Home', url: '/' }]
// Add new: [{ label: 'Contact', url: '/contact' }]
import { NavItem } from '@lib/ghost'
export const customNavigation: NavItem[] = []

// Incremental Static Regenerations (ISR)
// Note: must be disbaled, when using `next export`
export const isr: boolean = false
export const revalidate: number = 10
export const maxNumberOfPosts: number = 20
export const maxNumberOfPages: number = 20

// Custom slugs to be excluded from static generation
export const customSlugs: string[] = []
