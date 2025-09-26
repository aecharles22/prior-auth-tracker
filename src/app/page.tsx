import Dashboard from "./components/Dashboard";

export default async function Home() {
	const response = await fetch("http://localhost:3000/api/prior-auths");
	const data = await response.json();

	return (
		<div>
			<h1>Dashboard view</h1>
			<Dashboard authorizations={data} />
		</div>
	);
}
