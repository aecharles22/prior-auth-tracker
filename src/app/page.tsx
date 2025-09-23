import { mockAuthorizations } from "./data/mockData";
import Dashboard from "./components/Dashboard";

export default function Home() {
	return (
		<div>
			<h1>Dashboard view</h1>
			<Dashboard authorizations={mockAuthorizations} />
		</div>
	);
}
