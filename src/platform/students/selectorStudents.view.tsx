import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { StudentInfo } from '../../shared/models/StudentInfo';
import StudentCard from './studentCard';

interface SelectorStudentsViewProps {
  onClick: (student: StudentInfo) => void;
  students: StudentInfo[];
}

const SelectorStudentsView = (props: SelectorStudentsViewProps): React.ReactElement => {
  const { students, onClick } = props;

  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: '100%',
        pb: 2,
      }}
    >
      <Box sx={{ textAlign: 'left', mt: '1rem', mb: '1rem' }}>
        <Typography variant="h4">Listado de Estudiantes</Typography>
      </Box>
      <Grid container spacing={2}>
        {students.map((student) => (
          <Grid key={student.id} xs={12} md={6} lg={6} item>
            <StudentCard studentInfo={student} onClick={onClick} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SelectorStudentsView;
