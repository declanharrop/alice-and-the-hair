import Link from 'next/link';
import styled from 'styled-components';

const PostTileStyles = styled.div`
  width: 29vw;
  max-width: 330px;
  height: 29vw;
  max-height: 330px;
  padding: 1px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(0.95);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
  @media screen and (max-width: 560px) {
    width: 33vw;
    height: 33vw;
  }
`;

export default function PostTile({ data }) {
  return (
    <Link href={`/stories/${data.slug}`}>
      <PostTileStyles>
        <img src={data.hero.url} alt={data.title} />
      </PostTileStyles>
    </Link>
  );
}
