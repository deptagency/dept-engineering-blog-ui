import Link from 'next/link'

interface FilterTagsProps {
  tags: string[]
  currentTag: string
}

export const FilterTags = ({ currentTag, tags }: FilterTagsProps) => (
  <div className="filter-tags">
    <div className="filter-tags-label">Filter by</div>
    <div className="tags">
      {tags.map((tag, i) =>
        tag.toLowerCase() === currentTag ? (
          <div className="btn btn-small btn-filter-selected" key={currentTag}>
            {tag}{' '}
            <Link href="/">
              <a className="remove-filter-link" title="Remove Filter">
                &times;
              </a>
            </Link>
          </div>
        ) : (
          <Link href={`/tag/${tag.toLowerCase()}`} key={`${tag}-${i}`}>
            <a className="btn btn-white btn-small">{tag}</a>
          </Link>
        )
      )}
    </div>
  </div>
)
