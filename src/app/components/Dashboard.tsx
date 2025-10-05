"use client";
import { PriorAuth } from "../types/types";
import { useState } from "react";
import AuthForm from "./AuthForm";
import Modal from "./Modal";
import Filters from "./Filter";
import { Button } from "@/components/ui/button";
import Status from "./StatusBadge";
import Searchbar from "./Searchbar";

export default function Dashboard({
	authorizations,
}: {
	authorizations: PriorAuth[];
}) {
	const [newAuthButton, setNewAuthButton] = useState<boolean>(false);
	const [authList, setAuthList] = useState(authorizations);
	const [filteredList, setFilteredList] = useState(authList);
	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const [selectedAuth, setSelectedAuth] = useState<PriorAuth>(authList[0]);
	const [selectedStatus, setSelectedStatus] = useState<string>();

	const handleModalOpen = (key: string) => {
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
		if (selectedStatus !== "") {
			const cleanList = data.filter(
				(auth: PriorAuth) => auth.status === selectedStatus
			);
			setFilteredList(cleanList);
		} else {
			setFilteredList(data);
		}
	};

	const deleteAuth = async (authId: string) => {
		const request = await fetch(`/api/prior-auths/${authId}`, {
			method: "DELETE",
		});
		if (request.ok) {
			refreshData();
		} else {
			console.error("Failed to update");
		}
	};

	const authFilter = (selectedFilter: string, search: string) => {
		if (selectedFilter === "clear") {
			setFilteredList(authList);
			return;
		}

		let cleanList = authList;
		if (selectedFilter !== "") {
			cleanList = authList.filter((auth) => auth.status === selectedFilter);
		}

		if (search !== "") {
			cleanList = authList.filter((auth) =>
				`${auth.firstName} ${auth.lastName}`
					.toLowerCase()
					.includes(search.toLowerCase())
			);
		}
		setFilteredList(cleanList);
	};

	return (
		<>
			<Searchbar filter={authFilter} />
			<Button onClick={() => setNewAuthButton(!newAuthButton)}>
				Create New Prior Authorization
			</Button>
			<Filters
				filterFunction={authFilter}
				setCurrentFilterValue={setSelectedStatus}
			/>

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
						{filteredList.map(
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
									<td onClick={() => handleModalOpen(id)}>
										<Status status={status} />
									</td>

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
