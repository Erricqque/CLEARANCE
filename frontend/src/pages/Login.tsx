import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';
import { loginWithLastName, loginWithPassword } from '../services/api';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [method, setMethod] = useState<'lastname' | 'password'>('lastname');
  const [examNumber, setExamNumber] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = method === 'lastname'
        ? await loginWithLastName(examNumber, lastName)
        : await loginWithPassword(examNumber, password);

      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.msg || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <Container maxWidth="sm">
        <Paper sx={{ p: 4, borderRadius: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            MWENGE SECONDARY SCHOOL
          </Typography>
          <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 3 }}>
            Student Clearance Portal
          </Typography>

          <ToggleButtonGroup
            color="primary"
            value={method}
            exclusive
            onChange={(e, value) => value && setMethod(value)}
            fullWidth
            sx={{ mb: 3 }}
          >
            <ToggleButton value="lastname">First Time</ToggleButton>
            <ToggleButton value="password">Returning</ToggleButton>
          </ToggleButtonGroup>

          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Examination Number"
              placeholder="S0334-0971"
              value={examNumber}
              onChange={(e) => setExamNumber(e.target.value.toUpperCase())}
              margin="normal"
              required
            />

            {method === 'lastname' ? (
              <TextField
                fullWidth
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                margin="normal"
                required
              />
            ) : (
              <TextField
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
              />
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={loading}
              sx={{ mt: 3 }}
            >
              {loading ? 'Verifying...' : 'Access Clearance'}
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;