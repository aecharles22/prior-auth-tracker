"use client";
import { PriorAuth } from "../types/types";
import { useState } from "react";
import AuthForm from "./AuthForm";
import Modal from "./Modal";

export default function Dashboard({
	authorizations,
}: {
	authorizations: PriorAuth[];
}) {
	const [newAuthButton, setNewAuthButton] = useState<boolean>(false);
	const [authList, setAuthList] = useState(authorizations);
	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const [selectedAuth, setSelectedAuth] = useState<PriorAuth>(authList[0]);

	// const addAuthorization = (newAuth: PriorAuth) => {
	// 	setAuthList([...authList, newAuth]);
	// };

	// const updateAuth = (updatedAuth: PriorAuth) => {
	// 	setAuthList(
	// 		authList.map((auth) => (auth.id == updatedAuth.id ? updatedAuth : auth))
	// 	);
	// };

	const handleModalOpen = (key: number) => {
		let auth = authList.find((auth) => auth.id === key);
		if (auth) {
			setSelectedAuth(auth);
			setModalOpen(true);
		}
	};

	const refreshData = async () => {
		const response = await fetch("/api/prior-auths/");
		const data = await response.json();
		setAuthList(data);
	};

	const deleteAuth = async (authId: number) => {
		const request = await fetch(`/api/prior-auths/${authId}`, {
			method: "DELETE",
		});
		if (request.ok) {
			refreshData();
		} else {
			console.error("Failed to update");
		}
	};

	return (
		<>
			<button onClick={() => setNewAuthButton(!newAuthButton)}>
				Create New Prior Authorization
			</button>
			{modalOpen ? (
				<Modal
					auth={selectedAuth}
					setOpen={setModalOpen}
					updatedAuth={refreshData}
				/>
			) : (
				<div />
			)}
			{newAuthButton === false ? (
				<table className="border-2">
					<thead>
						<tr className="grid grid-cols-6">
							<th></th>
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
									className="bg-grey border-2 grid grid-cols-6 justify-items-center"
								>
									<td>
										<button onClick={() => deleteAuth(id)}>DELETE</button>
									</td>
									<td onClick={() => handleModalOpen(id)}>
										{lastName}, {firstName}
									</td>
									<td onClick={() => handleModalOpen(id)}>{insurance}</td>
									<td onClick={() => handleModalOpen(id)}>{procedure.name}</td>
									<td onClick={() => handleModalOpen(id)}>{status}</td>
									<td onClick={() => handleModalOpen(id)}>{notes}</td>
								</tr>
							)
						)}
					</tbody>
				</table>
			) : (
				<AuthForm
					authForm={newAuthButton}
					setAuthForm={setNewAuthButton}
					setAuthList={refreshData}
					currentAuthList={authList}
				/>
			)}
		</>
	);
}
