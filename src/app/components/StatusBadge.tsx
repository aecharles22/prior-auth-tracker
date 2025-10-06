"use client";
import { Badge } from "@/components/ui/badge";

export default function Status(props: { status: string }) {
	const { status } = props;

	if (status === "pending") {
		return (
			<Badge variant="outline" className="bg-amber-300">
				Pending
			</Badge>
		);
	}
	if (status === "approved") {
		return (
			<Badge variant="outline" className="bg-green-500">
				Approved
			</Badge>
		);
	}
	if (status === "submitted") {
		return (
			<Badge variant="outline" className="bg-blue-500">
				Submitted
			</Badge>
		);
	}
	if (status === "denied") {
		return (
			<Badge variant="outline" className="bg-red-600">
				Denied
			</Badge>
		);
	}
	if (status === "expired") {
		return (
			<Badge variant="outline" className="bg-gray-400">
				expired
			</Badge>
		);
	}
}
