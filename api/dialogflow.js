module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const payload = req.body || {};
  const query = String(payload.query || payload.message || "").trim().toLowerCase();

  const buildReply = (text) => ({
    fulfillmentText: text,
    richContent: []
  });

  if (!query) {
    return res.status(200).json(
      buildReply("Hi! I can help with flight bookings, schedules, routes, classes, and seats.")
    );
  }

  if (query.includes("schedule") || query.includes("time") || query.includes("flight schedule")) {
    return res.status(200).json({
      fulfillmentText: "Here is the official flight schedule link.",
      richContent: [
        [
          {
            type: "chips",
            options: [
              {
                text: "Click on the following link for schedule reviewing",
                link: "https://karachiairport.com.pk/schedule.aspx"
              }
            ]
          }
        ]
      ]
    });
  }

  if (query.includes("book") || query.includes("booking") || query.includes("ticket")) {
    return res.status(200).json(
      buildReply("Tell me your departure city, destination, and travel date, and I will guide you through the booking steps.")
    );
  }

  if (
    query.includes("class") ||
    query.includes("seat") ||
    query.includes("domestic") ||
    query.includes("international")
  ) {
    return res.status(200).json(
      buildReply("I can help with domestic or international flights, class options, and seat availability.")
    );
  }

  return res.status(200).json({
    fulfillmentText: "I can help with flight bookings, schedules, routes, classes, and seats. Ask me about your trip or open the schedule link.",
    richContent: [
      [
        {
          type: "chips",
          options: [
            { text: "Flight Booking" },
            { text: "Flight Schedule" }
          ]
        }
      ]
    ]
  });
};
