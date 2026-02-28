import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  Box,
  Grid,
  Chip,
  Avatar,
  LinearProgress,
  Button,
  Card,
  CardContent,
  Divider
} from '@mui/material';
import { getClearanceData } from '../services/api';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getClearanceData();
        setData(response.data);
      } catch {
        navigate('/');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  if (!data) return null;

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5', py: 4 }}>
      <Container maxWidth="lg">
        <Paper sx={{ p: 3, mb: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
                {data.student.fullName.charAt(0)}
              </Avatar>
              <Box>
                <Typography variant="h5">{data.student.fullName}</Typography>
                <Typography color="text.secondary">
                  {data.student.examNumber} • {data.student.combination}
                </Typography>
              </Box>
            </Box>
            <Button variant="outlined" onClick={handleLogout}>Logout</Button>
          </Box>
          
          <Box sx={{ mt: 2 }}>
            <LinearProgress 
              variant="determinate" 
              value={data.clearance.percentage} 
              sx={{ height: 10, borderRadius: 5 }}
            />
            <Typography align="center" sx={{ mt: 1 }}>
              {data.clearance.percentage}% Cleared ({data.clearance.cleared}/20 items)
            </Typography>
          </Box>
        </Paper>

        {data.clearance.isFullyCleared && (
          <Paper sx={{ p: 2, mb: 3, bgcolor: 'success.light', color: 'white' }}>
            <Typography align="center">🎉 Fully Cleared! Congratulations!</Typography>
          </Paper>
        )}

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          {/* School Properties */}
          <Box sx={{ width: { xs: '100%', md: 'calc(50% - 12px)' } }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>School Properties</Typography>
                <Divider sx={{ mb: 2 }} />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  {Object.entries(data.items).map(([key, item]: [string, any]) => (
                    <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 8px)' } }} key={key}>
                      <Paper sx={{ 
                        p: 1.5, 
                        bgcolor: item.status ? '#e8f5e8' : '#ffebee',
                        border: `1px solid ${item.status ? '#4caf50' : '#f44336'}`,
                        borderRadius: 2
                      }}>
                        <Typography variant="body2">{item.name}</Typography>
                        <Chip 
                          size="small"
                          label={item.status ? 'Cleared' : 'Pending'}
                          color={item.status ? 'success' : 'error'}
                          sx={{ mt: 1 }}
                        />
                      </Paper>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* Subjects & Fees */}
          <Box sx={{ width: { xs: '100%', md: 'calc(50% - 12px)' } }}>
            {/* Subjects */}
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>Subject Payments</Typography>
                <Divider sx={{ mb: 2 }} />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  {data.subjects.map((subject: any, index: number) => (
                    <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 8px)' } }} key={index}>
                      <Paper sx={{ 
                        p: 1.5, 
                        bgcolor: subject.paid ? '#e8f5e8' : '#ffebee',
                        border: `1px solid ${subject.paid ? '#4caf50' : '#f44336'}`,
                        borderRadius: 2
                      }}>
                        <Typography variant="body2">{subject.letter}. {subject.name}</Typography>
                        <Chip 
                          size="small"
                          label={subject.paid ? 'Paid' : 'Pending'}
                          color={subject.paid ? 'success' : 'error'}
                          sx={{ mt: 1 }}
                        />
                      </Paper>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>

            {/* School Fees */}
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>School Fees</Typography>
                <Divider sx={{ mb: 2 }} />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
                    <Paper sx={{ 
                      p: 2, 
                      textAlign: 'center',
                      bgcolor: data.fees.form5.paid ? '#e8f5e8' : '#ffebee',
                      border: `1px solid ${data.fees.form5.paid ? '#4caf50' : '#f44336'}`,
                      borderRadius: 2
                    }}>
                      <Typography variant="subtitle2">Form 5</Typography>
                      <Typography variant="h6">{data.fees.form5.amount.toLocaleString()} TZS</Typography>
                      <Chip 
                        size="small"
                        label={data.fees.form5.paid ? 'Paid' : 'Pending'}
                        color={data.fees.form5.paid ? 'success' : 'error'}
                        sx={{ mt: 1 }}
                      />
                    </Paper>
                  </Box>
                  <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
                    <Paper sx={{ 
                      p: 2, 
                      textAlign: 'center',
                      bgcolor: data.fees.form6.paid ? '#e8f5e8' : '#ffebee',
                      border: `1px solid ${data.fees.form6.paid ? '#4caf50' : '#f44336'}`,
                      borderRadius: 2
                    }}>
                      <Typography variant="subtitle2">Form 6</Typography>
                      <Typography variant="h6">{data.fees.form6.amount.toLocaleString()} TZS</Typography>
                      <Chip 
                        size="small"
                        label={data.fees.form6.paid ? 'Paid' : 'Pending'}
                        color={data.fees.form6.paid ? 'success' : 'error'}
                        sx={{ mt: 1 }}
                      />
                    </Paper>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Dashboard;