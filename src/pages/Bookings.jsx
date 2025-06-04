import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Loader2 } from "lucide-react";

const booking = {
  name: "John Doe",
  email: "john@example.com",
  bookedAt: "2025-06-04T14:00:00",
  timeline: [
    {
      title: "Table Booked",
      status: "completed",
      time: "2025-06-04T14:00:00",
    },
    {
      title: "Pending Approval",
      status: "processing",
      time: "2025-06-04T14:10:00",
    },
    {
      title: "Confirmed",
      status: "upcoming",
      time: "2025-06-04T14:30:00",
    },
  ],
};

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const Bookings = () => {
  // Simulate user login state:
  // Set to null to simulate not logged in
  const user = {
    name: "John Doe",
    email: "john@example.com",
  };
  // const user = null; // uncomment this line to simulate logged out state

  if (!user) {
    // Show login prompt when user not logged in
    return (
      <section className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-gray-800 rounded-xl p-6 shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-4 text-yellow-400">
            Please login first
          </h2>
          <p className="mb-6 text-gray-400">
            You need to be logged in to view your booking status
          </p>
          {/* <button
            className="px-6 py-2 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-500"
            onClick={() => alert("Redirect to login page or open login modal")}
          >
            Login Now
          </button> */}
        </div>
      </section>
    );
  }

  // User logged in — show booking timeline

  const totalSteps = booking.timeline.length;
  const activeIndex = booking.timeline.findIndex(
    (step) => step.status === "upcoming"
  );
  const currentActiveStep = activeIndex === -1 ? totalSteps - 1 : activeIndex - 1;
  const activeStepForDot = Math.max(currentActiveStep, 0);
  const fillHeight =
    activeIndex === -1
      ? "100%"
      : `${((activeIndex + 0.3) / totalSteps) * 100}%`;
  const dotPosition = `${((activeStepForDot + 0.5) / totalSteps) * 100}%`;

  return (
    <section className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-gray-800 rounded-xl p-6 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-yellow-400 text-center">
          Booking Status
        </h2>

        <div className="mb-6 text-center">
          <p className="text-lg font-semibold">{user.name}</p>
          <p className="text-sm text-gray-400">{user.email}</p>
          <p className="text-sm text-gray-400 mt-1">
            Booking Date: {formatDate(booking.bookedAt)}
          </p>
        </div>

        <div className="relative pl-6">
          <div className="absolute top-0 left-4 h-full w-1 bg-gray-700 rounded"></div>

          <motion.div
            className="absolute left-4 w-1 bg-yellow-400 rounded origin-top"
            style={{ height: fillHeight }}
            initial={{ height: 0 }}
            animate={{ height: fillHeight }}
            transition={{ duration: 0.6 }}
          />

          <motion.div
            className="absolute left-[calc(1rem-5px)] w-3 h-3 bg-yellow-600 rounded-full shadow-lg border"
            style={{ top: dotPosition }}
            initial={{ scale: 0.8, y: -6 }}
            animate={{ scale: [1, 1.3, 1], y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />

          {booking.timeline.map((step, index) => {
            const isCompleted = step.status === "completed";
            const isProcessing = step.status === "processing";
            const isUpcoming = step.status === "upcoming";

            const icon = isCompleted ? (
              <CheckCircle className="text-green-400" />
            ) : isProcessing ? (
              <Loader2 className="animate-spin text-yellow-400" />
            ) : (
              <Clock className="text-gray-400" />
            );

            const statusColor = isCompleted
              ? "text-green-400"
              : isProcessing
              ? "text-yellow-400"
              : "text-gray-400";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="flex items-start space-x-4 relative z-10 mb-8"
              >
                <div className="bg-gray-800 rounded-full p-1 z-20">{icon}</div>
                <div>
                  <p className={`text-lg font-semibold ${statusColor}`}>
                    {step.title}
                  </p>
                  <p className="text-sm text-gray-400">{formatDate(step.time)}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Bookings;
