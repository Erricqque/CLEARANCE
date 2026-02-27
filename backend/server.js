// Polyfill for Node.js v24+ compatibility with NeDB
const util = require('util');
if (!util.isDate) util.isDate = function (v) { return v instanceof Date; };
if (!util.isArray) util.isArray = Array.isArray;
if (!util.isRegExp) util.isRegExp = function (v) { return v instanceof RegExp; };
if (!util.isError) util.isError = function (v) { return v instanceof Error; };

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

// Middleware
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

// Auth middleware
const auth = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ msg: 'No token' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.student;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Invalid token' });
    }
};

// Import controllers
const authController = require('./controllers/authController');
const studentController = require('./controllers/studentController');

// Routes
app.post('/api/auth/login-lastname', authController.loginWithLastName);
app.post('/api/auth/login-password', authController.loginWithPassword);
app.post('/api/auth/set-password', auth, authController.setPassword);
app.get('/api/student/clearance', auth, studentController.getClearanceData);
app.get('/api/stats/dashboard', studentController.getDashboardStats);

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'OK', time: new Date().toISOString() });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});