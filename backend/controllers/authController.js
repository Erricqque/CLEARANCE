const db = require('../models/Student');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.loginWithLastName = async (req, res) => {
    try {
        const { examNumber, lastName } = req.body;
        const student = await db.findOneAsync({ examNumber: examNumber.toUpperCase() });
        
        if (!student) return res.status(404).json({ msg: 'Student not found' });
        if (student.lastName.toLowerCase() !== lastName.toLowerCase())
            return res.status(401).json({ msg: 'Last name does not match' });

        const payload = { student: { id: student._id, examNumber: student.examNumber } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        await db.updateAsync({ _id: student._id }, { $set: { lastLogin: new Date() } });

        res.json({
            token,
            student: {
                id: student._id,
                examNumber: student.examNumber,
                fullName: student.fullName,
                combination: student.combination,
                hasPassword: student.hasPassword || false,
                clearancePercentage: student.clearancePercentage || 0,
                isFullyCleared: student.clearedItems === 20
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.loginWithPassword = async (req, res) => {
    try {
        const { examNumber, password } = req.body;
        const student = await db.findOneAsync({ examNumber: examNumber.toUpperCase() });
        if (!student) return res.status(404).json({ msg: 'Student not found' });
        if (!student.hasPassword) return res.status(400).json({ msg: 'Password not set. Use last name login first.' });

        const isMatch = await bcrypt.compare(password, student.password);
        if (!isMatch) return res.status(401).json({ msg: 'Invalid password' });

        const payload = { student: { id: student._id, examNumber: student.examNumber } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        await db.updateAsync({ _id: student._id }, { $set: { lastLogin: new Date() } });

        res.json({
            token,
            student: {
                id: student._id,
                examNumber: student.examNumber,
                fullName: student.fullName,
                combination: student.combination,
                hasPassword: true,
                clearancePercentage: student.clearancePercentage || 0,
                isFullyCleared: student.clearedItems === 20
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.setPassword = async (req, res) => {
    try {
        const { password } = req.body;
        const studentId = req.user.id;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        await db.updateAsync({ _id: studentId }, { $set: { password: hashedPassword, hasPassword: true } });
        res.json({ msg: 'Password set successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};