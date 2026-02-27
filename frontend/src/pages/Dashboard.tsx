import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Box,
    Container,
    Paper,
    Typography,
    Chip,
    Avatar,
    LinearProgress,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Alert,
    useTheme,
    alpha,
    Card,
    CardContent,
    Divider,
    IconButton,
    Tooltip
} from '@mui/material';
import {
    School as SchoolIcon,
    CheckCircle as CheckIcon,
    Cancel as CancelIcon,
    Settings as SettingsIcon,
    Logout as LogoutIcon,
    Receipt as ReceiptIcon,
    Inventory as InventoryIcon,
    LocalDining as DiningIcon,
    Bed as BedIcon,
    Book as BookIcon,
    TrendingUp as TrendingUpIcon
} from '@mui/icons-material';
import { getClearanceData, setPassword } from '../services/api';

interface ClearanceData {
    student: {
        examNumber: string;
        fullName: string;
        combination: string;
    };
    items: Record<string, { name: string; status: boolean }>;
    subjects: Array<{ letter: string; name: string; paid: boolean }>;
    fees: {
        form5: { amount: number; paid: boolean; paidDate?: string };
        form6: { amount: number; paid: boolean; paidDate?: string };
    };
    clearance: {
        total: number;
        cleared: number;
        percentage: number;
        isFullyCleared: boolean;
    };
}

const Dashboard: React.FC = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [data, setData] = useState<ClearanceData | null>(null);
    const [loading, setLoading] = useState(true);
    const [passwordDialog, setPasswordDialog] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState('');

    const fetchData = useCallback(async () => {
        try {
            const response = await getClearanceData();
            setData(response.data);
            const student = JSON.parse(localStorage.getItem('student') || '{}');
            if (!student.hasPassword) {
                setPasswordDialog(true);
            }
        } catch {
            navigate('/');
        } finally {
            setLoading(false);
        }
    }, [navigate]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('student');
        navigate('/');
    };

    const handleSetPassword = async () => {
        if (newPassword.length < 6) {
            setPasswordError('Password must be at least 6 characters');
            return;
        }
        if (newPassword !== confirmPassword) {
            setPasswordError('Passwords do not match');
            return;
        }

        try {
            await setPassword(newPassword);
            setSuccess('Password set successfully!');
            setTimeout(() => {
                setPasswordDialog(false);
                setSuccess('');
            }, 2000);
            const student = JSON.parse(localStorage.getItem('student') || '{}');
            student.hasPassword = true;
            localStorage.setItem('student', JSON.stringify(student));
        } catch {
            setPasswordError('Failed to set password');
        }
    };

    const getItemIcon = (key: string) => {
        switch(key) {
            case 'softBroom': case 'softBrush': case 'hoe': case 'slasher': case 'bucket':
                return <InventoryIcon />;
            case 'plate': case 'cup': case 'spoon':
                return <DiningIcon />;
            case 'bedSheet': case 'mattress':
                return <BedIcon />;
            case 'rimPapers': case 'schoolFees': case 'seriesContributions':
                return <ReceiptIcon />;
            case 'uniforms':
                return <SchoolIcon />;
            default:
                return <CheckIcon />;
        }
    };

    if (loading) {
        return (
            <Box sx={{ 
                minHeight: '100vh', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }}>
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <SchoolIcon sx={{ fontSize: 80, color: 'white' }} />
                </motion.div>
            </Box>
        );
    }

    if (!data) return null;

    return (
        <Box sx={{ 
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            py: 4
        }}>
            <Container maxWidth="lg">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Paper
                        elevation={3}
                        sx={{
                            p: 3,
                            mb: 4,
                            borderRadius: 4,
                            background: alpha(theme.palette.background.paper, 0.9),
                            backdropFilter: 'blur(10px)'
                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: { xs: 2, md: 0 } }}>
                                <Avatar
                                    sx={{
                                        width: 60,
                                        height: 60,
                                        bgcolor: theme.palette.primary.main,
                                        fontSize: '2rem'
                                    }}
                                >
                                    {data.student.fullName.charAt(0)}
                                </Avatar>
                                <Box>
                                    <Typography variant="h5" fontWeight="bold">
                                        {data.student.fullName}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        {data.student.examNumber} • {data.student.combination}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <Chip
                                    icon={<TrendingUpIcon />}
                                    label={`${data.clearance.percentage}% Cleared`}
                                    color={data.clearance.isFullyCleared ? 'success' : 'warning'}
                                    sx={{ fontSize: '1rem', py: 2 }}
                                />
                                <Tooltip title="Logout">
                                    <IconButton onClick={handleLogout} color="primary">
                                        <LogoutIcon />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Box>

                        <Box sx={{ mt: 2 }}>
                            <LinearProgress
                                variant="determinate"
                                value={data.clearance.percentage}
                                sx={{
                                    height: 10,
                                    borderRadius: 5,
                                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                                    '& .MuiLinearProgress-bar': {
                                        borderRadius: 5,
                                        background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)'
                                    }
                                }}
                            />
                        </Box>
                    </Paper>
                </motion.div>

                {/* Fully Cleared Celebration */}
                {data.clearance.isFullyCleared && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Alert
                            icon={<CheckIcon fontSize="inherit" />}
                            severity="success"
                            sx={{ mb: 3, borderRadius: 3 }}
                        >
                            🎉 Congratulations! You have fully cleared all items and fees!
                        </Alert>
                    </motion.div>
                )}

                {/* Items Grid - Using Box with Flexbox instead of Grid to avoid type issues */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                    {/* Properties */}
                    <Box sx={{ width: { xs: '100%', md: 'calc(50% - 12px)' } }}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Card elevation={3} sx={{ borderRadius: 4 }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <InventoryIcon color="primary" />
                                        School Properties
                                    </Typography>
                                    <Divider sx={{ mb: 2 }} />
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                                        {Object.entries(data.items).map(([key, item], index) => (
                                            <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 8px)' } }} key={key}>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.05 }}
                                                >
                                                    <Paper
                                                        sx={{
                                                            p: 1.5,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: 1,
                                                            bgcolor: item.status 
                                                                ? alpha(theme.palette.success.main, 0.1)
                                                                : alpha(theme.palette.error.main, 0.1),
                                                            border: `1px solid ${
                                                                item.status 
                                                                    ? theme.palette.success.main
                                                                    : theme.palette.error.main
                                                            }`,
                                                            borderRadius: 2
                                                        }}
                                                    >
                                                        <Box sx={{ color: item.status ? 'success.main' : 'error.main' }}>
                                                            {getItemIcon(key)}
                                                        </Box>
                                                        <Typography variant="body2" sx={{ flex: 1 }}>
                                                            {item.name}
                                                        </Typography>
                                                        {item.status ? (
                                                            <CheckIcon sx={{ color: 'success.main', fontSize: 20 }} />
                                                        ) : (
                                                            <CancelIcon sx={{ color: 'error.main', fontSize: 20 }} />
                                                        )}
                                                    </Paper>
                                                </motion.div>
                                            </Box>
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Box>

                    {/* Subjects & Fees */}
                    <Box sx={{ width: { xs: '100%', md: 'calc(50% - 12px)' } }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            {/* Subjects */}
                            <Box sx={{ width: '100%' }}>
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    <Card elevation={3} sx={{ borderRadius: 4 }}>
                                        <CardContent>
                                            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <BookIcon color="primary" />
                                                Subject Payments
                                            </Typography>
                                            <Divider sx={{ mb: 2 }} />
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                                                {data.subjects.map((subject, index) => (
                                                    <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 8px)' } }} key={index}>
                                                        <Paper
                                                            sx={{
                                                                p: 1.5,
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'space-between',
                                                                bgcolor: subject.paid
                                                                    ? alpha(theme.palette.success.main, 0.1)
                                                                    : alpha(theme.palette.error.main, 0.1),
                                                                border: `1px solid ${
                                                                    subject.paid
                                                                        ? theme.palette.success.main
                                                                        : theme.palette.error.main
                                                                }`,
                                                                borderRadius: 2
                                                            }}
                                                        >
                                                            <Typography variant="body2">
                                                                {subject.letter}. {subject.name}
                                                            </Typography>
                                                            {subject.paid ? (
                                                                <CheckIcon sx={{ color: 'success.main', fontSize: 20 }} />
                                                            ) : (
                                                                <CancelIcon sx={{ color: 'error.main', fontSize: 20 }} />
                                                            )}
                                                        </Paper>
                                                    </Box>
                                                ))}
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Box>

                            {/* School Fees */}
                            <Box sx={{ width: '100%' }}>
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    <Card elevation={3} sx={{ borderRadius: 4 }}>
                                        <CardContent>
                                            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <ReceiptIcon color="primary" />
                                                School Fees
                                            </Typography>
                                            <Divider sx={{ mb: 2 }} />
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                                                <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
                                                    <Paper
                                                        sx={{
                                                            p: 2,
                                                            textAlign: 'center',
                                                            bgcolor: data.fees.form5.paid
                                                                ? alpha(theme.palette.success.main, 0.1)
                                                                : alpha(theme.palette.error.main, 0.1),
                                                            border: `1px solid ${
                                                                data.fees.form5.paid
                                                                    ? theme.palette.success.main
                                                                    : theme.palette.error.main
                                                            }`,
                                                            borderRadius: 2
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2">Form 5</Typography>
                                                        <Typography variant="h6">
                                                            {data.fees.form5.amount.toLocaleString()} TZS
                                                        </Typography>
                                                        <Chip
                                                            size="small"
                                                            label={data.fees.form5.paid ? 'Paid' : 'Pending'}
                                                            color={data.fees.form5.paid ? 'success' : 'error'}
                                                            sx={{ mt: 1 }}
                                                        />
                                                    </Paper>
                                                </Box>
                                                <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
                                                    <Paper
                                                        sx={{
                                                            p: 2,
                                                            textAlign: 'center',
                                                            bgcolor: data.fees.form6.paid
                                                                ? alpha(theme.palette.success.main, 0.1)
                                                                : alpha(theme.palette.error.main, 0.1),
                                                            border: `1px solid ${
                                                                data.fees.form6.paid
                                                                    ? theme.palette.success.main
                                                                    : theme.palette.error.main
                                                            }`,
                                                            borderRadius: 2
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2">Form 6</Typography>
                                                        <Typography variant="h6">
                                                            {data.fees.form6.amount.toLocaleString()} TZS
                                                        </Typography>
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
                                </motion.div>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Password Setup Dialog */}
                <Dialog 
                    open={passwordDialog} 
                    onClose={() => {}}
                    disableEscapeKeyDown
                    PaperProps={{
                        sx: {
                            borderRadius: 4,
                            p: 2,
                            minWidth: 400
                        }
                    }}
                >
                    <DialogTitle>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <SettingsIcon color="primary" />
                            <Typography variant="h6">Secure Your Account</Typography>
                        </Box>
                    </DialogTitle>
                    <DialogContent>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                            Set a password to make future logins easier. You'll only need your exam number and password next time.
                        </Typography>
                        
                        {success && (
                            <Alert severity="success" sx={{ mb: 2 }}>
                                {success}
                            </Alert>
                        )}

                        <TextField
                            fullWidth
                            label="New Password"
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            margin="normal"
                            error={!!passwordError}
                            helperText={passwordError}
                        />
                        <TextField
                            fullWidth
                            label="Confirm Password"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            margin="normal"
                        />
                    </DialogContent>
                    <DialogActions sx={{ p: 3 }}>
                        <Button 
                            onClick={handleSetPassword}
                            variant="contained"
                            fullWidth
                            size="large"
                            disabled={!newPassword || !confirmPassword}
                        >
                            Save Password
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </Box>
    );
};

export default Dashboard;