import styled from '@emotion/styled';

const Container = styled('div')(({ theme }) => ({
  padding: theme.padding[3]
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

export const CustomerInfo = () => (
  <Container>
    <Title>Recipient</Title>
    <Text>Quido Hoekman</Text>
    <Text>Stationsstraat 85</Text>
    <Text>7311NP Apeldoorn</Text>
  </Container>
);
