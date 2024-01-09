const endpoint = "https://restful-booker.herokuapp.com/auth";

const validPayload = {
	username: "admin",
	password: "password123",
};

const request = async (body) =>
	fetch("https://restful-booker.herokuapp.com/auth", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(
			body,
		),
	});

describe("Authenication testsuite", () => {
	test("Authentize with valid user and valid password", async () => {
		const response = await request(validPayload);
		expect(response.status).toBe(200);
		const data = await response.json();
		expect(data).toHaveProperty("token");
		expect(typeof data.token).toBe("string");
	});

	test("Authentize with valid user and wrong password", async () => {
		const response = await request({
			...validPayload,
			password: "wrong_password",
		});
		expect(response.status).toBe(200);
		const data = await response.json();
		expect(data).not.toHaveProperty("token");
	});

	test("Authentize with non-exist user and password", async () => {
		const response = await request({
			...validPayload,
			username: "non_existed_user",
		});
		expect(response.status).toBe(200);
		const data = await response.json();
		expect(data).not.toHaveProperty("token");
	});
});
