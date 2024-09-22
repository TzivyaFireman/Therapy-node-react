import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Container, Typography, List, ListItem, ListItemText, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// צבעים חדשים
const darkBlack = '#121212';
const beige = '#F5F5DC';
const gold = '#FFD700';
const gray = '#444';

// עיצוב מותאם אישית ל-Container
const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(4),
  backgroundColor: darkBlack,
  color: beige,
}));

// עיצוב מותאם אישית ל-Welcome Text
const WelcomeText = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4),
  backgroundColor: darkBlack,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  marginBottom: theme.spacing(4),
}));

// עיצוב מותאם אישית ל-Services Title
const ServicesTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: gold, // צבע זהב לשם השירותים
  fontWeight: 'bold',
  textTransform: 'uppercase',
}));

// עיצוב מותאם אישית ל-List Item
const StyledListItem = styled(ListItem)(({ theme }) => ({
  backgroundColor: gray,
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(1),
  '&:last-child': {
    marginBottom: 0,
  },
  '&:hover': {
    backgroundColor: beige,
  },
}));

// עיצוב מותאם אישית ל-List Item Text
const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  '& .MuiTypography-primary': {
    color: beige,
    fontWeight: 'bold',
  },
  '& .MuiTypography-secondary': {
    color: gold, // צבע זהב לתיאור השירות
    fontStyle: 'italic',
  },
}));

const HomePage: React.FC = () => {
    const services = useSelector((state: RootState) => state.services.services);

    return (
        <StyledContainer>
            <WelcomeText>
                <Typography variant="h2" component="h1" gutterBottom>
                    ברוכים הבאים לבית הספר למוזיקה
                </Typography>
                <Typography variant="h5" component="p">
                    אנו מציעים שיעורי נגינה, הרצאות ועוד. בואו ללמוד לנגן על כלים מגוונים!
                </Typography>
            </WelcomeText>

            <Box>
                <ServicesTitle variant="h4" gutterBottom>
                    השירותים שלנו:
                </ServicesTitle>
                <List>
                    {services.map((service: any) => (
                        <StyledListItem key={service.id}>
                            <StyledListItemText
                                primary={service.name}
                                secondary={`${service.description} - ${service.price} ₪`}
                            />
                        </StyledListItem>
                    ))}
                </List>
            </Box>
        </StyledContainer>
    );
}

export default HomePage;
