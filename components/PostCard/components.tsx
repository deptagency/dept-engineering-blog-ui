import styled from '@emotion/styled';
import { Copy } from '@components/typography/Copy';
import { Button } from '@components/Button';
import { spaces } from '@components/common/spaces';

export const PostExcerpt = styled(Copy.M)`
  line-height: 2.4rem;
`;

export const PostCardTag = styled(Button.Tag)`
  margin-bottom: ${spaces.sm}px;
`;

export const PostCardImageLink = styled.a`
  margin-bottom: ${spaces.md}px;
`;
