"use client";
import Form from "next/form";
import { PriorAuth } from "../types/types";

export default function AuthForm(props: {
	authForm: boolean;
	setAuthForm: Function;
	setAuthList: Function;
	currentAuthList: PriorAuth[];
}) {
	const { authForm, setAuthForm, setAuthList, currentAuthList } = props;

	const handleSubmit = async (formData: FormData) => {
		const firstName = formData.get("firstName") as string;
		const lastName = formData.get("lastName") as string;
		const insurance = formData.get("insurance") as string;
		const dob = formData.get("dob") as string;
		const status = "pending";
		const cptCode = formData.get("cptCode");
		const diagnosisCode = formData.get("diagnosisCode") as string;

		const newAuth: PriorAuth = {
			id: Date.now(),
			firstName: firstName,
			lastName: lastName,
			dob: dob,
			insurance: insurance,
			status: status,
			procedure: { cptCode: Number(cptCode), name: "test" },
			diagnosisCode: diagnosisCode,
		};

		const isDuplicate = currentAuthList.find(
			(auth) =>
				auth.firstName === newAuth.firstName &&
				auth.lastName === newAuth.lastName &&
				auth.dob === newAuth.dob &&
				auth.insurance === newAuth.insurance
		);

		if (isDuplicate) {
			alert("Duplicate patient found!");
			return;
		}

		try {
			const response = await fetch("/api/prior-auths", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(newAuth),
			});
			setAuthList(newAuth);
			setAuthForm(!authForm);
		} catch (error) {
			console.error("Error Submitting Form: ", error);
		}
	};

	return (
		<>
			<Form action={handleSubmit}>
				<input name="firstName" placeholder="First Name" required />
				<input name="lastName" placeholder="Last Name" required />
				<input name="dob" placeholder="Date of birth (MM-DD-YYYY)" required />
				<input name="insurance" placeholder="Insurance" required />
				<input name="cptCode" placeholder="CPT Code" required />
				<input name="diagnosisCode" placeholder="Diagnosis code" required />
				<button>Submit</button>
			</Form>
		</>
	);
}
