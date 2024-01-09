const validPayload = {
	firstname: "Jim",
	lastname: "Brown",
	totalprice: 111,
	depositpaid: true,
	bookingdates: {
		checkin: "2018-01-01",
		checkout: "2019-01-01",
	},
	additionalneeds: "Breakfast",
};

const request = async (payload) =>
	fetch("https://restful-booker.herokuapp.com/booking", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(payload)
	});

describe("Creatting booking testsuite", () => {
	test("Creatting booking with valid payload", async () => {
		const response = await request(validPayload);
		expect(response.status).toBe(200);

		const data = await response.json();
		expect(typeof data.bookingid).toBe("number");
		expect(typeof data.booking).toBe("object");
		expect(typeof data.booking.firstname).toBe("string");
		expect(typeof data.booking.lastname).toBe("string");
		expect(typeof data.booking.totalprice).toBe("number");
		expect(typeof data.booking.depositpaid).toBe("boolean");
		expect(typeof data.booking.additionalneeds).toBe("string");
		expect(typeof data.booking.bookingdates).toBe("object");
		expect(typeof data.booking.bookingdates.checkin).toBe("string");
		expect(typeof data.booking.bookingdates.checkout).toBe("string");
	});
});
