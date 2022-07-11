import { GhostPostOrPage } from './ghost'

export type CareersPage = GhostPostOrPage

export const defaultCareersPage: GhostPostOrPage = {
  id: 'custom-page-careers',
  slug: 'careers',
  url: '/careers',
  title: 'Careers',
  custom_excerpt: 'TODO - CUSTOM EXCERPT GOES HERE',
  meta_title: 'TODO - META TITLE GOES HERE',
  meta_description: 'TODO - META DESCRIPTION GOES HERE',
  html: ''
}
