const db = require('../models/Student');

exports.getClearanceData = async (req, res) => {
    try {
        const student = await db.findOneAsync({ _id: req.user.id });
        if (!student) return res.status(404).json({ msg: 'Student not found' });

        const items = {
            softBroom: { name: 'Soft Broom', status: student.softBroom },
            softBrush: { name: 'Soft Brush', status: student.softBrush },
            hoe: { name: 'Hoe', status: student.hoe },
            slasher: { name: 'Slasher', status: student.slasher },
            bucket: { name: 'Bucket', status: student.bucket },
            plate: { name: 'Plate', status: student.plate },
            cup: { name: 'Cup', status: student.cup },
            spoon: { name: 'Spoon', status: student.spoon },
            bedSheet: { name: 'Bed Sheet', status: student.bedSheet },
            mattress: { name: 'Mattress', status: student.mattress },
            rimPapers: { name: 'Rim Papers', status: student.rimPapers },
            schoolFees: { name: 'School Fees', status: student.schoolFees },
            seriesContributions: { name: 'Series Contributions', status: student.seriesContributions },
            uniforms: { name: 'Uniforms', status: student.uniforms }
        };

        const clearedCount = Object.values(items).filter(i => i.status).length +
            (student.subjects?.filter(s => s.paid).length || 0) +
            (student.fees?.form5?.paid ? 1 : 0) +
            (student.fees?.form6?.paid ? 1 : 0);

        const totalItems = 20;
        const percentage = Math.round((clearedCount / totalItems) * 100);

        res.json({
            student: {
                examNumber: student.examNumber,
                fullName: student.fullName,
                combination: student.combination
            },
            items,
            subjects: student.subjects,
            fees: student.fees,
            clearance: {
                total: totalItems,
                cleared: clearedCount,
                percentage,
                isFullyCleared: clearedCount === totalItems
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.getDashboardStats = async (req, res) => {
    try {
        const all = await db.findAsync({});
        const total = all.length;
        const fullyCleared = all.filter(s => {
            const items = [s.softBroom, s.softBrush, s.hoe, s.slasher, s.bucket, s.plate, s.cup, s.spoon, s.bedSheet, s.mattress, s.rimPapers, s.schoolFees, s.seriesContributions, s.uniforms];
            const subjectsPaid = s.subjects?.filter(sub => sub.paid).length || 0;
            const feesPaid = (s.fees?.form5?.paid ? 1 : 0) + (s.fees?.form6?.paid ? 1 : 0);
            return (items.filter(Boolean).length + subjectsPaid + feesPaid) === 20;
        }).length;
        const partiallyCleared = total - fullyCleared;

        const comboMap = {};
        all.forEach(s => {
            if (!comboMap[s.combination]) comboMap[s.combination] = { count: 0, totalPercent: 0 };
            comboMap[s.combination].count++;
            const items = [s.softBroom, s.softBrush, s.hoe, s.slasher, s.bucket, s.plate, s.cup, s.spoon, s.bedSheet, s.mattress, s.rimPapers, s.schoolFees, s.seriesContributions, s.uniforms];
            const subjectsPaid = s.subjects?.filter(sub => sub.paid).length || 0;
            const feesPaid = (s.fees?.form5?.paid ? 1 : 0) + (s.fees?.form6?.paid ? 1 : 0);
            const cleared = items.filter(Boolean).length + subjectsPaid + feesPaid;
            const percent = Math.round((cleared / 20) * 100);
            comboMap[s.combination].totalPercent += percent;
        });

        const combinations = Object.entries(comboMap).map(([name, data]) => ({
            _id: name,
            count: data.count,
            avgClearance: Math.round(data.totalPercent / data.count)
        }));

        res.json({ total, fullyCleared, partiallyCleared, combinations });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};