import styled from '@emotion/styled';

const Container = styled('div')(({ theme }) => ({
  padding: theme.padding[3],
  width: theme.width[48]
}));

const Title = styled('p')(({ theme }) => ({
  fontSize: theme.fontSizes.lg,
  fontWeight: theme.fontWeights.bold,
  margin: theme.margin[0]
}));

const Text = styled('p')(({ theme }) => ({
  fontSize: theme.fontSizes.md,
  margin: theme.margin[0]
}));

export const CompanyInfo = () => (
  <Container>
    <Title>Quido Online</Title>
    <Text>Stationsstraat 85</Text>
    <Text>7311NP Apeldoorn</Text>
    <Text>facturen@quido.online</Text>
    <Text>KvK 00000000</Text>
    <Text>BTW NL000000000001</Text>
  </Container>
);
