"use client";
import Form from "next/form";
import { PriorAuth } from "../types/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function AuthForm(props: {
	authForm: boolean;
	setAuthForm: (authFormOpen: boolean) => void;
	setAuthList: () => void;
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

		const newAuth = {
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
			const request = await fetch("/api/prior-auths", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(newAuth),
			});

			if (request.ok) {
				setAuthForm(!authForm);
				setAuthList();
			}
		} catch (error) {
			console.error("Error Submitting Form: ", error);
		}
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Create New Prior Authorization</CardTitle>
				<CardDescription>
					Enter patient and procedure information to create a new authorization.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form action={handleSubmit} className="space-y-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="firstName">First Name</Label>
							<Input
								id="firstName"
								name="firstName"
								placeholder="John"
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="lastName">Last Name</Label>
							<Input id="lastName" name="lastName" placeholder="Doe" required />
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="dob">Date of Birth</Label>
							<Input id="dob" name="dob" placeholder="MM-DD-YYYY" required />
						</div>
						<div className="space-y-2">
							<Label htmlFor="insurance">Insurance</Label>
							<Input
								id="insurance"
								name="insurance"
								placeholder="Blue Cross Blue Shield"
								required
							/>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="cptCode">CPT Code</Label>
							<Input id="cptCode" name="cptCode" placeholder="99213" required />
						</div>
						<div className="space-y-2">
							<Label htmlFor="diagnosisCode">Diagnosis Code</Label>
							<Input
								id="diagnosisCode"
								name="diagnosisCode"
								placeholder="M25.563"
								required
							/>
						</div>
					</div>

					<div className="flex gap-2 justify-end">
						<Button
							type="button"
							variant="outline"
							onClick={() => setAuthForm(!authForm)}
						>
							Cancel
						</Button>
						<Button type="submit">Create Authorization</Button>
					</div>
				</Form>
			</CardContent>
		</Card>
	);
}
