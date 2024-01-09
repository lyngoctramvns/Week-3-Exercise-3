const defaultBooking = {
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

const creatBooking = async (payload = defaultBooking) => {
	const response = await fetch("https://restful-booker.herokuapp.com/booking", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(payload)
	});
    const data = await response.json()
    return data
};
module.exports = creatBooking