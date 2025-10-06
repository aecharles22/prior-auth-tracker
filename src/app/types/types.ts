export interface PriorAuth {
	id: string;
	firstName: string;
	lastName: string;
	dob: string;
	insurance: string;
	status: 'pending' | 'submitted' | 'approved' | 'denied' | 'expired';
	procedure: {cptCode: number, name:string}
	diagnosisCode: string;
	notes?: string;
}
