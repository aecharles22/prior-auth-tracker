type Status = "Approved" | "Denied" | "Pending";

export interface PriorAuth {
	id: number;
	firstName: string;
	lastName: string;
	status: Status;
	cptCode: number;
	diagnosisCode: string;
	notes?: string;
}
