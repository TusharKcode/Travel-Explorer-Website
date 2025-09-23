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

  const handleClearBookings = () => {
    localStorage.removeItem("bookings");
    setBookings([]);
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
            {bookings.map((booking, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className="booking-card" elevation={4}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {booking.destination || "Unknown Destination"}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      <strong>Date:</strong> {booking.date || "N/A"}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      <strong>Guests:</strong> {booking.guests || "N/A"}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box textAlign="center" mt={4}>
            <Button
              variant="contained"
              color="error"
              onClick={handleClearBookings}
            >
              Clear All Bookings
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
