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
		console.log(data);
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
					updatedAuth={refreshData}
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
					setAuthList={refreshData}
					currentAuthList={authList}
				/>
			)}
		</>
	);
}
