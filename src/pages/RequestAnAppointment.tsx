import React from "react";
import Header from "@/components/sections/Header";
import AppointmentHero from "@/components/sections/AppointmentHero";
import AppointmentForm from "@/components/sections/AppointmentForm";
import Footer from "@/components/sections/Footer";

const RequestAnAppointment = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="min-h-screen bg-background">
      <Header />
      <AppointmentHero />
      <AppointmentForm />
      <Footer />
    </div>
  );
});

RequestAnAppointment.displayName = "RequestAnAppointment";

export default RequestAnAppointment;
