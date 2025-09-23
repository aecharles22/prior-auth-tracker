"use client";
import { PriorAuth } from "../types/types";
export default function Dashboard({
	authorizations,
}: {
	authorizations: PriorAuth[];
}) {
	return (
		<>
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
					{authorizations.map(
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
		</>
	);
}
