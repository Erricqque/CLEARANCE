// Mock data for demonstration (no backend needed)
const mockStudent = {
  token: "mock-token-12345",
  student: {
    id: "1",
    examNumber: "S0334-0971",
    fullName: "ABBUBBAKAR AMIN ADAMN",
    combination: "PMC",
    hasPassword: false,
    clearancePercentage: 65,
    isFullyCleared: false
  }
};

const mockClearanceData = {
  student: {
    examNumber: "S0334-0971",
    fullName: "ABBUBBAKAR AMIN ADAMN",
    combination: "PMC"
  },
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
  },
  clearance: {
    total: 20,
    cleared: 13,
    percentage: 65,
    isFullyCleared: false
  }
};

// Mock API functions
export const loginWithLastName = (examNumber: string, lastName: string) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: mockStudent }), 1000);
  });
};

export const loginWithPassword = (examNumber: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === "password123") {
        resolve({ data: mockStudent });
      } else {
        reject({ response: { data: { msg: "Invalid password" } } });
      }
    }, 1000);
  });
};

export const setPassword = (password: string) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: { msg: "Password set successfully" } }), 1000);
  });
};

export const getClearanceData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: mockClearanceData }), 1000);
  });
};

export const getDashboardStats = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ 
      data: { 
        total: 30, 
        fullyCleared: 5, 
        partiallyCleared: 25,
        combinations: []
      } 
    }), 1000);
  });
};