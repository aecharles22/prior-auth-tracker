"use client";
import { PriorAuth } from "../types/types";
import { useState } from "react";
import AuthForm from "./AuthForm";
import Modal from "./Modal";
import Filters from "./Filter";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Trash2 } from "lucide-react";
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
	const [selectedStatus, setSelectedStatus] = useState<string>("");

	const handleModalOpen = (key: string) => {
		const auth = authList.find((auth) => auth.id === key);
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
		<div className="container mx-auto py-6 space-y-4">
			<Alert variant="destructive">
				<AlertCircle className="h-4 w-4" />
				<AlertTitle>Demo Mode - Read Only</AlertTitle>
				<AlertDescription>
					This is a portfolio project without authentication. Creating, editing,
					and deleting prior authorizations has been disabled. Want to try it
					out? Fork the repository and remove the disabled attributes to enable
					full functionality.
				</AlertDescription>
			</Alert>

			<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
				<h1 className="text-3xl font-bold">Prior Authorizations</h1>
				<Button onClick={() => setNewAuthButton(!newAuthButton)} disabled>
					Create New Prior Authorization
				</Button>
			</div>

			<div className="flex gap-4 items-center">
				<Searchbar filter={authFilter} />
				<Filters
					filterFunction={authFilter}
					setCurrentFilterValue={setSelectedStatus}
				/>
			</div>

			{modalOpen && (
				<Modal
					auth={selectedAuth}
					setOpen={setModalOpen}
					updatedAuth={refreshData}
				/>
			)}

			{newAuthButton === false ? (
				<div className="rounded-md border">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[50px]"></TableHead>
								<TableHead>Patient Name</TableHead>
								<TableHead>Insurance</TableHead>
								<TableHead>Procedure</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Notes</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
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
									<TableRow
										key={id}
										className="cursor-pointer hover:bg-muted/50"
									>
										<TableCell>
											<Button
												variant="ghost"
												size="icon"
												onClick={(e) => {
													e.stopPropagation();
													deleteAuth(id);
												}}
												disabled
											>
												<Trash2 className="h-4 w-4 text-destructive" />
											</Button>
										</TableCell>
										<TableCell onClick={() => handleModalOpen(id)}>
											{lastName}, {firstName}
										</TableCell>
										<TableCell onClick={() => handleModalOpen(id)}>
											{insurance}
										</TableCell>
										<TableCell onClick={() => handleModalOpen(id)}>
											{procedure.name}
										</TableCell>
										<TableCell onClick={() => handleModalOpen(id)}>
											<Status status={status} />
										</TableCell>
										<TableCell onClick={() => handleModalOpen(id)}>
											{notes}
										</TableCell>
									</TableRow>
								)
							)}
						</TableBody>
					</Table>
				</div>
			) : (
				<AuthForm
					authForm={newAuthButton}
					setAuthForm={setNewAuthButton}
					setAuthList={refreshData}
					currentAuthList={authList}
				/>
			)}
		</div>
	);
}
