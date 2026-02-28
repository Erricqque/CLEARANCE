// ============================================
// COMPLETE STUDENT DATABASE (ALL 30 STUDENTS)
// ============================================

const students: Student[] = [
  // S0334-0971 - ABBUBBAKAR AMIN ADAMN - PMC
  {
    id: "1",
    examNumber: "S0334-0971",
    fullName: "ABBUBBAKAR AMIN ADAMN",
    firstName: "ABBUBBAKAR",
    lastName: "ADAMN",
    combination: "PMC",
    hasPassword: false,
    clearancePercentage: 65,
    isFullyCleared: false,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: false },
      hoe: { name: "Hoe", status: true },
      slasher: { name: "Slasher", status: true },
      bucket: { name: "Bucket", status: false },
      plate: { name: "Plate", status: true },
      cup: { name: "Cup", status: true },
      spoon: { name: "Spoon", status: true },
      bedSheet: { name: "Bed Sheet", status: false },
      mattress: { name: "Mattress", status: true },
      rimPapers: { name: "Rim Papers", status: false },
      schoolFees: { name: "School Fees", status: false },
      seriesContributions: { name: "Series Contributions", status: true },
      uniforms: { name: "Uniforms", status: true }
    },
    subjects: [
      { letter: "A", name: "Physics", paid: true },
      { letter: "B", name: "Mathematics", paid: false },
      { letter: "C", name: "Computer Science", paid: true },
      { letter: "D", name: "General Studies", paid: true }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-01-15" },
      form6: { amount: 950000, paid: false }
    }
  },
  // S0334-0972 - BARAKA MSEI THADEI - PMC
  {
    id: "2",
    examNumber: "S0334-0972",
    fullName: "BARAKA MSEI THADEI",
    firstName: "BARAKA",
    lastName: "THADEI",
    combination: "PMC",
    hasPassword: true,
    clearancePercentage: 85,
    isFullyCleared: false,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: true },
      hoe: { name: "Hoe", status: true },
      slasher: { name: "Slasher", status: false },
      bucket: { name: "Bucket", status: true },
      plate: { name: "Plate", status: true },
      cup: { name: "Cup", status: false },
      spoon: { name: "Spoon", status: true },
      bedSheet: { name: "Bed Sheet", status: true },
      mattress: { name: "Mattress", status: true },
      rimPapers: { name: "Rim Papers", status: false },
      schoolFees: { name: "School Fees", status: true },
      seriesContributions: { name: "Series Contributions", status: false },
      uniforms: { name: "Uniforms", status: true }
    },
    subjects: [
      { letter: "E", name: "Physics", paid: true },
      { letter: "F", name: "Mathematics", paid: true },
      { letter: "G", name: "Computer Science", paid: false },
      { letter: "H", name: "General Studies", paid: true }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-01-20" },
      form6: { amount: 950000, paid: true, paidDate: "2024-08-10" }
    }
  },
  // S0334-0973 - DANIEL MARTIN KASIGU - PMC
  {
    id: "3",
    examNumber: "S0334-0973",
    fullName: "DANIEL MARTIN KASIGU",
    firstName: "DANIEL",
    lastName: "KASIGU",
    combination: "PMC",
    hasPassword: false,
    clearancePercentage: 70,
    isFullyCleared: false,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: true },
      hoe: { name: "Hoe", status: false },
      slasher: { name: "Slasher", status: true },
      bucket: { name: "Bucket", status: true },
      plate: { name: "Plate", status: true },
      cup: { name: "Cup", status: true },
      spoon: { name: "Spoon", status: true },
      bedSheet: { name: "Bed Sheet", status: false },
      mattress: { name: "Mattress", status: false },
      rimPapers: { name: "Rim Papers", status: true },
      schoolFees: { name: "School Fees", status: true },
      seriesContributions: { name: "Series Contributions", status: true },
      uniforms: { name: "Uniforms", status: false }
    },
    subjects: [
      { letter: "I", name: "Physics", paid: true },
      { letter: "J", name: "Mathematics", paid: true },
      { letter: "K", name: "Computer Science", paid: true },
      { letter: "L", name: "General Studies", paid: false }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-02-05" },
      form6: { amount: 950000, paid: false }
    }
  },
  // S0334-0974 - EDWIN SAMWEL PASCAL - PMC
  {
    id: "4",
    examNumber: "S0334-0974",
    fullName: "EDWIN SAMWEL PASCAL",
    firstName: "EDWIN",
    lastName: "PASCAL",
    combination: "PMC",
    hasPassword: false,
    clearancePercentage: 60,
    isFullyCleared: false,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: false },
      hoe: { name: "Hoe", status: true },
      slasher: { name: "Slasher", status: true },
      bucket: { name: "Bucket", status: false },
      plate: { name: "Plate", status: true },
      cup: { name: "Cup", status: true },
      spoon: { name: "Spoon", status: false },
      bedSheet: { name: "Bed Sheet", status: true },
      mattress: { name: "Mattress", status: true },
      rimPapers: { name: "Rim Papers", status: true },
      schoolFees: { name: "School Fees", status: false },
      seriesContributions: { name: "Series Contributions", status: true },
      uniforms: { name: "Uniforms", status: true }
    },
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
    id: "5",
    examNumber: "S0334-0975",
    fullName: "ELISHA BOAZ MAGEMBE",
    firstName: "ELISHA",
    lastName: "MAGEMBE",
    combination: "PCM",
    hasPassword: true,
    clearancePercentage: 100,
    isFullyCleared: true,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: true },
      hoe: { name: "Hoe", status: true },
      slasher: { name: "Slasher", status: false },
      bucket: { name: "Bucket", status: true },
      plate: { name: "Plate", status: true },
      cup: { name: "Cup", status: true },
      spoon: { name: "Spoon", status: true },
      bedSheet: { name: "Bed Sheet", status: true },
      mattress: { name: "Mattress", status: true },
      rimPapers: { name: "Rim Papers", status: false },
      schoolFees: { name: "School Fees", status: true },
      seriesContributions: { name: "Series Contributions", status: true },
      uniforms: { name: "Uniforms", status: true }
    },
    subjects: [
      { letter: "Q", name: "Physics", paid: true },
      { letter: "R", name: "Chemistry", paid: true },
      { letter: "S", name: "Mathematics", paid: true },
      { letter: "T", name: "General Studies", paid: true }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-01-10" },
      form6: { amount: 950000, paid: true, paidDate: "2024-07-15" }
    }
  },
  // S0334-0976 - EMANUEL STIVIN MBEGU - PCM
  {
    id: "6",
    examNumber: "S0334-0976",
    fullName: "EMANUEL STIVIN MBEGU",
    firstName: "EMANUEL",
    lastName: "MBEGU",
    combination: "PCM",
    hasPassword: false,
    clearancePercentage: 55,
    isFullyCleared: false,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: true },
      hoe: { name: "Hoe", status: false },
      slasher: { name: "Slasher", status: true },
      bucket: { name: "Bucket", status: true },
      plate: { name: "Plate", status: false },
      cup: { name: "Cup", status: true },
      spoon: { name: "Spoon", status: true },
      bedSheet: { name: "Bed Sheet", status: false },
      mattress: { name: "Mattress", status: true },
      rimPapers: { name: "Rim Papers", status: true },
      schoolFees: { name: "School Fees", status: false },
      seriesContributions: { name: "Series Contributions", status: true },
      uniforms: { name: "Uniforms", status: false }
    },
    subjects: [
      { letter: "U", name: "Physics", paid: true },
      { letter: "V", name: "Chemistry", paid: false },
      { letter: "W", name: "Mathematics", paid: true },
      { letter: "X", name: "General Studies", paid: false }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-02-18" },
      form6: { amount: 950000, paid: false }
    }
  },
  // S0334-0977 - EMMANUEL JOEL DAUDI - PCM
  {
    id: "7",
    examNumber: "S0334-0977",
    fullName: "EMMANUEL JOEL DAUDI",
    firstName: "EMMANUEL",
    lastName: "DAUDI",
    combination: "PCM",
    hasPassword: true,
    clearancePercentage: 95,
    isFullyCleared: false,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: true },
      hoe: { name: "Hoe", status: true },
      slasher: { name: "Slasher", status: true },
      bucket: { name: "Bucket", status: false },
      plate: { name: "Plate", status: true },
      cup: { name: "Cup", status: true },
      spoon: { name: "Spoon", status: true },
      bedSheet: { name: "Bed Sheet", status: true },
      mattress: { name: "Mattress", status: false },
      rimPapers: { name: "Rim Papers", status: true },
      schoolFees: { name: "School Fees", status: true },
      seriesContributions: { name: "Series Contributions", status: false },
      uniforms: { name: "Uniforms", status: true }
    },
    subjects: [
      { letter: "Y", name: "Physics", paid: true },
      { letter: "Z", name: "Chemistry", paid: true },
      { letter: "A", name: "Mathematics", paid: true },
      { letter: "B", name: "General Studies", paid: true }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-01-25" },
      form6: { amount: 950000, paid: true, paidDate: "2024-08-20" }
    }
  },
  // S0334-0978 - EMMANUEL MUSA MAYEGA - PCM
  {
    id: "8",
    examNumber: "S0334-0978",
    fullName: "EMMANUEL MUSA MAYEGA",
    firstName: "EMMANUEL",
    lastName: "MAYEGA",
    combination: "PCM",
    hasPassword: false,
    clearancePercentage: 75,
    isFullyCleared: false,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: true },
      hoe: { name: "Hoe", status: true },
      slasher: { name: "Slasher", status: false },
      bucket: { name: "Bucket", status: true },
      plate: { name: "Plate", status: true },
      cup: { name: "Cup", status: false },
      spoon: { name: "Spoon", status: true },
      bedSheet: { name: "Bed Sheet", status: true },
      mattress: { name: "Mattress", status: true },
      rimPapers: { name: "Rim Papers", status: false },
      schoolFees: { name: "School Fees", status: true },
      seriesContributions: { name: "Series Contributions", status: true },
      uniforms: { name: "Uniforms", status: true }
    },
    subjects: [
      { letter: "C", name: "Physics", paid: true },
      { letter: "D", name: "Chemistry", paid: true },
      { letter: "E", name: "Mathematics", paid: false },
      { letter: "F", name: "General Studies", paid: true }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-02-01" },
      form6: { amount: 950000, paid: false }
    }
  },
  // S0334-0979 - ERRIC CHACHA MAGANDA - HKL
  {
    id: "9",
    examNumber: "S0334-0979",
    fullName: "ERRIC CHACHA MAGANDA",
    firstName: "ERRIC",
    lastName: "MAGANDA",
    combination: "HKL",
    hasPassword: false,
    clearancePercentage: 60,
    isFullyCleared: false,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: false },
      hoe: { name: "Hoe", status: true },
      slasher: { name: "Slasher", status: true },
      bucket: { name: "Bucket", status: true },
      plate: { name: "Plate", status: true },
      cup: { name: "Cup", status: true },
      spoon: { name: "Spoon", status: false },
      bedSheet: { name: "Bed Sheet", status: true },
      mattress: { name: "Mattress", status: true },
      rimPapers: { name: "Rim Papers", status: true },
      schoolFees: { name: "School Fees", status: false },
      seriesContributions: { name: "Series Contributions", status: true },
      uniforms: { name: "Uniforms", status: false }
    },
    subjects: [
      { letter: "G", name: "History", paid: false },
      { letter: "H", name: "Kiswahili", paid: true },
      { letter: "I", name: "Language", paid: true },
      { letter: "J", name: "General Studies", paid: false }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-01-30" },
      form6: { amount: 950000, paid: false }
    }
  },
  // S0334-0980 - FINEHASI ELIEZARI RAMADHANI - HKL
  {
    id: "10",
    examNumber: "S0334-0980",
    fullName: "FINEHASI ELIEZARI RAMADHANI",
    firstName: "FINEHASI",
    lastName: "RAMADHANI",
    combination: "HKL",
    hasPassword: true,
    clearancePercentage: 95,
    isFullyCleared: false,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: true },
      hoe: { name: "Hoe", status: false },
      slasher: { name: "Slasher", status: true },
      bucket: { name: "Bucket", status: true },
      plate: { name: "Plate", status: true },
      cup: { name: "Cup", status: true },
      spoon: { name: "Spoon", status: true },
      bedSheet: { name: "Bed Sheet", status: false },
      mattress: { name: "Mattress", status: true },
      rimPapers: { name: "Rim Papers", status: true },
      schoolFees: { name: "School Fees", status: true },
      seriesContributions: { name: "Series Contributions", status: true },
      uniforms: { name: "Uniforms", status: true }
    },
    subjects: [
      { letter: "K", name: "History", paid: true },
      { letter: "L", name: "Kiswahili", paid: true },
      { letter: "M", name: "Language", paid: true },
      { letter: "N", name: "General Studies", paid: true }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-02-10" },
      form6: { amount: 950000, paid: true, paidDate: "2024-07-28" }
    }
  },
  // S0334-0981 - GEORGE ALOYCE MABULA - HKL
  {
    id: "11",
    examNumber: "S0334-0981",
    fullName: "GEORGE ALOYCE MABULA",
    firstName: "GEORGE",
    lastName: "MABULA",
    combination: "HKL",
    hasPassword: false,
    clearancePercentage: 70,
    isFullyCleared: false,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: true },
      hoe: { name: "Hoe", status: true },
      slasher: { name: "Slasher", status: true },
      bucket: { name: "Bucket", status: false },
      plate: { name: "Plate", status: true },
      cup: { name: "Cup", status: true },
      spoon: { name: "Spoon", status: true },
      bedSheet: { name: "Bed Sheet", status: true },
      mattress: { name: "Mattress", status: false },
      rimPapers: { name: "Rim Papers", status: false },
      schoolFees: { name: "School Fees", status: true },
      seriesContributions: { name: "Series Contributions", status: true },
      uniforms: { name: "Uniforms", status: true }
    },
    subjects: [
      { letter: "O", name: "History", paid: true },
      { letter: "P", name: "Kiswahili", paid: false },
      { letter: "Q", name: "Language", paid: true },
      { letter: "R", name: "General Studies", paid: true }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-01-12" },
      form6: { amount: 950000, paid: false }
    }
  },
  // S0334-0982 - GODBLESS PETER NYEURA - HGK
  {
    id: "12",
    examNumber: "S0334-0982",
    fullName: "GODBLESS PETER NYEURA",
    firstName: "GODBLESS",
    lastName: "NYEURA",
    combination: "HGK",
    hasPassword: false,
    clearancePercentage: 65,
    isFullyCleared: false,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: false },
      hoe: { name: "Hoe", status: true },
      slasher: { name: "Slasher", status: true },
      bucket: { name: "Bucket", status: true },
      plate: { name: "Plate", status: true },
      cup: { name: "Cup", status: false },
      spoon: { name: "Spoon", status: true },
      bedSheet: { name: "Bed Sheet", status: true },
      mattress: { name: "Mattress", status: true },
      rimPapers: { name: "Rim Papers", status: true },
      schoolFees: { name: "School Fees", status: false },
      seriesContributions: { name: "Series Contributions", status: false },
      uniforms: { name: "Uniforms", status: true }
    },
    subjects: [
      { letter: "S", name: "History", paid: true },
      { letter: "T", name: "Geography", paid: true },
      { letter: "U", name: "Kiswahili", paid: false },
      { letter: "V", name: "General Studies", paid: true }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-02-22" },
      form6: { amount: 950000, paid: false }
    }
  },
  // S0334-0983 - IZRAEL PHILIMON IZRAEL - HGK
  {
    id: "13",
    examNumber: "S0334-0983",
    fullName: "IZRAEL PHILIMON IZRAEL",
    firstName: "IZRAEL",
    lastName: "IZRAEL",
    combination: "HGK",
    hasPassword: true,
    clearancePercentage: 85,
    isFullyCleared: false,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: true },
      hoe: { name: "Hoe", status: true },
      slasher: { name: "Slasher", status: false },
      bucket: { name: "Bucket", status: true },
      plate: { name: "Plate", status: true },
      cup: { name: "Cup", status: true },
      spoon: { name: "Spoon", status: true },
      bedSheet: { name: "Bed Sheet", status: false },
      mattress: { name: "Mattress", status: true },
      rimPapers: { name: "Rim Papers", status: true },
      schoolFees: { name: "School Fees", status: true },
      seriesContributions: { name: "Series Contributions", status: true },
      uniforms: { name: "Uniforms", status: false }
    },
    subjects: [
      { letter: "W", name: "History", paid: true },
      { letter: "X", name: "Geography", paid: true },
      { letter: "Y", name: "Kiswahili", paid: true },
      { letter: "Z", name: "General Studies", paid: false }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-01-05" },
      form6: { amount: 950000, paid: true, paidDate: "2024-08-01" }
    }
  },
  // S0334-0984 - JOVIN MASOLOGO MAJUTO - HGK
  {
    id: "14",
    examNumber: "S0334-0984",
    fullName: "JOVIN MASOLOGO MAJUTO",
    firstName: "JOVIN",
    lastName: "MAJUTO",
    combination: "HGK",
    hasPassword: true,
    clearancePercentage: 100,
    isFullyCleared: true,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: true },
      hoe: { name: "Hoe", status: false },
      slasher: { name: "Slasher", status: true },
      bucket: { name: "Bucket", status: true },
      plate: { name: "Plate", status: false },
      cup: { name: "Cup", status: true },
      spoon: { name: "Spoon", status: true },
      bedSheet: { name: "Bed Sheet", status: true },
      mattress: { name: "Mattress", status: true },
      rimPapers: { name: "Rim Papers", status: false },
      schoolFees: { name: "School Fees", status: true },
      seriesContributions: { name: "Series Contributions", status: true },
      uniforms: { name: "Uniforms", status: true }
    },
    subjects: [
      { letter: "A", name: "History", paid: true },
      { letter: "B", name: "Geography", paid: true },
      { letter: "C", name: "Kiswahili", paid: true },
      { letter: "D", name: "General Studies", paid: true }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-02-14" },
      form6: { amount: 950000, paid: true, paidDate: "2024-07-20" }
    }
  },
  // S0334-0985 - KELVIN DANIEL MSUYA - PCB
  {
    id: "15",
    examNumber: "S0334-0985",
    fullName: "KELVIN DANIEL MSUYA",
    firstName: "KELVIN",
    lastName: "MSUYA",
    combination: "PCB",
    hasPassword: false,
    clearancePercentage: 70,
    isFullyCleared: false,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: true },
      hoe: { name: "Hoe", status: true },
      slasher: { name: "Slasher", status: true },
      bucket: { name: "Bucket", status: false },
      plate: { name: "Plate", status: true },
      cup: { name: "Cup", status: true },
      spoon: { name: "Spoon", status: true },
      bedSheet: { name: "Bed Sheet", status: true },
      mattress: { name: "Mattress", status: false },
      rimPapers: { name: "Rim Papers", status: true },
      schoolFees: { name: "School Fees", status: true },
      seriesContributions: { name: "Series Contributions", status: false },
      uniforms: { name: "Uniforms", status: true }
    },
    subjects: [
      { letter: "E", name: "Physics", paid: true },
      { letter: "F", name: "Chemistry", paid: false },
      { letter: "G", name: "Biology", paid: true },
      { letter: "H", name: "General Studies", paid: true }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-01-18" },
      form6: { amount: 950000, paid: false }
    }
  },
  // S0334-0986 - KULWA DIONIZ LUKANYA - PCB
  {
    id: "16",
    examNumber: "S0334-0986",
    fullName: "KULWA DIONIZ LUKANYA",
    firstName: "KULWA",
    lastName: "LUKANYA",
    combination: "PCB",
    hasPassword: false,
    clearancePercentage: 75,
    isFullyCleared: false,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: false },
      hoe: { name: "Hoe", status: true },
      slasher: { name: "Slasher", status: true },
      bucket: { name: "Bucket", status: true },
      plate: { name: "Plate", status: true },
      cup: { name: "Cup", status: true },
      spoon: { name: "Spoon", status: false },
      bedSheet: { name: "Bed Sheet", status: true },
      mattress: { name: "Mattress", status: true },
      rimPapers: { name: "Rim Papers", status: true },
      schoolFees: { name: "School Fees", status: false },
      seriesContributions: { name: "Series Contributions", status: true },
      uniforms: { name: "Uniforms", status: true }
    },
    subjects: [
      { letter: "I", name: "Physics", paid: true },
      { letter: "J", name: "Chemistry", paid: true },
      { letter: "K", name: "Biology", paid: true },
      { letter: "L", name: "General Studies", paid: false }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-02-08" },
      form6: { amount: 950000, paid: false }
    }
  },
  // S0334-0987 - MAYANGA JOSEPH MAYANGA - PCB
  {
    id: "17",
    examNumber: "S0334-0987",
    fullName: "MAYANGA JOSEPH MAYANGA",
    firstName: "MAYANGA",
    lastName: "MAYANGA",
    combination: "PCB",
    hasPassword: true,
    clearancePercentage: 90,
    isFullyCleared: false,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: true },
      hoe: { name: "Hoe", status: true },
      slasher: { name: "Slasher", status: false },
      bucket: { name: "Bucket", status: true },
      plate: { name: "Plate", status: true },
      cup: { name: "Cup", status: true },
      spoon: { name: "Spoon", status: true },
      bedSheet: { name: "Bed Sheet", status: false },
      mattress: { name: "Mattress", status: true },
      rimPapers: { name: "Rim Papers", status: false },
      schoolFees: { name: "School Fees", status: true },
      seriesContributions: { name: "Series Contributions", status: true },
      uniforms: { name: "Uniforms", status: true }
    },
    subjects: [
      { letter: "M", name: "Physics", paid: true },
      { letter: "N", name: "Chemistry", paid: true },
      { letter: "O", name: "Biology", paid: false },
      { letter: "P", name: "General Studies", paid: true }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-01-22" },
      form6: { amount: 950000, paid: true, paidDate: "2024-08-05" }
    }
  },
  // S0334-0988 - MENG'ORIKI SAIGILU MOLLEL - EGM
  {
    id: "18",
    examNumber: "S0334-0988",
    fullName: "MENG'ORIKI SAIGILU MOLLEL",
    firstName: "MENG'ORIKI",
    lastName: "MOLLEL",
    combination: "EGM",
    hasPassword: true,
    clearancePercentage: 95,
    isFullyCleared: false,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: true },
      hoe: { name: "Hoe", status: false },
      slasher: { name: "Slasher", status: true },
      bucket: { name: "Bucket", status: true },
      plate: { name: "Plate", status: true },
      cup: { name: "Cup", status: false },
      spoon: { name: "Spoon", status: true },
      bedSheet: { name: "Bed Sheet", status: true },
      mattress: { name: "Mattress", status: true },
      rimPapers: { name: "Rim Papers", status: true },
      schoolFees: { name: "School Fees", status: true },
      seriesContributions: { name: "Series Contributions", status: true },
      uniforms: { name: "Uniforms", status: false }
    },
    subjects: [
      { letter: "Q", name: "Economics", paid: true },
      { letter: "R", name: "Geography", paid: true },
      { letter: "S", name: "Mathematics", paid: true },
      { letter: "T", name: "General Studies", paid: true }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-02-25" },
      form6: { amount: 950000, paid: true, paidDate: "2024-07-30" }
    }
  },
  // S0334-0989 - MUSSA HAMIS JAMES - EGM
  {
    id: "19",
    examNumber: "S0334-0989",
    fullName: "MUSSA HAMIS JAMES",
    firstName: "MUSSA",
    lastName: "JAMES",
    combination: "EGM",
    hasPassword: false,
    clearancePercentage: 60,
    isFullyCleared: false,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: true },
      hoe: { name: "Hoe", status: true },
      slasher: { name: "Slasher", status: true },
      bucket: { name: "Bucket", status: false },
      plate: { name: "Plate", status: true },
      cup: { name: "Cup", status: true },
      spoon: { name: "Spoon", status: true },
      bedSheet: { name: "Bed Sheet", status: true },
      mattress: { name: "Mattress", status: false },
      rimPapers: { name: "Rim Papers", status: true },
      schoolFees: { name: "School Fees", status: false },
      seriesContributions: { name: "Series Contributions", status: true },
      uniforms: { name: "Uniforms", status: true }
    },
    subjects: [
      { letter: "U", name: "Economics", paid: true },
      { letter: "V", name: "Geography", paid: false },
      { letter: "W", name: "Mathematics", paid: true },
      { letter: "X", name: "General Studies", paid: false }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-01-28" },
      form6: { amount: 950000, paid: false }
    }
  },
  // S0334-0990 - MWITA IBRAHIM SAMSON - EGM
  {
    id: "20",
    examNumber: "S0334-0990",
    fullName: "MWITA IBRAHIM SAMSON",
    firstName: "MWITA",
    lastName: "SAMSON",
    combination: "EGM",
    hasPassword: true,
    clearancePercentage: 100,
    isFullyCleared: true,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: false },
      hoe: { name: "Hoe", status: true },
      slasher: { name: "Slasher", status: true },
      bucket: { name: "Bucket", status: true },
      plate: { name: "Plate", status: true },
      cup: { name: "Cup", status: true },
      spoon: { name: "Spoon", status: false },
      bedSheet: { name: "Bed Sheet", status: true },
      mattress: { name: "Mattress", status: true },
      rimPapers: { name: "Rim Papers", status: false },
      schoolFees: { name: "School Fees", status: true },
      seriesContributions: { name: "Series Contributions", status: true },
      uniforms: { name: "Uniforms", status: true }
    },
    subjects: [
      { letter: "Y", name: "Economics", paid: true },
      { letter: "Z", name: "Geography", paid: true },
      { letter: "A", name: "Mathematics", paid: true },
      { letter: "B", name: "General Studies", paid: true }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-02-03" },
      form6: { amount: 950000, paid: true, paidDate: "2024-08-12" }
    }
  },
  // S0334-0991 - PETER MICHAEL MGANDILA - HGE
  {
    id: "21",
    examNumber: "S0334-0991",
    fullName: "PETER MICHAEL MGANDILA",
    firstName: "PETER",
    lastName: "MGANDILA",
    combination: "HGE",
    hasPassword: false,
    clearancePercentage: 70,
    isFullyCleared: false,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: true },
      hoe: { name: "Hoe", status: true },
      slasher: { name: "Slasher", status: false },
      bucket: { name: "Bucket", status: true },
      plate: { name: "Plate", status: true },
      cup: { name: "Cup", status: true },
      spoon: { name: "Spoon", status: true },
      bedSheet: { name: "Bed Sheet", status: false },
      mattress: { name: "Mattress", status: true },
      rimPapers: { name: "Rim Papers", status: true },
      schoolFees: { name: "School Fees", status: true },
      seriesContributions: { name: "Series Contributions", status: false },
      uniforms: { name: "Uniforms", status: true }
    },
    subjects: [
      { letter: "C", name: "History", paid: true },
      { letter: "D", name: "Geography", paid: true },
      { letter: "E", name: "Economics", paid: false },
      { letter: "F", name: "General Studies", paid: true }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-01-08" },
      form6: { amount: 950000, paid: false }
    }
  },
  // S0334-0992 - PETRO LUSANIKA LUBINZA - HGE
  {
    id: "22",
    examNumber: "S0334-0992",
    fullName: "PETRO LUSANIKA LUBINZA",
    firstName: "PETRO",
    lastName: "LUBINZA",
    combination: "HGE",
    hasPassword: false,
    clearancePercentage: 65,
    isFullyCleared: false,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: true },
      hoe: { name: "Hoe", status: false },
      slasher: { name: "Slasher", status: true },
      bucket: { name: "Bucket", status: true },
      plate: { name: "Plate", status: false },
      cup: { name: "Cup", status: true },
      spoon: { name: "Spoon", status: true },
      bedSheet: { name: "Bed Sheet", status: true },
      mattress: { name: "Mattress", status: true },
      rimPapers: { name: "Rim Papers", status: true },
      schoolFees: { name: "School Fees", status: false },
      seriesContributions: { name: "Series Contributions", status: true },
      uniforms: { name: "Uniforms", status: true }
    },
    subjects: [
      { letter: "G", name: "History", paid: true },
      { letter: "H", name: "Geography", paid: false },
      { letter: "I", name: "Economics", paid: true },
      { letter: "J", name: "General Studies", paid: true }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-02-17" },
      form6: { amount: 950000, paid: false }
    }
  },
  // S0334-0993 - RAMADHAN MSTAPHA JUMANNE - HGE
  {
    id: "23",
    examNumber: "S0334-0993",
    fullName: "RAMADHAN MSTAPHA JUMANNE",
    firstName: "RAMADHAN",
    lastName: "JUMANNE",
    combination: "HGE",
    hasPassword: true,
    clearancePercentage: 90,
    isFullyCleared: false,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: false },
      hoe: { name: "Hoe", status: true },
      slasher: { name: "Slasher", status: true },
      bucket: { name: "Bucket", status: true },
      plate: { name: "Plate", status: true },
      cup: { name: "Cup", status: true },
      spoon: { name: "Spoon", status: true },
      bedSheet: { name: "Bed Sheet", status: true },
      mattress: { name: "Mattress", status: false },
      rimPapers: { name: "Rim Papers", status: true },
      schoolFees: { name: "School Fees", status: true },
      seriesContributions: { name: "Series Contributions", status: true },
      uniforms: { name: "Uniforms", status: false }
    },
    subjects: [
      { letter: "K", name: "History", paid: true },
      { letter: "L", name: "Geography", paid: true },
      { letter: "M", name: "Economics", paid: true },
      { letter: "N", name: "General Studies", paid: false }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-01-14" },
      form6: { amount: 950000, paid: true, paidDate: "2024-08-08" }
    }
  },
  // S0334-0994 - REUBEN SAMWEL MISANA - CBG
  {
    id: "24",
    examNumber: "S0334-0994",
    fullName: "REUBEN SAMWEL MISANA",
    firstName: "REUBEN",
    lastName: "MISANA",
    combination: "CBG",
    hasPassword: true,
    clearancePercentage: 100,
    isFullyCleared: true,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: true },
      hoe: { name: "Hoe", status: true },
      slasher: { name: "Slasher", status: true },
      bucket: { name: "Bucket", status: false },
      plate: { name: "Plate", status: true },
      cup: { name: "Cup", status: true },
      spoon: { name: "Spoon", status: true },
      bedSheet: { name: "Bed Sheet", status: true },
      mattress: { name: "Mattress", status: true },
      rimPapers: { name: "Rim Papers", status: false },
      schoolFees: { name: "School Fees", status: true },
      seriesContributions: { name: "Series Contributions", status: true },
      uniforms: { name: "Uniforms", status: true }
    },
    subjects: [
      { letter: "O", name: "Chemistry", paid: true },
      { letter: "P", name: "Biology", paid: true },
      { letter: "Q", name: "Geography", paid: true },
      { letter: "R", name: "General Studies", paid: true }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-02-20" },
      form6: { amount: 950000, paid: true, paidDate: "2024-07-25" }
    }
  },
  // S0334-0995 - SAMSON MAHUSHI BUZINZA - CBG
  {
    id: "25",
    examNumber: "S0334-0995",
    fullName: "SAMSON MAHUSHI BUZINZA",
    firstName: "SAMSON",
    lastName: "BUZINZA",
    combination: "CBG",
    hasPassword: false,
    clearancePercentage: 70,
    isFullyCleared: false,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: true },
      hoe: { name: "Hoe", status: false },
      slasher: { name: "Slasher", status: true },
      bucket: { name: "Bucket", status: true },
      plate: { name: "Plate", status: true },
      cup: { name: "Cup", status: true },
      spoon: { name: "Spoon", status: false },
      bedSheet: { name: "Bed Sheet", status: true },
      mattress: { name: "Mattress", status: true },
      rimPapers: { name: "Rim Papers", status: true },
      schoolFees: { name: "School Fees", status: false },
      seriesContributions: { name: "Series Contributions", status: true },
      uniforms: { name: "Uniforms", status: true }
    },
    subjects: [
      { letter: "S", name: "Chemistry", paid: true },
      { letter: "T", name: "Biology", paid: false },
      { letter: "U", name: "Geography", paid: true },
      { letter: "V", name: "General Studies", paid: true }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-01-27" },
      form6: { amount: 950000, paid: false }
    }
  },
  // S0334-0996 - SHABAN MOHAMMED ABBAKAR - CBG
  {
    id: "26",
    examNumber: "S0334-0996",
    fullName: "SHABAN MOHAMMED ABBAKAR",
    firstName: "SHABAN",
    lastName: "ABBAKAR",
    combination: "CBG",
    hasPassword: true,
    clearancePercentage: 90,
    isFullyCleared: false,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: true },
      hoe: { name: "Hoe", status: true },
      slasher: { name: "Slasher", status: true },
      bucket: { name: "Bucket", status: true },
      plate: { name: "Plate", status: true },
      cup: { name: "Cup", status: false },
      spoon: { name: "Spoon", status: true },
      bedSheet: { name: "Bed Sheet", status: false },
      mattress: { name: "Mattress", status: true },
      rimPapers: { name: "Rim Papers", status: true },
      schoolFees: { name: "School Fees", status: true },
      seriesContributions: { name: "Series Contributions", status: false },
      uniforms: { name: "Uniforms", status: true }
    },
    subjects: [
      { letter: "W", name: "Chemistry", paid: true },
      { letter: "X", name: "Biology", paid: true },
      { letter: "Y", name: "Geography", paid: true },
      { letter: "Z", name: "General Studies", paid: false }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-02-05" },
      form6: { amount: 950000, paid: true, paidDate: "2024-08-15" }
    }
  },
  // S0334-0997 - SITTA BADO MAZUNGU - CBG
  {
    id: "27",
    examNumber: "S0334-0997",
    fullName: "SITTA BADO MAZUNGU",
    firstName: "SITTA",
    lastName: "MAZUNGU",
    combination: "CBG",
    hasPassword: false,
    clearancePercentage: 75,
    isFullyCleared: false,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: true },
      hoe: { name: "Hoe", status: true },
      slasher: { name: "Slasher", status: false },
      bucket: { name: "Bucket", status: true },
      plate: { name: "Plate", status: true },
      cup: { name: "Cup", status: true },
      spoon: { name: "Spoon", status: true },
      bedSheet: { name: "Bed Sheet", status: true },
      mattress: { name: "Mattress", status: true },
      rimPapers: { name: "Rim Papers", status: false },
      schoolFees: { name: "School Fees", status: true },
      seriesContributions: { name: "Series Contributions", status: true },
      uniforms: { name: "Uniforms", status: false }
    },
    subjects: [
      { letter: "A", name: "Chemistry", paid: true },
      { letter: "B", name: "Biology", paid: true },
      { letter: "C", name: "Geography", paid: false },
      { letter: "D", name: "General Studies", paid: true }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-01-11" },
      form6: { amount: 950000, paid: false }
    }
  },
  // S0334-0998 - THADEUS JOSEPH MALKIADI - HGL
  {
    id: "28",
    examNumber: "S0334-0998",
    fullName: "THADEUS JOSEPH MALKIADI",
    firstName: "THADEUS",
    lastName: "MALKIADI",
    combination: "HGL",
    hasPassword: true,
    clearancePercentage: 95,
    isFullyCleared: false,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: true },
      hoe: { name: "Hoe", status: true },
      slasher: { name: "Slasher", status: true },
      bucket: { name: "Bucket", status: false },
      plate: { name: "Plate", status: true },
      cup: { name: "Cup", status: true },
      spoon: { name: "Spoon", status: true },
      bedSheet: { name: "Bed Sheet", status: true },
      mattress: { name: "Mattress", status: false },
      rimPapers: { name: "Rim Papers", status: true },
      schoolFees: { name: "School Fees", status: true },
      seriesContributions: { name: "Series Contributions", status: true },
      uniforms: { name: "Uniforms", status: true }
    },
    subjects: [
      { letter: "A", name: "History", paid: true },
      { letter: "B", name: "Geography", paid: true },
      { letter: "C", name: "Language", paid: true },
      { letter: "D", name: "General Studies", paid: true }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-02-12" },
      form6: { amount: 950000, paid: true, paidDate: "2024-07-18" }
    }
  },
  // S0334-0999 - WASTARA SAID HESSEN - HGL
  {
    id: "29",
    examNumber: "S0334-0999",
    fullName: "WASTARA SAID HESSEN",
    firstName: "WASTARA",
    lastName: "HESSEN",
    combination: "HGL",
    hasPassword: false,
    clearancePercentage: 70,
    isFullyCleared: false,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: true },
      hoe: { name: "Hoe", status: false },
      slasher: { name: "Slasher", status: true },
      bucket: { name: "Bucket", status: true },
      plate: { name: "Plate", status: true },
      cup: { name: "Cup", status: true },
      spoon: { name: "Spoon", status: false },
      bedSheet: { name: "Bed Sheet", status: true },
      mattress: { name: "Mattress", status: true },
      rimPapers: { name: "Rim Papers", status: true },
      schoolFees: { name: "School Fees", status: false },
      seriesContributions: { name: "Series Contributions", status: true },
      uniforms: { name: "Uniforms", status: true }
    },
    subjects: [
      { letter: "A", name: "History", paid: true },
      { letter: "B", name: "Geography", paid: false },
      { letter: "C", name: "Language", paid: true },
      { letter: "D", name: "General Studies", paid: true }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-01-19" },
      form6: { amount: 950000, paid: false }
    }
  },
  // S0334-1000 - ZUBERI HAJI ZUBERI - HGL
  {
    id: "30",
    examNumber: "S0334-1000",
    fullName: "ZUBERI HAJI ZUBERI",
    firstName: "ZUBERI",
    lastName: "ZUBERI",
    combination: "HGL",
    hasPassword: false,
    clearancePercentage: 75,
    isFullyCleared: false,
    items: {
      softBroom: { name: "Soft Broom", status: true },
      softBrush: { name: "Soft Brush", status: true },
      hoe: { name: "Hoe", status: true },
      slasher: { name: "Slasher", status: true },
      bucket: { name: "Bucket", status: true },
      plate: { name: "Plate", status: false },
      cup: { name: "Cup", status: true },
      spoon: { name: "Spoon", status: true },
      bedSheet: { name: "Bed Sheet", status: true },
      mattress: { name: "Mattress", status: true },
      rimPapers: { name: "Rim Papers", status: false },
      schoolFees: { name: "School Fees", status: true },
      seriesContributions: { name: "Series Contributions", status: true },
      uniforms: { name: "Uniforms", status: true }
    },
    subjects: [
      { letter: "A", name: "History", paid: true },
      { letter: "B", name: "Geography", paid: true },
      { letter: "C", name: "Language", paid: true },
      { letter: "D", name: "General Studies", paid: false }
    ],
    fees: {
      form5: { amount: 800000, paid: true, paidDate: "2024-02-28" },
      form6: { amount: 950000, paid: false }
    }
  }
];