/**
 * Some of the defaults defined here can be overwritten by environment variables
 * Check lib/environments.ts
 */

// Cache control
export const fileCache = true

// Google analytics tracking ID (now called measurement ID in version 4)
export const gaMeasurementId = 'UA-76046545-1'

// Images
export const nextFeatureImages = true
export const nextInlineImages = true
export const imageQuality = 80
export const sourceImages = false

// RSS
export const rssFeed = true

// Ghost Member Subscriptions
export const memberSubscriptions = true

// Commenting system
export type CommentingSystem = 'commento' | 'disqus' | null
export const commenting: CommentingSystem = null

export const commentoUrl = 'https://cdn.commento.io' // 'https://commento.your-blog.com'
export const disqusShortname = 'short-name-here'

// PrismJS
export const prism = true
export const prismIgnoreMissing = true

// Table of Contents
export const toc = true
export const maxDepth = 2

// Custom site navigation (default: [], label is case sensitive)
// Override: [{ label: 'Home', url: '/' }]
// Add new: [{ label: 'Contact', url: '/contact' }]
import { NavItem } from '@lib/ghost'
export const customNavigation: NavItem[] = []

// Incremental Static Regenerations (ISR)
// Note: must be disbaled, when using `next export`
export const isr = false
export const revalidate = 10
export const maxNumberOfPosts = 20
export const maxNumberOfPages = 20

// Custom slugs to be excluded from static generation
export const customSlugs: string[] = []
