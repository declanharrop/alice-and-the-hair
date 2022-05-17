import styled from 'styled-components';

export default function TextSection({
  title,
  subtitle,
  sectionTitle,
  margin = '10vh auto',
  texts = [],
}) {
  return (
    <Wrapper
      style={{
        margin: `${margin}`,
      }}
    >
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {(title || subtitle) && <Divider />}
      {sectionTitle && <SectionTitle>{sectionTitle}</SectionTitle>}
      {texts && (
        <>
          {texts.map((text, i) => (
            <Text key={i}>{text}</Text>
          ))}
        </>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  max-width: 1000px;
  padding: 0 20px;
`;

const Title = styled.h1`
  line-height: 1.4;
  margin: 0 0 50px 0;
`;

const Subtitle = styled.h3`
  line-height: 1.4;
  margin: 100px 0 0 0;
  color: var(--blue);
`;

const SectionTitle = styled.h3`
  color: var(--blue);
`;

const Divider = styled.div`
  width: 200px;
  margin: 20px auto 30px auto;
  height: 1px;
  background: var(--blue);
`;

const Text = styled.p`
  margin: 10px 0;
  color: var(--grey);
`;
