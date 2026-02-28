// ============================================
// MWENGE SECONDARY SCHOOL - COMPLETE API
// ALL 30 STUDENTS - FULLY WORKING
// ============================================

console.log("✅ API Service Loaded - All 30 Students Ready");

// ============================================
// TYPES
// ============================================
export interface Student {
  id: string;
  examNumber: string;
  fullName: string;
  firstName: string;
  lastName: string;
  combination: string;
  hasPassword: boolean;
  clearancePercentage: number;
  isFullyCleared: boolean;
  items: {
    softBroom: { name: string; status: boolean };
    softBrush: { name: string; status: boolean };
    hoe: { name: string; status: boolean };
    slasher: { name: string; status: boolean };
    bucket: { name: string; status: boolean };
    plate: { name: string; status: boolean };
    cup: { name: string; status: boolean };
    spoon: { name: string; status: boolean };
    bedSheet: { name: string; status: boolean };
    mattress: { name: string; status: boolean };
    rimPapers: { name: string; status: boolean };
    schoolFees: { name: string; status: boolean };
    seriesContributions: { name: string; status: boolean };
    uniforms: { name: string; status: boolean };
  };
  subjects: Array<{ letter: string; name: string; paid: boolean }>;
  fees: {
    form5: { amount: number; paid: boolean; paidDate?: string };
    form6: { amount: number; paid: boolean; paidDate?: string };
  };
}

// ============================================
// COMPLETE STUDENT DATABASE - ALL 30 STUDENTS
// ============================================
const students: Student[] = [
  // ========== STUDENT 1 ==========
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
  // ========== STUDENT 2 ==========
  {
    id: "2",
    examNumber: "S0334-0972",
    fullName: "BARAKA MSEI THADEI",
    firstName: "BARAKA",
    lastName: "THADEI",
    combination: "PMC",
    hasPassword: false,
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
  // ========== STUDENT 3 ==========
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
  // ========== STUDENT 4 ==========
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
  // ========== STUDENT 5 ==========
  {
    id: "5",
    examNumber: "S0334-0975",
    fullName: "ELISHA BOAZ MAGEMBE",
    firstName: "ELISHA",
    lastName: "MAGEMBE",
    combination: "PCM",
    hasPassword: false,
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
  // ========== STUDENT 6 ==========
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
  // ========== STUDENT 7 ==========
  {
    id: "7",
    examNumber: "S0334-0977",
    fullName: "EMMANUEL JOEL DAUDI",
    firstName: "EMMANUEL",
    lastName: "DAUDI",
    combination: "PCM",
    hasPassword: false,
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
  // ========== STUDENT 8 ==========
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
  // ========== STUDENT 9 ==========
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
  // ========== STUDENT 10 ==========
  {
    id: "10",
    examNumber: "S0334-0980",
    fullName: "FINEHASI ELIEZARI RAMADHANI",
    firstName: "FINEHASI",
    lastName: "RAMADHANI",
    combination: "HKL",
    hasPassword: false,
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
  // ========== STUDENT 11 ==========
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
  // ========== STUDENT 12 ==========
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
  // ========== STUDENT 13 ==========
  {
    id: "13",
    examNumber: "S0334-0983",
    fullName: "IZRAEL PHILIMON IZRAEL",
    firstName: "IZRAEL",
    lastName: "IZRAEL",
    combination: "HGK",
    hasPassword: false,
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
  // ========== STUDENT 14 ==========
  {
    id: "14",
    examNumber: "S0334-0984",
    fullName: "JOVIN MASOLOGO MAJUTO",
    firstName: "JOVIN",
    lastName: "MAJUTO",
    combination: "HGK",
    hasPassword: false,
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
  // ========== STUDENT 15 ==========
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
  // ========== STUDENT 16 ==========
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
  // ========== STUDENT 17 ==========
  {
    id: "17",
    examNumber: "S0334-0987",
    fullName: "MAYANGA JOSEPH MAYANGA",
    firstName: "MAYANGA",
    lastName: "MAYANGA",
    combination: "PCB",
    hasPassword: false,
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
  // ========== STUDENT 18 ==========
  {
    id: "18",
    examNumber: "S0334-0988",
    fullName: "MENG'ORIKI SAIGILU MOLLEL",
    firstName: "MENG'ORIKI",
    lastName: "MOLLEL",
    combination: "EGM",
    hasPassword: false,
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
  // ========== STUDENT 19 ==========
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
  // ========== STUDENT 20 ==========
  {
    id: "20",
    examNumber: "S0334-0990",
    fullName: "MWITA IBRAHIM SAMSON",
    firstName: "MWITA",
    lastName: "SAMSON",
    combination: "EGM",
    hasPassword: false,
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
  // ========== STUDENT 21 ==========
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
  // ========== STUDENT 22 ==========
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
  // ========== STUDENT 23 ==========
  {
    id: "23",
    examNumber: "S0334-0993",
    fullName: "RAMADHAN MSTAPHA JUMANNE",
    firstName: "RAMADHAN",
    lastName: "JUMANNE",
    combination: "HGE",
    hasPassword: false,
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
  // ========== STUDENT 24 ==========
  {
    id: "24",
    examNumber: "S0334-0994",
    fullName: "REUBEN SAMWEL MISANA",
    firstName: "REUBEN",
    lastName: "MISANA",
    combination: "CBG",
    hasPassword: false,
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
  // ========== STUDENT 25 ==========
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
  // ========== STUDENT 26 ==========
  {
    id: "26",
    examNumber: "S0334-0996",
    fullName: "SHABAN MOHAMMED ABBAKAR",
    firstName: "SHABAN",
    lastName: "ABBAKAR",
    combination: "CBG",
    hasPassword: false,
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
  // ========== STUDENT 27 ==========
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
  // ========== STUDENT 28 ==========
  {
    id: "28",
    examNumber: "S0334-0998",
    fullName: "THADEUS JOSEPH MALKIADI",
    firstName: "THADEUS",
    lastName: "MALKIADI",
    combination: "HGL",
    hasPassword: false,
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
  // ========== STUDENT 29 ==========
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
  // ========== STUDENT 30 ==========
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

// ============================================
// PASSWORD STORAGE
// ============================================
const PASSWORD_KEY = 'student_pwd_';

const savePassword = (studentId: string, password: string): void => {
  localStorage.setItem(`${PASSWORD_KEY}${studentId}`, password);
};

const getPassword = (studentId: string): string | null => {
  return localStorage.getItem(`${PASSWORD_KEY}${studentId}`);
};

const hasPassword = (studentId: string): boolean => {
  return getPassword(studentId) !== null;
};

const findStudentByExamNumber = (examNumber: string): Student | undefined => {
  return students.find(s => s.examNumber === examNumber);
};

// ============================================
// AUTH FUNCTIONS
// ============================================
export const loginWithLastName = (examNumber: string, lastName: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const student = findStudentByExamNumber(examNumber);
      
      if (!student) {
        reject({ response: { data: { msg: "Student not found" } } });
        return;
      }
      
      if (student.lastName.toLowerCase() !== lastName.toLowerCase()) {
        reject({ response: { data: { msg: "Last name does not match" } } });
        return;
      }
      
      const studentHasPassword = hasPassword(student.id);
      
      const studentData = {
        id: student.id,
        examNumber: student.examNumber,
        fullName: student.fullName,
        combination: student.combination,
        hasPassword: studentHasPassword,
        clearancePercentage: student.clearancePercentage,
        isFullyCleared: student.isFullyCleared
      };
      
      localStorage.setItem('token', `token-${student.id}`);
      localStorage.setItem('student', JSON.stringify(studentData));
      
      resolve({
        data: {
          token: `token-${student.id}`,
          student: studentData
        }
      });
    }, 500);
  });
};

export const loginWithPassword = (examNumber: string, password: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const student = findStudentByExamNumber(examNumber);
      
      if (!student) {
        reject({ response: { data: { msg: "Student not found" } } });
        return;
      }
      
      const storedPassword = getPassword(student.id);
      
      if (!storedPassword) {
        reject({ response: { data: { msg: "Password not set. Use last name login first." } } });
        return;
      }
      
      if (storedPassword !== password) {
        reject({ response: { data: { msg: "Invalid password" } } });
        return;
      }
      
      const studentData = {
        id: student.id,
        examNumber: student.examNumber,
        fullName: student.fullName,
        combination: student.combination,
        hasPassword: true,
        clearancePercentage: student.clearancePercentage,
        isFullyCleared: student.isFullyCleared
      };
      
      localStorage.setItem('token', `token-${student.id}`);
      localStorage.setItem('student', JSON.stringify(studentData));
      
      resolve({
        data: {
          token: `token-${student.id}`,
          student: studentData
        }
      });
    }, 500);
  });
};

export const setPassword = (password: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const studentStr = localStorage.getItem('student');
      
      if (!studentStr) {
        reject({ response: { data: { msg: "No student logged in" } } });
        return;
      }
      
      const student = JSON.parse(studentStr);
      
      if (password.length < 6) {
        reject({ response: { data: { msg: "Password must be at least 6 characters" } } });
        return;
      }
      
      savePassword(student.id, password);
      
      student.hasPassword = true;
      localStorage.setItem('student', JSON.stringify(student));
      
      resolve({ data: { msg: "Password set successfully" } });
    }, 500);
  });
};

export const getClearanceData = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const studentStr = localStorage.getItem('student');
      
      if (!studentStr) {
        reject({ response: { data: { msg: "Not logged in" } } });
        return;
      }
      
      const loggedInStudent = JSON.parse(studentStr);
      // CRITICAL: Find by ID, not by index!
      const fullStudent = students.find(s => s.id === loggedInStudent.id);
      
      if (!fullStudent) {
        reject({ response: { data: { msg: "Student not found" } } });
        return;
      }
      
      const itemsCleared = Object.values(fullStudent.items).filter(i => i.status).length;
      const subjectsPaid = fullStudent.subjects.filter(s => s.paid).length;
      const feesPaid = (fullStudent.fees.form5.paid ? 1 : 0) + (fullStudent.fees.form6.paid ? 1 : 0);
      const totalCleared = itemsCleared + subjectsPaid + feesPaid;
      
      resolve({
        data: {
          student: {
            examNumber: fullStudent.examNumber,
            fullName: fullStudent.fullName,
            combination: fullStudent.combination
          },
          items: fullStudent.items,
          subjects: fullStudent.subjects,
          fees: fullStudent.fees,
          clearance: {
            total: 20,
            cleared: totalCleared,
            percentage: Math.round((totalCleared / 20) * 100),
            isFullyCleared: totalCleared === 20
          }
        }
      });
    }, 500);
  });
};

export const getDashboardStats = (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const total = students.length;
      
      const fullyCleared = students.filter(s => {
        const itemsCleared = Object.values(s.items).filter(i => i.status).length;
        const subjectsPaid = s.subjects.filter(sub => sub.paid).length;
        const feesPaid = (s.fees.form5.paid ? 1 : 0) + (s.fees.form6.paid ? 1 : 0);
        return (itemsCleared + subjectsPaid + feesPaid) === 20;
      }).length;
      
      resolve({
        data: {
          total,
          fullyCleared,
          partiallyCleared: total - fullyCleared,
          combinations: []
        }
      });
    }, 500);
  });
};