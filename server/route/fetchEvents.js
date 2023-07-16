const fetch = require("node-fetch");
const Event = require("../model/eventModel");
const getToken = require("../config/accessTokenAzure");

const fetchEvents = async () => {
  // Get the access token for the Microsoft Graph API
  const accessToken = await getToken();

  // Get the current date and time
  const now = new Date();

  // Calculate the start and end dates for the next 7 days
  const startDate = now.toISOString().substring(0, 10); // "yyyy-mm-dd"
  const endDate = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .substring(0, 10); // "yyyy-mm-dd"

  // Construct the request URL with the start and end dates
  const url = `https://graph.microsoft.com/v1.0/sites/root/lists/{list_id}/items?$filter=fields/EventType='Event'&fields/EventStartDate=${startDate}&fields/EventStartDate=${endDate}`;

  // Call the Microsoft Graph API to retrieve the events
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const events = await response.json();

  // Save the events to the database
  for (const event of events.value) {
    const newEvent = new Event({
      title: event.fields.EventTitle,
      startDate: event.fields.EventStartDate,
      endDate: event.fields.EventEndDate,
      location: event.fields.EventLocation,
      description: event.fields.EventDescription,
    });

    await newEvent.save();
  }
};

fetchEvents();
