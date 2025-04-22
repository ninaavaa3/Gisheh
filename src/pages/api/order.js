export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  const { token } = req.query;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  try {
    if (token === "ho4kRzg8q0n7H_pSDGKsSc6iGVOtwCN8zvmcNm0C") {
      return res.status(200).json({
        order: {
          id: 7494022,
          cinema_id: 1227,
          cinemaName: 'پردیس سینمایی آزادی',
          salon: "سالن نه",
          start: "18:30:00",
          date: "18تیر",
          day: "دوشنبه",
        },
        event: {
          id: 45840,
          title: "پسر دلفینی 2",
          genre: "انیمیشن",
          thumbnail:
            "https://gisheh.s3.ir-thr-at1.arvanstorage.ir/show/poster/47132.jpg",
        },
        seats: [
          {
            seat_id: 52990,
            type: "seat",
            row: "1",
            number: 7,
            price: 40,
          },
          {
            seat_id: 52991,
            type: "seat",
            row: "1",
            number: 8,
            price: 40,
          },
          {
            seat_id: 52992,
            type: "seat",
            row: "1",
            number: 9,
            price: 40,
          },
          {
            seat_id: 52993,
            type: "seat",
            row: "1",
            number: 10,
            price: 40,
          },
          {
            seat_id: 52994,
            type: "seat",
            row: "1",
            number: 11,
            price: 40,
          },
          {
            seat_id: 52995,
            type: "seat",
            row: "1",
            number: 12,
            price: 40,
          },
        ],
        transaction: {
          id: 2443015,
          status: "منتظر پرداخت",
          seatCount: 6,
          seatPrice: 400000,
          purchaseFee: 80000,
          totalPrice: 2576000,
          discount: 248000,
          amountPayable: 2336000,
        },
      });
    } else {
      return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
}
