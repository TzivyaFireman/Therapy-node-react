import React from 'react';
import { Typography, Box } from '@mui/material';
const HomePage: React.FC = () => {
  return (
    <>
        <Box
          sx={{
            width: '50%',
            textAlign: 'center',
            margin: '0 auto',
            marginTop: '100px'
          }}
        >
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
            אודות המטפל
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: '1.75', marginBottom: '2rem' }}>
            ישראל פיירמן הוא מטפל רגשי בעל ניסיון רב בתחום. הוא מספק טיפול מקצועי ומותאם אישית, הממוקד בצרכים האישיים של כל לקוח. עם רקע עשיר בתחומי טיפול שונים, ישראל מציע מגוון שירותים הכוללים טיפולים פרטניים, קבוצתיים, וסדנאות. גישתו המקצועית והשיטתית מבוססת על הבנת צורכי המטופל והענקת כלים מעשיים להתמודדות עם אתגרים רגשיים.
          </Typography>
        </Box>
    </>


  );
}

export default HomePage;
