const getToken = require("../service/auth");
const creatBooking = require("../service/createBooking");

const request = async (deleteID) => {
	const token = await getToken();
	const response = fetch(
		`https://restful-booker.herokuapp.com/booking/${deleteID}`,
		{
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"Cookie": "token=" + token
			},
		}
	);
	return response;
};

describe("Deleting booking testsuite", () => {
	test("Deleting booking with valid payload", async () => {
		const newBook = await creatBooking()
		const response = await request(newBook.bookingid);
		expect(response.status).toBe(201);
	});
});
