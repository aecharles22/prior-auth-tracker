export interface PriorAuth {
	id: number;
	firstName: string;
	lastName: string;
	status: 'pending' | 'submitted' | 'approved' | 'denied' | 'expired';
	cptCode: number;
	diagnosisCode: string;
	notes?: string;
}
