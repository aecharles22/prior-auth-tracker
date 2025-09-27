"use client";
import { PriorAuth } from "../types/types";
import { useState } from "react";
import AuthForm from "./AuthForm";
import Form from "next/form";

function Modal(props: {
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
		setOpen(false);
		updatedAuth(newAuth);
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

export default function Dashboard({
	authorizations,
}: {
	authorizations: PriorAuth[];
}) {
	const [newAuthButton, setNewAuthButton] = useState<boolean>(false);
	const [authList, setAuthList] = useState(authorizations);
	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const [selectedAuth, setSelectedAuth] = useState<PriorAuth>(authList[0]);

	const addAuthorization = (newAuth: PriorAuth) => {
		setAuthList([...authList, newAuth]);
	};

	const updateAuth = (updatedAuth: PriorAuth) => {
		setAuthList(
			authList.map((auth) => (auth.id == updatedAuth.id ? updatedAuth : auth))
		);
	};

	const handleModalOpen = (key: number) => {
		let auth = authList.find((auth) => auth.id === key);
		if (auth) {
			setSelectedAuth(auth);
			setModalOpen(true);
		}
	};

	return (
		<>
			<button onClick={() => setNewAuthButton(!newAuthButton)}>
				Create New Prior Authorization
			</button>
			{modalOpen ? (
				<Modal
					open={modalOpen}
					auth={selectedAuth}
					setOpen={setModalOpen}
					updatedAuth={updateAuth}
				/>
			) : (
				<div />
			)}
			{newAuthButton === false ? (
				<table className="border-2">
					<thead>
						<tr className="grid grid-cols-5">
							<th>Patient Name</th>
							<th>Insurance</th>
							<th>Procedure</th>
							<th>Status</th>
							<th>Notes</th>
						</tr>
					</thead>
					<tbody>
						{authList.map(
							({
								id,
								firstName,
								lastName,
								status,
								insurance,
								procedure,
								notes,
							}) => (
								<tr
									key={id}
									className="bg-grey border-2 grid grid-cols-5 justify-items-center"
									onClick={() => handleModalOpen(id)}
								>
									<td>
										{lastName}, {firstName}
									</td>
									<td>{insurance}</td>
									<td>{procedure.name}</td>
									<td>{status}</td>
									<td>{notes}</td>
								</tr>
							)
						)}
					</tbody>
				</table>
			) : (
				<AuthForm
					authForm={newAuthButton}
					setAuthForm={setNewAuthButton}
					setAuthList={addAuthorization}
					currentAuthList={authList}
				/>
			)}
		</>
	);
}
