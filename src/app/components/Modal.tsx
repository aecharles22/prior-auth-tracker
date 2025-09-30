import Form from "next/form";
import { PriorAuth } from "../types/types";

export default function Modal(props: {
	auth: PriorAuth;
	open: boolean;
	setOpen: Function;
	updatedAuth: Function;
}) {
	const { auth, open, setOpen, updatedAuth } = props;
	const handleEdit = async (formData: FormData) => {
		const id = auth.id;
		const firstName = formData.get("firstName") as string;
		const lastName = formData.get("lastName") as string;
		const insurance = formData.get("insurance") as string;
		const dob = formData.get("dob") as string;
		const status = "pending";
		const diagnosisCode = formData.get("diagnosisCode") as string;
		const note = (formData.get("note") as string) || "";
		const newAuth: PriorAuth = {
			id: Number(id),
			firstName: firstName,
			lastName: lastName,
			insurance: insurance,
			dob: dob,
			status: status,
			procedure: auth.procedure,
			diagnosisCode: diagnosisCode,
			notes: note,
		};

		const request = await fetch(`/api/prior-auths/${id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newAuth),
		});

		if (request.ok) {
			setOpen(false);
			updatedAuth();
		} else {
			console.error("Failed to update");
		}
	};

	return (
		<Form action={handleEdit}>
			<input
				name="firstName"
				placeholder="First Name"
				defaultValue={auth.firstName}
				required
			/>
			<input
				name="lastName"
				placeholder="Last Name"
				defaultValue={auth.lastName}
				required
			/>
			<input
				name="dob"
				placeholder="Date of birth (MM-DD-YYYY)"
				defaultValue={auth.dob}
				required
			/>
			<input
				name="insurance"
				placeholder="Insurance"
				defaultValue={auth.insurance}
				required
			/>
			<input
				name="cptCode"
				placeholder="CPT Code"
				defaultValue={auth.procedure.cptCode}
				required
			/>
			<input
				name="diagnosisCode"
				placeholder="Diagnosis code"
				defaultValue={auth.diagnosisCode}
				required
			/>
			<input name="note" placeholder="Notes..." defaultValue={auth.notes} />
			<button>Submit</button>
		</Form>
	);
}
