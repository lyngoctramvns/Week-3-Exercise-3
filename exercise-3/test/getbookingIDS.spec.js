const moment = require("moment");

/**
 *
 * @param {*} params
 * @firstname: string Return bookings with a specific firstname
 * @lastname: string Return bookings with a specific lastname
 * @checkin: date Return bookings that have a checkin date greater than or equal to the set checkin date. Format must be CCYY-MM-DD
 * @checkout: date Return bookings that have a checkout date greater than or equal to the set checkout date. Format must be CCYY-MM-DD
 * @returns
 */
const request = async (params = null) =>
	fetch("https://restful-booker.herokuapp.com/booking", {
		method: "GET",
		headers: { "Content-Type": "application/json" },
		params: params,
	});

describe("Getting book ids testsuite", () => {
	test("Getting book ids without params", async () => {
		const response = await request();
		expect(response.status).toBe(200);
		const data = await response.json();
		expect(Array.isArray(data)).toBe(true);
		expect(data.length).toBeGreaterThan(0);
	});

	test("Getting book ids with params", async () => {
		const response = await request({
			firstname: "Demo",
			lastname: "Book",
			checkin: moment(Date.now()).format("YYYY-MM-DD"),
			checkout: moment(Date.now()).format("YYYY-MM-DD"),
		});
		expect(response.status).toBe(200);
	});
});
