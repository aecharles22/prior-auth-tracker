import { PriorAuth } from '../types/types';

export const mockAuthorizations: PriorAuth[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Smith",
    status: "approved",
    cptCode: 99213,
    diagnosisCode: "M25.561",
    notes: "Routine office visit for knee pain management"
  },
  {
    id: 2,
    firstName: "Sarah",
    lastName: "Johnson",
    status: "pending",
    cptCode: 73721,
    diagnosisCode: "S72.001A",
    notes: "MRI scan required for fracture assessment"
  },
  {
    id: 3,
    firstName: "Michael",
    lastName: "Davis",
    status: "denied",
    cptCode: 29881,
    diagnosisCode: "M23.201",
    notes: "Arthroscopy denied - conservative treatment required first"
  },
  {
    id: 4,
    firstName: "Emily",
    lastName: "Wilson",
    status: "approved",
    cptCode: 93306,
    diagnosisCode: "I25.10",
    notes: "Echocardiogram approved for cardiac evaluation"
  },
  {
    id: 5,
    firstName: "Robert",
    lastName: "Brown",
    status: "pending",
    cptCode: 45378,
    diagnosisCode: "K92.2",
    notes: "Colonoscopy authorization under review"
  },
  {
    id: 6,
    firstName: "Lisa",
    lastName: "Miller",
    status: "approved",
    cptCode: 76700,
    diagnosisCode: "R10.9",
    notes: "Abdominal ultrasound approved for pain investigation"
  },
  {
    id: 7,
    firstName: "David",
    lastName: "Garcia",
    status: "denied",
    cptCode: 64483,
    diagnosisCode: "M54.12",
    notes: "Epidural injection denied - insufficient documentation"
  },
  {
    id: 8,
    firstName: "Jennifer",
    lastName: "Martinez",
    status: "expired",
    cptCode: 99214,
    diagnosisCode: "E11.9",
    notes: "Extended office visit for diabetes management"
  },
  {
    id: 9,
    firstName: "Christopher",
    lastName: "Anderson",
    status: "expired",
    cptCode: 70553,
    diagnosisCode: "G43.909",
    notes: "Brain MRI authorization pending for migraine evaluation"
  },
  {
    id: 10,
    firstName: "Amanda",
    lastName: "Taylor",
    status: "approved",
    cptCode: 19120,
    diagnosisCode: "N60.11",
    notes: "Breast biopsy approved for suspicious mass"
  },
  {
    id: 11,
    firstName: "James",
    lastName: "Thomas",
    status: "denied",
    cptCode: 27447,
    diagnosisCode: "M17.11",
    notes: "Knee replacement denied - patient too young, try PT first"
  },
  {
    id: 12,
    firstName: "Michelle",
    lastName: "Jackson",
    status: "expired",
    cptCode: 90834,
    diagnosisCode: "F32.9",
    notes: "Psychotherapy sessions authorization in progress"
  },
  {
    id: 13,
    firstName: "Kevin",
    lastName: "White",
    status: "approved",
    cptCode: 36415,
    diagnosisCode: "Z01.00",
    notes: "Routine blood draw approved for annual physical"
  },
  {
    id: 14,
    firstName: "Rachel",
    lastName: "Harris",
    status: "expired",
    cptCode: 97110,
    diagnosisCode: "M25.512",
    notes: "Physical therapy approved for wrist pain rehabilitation"
  },
  {
    id: 15,
    firstName: "Daniel",
    lastName: "Clark",
    status: "pending",
    cptCode: 43239,
    diagnosisCode: "K21.9",
    notes: "Upper endoscopy authorization awaiting peer review"
  }
];