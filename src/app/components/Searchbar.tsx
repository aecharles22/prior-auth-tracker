import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Searchbar(props: { filter: Function }) {
	const { filter } = props;
	const [name, setName] = useState<string>("");

	const handleOnSubmit = () => {
		filter("", name);
	};

	return (
		<div className="flex w-full max-w-sm items-center gap-2">
			<Input
				type="email"
				placeholder="Search Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<Button type="submit" variant="outline" onClick={handleOnSubmit}>
				Search
			</Button>
		</div>
	);
}
