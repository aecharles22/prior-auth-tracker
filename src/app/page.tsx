import Dashboard from "./components/Dashboard";

export default async function Home() {
	const response = await fetch("http://localhost:3000/api/prior-auths");
	const data = await response.json();

	return (
		<div>
			<Dashboard authorizations={data} />
		</div>
	);
}
