"use client";
import Form from "next/form";
import { PriorAuth } from "../types/types";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function Modal(props: {
	auth: PriorAuth;
	setOpen: Function;
	updatedAuth: Function;
}) {
	const { auth, setOpen, updatedAuth } = props;
	const [status, setStatus] = useState(auth.status);

	const handleEdit = async (formData: FormData) => {
		const id = auth.id;
		const firstName = formData.get("firstName") as string;
		const lastName = formData.get("lastName") as string;
		const insurance = formData.get("insurance") as string;
		const dob = formData.get("dob") as string;
		const diagnosisCode = formData.get("diagnosisCode") as string;
		const note = (formData.get("note") as string) || "";
		const newAuth: PriorAuth = {
			id: id,
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
		<Dialog open={true} onOpenChange={(open) => setOpen(open)}>
			<DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>
						Edit Authorization - {auth.lastName}, {auth.firstName}
					</DialogTitle>
					<DialogDescription>
						Update patient and procedure information for this prior
						authorization.
					</DialogDescription>
				</DialogHeader>

				<Form action={handleEdit} className="space-y-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="firstName">First Name</Label>
							<Input
								id="firstName"
								name="firstName"
								defaultValue={auth.firstName}
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="lastName">Last Name</Label>
							<Input
								id="lastName"
								name="lastName"
								defaultValue={auth.lastName}
								required
							/>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="dob">Date of Birth</Label>
							<Input id="dob" name="dob" defaultValue={auth.dob} required />
						</div>
						<div className="space-y-2">
							<Label htmlFor="insurance">Insurance</Label>
							<Input
								id="insurance"
								name="insurance"
								defaultValue={auth.insurance}
								required
							/>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="cptCode">CPT Code</Label>
							<Input
								id="cptCode"
								name="cptCode"
								defaultValue={auth.procedure.cptCode}
								required
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="diagnosisCode">Diagnosis Code</Label>
							<Input
								id="diagnosisCode"
								name="diagnosisCode"
								defaultValue={auth.diagnosisCode}
								required
							/>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="space-y-2">
							<Label htmlFor="status">Status</Label>
							<Select value={status} onValueChange={setStatus}>
								<SelectTrigger>
									<SelectValue placeholder="Select status" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="pending">Pending</SelectItem>
									<SelectItem value="submitted">Submitted</SelectItem>
									<SelectItem value="approved">Approved</SelectItem>
									<SelectItem value="denied">Denied</SelectItem>
									<SelectItem value="expired">Expired</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="space-y-2">
							<Label htmlFor="note">Notes</Label>
							<Input
								id="note"
								name="note"
								placeholder="Add notes..."
								defaultValue={auth.notes}
							/>
						</div>
					</div>

					<div className="flex gap-2 justify-end">
						<Button
							type="button"
							variant="outline"
							onClick={() => setOpen(false)}
						>
							Cancel
						</Button>
						<Button type="submit">Save Changes</Button>
					</div>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
