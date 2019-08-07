import styled from '@emotion/styled';

import { Grid } from './grid';
import { Header } from './header';

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.padding[10],
  backgroundColor: theme.colors.white
}));

const Article = () => (
  <Container>
    <Header />
    <Grid headings={['Item', 'Type', 'Datum', 'Aantal', 'Prijs']} />
  </Container>
);

export default Article;
