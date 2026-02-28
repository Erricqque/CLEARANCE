// ============================================
// PURE MOCK API - WITH TYPESCRIPT TYPES
// ============================================

console.log("✅ Mock API loaded - 100% localhost-free");

// Define types
interface Student {
  id: string;
  examNumber: string;
  fullName: string;
  combination: string;
  hasPassword: boolean;
  clearancePercentage: number;
  isFullyCleared: boolean;
}

interface Item {
  name: string;
  status: boolean;
}

interface Subject {
  letter: string;
  name: string;
  paid: boolean;
}

interface Fee {
  amount: number;
  paid: boolean;
  paidDate?: string;
}

interface ClearanceData {
  student: {
    examNumber: string;
    fullName: string;
    combination: string;
  };
  items: Record<string, Item>;
  subjects: Subject[];
  fees: {
    form5: Fee;
    form6: Fee;
  };
  clearance: {
    total: number;
    cleared: number;
    percentage: number;
    isFullyCleared: boolean;
  };
}

// Mock data
const mockStudent: Student = {
  id: "1",
  examNumber: "S0334-0971",
  fullName: "ABBUBBAKAR AMIN ADAMN",
  combination: "PMC",
  hasPassword: false,
  clearancePercentage: 65,
  isFullyCleared: false
};

const mockClearanceData: ClearanceData = {
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

// Mock functions with proper TypeScript types
export const loginWithLastName = (examNumber: string, lastName: string): Promise<any> => {
  console.log("✅ Mock login successful");
  return Promise.resolve({
    data: {
      token: "mock-token-123",
      student: { ...mockStudent, examNumber }
    }
  });
};

export const loginWithPassword = (examNumber: string, password: string): Promise<any> => {
  console.log("✅ Mock password login successful");
  return Promise.resolve({
    data: {
      token: "mock-token-123",
      student: { ...mockStudent, examNumber, hasPassword: true }
    }
  });
};

export const setPassword = (password: string): Promise<any> => {
  console.log("✅ Mock password set");
  return Promise.resolve({ data: { msg: "Password set successfully" } });
};

export const getClearanceData = (): Promise<any> => {
  console.log("✅ Mock clearance data retrieved");
  return Promise.resolve({ data: mockClearanceData });
};

export const getDashboardStats = (): Promise<any> => {
  console.log("✅ Mock dashboard stats retrieved");
  return Promise.resolve({
    data: {
      total: 30,
      fullyCleared: 5,
      partiallyCleared: 25,
      combinations: [
        { _id: "PMC", count: 4, avgClearance: 70 },
        { _id: "PCM", count: 4, avgClearance: 65 },
        { _id: "HKL", count: 3, avgClearance: 60 }
      ]
    }
  });
};