import styled from '@emotion/styled';

const Container = styled('div')(({ theme }) => ({
  padding: theme.padding[3],
  width: theme.width[48]
}));

const Title = styled('p')(({ theme }) => ({
  fontSize: theme.fontSizes.xl,
  fontWeight: theme.fontWeights.bold,
  margin: theme.margin[0]
}));

const Text = styled('p')(({ theme }) => ({
  fontSize: theme.fontSizes.md,
  fontWeight: theme.fontWeights.semibold,

  margin: theme.margin[0]
}));

export const Details = () => (
  <Container>
    <Title>INVOICE</Title>
    <Text>Invoice Number: 1500</Text>
  </Container>
);
