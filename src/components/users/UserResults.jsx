import React from "react";
import { useEffect, useState } from "react";
import Spinner from "../layout/Spinner";

function UserResults() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
			headers: {
				Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
			},
		});
		const data = await response.json();
		setUsers(data);
		setLoading(false);
	};
	if (!loading) {
		return (
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{users.map((user) => (
					<h1>{user.login}</h1>
				))}
			</div>
		);
	} else {
		return <Spinner />;
	}
}

export default UserResults;
