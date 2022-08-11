import UserResults from "../components/users/UserResults";
import { useEffect, useState } from "react";
import UserSearch from "../components/users/UserSearch";

function Home() {
	return (
		<div>
			<UserSearch />
			<UserResults />
		</div>
	);
}

export default Home;
