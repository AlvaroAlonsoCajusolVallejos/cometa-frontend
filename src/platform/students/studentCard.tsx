import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { StudentInfo } from '../../shared/models/StudentInfo';

interface StudentCardProps {
  studentInfo: StudentInfo;
  onClick: (student: StudentInfo) => void;
}

const StudentCard = (props: StudentCardProps): React.ReactElement => {
  const { studentInfo, onClick } = props;

  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        height: '170px',
        backgroundImage: `url(${studentInfo.school.logo})`,
      }}
    >
      <CardActionArea sx={{ height: '100%' }} onClick={() => onClick(studentInfo)}>
        <CardContent sx={{ verticalAlign: 'top', height: '100%' }}>
          <Typography gutterBottom variant="h4" sx={{ verticalAlign: 'top', textAlign: 'left' }}>
            Nombres: {studentInfo.first_name} {studentInfo.last_name}
          </Typography>
          <Typography gutterBottom variant="h5" sx={{ verticalAlign: 'top', textAlign: 'left' }}>
            Grado: {studentInfo.cohort}
          </Typography>
          <Typography gutterBottom variant="h5" sx={{ verticalAlign: 'top', textAlign: 'left' }}>
            Colegio: {studentInfo.school.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default StudentCard;
