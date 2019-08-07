import styled from '@emotion/styled';

const Container = styled('footer')(({ theme }) => ({
  position: 'absolute',
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  width: theme.width.full,
  flexDirection: 'column',
  justifyContent: 'space-between'
}));

const Text = styled('p')(({ theme }) => ({
  flex: 1,
  textAlign: 'center',
  fontStyle: 'italic'
}));

export const Footer = ({ children }) => (
  <Container id="pageFooter">
    <Text>Afhankelijk van je betalingsvoorkeur wordt de factuur automatisch afgeschreven</Text>
  </Container>
);
