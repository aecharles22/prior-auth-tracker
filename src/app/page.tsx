import Dashboard from "./components/Dashboard";
import { readDB } from "./lib/json-db";
import path from "path";

export default async function Home() {
	const dbPath = path.join(process.cwd(), "src", "app", "data", "prior-auths.json");
	const data = await readDB(dbPath);

	return (
		<div>
			<Dashboard authorizations={data} />
		</div>
	);
}
