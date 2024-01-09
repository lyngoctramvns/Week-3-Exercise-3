const getToken = async () => {
	const response = await fetch("https://restful-booker.herokuapp.com/auth", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			username: "admin",
			password: "password123",
		}),
	});
    const data = await response.json()
    return data.token
};
module.exports = getToken