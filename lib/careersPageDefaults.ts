import { GhostPostOrPage } from './ghost'

export type CareersPage = GhostPostOrPage

export const defaultCareersPage: GhostPostOrPage = {
  id: 'custom-page-careers',
  slug: 'careers',
  url: '/careers',
  title: 'Careers',
  html: ''
}
