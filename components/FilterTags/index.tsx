import Link from 'next/link'
import { Button } from '../Button'
import { FilterLabel, Filters, FilterTagWrapper, StyledTag, StyledX } from './components'

interface FilterTagsProps {
  tags: string[]
  currentTag: string
}

export const FilterTags = ({ currentTag, tags }: FilterTagsProps) => (
  <Filters>
    <FilterLabel>Filter by</FilterLabel>
    <FilterTagWrapper>
      {tags.map((tag, i) => (
        tag.toLowerCase() === currentTag ? (
          <Link href="/" passHref key={currentTag} title="Remove Filter">
            <StyledTag small white selected as="a"> {tag}
              <StyledX>&times;</StyledX>
            </StyledTag>
          </Link>
        ) : (
          <Link href={`/tag/${tag.toLowerCase()}`} key={`${tag}-${i}`} passHref>
            <Button.Tag small white as="a">
              {tag}
            </Button.Tag>
          </Link>
        )
      ))}
    </FilterTagWrapper>
  </Filters>
)
