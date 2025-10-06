import Dashboard from "./components/Dashboard";
import { readDB } from "./lib/json-db";
import path from "path";
import fs from "fs";

export default async function Home() {
	const dbPath = path.join(
		process.cwd(),
		"src",
		"app",
		"data",
		"prior-auths.json"
	);

	// Check if file exists, if not use empty array or seed data
	let data = [];
	if (fs.existsSync(dbPath)) {
		data = await readDB(dbPath);
	}

	return (
		<div>
			<Dashboard authorizations={data} />
		</div>
	);
}
