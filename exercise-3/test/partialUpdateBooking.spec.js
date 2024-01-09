const getToken = require("../service/auth");
const creatBooking = require("../service/createBooking");

const request = async (updatedID, updatedData) => {
	const token = await getToken();
	const response = fetch(
		`https://restful-booker.herokuapp.com/booking/${updatedID}`,
		{
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				"Cookie": "token=" + token
			},
			body: JSON.stringify(updatedData),
		}
	);
	return response;
};

describe("Updatting booking with partital fields testsuite", () => {
	test("Updatting booking with only firstname", async () => {
		const newBooking = await creatBooking()
		const response = await request(newBooking.bookingid, {firstname: "updatedName"});
		expect(response.status).toBe(200);
		const data = await response.json();
		expect(typeof data.firstname).toBe("string");
		expect(typeof data.lastname).toBe("string");
		expect(typeof data.totalprice).toBe("number");
		expect(typeof data.depositpaid).toBe("boolean");
		expect(typeof data.additionalneeds).toBe("string");
		expect(typeof data.bookingdates).toBe("object");
		expect(typeof data.bookingdates.checkin).toBe("string");
		expect(typeof data.bookingdates.checkout).toBe("string");
	});
});
