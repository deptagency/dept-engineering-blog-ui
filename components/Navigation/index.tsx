import Link from 'next/link'
import { ReactFragment } from 'react'
import { NavItem } from '@lib/ghost'
import { NavList, NavListItem } from './components'

/**
 * Navigation component
 *
 * The Navigation component takes an array of your Ghost
 * navigation property that is fetched from the settings.
 * It differentiates between absolute (external) and relative link (internal).
 * You can pass it a custom class for your own styles, but it will always fallback
 * to a `site-nav-item` class.
 *
 */

interface NavigationProps {
  data?: NavItem[]
  isRightNav?: boolean
}

export const Navigation = ({ data, isRightNav }: NavigationProps) => {
  const items: ReactFragment[] = []

  data?.map((navItem, i) => {
    if (navItem.url.match(/^\s?http(s?)/gi)) {
      items.push(
        <NavListItem key={i} role="menuitem" isRightNav={isRightNav}>
          <a href={navItem.url} target="_blank" rel="noopener noreferrer">
            {navItem.label}
          </a>
        </NavListItem>
      )
    } else {
      items.push(
        <NavListItem key={i} role="menuitem" isRightNav={isRightNav}>
          <div>
            <Link href={navItem.url} >
              <a>{navItem.label}</a>
            </Link>
          </div>
        </NavListItem>
      )
    }
  })

  return (
    <NavList role="menu" isRightNav={isRightNav}>
      {items}
    </NavList>
  )
}
