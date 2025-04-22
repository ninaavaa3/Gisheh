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
        id: "u5963",
        name: " نیلوفر حاجیلو",
        wallet: 4600000, // in rial
        gateways: [
          {
            id: 1,
            title: "درگاه پارسیان",
            image: "https://gisheh7.ir/assets/images/gateway-gisheh.png",
          },
          {
            id: 2,
            title: "درگاه سامان",
            image: "https://gisheh7.ir/assets/images/gateway-gisheh.png",
          },
        ],
      });
    } else {
      return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
}
