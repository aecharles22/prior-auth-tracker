"use client";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Filter(props: {
	filterFunction: (selectedFilter: string, search: string) => void;
	setCurrentFilterValue: (statusValue: string) => void;
}) {
	const { filterFunction, setCurrentFilterValue } = props;

	const handleOnClick = (status: string) => {
		setCurrentFilterValue(status);
		filterFunction(status, "");
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
