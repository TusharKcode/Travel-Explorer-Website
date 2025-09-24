import React, { useEffect, useState } from "react";
import "../styles/myBookings.css";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  const persist = (next) => {
    localStorage.setItem("bookings", JSON.stringify(next));
    setBookings(next);
  }

  const handleClearBookings = () => {
    localStorage.removeItem("bookings");
    setBookings([]);
  };

  const handleRemoveBooking = (idxOrId) => {
    const next = bookings.filter((b, idx) => {
      // if idxOrId is a number -> treat as index; otherwise treat as id
      if (typeof idxOrId === "number") return idx !== idxOrId;
      return b.id !== idxOrId;
    });
    persist(next);
  };

  const normalize = (b) => {
    // destination fallbacks
    const destination =
      b.destination ||
      b.package?.name ||
      b.pkg?.name ||
      b.packageName ||
      b.tripName ||
      b.title ||
      b.package?.title ||
      b.packageTitle ||
      "Unknown Destination";

    // guests fallbacks
    const guests =
      b.guests ??
      b.people ??
      b.numGuests ??
      b.party ??
      b.guestsCount ??
      b.peopleCount ??
      b.count ??
      b.attendees ??
      "N/A";

    // date fallbacks
    const date =
      b.date || b.travelDate || b.bookingDate || b.tripDate || b.createdAt || "N/A";

    // optional extra info
    const name = b.name || b.fullName || b.customer || "—";
    const email = b.email || b.contactEmail || "—";

    return { ...b, destination, guests, date, name, email };
  };

  return (
    <Box className="my-bookings-container" data-aos="fade-up">
      <Typography variant="h4" gutterBottom color="primary" align="center">
        My Bookings
      </Typography>

      {bookings.length === 0 ? (
        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          className="no-bookings"
        >
          You have no bookings yet.
        </Typography>
      ) : (
        <>
          <Grid container spacing={3}>
            {bookings.map((rawBooking, index) => {
              const b = normalize(rawBooking);
              return (
                <Grid item xs={12} sm={6} md={4} key={b.id ?? index}>
                  <Card className="booking-card" elevation={4}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {b.destination}
                      </Typography>

                      <Typography variant="body2" color="textSecondary">
                        <strong>Date:</strong>{" "}
                        {b.date !== "N/A"
                          ? // try to format ISO-like dates nicely
                            (() => {
                              try {
                                const d = new Date(b.date);
                                if (!isNaN(d)) return d.toLocaleDateString();
                              } catch (err) {
                                console.error("Error", err);
                              }
                              return b.date;
                            })()
                          : "N/A"}
                      </Typography>

                      <Typography variant="body2" color="textSecondary">
                        <strong>Guests:</strong> {b.guests}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ mt: 1 }}
                      >
                        <strong>Booked by:</strong> {b.name}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ mb: 1 }}
                      >
                        <strong>Email:</strong> {b.email}
                      </Typography>

                      <Box display="flex" gap={1} mt={2}>
                        <Button
                          size="small"
                          variant="contained"
                          color="error"
                          onClick={() =>
                            handleRemoveBooking(b.id ?? index)
                          }
                        >
                          Cancel
                        </Button>

                        <Button
                          size="small"
                          variant="outlined"
                          onClick={() => {
                            // Optionally: open details, link to booking reference, or copy id
                            if (b.id) navigator.clipboard?.writeText(b.id);
                          }}
                        >
                          {b.id ? "Copy Ref" : "No Ref"}
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>

          <Box textAlign="center" mt={4}>
            <Button variant="contained" color="error" onClick={handleClearBookings}>
              Clear All Bookings
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
