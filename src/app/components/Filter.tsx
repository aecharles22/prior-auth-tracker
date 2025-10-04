"use client";

import { useState } from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export default function Filter(props: { filterFunction: Function }) {
	const { filterFunction } = props;
	const [selectedStatus, setSelectedStatus] = useState<string>();

	const handleOnClick = (status: string) => {
		console.log(status);
		filterFunction(status);
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button>Filter</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Status Filter</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={() => handleOnClick("pending")}>
					Pending
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => handleOnClick("submitted")}>
					Submitted
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => handleOnClick("approved")}>
					Approved
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => handleOnClick("denied")}>
					Denied
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => handleOnClick("expired")}>
					Expired
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => handleOnClick("clear")}>
					Clear filter
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
