const getToken = require("../service/auth");
const creatBooking = require("../service/createBooking");

const validPayload = {
	firstname: "Updated",
	lastname: "Brown",
	totalprice: 111,
	depositpaid: true,
	bookingdates: {
		checkin: "2018-01-01",
		checkout: "2019-01-01",
	},
	additionalneeds: "Breakfast",
};

const request = async (updatedID, updatedData) => {
	const token = await getToken();
	const response = fetch(
		`https://restful-booker.herokuapp.com/booking/${updatedID}`,
		{
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"Cookie": "token=" + token
			},
			body: JSON.stringify(updatedData),
		}
	);
	return response;
};

describe("Updating booking testsuite", () => {
	test("Updating booking with valid payload", async () => {
		const newBook = await creatBooking()
		const response = await request(newBook.bookingid, validPayload);
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
