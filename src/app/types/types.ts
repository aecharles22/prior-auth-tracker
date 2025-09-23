export interface PriorAuth {
	id: number;
	firstName: string;
	lastName: string;
	insurance: string;
	status: 'pending' | 'submitted' | 'approved' | 'denied' | 'expired';
	procedure: {cptCode: number, name:string}
	diagnosisCode: string;
	notes?: string;
}
