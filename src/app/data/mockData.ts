import { PriorAuth } from '../types/types';

export const mockAuthorizations: PriorAuth[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Smith",
    insurance: "Blue Cross Blue Shield",
    status: "approved",
    procedure: { cptCode: 99213, name: "Office Visit - Established Patient" },
    diagnosisCode: "M25.561",
    notes: "Routine office visit for knee pain management"
  },
  {
    id: 2,
    firstName: "Sarah",
    lastName: "Johnson",
    insurance: "Aetna",
    status: "pending",
    procedure: { cptCode: 73721, name: "MRI Lower Extremity" },
    diagnosisCode: "S72.001A",
    notes: "MRI scan required for fracture assessment"
  },
  {
    id: 3,
    firstName: "Michael",
    lastName: "Davis",
    insurance: "United Healthcare",
    status: "denied",
    procedure: { cptCode: 29881, name: "Knee Arthroscopy" },
    diagnosisCode: "M23.201",
    notes: "Arthroscopy denied - conservative treatment required first"
  },
  {
    id: 4,
    firstName: "Emily",
    lastName: "Wilson",
    insurance: "Cigna",
    status: "approved",
    procedure: { cptCode: 93306, name: "Echocardiography" },
    diagnosisCode: "I25.10",
    notes: "Echocardiogram approved for cardiac evaluation"
  },
  {
    id: 5,
    firstName: "Robert",
    lastName: "Brown",
    insurance: "Kaiser Permanente",
    status: "pending",
    procedure: { cptCode: 45378, name: "Colonoscopy" },
    diagnosisCode: "K92.2",
    notes: "Colonoscopy authorization under review"
  },
  {
    id: 6,
    firstName: "Lisa",
    lastName: "Miller",
    insurance: "Humana",
    status: "approved",
    procedure: { cptCode: 76700, name: "Abdominal Ultrasound" },
    diagnosisCode: "R10.9",
    notes: "Abdominal ultrasound approved for pain investigation"
  },
  {
    id: 7,
    firstName: "David",
    lastName: "Garcia",
    insurance: "Blue Cross Blue Shield",
    status: "denied",
    procedure: { cptCode: 64483, name: "Epidural Injection" },
    diagnosisCode: "M54.12",
    notes: "Epidural injection denied - insufficient documentation"
  },
  {
    id: 8,
    firstName: "Jennifer",
    lastName: "Martinez",
    insurance: "Medicaid",
    status: "expired",
    procedure: { cptCode: 99214, name: "Office Visit - Extended" },
    diagnosisCode: "E11.9",
    notes: "Extended office visit for diabetes management"
  },
  {
    id: 9,
    firstName: "Christopher",
    lastName: "Anderson",
    insurance: "Medicare",
    status: "expired",
    procedure: { cptCode: 70553, name: "Brain MRI with Contrast" },
    diagnosisCode: "G43.909",
    notes: "Brain MRI authorization pending for migraine evaluation"
  },
  {
    id: 10,
    firstName: "Amanda",
    lastName: "Taylor",
    insurance: "Anthem",
    status: "approved",
    procedure: { cptCode: 19120, name: "Breast Biopsy" },
    diagnosisCode: "N60.11",
    notes: "Breast biopsy approved for suspicious mass"
  },
  {
    id: 11,
    firstName: "James",
    lastName: "Thomas",
    insurance: "United Healthcare",
    status: "denied",
    procedure: { cptCode: 27447, name: "Total Knee Replacement" },
    diagnosisCode: "M17.11",
    notes: "Knee replacement denied - patient too young, try PT first"
  },
  {
    id: 12,
    firstName: "Michelle",
    lastName: "Jackson",
    insurance: "Aetna",
    status: "expired",
    procedure: { cptCode: 90834, name: "Psychotherapy Session" },
    diagnosisCode: "F32.9",
    notes: "Psychotherapy sessions authorization in progress"
  },
  {
    id: 13,
    firstName: "Kevin",
    lastName: "White",
    insurance: "Cigna",
    status: "approved",
    procedure: { cptCode: 36415, name: "Blood Draw" },
    diagnosisCode: "Z01.00",
    notes: "Routine blood draw approved for annual physical"
  },
  {
    id: 14,
    firstName: "Rachel",
    lastName: "Harris",
    insurance: "Humana",
    status: "expired",
    procedure: { cptCode: 97110, name: "Physical Therapy" },
    diagnosisCode: "M25.512",
    notes: "Physical therapy approved for wrist pain rehabilitation"
  },
  {
    id: 15,
    firstName: "Daniel",
    lastName: "Clark",
    insurance: "Kaiser Permanente",
    status: "pending",
    procedure: { cptCode: 43239, name: "Upper Endoscopy" },
    diagnosisCode: "K21.9",
    notes: "Upper endoscopy authorization awaiting peer review"
  }
];