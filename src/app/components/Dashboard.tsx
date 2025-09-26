"use client";
import { PriorAuth } from "../types/types";
import { useState } from "react";
import AuthForm from "./AuthForm";

export default function Dashboard({
	authorizations,
}: {
	authorizations: PriorAuth[];
}) {
	const [newAuthButton, setNewAuthButton] = useState(false);
	const [authList, setAuthList] = useState(authorizations);

	const addAuthorization = (newAuth: PriorAuth) => {
		setAuthList([...authorizations, newAuth]);
	};

	return (
		<>
			<button onClick={() => setNewAuthButton(!newAuthButton)}>
				Create New Prior Authorization
			</button>
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
