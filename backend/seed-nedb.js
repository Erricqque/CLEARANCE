// Polyfill for Node.js >=24 compatibility with NeDB
const util = require('util');
if (!util.isDate) {
    util.isDate = function (v) { return v instanceof Date; };
}
if (!util.isArray) {
    util.isArray = Array.isArray;
}

const db = require('./models/Student');

const students = [
    // S0334-0971 - ABBUBBAKAR AMIN ADAMN - PMC
    {
        examNumber: "S0334-0971",
        fullName: "ABBUBBAKAR AMIN ADAMN",
        firstName: "ABBUBBAKAR",
        middleName: "AMIN",
        lastName: "ADAMN",
        combination: "PMC",
        softBroom: true,
        softBrush: false,
        hoe: true,
        slasher: true,
        bucket: false,
        plate: true,
        cup: true,
        spoon: true,
        bedSheet: false,
        mattress: true,
        rimPapers: false,
        schoolFees: false,
        seriesContributions: true,
        uniforms: true,
        subjects: [
            { letter: "A", name: "Physics", paid: true },
            { letter: "B", name: "Mathematics", paid: false },
            { letter: "C", name: "Computer Science", paid: true },
            { letter: "D", name: "General Studies", paid: true }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-01-15' },
            form6: { amount: 950000, paid: false }
        }
    },
    // S0334-0972 - BARAKA MSEI THADEI - PMC
    {
        examNumber: "S0334-0972",
        fullName: "BARAKA MSEI THADEI",
        firstName: "BARAKA",
        middleName: "MSEI",
        lastName: "THADEI",
        combination: "PMC",
        softBroom: true,
        softBrush: true,
        hoe: true,
        slasher: false,
        bucket: true,
        plate: true,
        cup: false,
        spoon: true,
        bedSheet: true,
        mattress: true,
        rimPapers: false,
        schoolFees: true,
        seriesContributions: false,
        uniforms: true,
        subjects: [
            { letter: "E", name: "Physics", paid: true },
            { letter: "F", name: "Mathematics", paid: true },
            { letter: "G", name: "Computer Science", paid: false },
            { letter: "H", name: "General Studies", paid: true }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-01-20' },
            form6: { amount: 950000, paid: true, paidDate: '2024-08-10' }
        }
    },
    // S0334-0973 - DANIEL MARTIN KASIGU - PMC
    {
        examNumber: "S0334-0973",
        fullName: "DANIEL MARTIN KASIGU",
        firstName: "DANIEL",
        middleName: "MARTIN",
        lastName: "KASIGU",
        combination: "PMC",
        softBroom: true,
        softBrush: true,
        hoe: false,
        slasher: true,
        bucket: true,
        plate: true,
        cup: true,
        spoon: true,
        bedSheet: false,
        mattress: false,
        rimPapers: true,
        schoolFees: true,
        seriesContributions: true,
        uniforms: false,
        subjects: [
            { letter: "I", name: "Physics", paid: true },
            { letter: "J", name: "Mathematics", paid: true },
            { letter: "K", name: "Computer Science", paid: true },
            { letter: "L", name: "General Studies", paid: false }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-02-05' },
            form6: { amount: 950000, paid: false }
        }
    },
    // S0334-0974 - EDWIN SAMWEL PASCAL - PMC
    {
        examNumber: "S0334-0974",
        fullName: "EDWIN SAMWEL PASCAL",
        firstName: "EDWIN",
        middleName: "SAMWEL",
        lastName: "PASCAL",
        combination: "PMC",
        softBroom: true,
        softBrush: false,
        hoe: true,
        slasher: true,
        bucket: false,
        plate: true,
        cup: true,
        spoon: false,
        bedSheet: true,
        mattress: true,
        rimPapers: true,
        schoolFees: false,
        seriesContributions: true,
        uniforms: true,
        subjects: [
            { letter: "M", name: "Physics", paid: true },
            { letter: "N", name: "Mathematics", paid: false },
            { letter: "O", name: "Computer Science", paid: true },
            { letter: "P", name: "General Studies", paid: true }
        ],
        fees: {
            form5: { amount: 800000, paid: false },
            form6: { amount: 950000, paid: false }
        }
    },
    // S0334-0975 - ELISHA BOAZ MAGEMBE - PCM
    {
        examNumber: "S0334-0975",
        fullName: "ELISHA BOAZ MAGEMBE",
        firstName: "ELISHA",
        middleName: "BOAZ",
        lastName: "MAGEMBE",
        combination: "PCM",
        softBroom: true,
        softBrush: true,
        hoe: true,
        slasher: false,
        bucket: true,
        plate: true,
        cup: true,
        spoon: true,
        bedSheet: true,
        mattress: true,
        rimPapers: false,
        schoolFees: true,
        seriesContributions: true,
        uniforms: true,
        subjects: [
            { letter: "Q", name: "Physics", paid: true },
            { letter: "R", name: "Chemistry", paid: true },
            { letter: "S", name: "Mathematics", paid: true },
            { letter: "T", name: "General Studies", paid: true }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-01-10' },
            form6: { amount: 950000, paid: true, paidDate: '2024-07-15' }
        }
    },
    // S0334-0976 - EMANUEL STIVIN MBEGU - PCM
    {
        examNumber: "S0334-0976",
        fullName: "EMANUEL STIVIN MBEGU",
        firstName: "EMANUEL",
        middleName: "STIVIN",
        lastName: "MBEGU",
        combination: "PCM",
        softBroom: true,
        softBrush: true,
        hoe: false,
        slasher: true,
        bucket: true,
        plate: false,
        cup: true,
        spoon: true,
        bedSheet: false,
        mattress: true,
        rimPapers: true,
        schoolFees: false,
        seriesContributions: true,
        uniforms: false,
        subjects: [
            { letter: "U", name: "Physics", paid: true },
            { letter: "V", name: "Chemistry", paid: false },
            { letter: "W", name: "Mathematics", paid: true },
            { letter: "X", name: "General Studies", paid: false }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-02-18' },
            form6: { amount: 950000, paid: false }
        }
    },
    // S0334-0977 - EMMANUEL JOEL DAUDI - PCM
    {
        examNumber: "S0334-0977",
        fullName: "EMMANUEL JOEL DAUDI",
        firstName: "EMMANUEL",
        middleName: "JOEL",
        lastName: "DAUDI",
        combination: "PCM",
        softBroom: true,
        softBrush: true,
        hoe: true,
        slasher: true,
        bucket: false,
        plate: true,
        cup: true,
        spoon: true,
        bedSheet: true,
        mattress: false,
        rimPapers: true,
        schoolFees: true,
        seriesContributions: false,
        uniforms: true,
        subjects: [
            { letter: "Y", name: "Physics", paid: true },
            { letter: "Z", name: "Chemistry", paid: true },
            { letter: "A", name: "Mathematics", paid: true },
            { letter: "B", name: "General Studies", paid: true }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-01-25' },
            form6: { amount: 950000, paid: true, paidDate: '2024-08-20' }
        }
    },
    // S0334-0978 - EMMANUEL MUSA MAYEGA - PCM
    {
        examNumber: "S0334-0978",
        fullName: "EMMANUEL MUSA MAYEGA",
        firstName: "EMMANUEL",
        middleName: "MUSA",
        lastName: "MAYEGA",
        combination: "PCM",
        softBroom: true,
        softBrush: true,
        hoe: true,
        slasher: false,
        bucket: true,
        plate: true,
        cup: false,
        spoon: true,
        bedSheet: true,
        mattress: true,
        rimPapers: false,
        schoolFees: true,
        seriesContributions: true,
        uniforms: true,
        subjects: [
            { letter: "C", name: "Physics", paid: true },
            { letter: "D", name: "Chemistry", paid: true },
            { letter: "E", name: "Mathematics", paid: false },
            { letter: "F", name: "General Studies", paid: true }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-02-01' },
            form6: { amount: 950000, paid: false }
        }
    },
    // S0334-0979 - ERRIC CHACHA MAGANDA - HKL
    {
        examNumber: "S0334-0979",
        fullName: "ERRIC CHACHA MAGANDA",
        firstName: "ERRIC",
        middleName: "CHACHA",
        lastName: "MAGANDA",
        combination: "HKL",
        softBroom: true,
        softBrush: false,
        hoe: true,
        slasher: true,
        bucket: true,
        plate: true,
        cup: true,
        spoon: false,
        bedSheet: true,
        mattress: true,
        rimPapers: true,
        schoolFees: false,
        seriesContributions: true,
        uniforms: false,
        subjects: [
            { letter: "G", name: "History", paid: false },
            { letter: "H", name: "Kiswahili", paid: true },
            { letter: "I", name: "Language", paid: true },
            { letter: "J", name: "General Studies", paid: false }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-01-30' },
            form6: { amount: 950000, paid: false }
        }
    },
    // S0334-0980 - FINEHASI ELIEZARI RAMADHANI - HKL
    {
        examNumber: "S0334-0980",
        fullName: "FINEHASI ELIEZARI RAMADHANI",
        firstName: "FINEHASI",
        middleName: "ELIEZARI",
        lastName: "RAMADHANI",
        combination: "HKL",
        softBroom: true,
        softBrush: true,
        hoe: false,
        slasher: true,
        bucket: true,
        plate: true,
        cup: true,
        spoon: true,
        bedSheet: false,
        mattress: true,
        rimPapers: true,
        schoolFees: true,
        seriesContributions: true,
        uniforms: true,
        subjects: [
            { letter: "K", name: "History", paid: true },
            { letter: "L", name: "Kiswahili", paid: true },
            { letter: "M", name: "Language", paid: true },
            { letter: "N", name: "General Studies", paid: true }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-02-10' },
            form6: { amount: 950000, paid: true, paidDate: '2024-07-28' }
        }
    },
    // S0334-0981 - GEORGE ALOYCE MABULA - HKL
    {
        examNumber: "S0334-0981",
        fullName: "GEORGE ALOYCE MABULA",
        firstName: "GEORGE",
        middleName: "ALOYCE",
        lastName: "MABULA",
        combination: "HKL",
        softBroom: true,
        softBrush: true,
        hoe: true,
        slasher: true,
        bucket: false,
        plate: true,
        cup: true,
        spoon: true,
        bedSheet: true,
        mattress: false,
        rimPapers: false,
        schoolFees: true,
        seriesContributions: true,
        uniforms: true,
        subjects: [
            { letter: "O", name: "History", paid: true },
            { letter: "P", name: "Kiswahili", paid: false },
            { letter: "Q", name: "Language", paid: true },
            { letter: "R", name: "General Studies", paid: true }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-01-12' },
            form6: { amount: 950000, paid: false }
        }
    },
    // S0334-0982 - GODBLESS PETER NYEURA - HGK
    {
        examNumber: "S0334-0982",
        fullName: "GODBLESS PETER NYEURA",
        firstName: "GODBLESS",
        middleName: "PETER",
        lastName: "NYEURA",
        combination: "HGK",
        softBroom: true,
        softBrush: false,
        hoe: true,
        slasher: true,
        bucket: true,
        plate: true,
        cup: false,
        spoon: true,
        bedSheet: true,
        mattress: true,
        rimPapers: true,
        schoolFees: false,
        seriesContributions: false,
        uniforms: true,
        subjects: [
            { letter: "S", name: "History", paid: true },
            { letter: "T", name: "Geography", paid: true },
            { letter: "U", name: "Kiswahili", paid: false },
            { letter: "V", name: "General Studies", paid: true }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-02-22' },
            form6: { amount: 950000, paid: false }
        }
    },
    // S0334-0983 - IZRAEL PHILIMON IZRAEL - HGK
    {
        examNumber: "S0334-0983",
        fullName: "IZRAEL PHILIMON IZRAEL",
        firstName: "IZRAEL",
        middleName: "PHILIMON",
        lastName: "IZRAEL",
        combination: "HGK",
        softBroom: true,
        softBrush: true,
        hoe: true,
        slasher: false,
        bucket: true,
        plate: true,
        cup: true,
        spoon: true,
        bedSheet: false,
        mattress: true,
        rimPapers: true,
        schoolFees: true,
        seriesContributions: true,
        uniforms: false,
        subjects: [
            { letter: "W", name: "History", paid: true },
            { letter: "X", name: "Geography", paid: true },
            { letter: "Y", name: "Kiswahili", paid: true },
            { letter: "Z", name: "General Studies", paid: false }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-01-05' },
            form6: { amount: 950000, paid: true, paidDate: '2024-08-01' }
        }
    },
    // S0334-0984 - JOVIN MASOLOGO MAJUTO - HGK
    {
        examNumber: "S0334-0984",
        fullName: "JOVIN MASOLOGO MAJUTO",
        firstName: "JOVIN",
        middleName: "MASOLOGO",
        lastName: "MAJUTO",
        combination: "HGK",
        softBroom: true,
        softBrush: true,
        hoe: false,
        slasher: true,
        bucket: true,
        plate: false,
        cup: true,
        spoon: true,
        bedSheet: true,
        mattress: true,
        rimPapers: false,
        schoolFees: true,
        seriesContributions: true,
        uniforms: true,
        subjects: [
            { letter: "A", name: "History", paid: true },
            { letter: "B", name: "Geography", paid: true },
            { letter: "C", name: "Kiswahili", paid: true },
            { letter: "D", name: "General Studies", paid: true }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-02-14' },
            form6: { amount: 950000, paid: true, paidDate: '2024-07-20' }
        }
    },
    // S0334-0985 - KELVIN DANIEL MSUYA - PCB
    {
        examNumber: "S0334-0985",
        fullName: "KELVIN DANIEL MSUYA",
        firstName: "KELVIN",
        middleName: "DANIEL",
        lastName: "MSUYA",
        combination: "PCB",
        softBroom: true,
        softBrush: true,
        hoe: true,
        slasher: true,
        bucket: false,
        plate: true,
        cup: true,
        spoon: true,
        bedSheet: true,
        mattress: false,
        rimPapers: true,
        schoolFees: true,
        seriesContributions: false,
        uniforms: true,
        subjects: [
            { letter: "E", name: "Physics", paid: true },
            { letter: "F", name: "Chemistry", paid: false },
            { letter: "G", name: "Biology", paid: true },
            { letter: "H", name: "General Studies", paid: true }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-01-18' },
            form6: { amount: 950000, paid: false }
        }
    },
    // S0334-0986 - KULWA DIONIZ LUKANYA - PCB
    {
        examNumber: "S0334-0986",
        fullName: "KULWA DIONIZ LUKANYA",
        firstName: "KULWA",
        middleName: "DIONIZ",
        lastName: "LUKANYA",
        combination: "PCB",
        softBroom: true,
        softBrush: false,
        hoe: true,
        slasher: true,
        bucket: true,
        plate: true,
        cup: true,
        spoon: false,
        bedSheet: true,
        mattress: true,
        rimPapers: true,
        schoolFees: false,
        seriesContributions: true,
        uniforms: true,
        subjects: [
            { letter: "I", name: "Physics", paid: true },
            { letter: "J", name: "Chemistry", paid: true },
            { letter: "K", name: "Biology", paid: true },
            { letter: "L", name: "General Studies", paid: false }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-02-08' },
            form6: { amount: 950000, paid: false }
        }
    },
    // S0334-0987 - MAYANGA JOSEPH MAYANGA - PCB
    {
        examNumber: "S0334-0987",
        fullName: "MAYANGA JOSEPH MAYANGA",
        firstName: "MAYANGA",
        middleName: "JOSEPH",
        lastName: "MAYANGA",
        combination: "PCB",
        softBroom: true,
        softBrush: true,
        hoe: true,
        slasher: false,
        bucket: true,
        plate: true,
        cup: true,
        spoon: true,
        bedSheet: false,
        mattress: true,
        rimPapers: false,
        schoolFees: true,
        seriesContributions: true,
        uniforms: true,
        subjects: [
            { letter: "M", name: "Physics", paid: true },
            { letter: "N", name: "Chemistry", paid: true },
            { letter: "O", name: "Biology", paid: false },
            { letter: "P", name: "General Studies", paid: true }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-01-22' },
            form6: { amount: 950000, paid: true, paidDate: '2024-08-05' }
        }
    },
    // S0334-0988 - MENG'ORIKI SAIGILU MOLLEL - EGM
    {
        examNumber: "S0334-0988",
        fullName: "MENG'ORIKI SAIGILU MOLLEL",
        firstName: "MENG'ORIKI",
        middleName: "SAIGILU",
        lastName: "MOLLEL",
        combination: "EGM",
        softBroom: true,
        softBrush: true,
        hoe: false,
        slasher: true,
        bucket: true,
        plate: true,
        cup: false,
        spoon: true,
        bedSheet: true,
        mattress: true,
        rimPapers: true,
        schoolFees: true,
        seriesContributions: true,
        uniforms: false,
        subjects: [
            { letter: "Q", name: "Economics", paid: true },
            { letter: "R", name: "Geography", paid: true },
            { letter: "S", name: "Mathematics", paid: true },
            { letter: "T", name: "General Studies", paid: true }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-02-25' },
            form6: { amount: 950000, paid: true, paidDate: '2024-07-30' }
        }
    },
    // S0334-0989 - MUSSA HAMIS JAMES - EGM
    {
        examNumber: "S0334-0989",
        fullName: "MUSSA HAMIS JAMES",
        firstName: "MUSSA",
        middleName: "HAMIS",
        lastName: "JAMES",
        combination: "EGM",
        softBroom: true,
        softBrush: true,
        hoe: true,
        slasher: true,
        bucket: false,
        plate: true,
        cup: true,
        spoon: true,
        bedSheet: true,
        mattress: false,
        rimPapers: true,
        schoolFees: false,
        seriesContributions: true,
        uniforms: true,
        subjects: [
            { letter: "U", name: "Economics", paid: true },
            { letter: "V", name: "Geography", paid: false },
            { letter: "W", name: "Mathematics", paid: true },
            { letter: "X", name: "General Studies", paid: false }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-01-28' },
            form6: { amount: 950000, paid: false }
        }
    },
    // S0334-0990 - MWITA IBRAHIM SAMSON - EGM
    {
        examNumber: "S0334-0990",
        fullName: "MWITA IBRAHIM SAMSON",
        firstName: "MWITA",
        middleName: "IBRAHIM",
        lastName: "SAMSON",
        combination: "EGM",
        softBroom: true,
        softBrush: false,
        hoe: true,
        slasher: true,
        bucket: true,
        plate: true,
        cup: true,
        spoon: false,
        bedSheet: true,
        mattress: true,
        rimPapers: false,
        schoolFees: true,
        seriesContributions: true,
        uniforms: true,
        subjects: [
            { letter: "Y", name: "Economics", paid: true },
            { letter: "Z", name: "Geography", paid: true },
            { letter: "A", name: "Mathematics", paid: true },
            { letter: "B", name: "General Studies", paid: true }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-02-03' },
            form6: { amount: 950000, paid: true, paidDate: '2024-08-12' }
        }
    },
    // S0334-0991 - PETER MICHAEL MGANDILA - HGE
    {
        examNumber: "S0334-0991",
        fullName: "PETER MICHAEL MGANDILA",
        firstName: "PETER",
        middleName: "MICHAEL",
        lastName: "MGANDILA",
        combination: "HGE",
        softBroom: true,
        softBrush: true,
        hoe: true,
        slasher: false,
        bucket: true,
        plate: true,
        cup: true,
        spoon: true,
        bedSheet: false,
        mattress: true,
        rimPapers: true,
        schoolFees: true,
        seriesContributions: false,
        uniforms: true,
        subjects: [
            { letter: "C", name: "History", paid: true },
            { letter: "D", name: "Geography", paid: true },
            { letter: "E", name: "Economics", paid: false },
            { letter: "F", name: "General Studies", paid: true }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-01-08' },
            form6: { amount: 950000, paid: false }
        }
    },
    // S0334-0992 - PETRO LUSANIKA LUBINZA - HGE
    {
        examNumber: "S0334-0992",
        fullName: "PETRO LUSANIKA LUBINZA",
        firstName: "PETRO",
        middleName: "LUSANIKA",
        lastName: "LUBINZA",
        combination: "HGE",
        softBroom: true,
        softBrush: true,
        hoe: false,
        slasher: true,
        bucket: true,
        plate: false,
        cup: true,
        spoon: true,
        bedSheet: true,
        mattress: true,
        rimPapers: true,
        schoolFees: false,
        seriesContributions: true,
        uniforms: true,
        subjects: [
            { letter: "G", name: "History", paid: true },
            { letter: "H", name: "Geography", paid: false },
            { letter: "I", name: "Economics", paid: true },
            { letter: "J", name: "General Studies", paid: true }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-02-17' },
            form6: { amount: 950000, paid: false }
        }
    },
    // S0334-0993 - RAMADHAN MSTAPHA JUMANNE - HGE
    {
        examNumber: "S0334-0993",
        fullName: "RAMADHAN MSTAPHA JUMANNE",
        firstName: "RAMADHAN",
        middleName: "MSTAPHA",
        lastName: "JUMANNE",
        combination: "HGE",
        softBroom: true,
        softBrush: false,
        hoe: true,
        slasher: true,
        bucket: true,
        plate: true,
        cup: true,
        spoon: true,
        bedSheet: true,
        mattress: false,
        rimPapers: true,
        schoolFees: true,
        seriesContributions: true,
        uniforms: false,
        subjects: [
            { letter: "K", name: "History", paid: true },
            { letter: "L", name: "Geography", paid: true },
            { letter: "M", name: "Economics", paid: true },
            { letter: "N", name: "General Studies", paid: false }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-01-14' },
            form6: { amount: 950000, paid: true, paidDate: '2024-08-08' }
        }
    },
    // S0334-0994 - REUBEN SAMWEL MISANA - CBG
    {
        examNumber: "S0334-0994",
        fullName: "REUBEN SAMWEL MISANA",
        firstName: "REUBEN",
        middleName: "SAMWEL",
        lastName: "MISANA",
        combination: "CBG",
        softBroom: true,
        softBrush: true,
        hoe: true,
        slasher: true,
        bucket: false,
        plate: true,
        cup: true,
        spoon: true,
        bedSheet: true,
        mattress: true,
        rimPapers: false,
        schoolFees: true,
        seriesContributions: true,
        uniforms: true,
        subjects: [
            { letter: "O", name: "Chemistry", paid: true },
            { letter: "P", name: "Biology", paid: true },
            { letter: "Q", name: "Geography", paid: true },
            { letter: "R", name: "General Studies", paid: true }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-02-20' },
            form6: { amount: 950000, paid: true, paidDate: '2024-07-25' }
        }
    },
    // S0334-0995 - SAMSON MAHUSHI BUZINZA - CBG
    {
        examNumber: "S0334-0995",
        fullName: "SAMSON MAHUSHI BUZINZA",
        firstName: "SAMSON",
        middleName: "MAHUSHI",
        lastName: "BUZINZA",
        combination: "CBG",
        softBroom: true,
        softBrush: true,
        hoe: false,
        slasher: true,
        bucket: true,
        plate: true,
        cup: true,
        spoon: false,
        bedSheet: true,
        mattress: true,
        rimPapers: true,
        schoolFees: false,
        seriesContributions: true,
        uniforms: true,
        subjects: [
            { letter: "S", name: "Chemistry", paid: true },
            { letter: "T", name: "Biology", paid: false },
            { letter: "U", name: "Geography", paid: true },
            { letter: "V", name: "General Studies", paid: true }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-01-27' },
            form6: { amount: 950000, paid: false }
        }
    },
    // S0334-0996 - SHABAN MOHAMMED ABBAKAR - CBG
    {
        examNumber: "S0334-0996",
        fullName: "SHABAN MOHAMMED ABBAKAR",
        firstName: "SHABAN",
        middleName: "MOHAMMED",
        lastName: "ABBAKAR",
        combination: "CBG",
        softBroom: true,
        softBrush: true,
        hoe: true,
        slasher: true,
        bucket: true,
        plate: true,
        cup: false,
        spoon: true,
        bedSheet: false,
        mattress: true,
        rimPapers: true,
        schoolFees: true,
        seriesContributions: false,
        uniforms: true,
        subjects: [
            { letter: "W", name: "Chemistry", paid: true },
            { letter: "X", name: "Biology", paid: true },
            { letter: "Y", name: "Geography", paid: true },
            { letter: "Z", name: "General Studies", paid: false }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-02-05' },
            form6: { amount: 950000, paid: true, paidDate: '2024-08-15' }
        }
    },
    // S0334-0997 - SITTA BADO MAZUNGU - CBG
    {
        examNumber: "S0334-0997",
        fullName: "SITTA BADO MAZUNGU",
        firstName: "SITTA",
        middleName: "BADO",
        lastName: "MAZUNGU",
        combination: "CBG",
        softBroom: true,
        softBrush: true,
        hoe: true,
        slasher: false,
        bucket: true,
        plate: true,
        cup: true,
        spoon: true,
        bedSheet: true,
        mattress: true,
        rimPapers: false,
        schoolFees: true,
        seriesContributions: true,
        uniforms: false,
        subjects: [
            { letter: "A", name: "Chemistry", paid: true },
            { letter: "B", name: "Biology", paid: true },
            { letter: "C", name: "Geography", paid: false },
            { letter: "D", name: "General Studies", paid: true }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-01-11' },
            form6: { amount: 950000, paid: false }
        }
    },
    // S0334-0998 - THADEUS JOSEPH MALKIADI - HGL
    {
        examNumber: "S0334-0998",
        fullName: "THADEUS JOSEPH MALKIADI",
        firstName: "THADEUS",
        middleName: "JOSEPH",
        lastName: "MALKIADI",
        combination: "HGL",
        softBroom: true,
        softBrush: true,
        hoe: true,
        slasher: true,
        bucket: false,
        plate: true,
        cup: true,
        spoon: true,
        bedSheet: true,
        mattress: false,
        rimPapers: true,
        schoolFees: true,
        seriesContributions: true,
        uniforms: true,
        subjects: [
            { letter: "A", name: "History", paid: true },
            { letter: "B", name: "Geography", paid: true },
            { letter: "C", name: "Language", paid: true },
            { letter: "D", name: "General Studies", paid: true }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-02-12' },
            form6: { amount: 950000, paid: true, paidDate: '2024-07-18' }
        }
    },
    // S0334-0999 - WASTARA SAID HESSEN - HGL
    {
        examNumber: "S0334-0999",
        fullName: "WASTARA SAID HESSEN",
        firstName: "WASTARA",
        middleName: "SAID",
        lastName: "HESSEN",
        combination: "HGL",
        softBroom: true,
        softBrush: true,
        hoe: false,
        slasher: true,
        bucket: true,
        plate: true,
        cup: true,
        spoon: false,
        bedSheet: true,
        mattress: true,
        rimPapers: true,
        schoolFees: false,
        seriesContributions: true,
        uniforms: true,
        subjects: [
            { letter: "A", name: "History", paid: true },
            { letter: "B", name: "Geography", paid: false },
            { letter: "C", name: "Language", paid: true },
            { letter: "D", name: "General Studies", paid: true }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-01-19' },
            form6: { amount: 950000, paid: false }
        }
    },
    // S0334-1000 - ZUBERI HAJI ZUBERI - HGL
    {
        examNumber: "S0334-1000",
        fullName: "ZUBERI HAJI ZUBERI",
        firstName: "ZUBERI",
        middleName: "HAJI",
        lastName: "ZUBERI",
        combination: "HGL",
        softBroom: true,
        softBrush: true,
        hoe: true,
        slasher: true,
        bucket: true,
        plate: false,
        cup: true,
        spoon: true,
        bedSheet: true,
        mattress: true,
        rimPapers: false,
        schoolFees: true,
        seriesContributions: true,
        uniforms: true,
        subjects: [
            { letter: "A", name: "History", paid: true },
            { letter: "B", name: "Geography", paid: true },
            { letter: "C", name: "Language", paid: true },
            { letter: "D", name: "General Studies", paid: false }
        ],
        fees: {
            form5: { amount: 800000, paid: true, paidDate: '2024-02-28' },
            form6: { amount: 950000, paid: false }
        }
    }
];

(async () => {
    await db.removeAsync({}, { multi: true });
    await db.insertAsync(students);
    console.log('✅ Database seeded with 30 students (corrected subjects)');
    process.exit();
})().catch(err => {
    console.error('❌ Seeding error:', err);
    process.exit(1);
});