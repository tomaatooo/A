import {GoogleGenerativeAI} from "@google/generative-ai"
  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI('AIzaSyANqDY7JEGiauCoCaKXbiIeXi4Pa3bI0BY');
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate a travel plan for location:kolkata for 3 days for couple with cheap budget, give me a hotel options list with hotel name, hotel address, price, hotel image url,geo coordinates,rating,description and suggesr itinerary with place name, place details, place image url, gro coordinates, ticket pricing,rating,travel time each of the location for 3 days with each day plan and best time to visit in JSON format.\n "},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "I cannot directly access and display real-time information, including hotel images, prices, availability, and geo-coordinates.  Hotel prices and availability change constantly.  Also, I cannot provide image URLs.  This JSON response provides a framework; you'll need to use online travel agencies (like Booking.com, Expedia, etc.) and Google Maps to fill in the missing details.\n\n\n```json\n{\n  \"trip\": {\n    \"location\": \"Kolkata, India\",\n    \"duration\": \"3 Days\",\n    \"travelers\": \"Couple\",\n    \"budget\": \"Cheap\",\n    \"bestTimetoVisit\": \"October to March (pleasant weather)\",\n    \"hotels\": [\n      {\n        \"name\": \"Hotel Name 1\",\n        \"address\": \"Hotel Address 1, Kolkata\",\n        \"priceRange\": \"₹500-₹1500 per night (approx.)\", \n        \"imageUrl\": \"FILL_IN_IMAGE_URL_FROM_BOOKING_SITE\",\n        \"geoCoordinates\": { \"lat\": FILL_IN_LATITUDE, \"lng\": FILL_IN_LONGITUDE },\n        \"rating\": \"FILL_IN_RATING_FROM_BOOKING_SITE\",\n        \"description\": \"FILL_IN_HOTEL_DESCRIPTION_FROM_BOOKING_SITE\"\n      },\n      {\n        \"name\": \"Hotel Name 2\",\n        \"address\": \"Hotel Address 2, Kolkata\",\n        \"priceRange\": \"₹500-₹1500 per night (approx.)\",\n        \"imageUrl\": \"FILL_IN_IMAGE_URL_FROM_BOOKING_SITE\",\n        \"geoCoordinates\": { \"lat\": FILL_IN_LATITUDE, \"lng\": FILL_IN_LONGITUDE },\n        \"rating\": \"FILL_IN_RATING_FROM_BOOKING_SITE\",\n        \"description\": \"FILL_IN_HOTEL_DESCRIPTION_FROM_BOOKING_SITE\"\n      },\n      {\n        \"name\": \"Hotel Name 3 (guesthouse option)\",\n        \"address\": \"Hotel Address 3, Kolkata\",\n        \"priceRange\": \"₹400-₹1200 per night (approx.)\",\n        \"imageUrl\": \"FILL_IN_IMAGE_URL_FROM_BOOKING_SITE\",\n        \"geoCoordinates\": { \"lat\": FILL_IN_LATITUDE, \"lng\": FILL_IN_LONGITUDE },\n        \"rating\": \"FILL_IN_RATING_FROM_BOOKING_SITE\",\n        \"description\": \"FILL_IN_HOTEL_DESCRIPTION_FROM_BOOKING_SITE\"\n      }\n\n    ],\n    \"itinerary\": {\n      \"day1\": [\n        {\n          \"placeName\": \"Howrah Bridge\",\n          \"placeDetails\": \"Iconic bridge over the Hooghly River.\",\n          \"imageUrl\": \"FILL_IN_IMAGE_URL\",\n          \"geoCoordinates\": { \"lat\": FILL_IN_LATITUDE, \"lng\": FILL_IN_LONGITUDE },\n          \"ticketPrice\": \"Free\",\n          \"rating\": \"FILL_IN_RATING_FROM_GOOGLE\",\n          \"travelTime\": \"30 minutes (depending on your starting point)\"\n        },\n        {\n          \"placeName\": \"Victoria Memorial\",\n          \"placeDetails\": \"Marble building, museum, and gardens.\",\n          \"imageUrl\": \"FILL_IN_IMAGE_URL\",\n          \"geoCoordinates\": { \"lat\": FILL_IN_LATITUDE, \"lng\": FILL_IN_LONGITUDE },\n          \"ticketPrice\": \"FILL_IN_TICKET_PRICE\",\n          \"rating\": \"FILL_IN_RATING_FROM_GOOGLE\",\n          \"travelTime\": \"45 minutes (depending on mode of transport)\"\n        }\n      ],\n      \"day2\": [\n        {\n          \"placeName\": \"Kalighat Kali Temple\",\n          \"placeDetails\": \"Important Hindu temple.\",\n          \"imageUrl\": \"FILL_IN_IMAGE_URL\",\n          \"geoCoordinates\": { \"lat\": FILL_IN_LATITUDE, \"lng\": FILL_IN_LONGITUDE },\n          \"ticketPrice\": \"Free (donation encouraged)\",\n          \"rating\": \"FILL_IN_RATING_FROM_GOOGLE\",\n          \"travelTime\": \"1 hour (depending on traffic)\"\n        },\n        {\n          \"placeName\": \"Dakshineswar Kali Temple\",\n          \"placeDetails\": \"Another significant Kali temple.\",\n          \"imageUrl\": \"FILL_IN_IMAGE_URL\",\n          \"geoCoordinates\": { \"lat\": FILL_IN_LATITUDE, \"lng\": FILL_IN_LONGITUDE },\n          \"ticketPrice\": \"FILL_IN_TICKET_PRICE\",\n          \"rating\": \"FILL_IN_RATING_FROM_GOOGLE\",\n          \"travelTime\": \"1.5 hours (consider ferry/train)\"\n        }\n      ],\n      \"day3\": [\n        {\n          \"placeName\": \"Indian Museum\",\n          \"placeDetails\": \"One of India's oldest and largest museums.\",\n          \"imageUrl\": \"FILL_IN_IMAGE_URL\",\n          \"geoCoordinates\": { \"lat\": FILL_IN_LATITUDE, \"lng\": FILL_IN_LONGITUDE },\n          \"ticketPrice\": \"FILL_IN_TICKET_PRICE\",\n          \"rating\": \"FILL_IN_RATING_FROM_GOOGLE\",\n          \"travelTime\": \"1 hour (depending on your location)\"\n        },\n        {\n          \"placeName\": \"College Street (Boi Para)\",\n          \"placeDetails\": \"Famous book market.\",\n          \"imageUrl\": \"FILL_IN_IMAGE_URL\",\n          \"geoCoordinates\": { \"lat\": FILL_IN_LATITUDE, \"lng\": FILL_IN_LONGITUDE },\n          \"ticketPrice\": \"Free\",\n          \"rating\": \"FILL_IN_RATING_FROM_GOOGLE\",\n          \"travelTime\": \"30 minutes (depending on traffic)\"\n        }\n      ]\n    }\n  }\n}\n```\n\n\nRemember to replace all `FILL_IN` placeholders with the actual data you find from your research using online resources.  Consider using public transport (buses, metro) in Kolkata to keep costs down.  Enjoy your trip!\n"},
          ],
        },
      ],
    });
