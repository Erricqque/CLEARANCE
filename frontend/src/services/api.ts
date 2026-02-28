// ============================================
// PROFESSIONAL MOCK API SERVICE
// Mwenge Secondary School - 30 Students
// with localStorage password persistence
// ============================================

console.log("✅ API Service Loaded - Mwenge Secondary School");

// ============================================
// TYPESCRIPT INTERFACES
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
  items: Record<string, { name: string; status: boolean }>;
  subjects: Array<{ letter: string; name: string; paid: boolean }>;
  fees: {
    form5: { amount: number; paid: boolean; paidDate?: string };
    form6: { amount: number; paid: boolean; paidDate?: string };
  };
}

export interface LoginResponse {
  token: string;
  student: {
    id: string;
    examNumber: string;
    fullName: string;
    combination: string;
    hasPassword: boolean;
    clearancePercentage: number;
    isFullyCleared: boolean;
  };
}

// ============================================
// COMPLETE STUDENT DATABASE (ALL 30)
// ============================================

const students: Student[] = [];

// Function to add students (makes the file cleaner)
const addStudent = (student: Student) => students.push(student);

// S0334-0971
addStudent({
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
});

// S0334-0972
addStudent({
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
});

// S0334-0973
addStudent({
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
});

// S0334-0974
addStudent({
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
});

// S0334-0975
addStudent({
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
});

// S0334-0976
addStudent({
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
});

// S0334-0977
addStudent({
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
});

// S0334-0978
addStudent({
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
});

// S0334-0979
addStudent({
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
});

// S0334-0980
addStudent({
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
});

// S0334-0981
addStudent({
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
});

// S0334-0982
addStudent({
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
});

// S0334-0983
addStudent({
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
});

// S0334-0984
addStudent({
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
});

// S0334-0985
addStudent({
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
});

// S0334-0986
addStudent({
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
});

// S0334-0987
addStudent({
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
});

// S0334-0988
addStudent({
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
});

// S0334-0989
addStudent({
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
});

// S0334-0990
addStudent({
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
});

// S0334-0991
addStudent({
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
});

// S0334-0992
addStudent({
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
});

// S0334-0993
addStudent({
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
});

// S0334-0994
addStudent({
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
});

// S0334-0995
addStudent({
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
});

// S0334-0996
addStudent({
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
});

// S0334-0997
addStudent({
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
});

// S0334-0998
addStudent({
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
});

// S0334-0999
addStudent({
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
});

// S0334-1000
addStudent({
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
});

// ============================================
// PASSWORD STORAGE (USING LOCALSTORAGE)
// ============================================

const PASSWORD_STORAGE_KEY = 'student_password_';

const savePassword = (studentId: string, password: string): void => {
  try {
    localStorage.setItem(`${PASSWORD_STORAGE_KEY}${studentId}`, password);
    console.log(`✅ Password saved for student ${studentId}`);
  } catch (error) {
    console.error("Error saving password:", error);
  }
};

const getPassword = (studentId: string): string | null => {
  try {
    return localStorage.getItem(`${PASSWORD_STORAGE_KEY}${studentId}`);
  } catch (error) {
    console.error("Error getting password:", error);
    return null;
  }
};

const hasPassword = (studentId: string): boolean => {
  const password = getPassword(studentId);
  return password !== null && password !== "";
};

const findStudentByExamNumber = (examNumber: string): Student | undefined => {
  return students.find(s => s.examNumber === examNumber);
};

const getLoggedInStudentId = (): string | null => {
  try {
    const studentStr = localStorage.getItem('student');
    if (!studentStr) return null;
    const student = JSON.parse(studentStr);
    return student.id || null;
  } catch (error) {
    console.error("Error getting logged in student:", error);
    return null;
  }
};

// ============================================
// AUTHENTICATION FUNCTIONS
// ============================================

export const loginWithLastName = (examNumber: string, lastName: string): Promise<any> => {
  console.log(`🔐 Login attempt: ${examNumber} / ${lastName}`);
  
  const student = findStudentByExamNumber(examNumber);
  
  if (!student) {
    console.log("❌ Student not found");
    return Promise.reject({ 
      response: { data: { msg: "Student not found" } } 
    });
  }
  
  if (student.lastName.toLowerCase() !== lastName.toLowerCase()) {
    console.log("❌ Last name does not match");
    return Promise.reject({ 
      response: { data: { msg: "Last name does not match" } } 
    });
  }
  
  console.log(`✅ Login successful for ${student.fullName}`);
  
  const studentHasPassword = hasPassword(student.id);
  
  // Create the student object to store
  const studentToStore = {
    id: student.id,
    examNumber: student.examNumber,
    fullName: student.fullName,
    combination: student.combination,
    hasPassword: studentHasPassword,
    clearancePercentage: student.clearancePercentage,
    isFullyCleared: student.isFullyCleared
  };
  
  // Store in localStorage
  localStorage.setItem('token', `mock-token-${student.id}`);
  localStorage.setItem('student', JSON.stringify(studentToStore));
  
  return Promise.resolve({
    data: {
      token: `mock-token-${student.id}`,
      student: studentToStore
    }
  });
};
export const loginWithPassword = (examNumber: string, password: string): Promise<any> => {
  console.log(`🔐 Password login attempt: ${examNumber}`);
  
  const student = findStudentByExamNumber(examNumber);
  
  if (!student) {
    console.log("❌ Student not found");
    return Promise.reject({ 
      response: { data: { msg: "Student not found" } } 
    });
  }
  
  const storedPassword = getPassword(student.id);
  
  if (!storedPassword) {
    console.log("❌ No password set for this student");
    return Promise.reject({ 
      response: { data: { msg: "Password not set. Use last name login first." } } 
    });
  }
  
  if (storedPassword !== password) {
    console.log("❌ Invalid password");
    return Promise.reject({ 
      response: { data: { msg: "Invalid password" } } 
    });
  }
  
  console.log(`✅ Password login successful for ${student.fullName}`);
  
  return Promise.resolve({
    data: {
      token: `mock-token-${student.id}`,
      student: {
        id: student.id,
        examNumber: student.examNumber,
        fullName: student.fullName,
        combination: student.combination,
        hasPassword: true,
        clearancePercentage: student.clearancePercentage,
        isFullyCleared: student.isFullyCleared
      }
    }
  });
};

export const setPassword = (password: string): Promise<any> => {
  console.log("🔐 Setting new password");
  
  return new Promise((resolve, reject) => {
    try {
      const studentId = getLoggedInStudentId();
      
      if (!studentId) {
        console.log("❌ No student logged in");
        reject({ response: { data: { msg: "No student logged in" } } });
        return;
      }
      
      if (password.length < 6) {
        console.log("❌ Password too short");
        reject({ response: { data: { msg: "Password must be at least 6 characters" } } });
        return;
      }
      
      savePassword(studentId, password);
      
      console.log(`✅ Password saved for student ${studentId}`);
      
      try {
        const studentStr = localStorage.getItem('student');
        if (studentStr) {
          const student = JSON.parse(studentStr);
          student.hasPassword = true;
          localStorage.setItem('student', JSON.stringify(student));
        }
      } catch (e) {
        console.error("Error updating student in localStorage:", e);
      }
      
      resolve({ data: { msg: "Password set successfully" } });
    } catch (error) {
      console.error("Error setting password:", error);
      reject({ response: { data: { msg: "Failed to set password" } } });
    }
  });
};

// ============================================
// DATA RETRIEVAL FUNCTIONS
// ============================================

export const getClearanceData = (): Promise<any> => {
  console.log("📊 Fetching clearance data");
  
  return new Promise((resolve, reject) => {
    try {
      // Get the logged-in student from localStorage
      const studentStr = localStorage.getItem('student');
      
      if (!studentStr) {
        console.log("❌ No student logged in");
        reject({ response: { data: { msg: "No student logged in" } } });
        return;
      }
      
      // Parse the logged-in student data
      const loggedInStudent = JSON.parse(studentStr);
      console.log("👤 Logged in student:", loggedInStudent);
      
      // Find the COMPLETE student data by ID
      const student = students.find(s => s.id === loggedInStudent.id);
      
      if (!student) {
        console.log("❌ Student data not found for ID:", loggedInStudent.id);
        reject({ response: { data: { msg: "Student data not found" } } });
        return;
      }
      
      console.log(`✅ Loading data for: ${student.fullName} (${student.examNumber})`);
      
      // Calculate cleared items count
      const itemsCleared = Object.values(student.items).filter(i => i.status).length;
      const subjectsPaid = student.subjects.filter(s => s.paid).length;
      const feesPaid = (student.fees.form5.paid ? 1 : 0) + (student.fees.form6.paid ? 1 : 0);
      const totalCleared = itemsCleared + subjectsPaid + feesPaid;
      
      // Return the CORRECT student's data
      resolve({ 
        data: {
          student: {
            examNumber: student.examNumber,
            fullName: student.fullName,
            combination: student.combination
          },
          items: student.items,
          subjects: student.subjects,
          fees: student.fees,
          clearance: {
            total: 20,
            cleared: totalCleared,
            percentage: Math.round((totalCleared / 20) * 100),
            isFullyCleared: totalCleared === 20
          }
        }
      });
    } catch (error) {
      console.error("Error getting clearance data:", error);
      reject({ response: { data: { msg: "Failed to get clearance data" } } });
    }
  });
};
export const getDashboardStats = (): Promise<any> => {
  console.log("📈 Fetching dashboard stats");
  
  return new Promise((resolve) => {
    const total = students.length;
    
    const fullyCleared = students.filter(s => {
      const itemsCleared = Object.values(s.items).filter(i => i.status).length;
      const subjectsPaid = s.subjects.filter(sub => sub.paid).length;
      const feesPaid = (s.fees.form5.paid ? 1 : 0) + (s.fees.form6.paid ? 1 : 0);
      return (itemsCleared + subjectsPaid + feesPaid) === 20;
    }).length;
    
    const partiallyCleared = total - fullyCleared;
    
    const comboMap: Record<string, { count: number; totalPercent: number }> = {};
    
    students.forEach(s => {
      if (!comboMap[s.combination]) {
        comboMap[s.combination] = { count: 0, totalPercent: 0 };
      }
      comboMap[s.combination].count++;
      
      const itemsCleared = Object.values(s.items).filter(i => i.status).length;
      const subjectsPaid = s.subjects.filter(sub => sub.paid).length;
      const feesPaid = (s.fees.form5.paid ? 1 : 0) + (s.fees.form6.paid ? 1 : 0);
      const cleared = itemsCleared + subjectsPaid + feesPaid;
      const percent = Math.round((cleared / 20) * 100);
      
      comboMap[s.combination].totalPercent += percent;
    });
    
    const combinations = Object.entries(comboMap).map(([name, data]) => ({
      _id: name,
      count: data.count,
      avgClearance: Math.round(data.totalPercent / data.count)
    }));
    
    resolve({
      data: {
        total,
        fullyCleared,
        partiallyCleared,
        combinations
      }
    });
  });
};

// Export everything
export default {
  loginWithLastName,
  loginWithPassword,
  setPassword,
  getClearanceData,
  getDashboardStats
};