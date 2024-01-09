const creatBooking = require("../service/createBooking");

const request = async (id) =>
	fetch(`https://restful-booker.herokuapp.com/booking/${id}`, {
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});

describe("Getting book by id testsuite", () => {
	test("Getting book by existed id", async () => {
		const newBooking = await creatBooking()
		const response = await request(newBooking.bookingid);
		expect(response.status).toBe(200);
		const data = await response.json();
		expect(typeof data.firstname).toBe('string');
		expect(typeof data.lastname).toBe('string');
		expect(typeof data.totalprice).toBe('number');
		expect(typeof data.depositpaid).toBe('boolean');
		expect(typeof data.additionalneeds).toBe('string');
		expect(typeof data.bookingdates).toBe('object');
		expect(typeof data.bookingdates.checkin).toBe('string');
		expect(typeof data.bookingdates.checkout).toBe('string');
	});
});
