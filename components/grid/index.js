import styled from '@emotion/styled';

const Container = styled('section')(({ theme, headingCount }) => ({
  display: 'grid',
  borderCollapse: 'collapse',
  width: 'auto',
  minWidth: theme.width.full,
  gridTemplateColumns: `repeat(${headingCount}, minmax(150px, 1fr))`
}));

const Section = styled('div')(({ theme }) => ({
  display: 'contents'
}));

const Column = styled('div')(({ theme }) => ({
  padding: theme.padding[3],
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'normal',
  fontSize: theme.fontSizes.xs
}));

const Totals = styled('div')(({ theme }) => ({
  marginTop: theme.margin[4],
  gridColumn: '5'
}));

const Head = styled(Column)(({ theme }) => ({
  position: 'sticky',
  top: 0,
  fontSize: theme.fontSizes.lg,
  fontWeight: theme.fontWeights.medium,
  paddingBottom: theme.padding[3]
  // borderBottom: `${theme.borderWidths.sm} solid ${theme.colors.black}`
}));

export const Grid = ({ headings }) => (
  <Container headingCount={headings.length}>
    <Section>
      {headings.map(h => (
        <Head>{h}</Head>
      ))}
    </Section>

    <Section>
      <Column>Lisa</Column>
      <Column>Bonnie</Column>
      <Column>Olaf</Column>
      <Column>Jenn</Column>
      <Column>Debra</Column>
      <Column>Christoph</Column>
      <Column>Tristan</Column>
      <Column>Alfonso</Column>
      <Column>Romaine</Column>
      <Column>Greta</Column>
      <Column>Kenny</Column>
      <Column>Max</Column>
      <Column>Joseph</Column>
      <Column>Juan</Column>
      <Column>Ben</Column>
      <Column>Brown</Column>
      <Column>Ali</Column>
      <Column>Bob</Column>
      <Column>Tristan</Column>
      <Column>Sarah</Column>
    </Section>
    <Totals>
      <Section>
        <Head>Subtotaal</Head>
        <Column>&euro; 5,00</Column>
        <Column>&euro; 1,05 BTW (21%)</Column>
      </Section>
    </Totals>

    <Totals>
      <Section>
        <Head>Totaal</Head>
        <Column>&euro; 6,05</Column>
      </Section>
    </Totals>
  </Container>
);
