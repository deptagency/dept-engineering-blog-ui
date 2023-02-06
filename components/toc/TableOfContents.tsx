import Link from 'next/link'
import { useEffect, useState } from 'react'

import { IToC } from '@lib/toc'
import { get, getLang } from '@utils/use-lang'

import { useActiveHash } from '@components/effects/UseActiveHash'

const getHeadingIds = (
  toc: IToC[],
  maxDepth: number,
  recursionDepth = 1,
  traverseFullDepth = true
): string[] => {
  const idList = []

  if (toc) {
    for (const item of toc) {
      item.id && idList.push(item.id)

      if (item.items && traverseFullDepth && recursionDepth < (maxDepth || 6)) {
        idList.push(
          ...getHeadingIds(item.items, maxDepth, recursionDepth + 1, true)
        )
      }
    }
  }
  return idList
}

const isUnderDepthLimit = (depth: number, maxDepth: number) =>
  maxDepth === null ? true : depth < maxDepth

const createItems = (
  toc: IToC[],
  url: string,
  depth: number,
  maxDepth: number,
  activeHash: string,
  isDesktop: boolean
) =>
  toc.map((head, index) => {
    const isActive = isDesktop && head.id === `${activeHash}`
    return (
      <li key={`${url}#${head.id}-${depth}-${index}`}>
        {head.id && (
          <Link
            href={`${url}#${head.id}`}
            className={isActive ? 'link active' : 'link'}
          >
            {head.heading}
          </Link>
        )}
        {head.items && isUnderDepthLimit(depth, maxDepth) && (
          <ul className="sub">
            {createItems(
              head.items,
              url,
              depth + 1,
              maxDepth,
              activeHash,
              isDesktop
            )}
          </ul>
        )}
      </li>
    )
  })

interface TableOfContentsProps {
  toc: IToC[]
  url: string
  maxDepth?: number
  lang?: string
}

export const TableOfContents = ({
  toc,
  url,
  maxDepth = 2,
  lang
}: TableOfContentsProps) => {
  const text = get(getLang(lang))

  const [isDesktop, setIsDesktop] = useState(false)
  const activeHash = useActiveHash(getHeadingIds(toc, maxDepth, 1, true))

  useEffect(() => {
    const isDesktopQuery = window.matchMedia(`(min-width: 1170px)`)
    setIsDesktop(isDesktopQuery.matches)

    const updateIsDesktop = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    isDesktopQuery.addListener(updateIsDesktop)
    return () => isDesktopQuery.removeListener(updateIsDesktop)
  }, [])

  return (
    <>
      {toc.length > 0 ? (
        <aside className="toc">
          <nav>
            <h2>{text(`TABLE_OF_CONTENTS`)}</h2>
            <ul className="list">
              {createItems(toc, url, 1, maxDepth, activeHash, isDesktop)}
            </ul>
          </nav>
        </aside>
      ) : null}
    </>
  )
}
