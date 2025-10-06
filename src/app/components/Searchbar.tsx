import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Searchbar(props: {
	filter: (selectedFilter: string, search: string) => void;
}) {
	const { filter } = props;
	const [name, setName] = useState<string>("");

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setName(value);
		filter("", value);
	};

	return (
		<div className="flex w-full max-w-sm items-center gap-2">
			<Input
				type="text"
				placeholder="Search Name"
				value={name}
				onChange={handleOnChange}
			/>
		</div>
	);
}
