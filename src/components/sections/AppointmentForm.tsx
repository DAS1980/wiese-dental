import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarDays, Phone, Clock, MapPin } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/config/contact";

// Unique UUID for the appointment request form
const FORM_UUID = "a7c42e18-3b5d-4f9a-8c6e-1d2f3e4a5b6c";
const FORM_ACTION = `${import.meta.env.VITE_FORM_SUBMIT_URL || ""}/api/forms/${FORM_UUID}/submit/`;

const AppointmentForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    patient: "",
    hear: "",
    reason: "",
    preferredDay: "",
    preferredTime: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");

    const formDataObj = new FormData(form);
    const rawData = Object.fromEntries(formDataObj.entries()) as Record<string, string>;

    // Separate honeypot from actual data
    const { honeypot, ...data } = rawData;

    try {
      const response = await fetch(FORM_ACTION, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data, honeypot }),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setFormData({ patient: "", hear: "", reason: "", preferredDay: "", preferredTime: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">

          {/* Sidebar Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                We're Here for You
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our team at Wiese Dental is committed to making your visit as comfortable and convenient as possible. Submit your request and we'll confirm your appointment within one business day.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(184_82%_40%)] flex-shrink-0">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Call Us Directly</p>
                  <a
                    href={PHONE_TEL}
                    className="text-[hsl(184_82%_40%)] hover:underline font-medium"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(184_82%_40%)] flex-shrink-0">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Office Hours</p>
                  <p className="text-muted-foreground text-sm">Mon – Thu: 8:30 am – 5:00 pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(184_82%_40%)] flex-shrink-0">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Our Location</p>
                  <a
                    href="https://goo.gl/maps/LgVp1s89q9FR2bBG7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-sm hover:text-[hsl(184_82%_40%)] transition-colors"
                  >
                    6810 Murphy Rd #100,<br />Sachse, TX 75048
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(184_82%_40%)] flex-shrink-0">
                  <CalendarDays className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Appointment Confirmation</p>
                  <p className="text-muted-foreground text-sm">We'll confirm within 1 business day</p>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="lg:col-span-2 bg-card rounded-2xl shadow-lg p-8 lg:p-10 border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Fill Out Your Request
            </h3>

            {status === "success" ? (
              <div className="text-center py-16 px-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[hsl(184_82%_40%)]/10 mx-auto mb-4">
                  <CalendarDays className="h-8 w-8 text-[hsl(184_82%_40%)]" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-3">Request Received!</h4>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Thank you for requesting an appointment at Wiese Dental. Our team will reach out within one business day to confirm your visit. If you need immediate assistance, please call us at{" "}
                  <a href={PHONE_TEL} className="text-[hsl(184_82%_40%)] font-semibold hover:underline">
                    {PHONE_DISPLAY}
                  </a>.
                </p>
                <Button
                  onClick={() => setStatus("idle")}
                  variant="outline"
                  className="mt-6"
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* REQUIRED: Honeypot field for spam protection */}
                <input
                  type="text"
                  name="honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] opacity-0 h-0 w-0"
                />

                {/* Name + Phone Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name <span className="text-destructive">*</span></Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Jane Smith"
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number <span className="text-destructive">*</span></Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(972) 555-0100"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address <span className="text-destructive">*</span></Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    required
                    className="h-12"
                  />
                </div>

                {/* Patient Status + How Did You Hear */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="patient">Patient Status</Label>
                    <Select
                      name="patient"
                      value={formData.patient}
                      onValueChange={(value) => setFormData({ ...formData, patient: value })}
                    >
                      <SelectTrigger id="patient" className="h-12">
                        <SelectValue placeholder="Are you a..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="New Patient">New Patient</SelectItem>
                        <SelectItem value="Existing Patient">Existing Patient</SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="patient" value={formData.patient} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hear">How Did You Hear About Us?</Label>
                    <Select
                      name="hear"
                      value={formData.hear}
                      onValueChange={(value) => setFormData({ ...formData, hear: value })}
                    >
                      <SelectTrigger id="hear" className="h-12">
                        <SelectValue placeholder="Select one..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Search Engine">Search Engine</SelectItem>
                        <SelectItem value="Family/Friend">Family / Friend</SelectItem>
                        <SelectItem value="Promotion">Promotion</SelectItem>
                        <SelectItem value="Social Media">Social Media</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="hear" value={formData.hear} />
                  </div>
                </div>

                {/* Reason for Visit */}
                <div className="space-y-2">
                  <Label htmlFor="reason">Reason for Visit</Label>
                  <Select
                    name="reason"
                    value={formData.reason}
                    onValueChange={(value) => setFormData({ ...formData, reason: value })}
                  >
                    <SelectTrigger id="reason" className="h-12">
                      <SelectValue placeholder="What brings you in?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Checkup & Cleaning">Checkup &amp; Cleaning</SelectItem>
                      <SelectItem value="Concerned About Bleeding Gums">Concerned About Bleeding Gums</SelectItem>
                      <SelectItem value="Cavity or Broken Tooth">Cavity or Broken Tooth</SelectItem>
                      <SelectItem value="Missing One or More Teeth">Missing One or More Teeth</SelectItem>
                      <SelectItem value="Enhance My Smile">Enhance My Smile</SelectItem>
                      <SelectItem value="Straighter Smile / Invisalign">Straighter Smile / Invisalign</SelectItem>
                      <SelectItem value="Dental Anxiety">Dental Anxiety</SelectItem>
                      <SelectItem value="Tooth Pain / Emergency">Tooth Pain / Emergency</SelectItem>
                      <SelectItem value="Jaw Pain">Jaw Pain</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="reason" value={formData.reason} />
                </div>

                {/* Preferred Day + Time */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="preferredDay">Preferred Day</Label>
                    <Select
                      name="preferredDay"
                      value={formData.preferredDay}
                      onValueChange={(value) => setFormData({ ...formData, preferredDay: value })}
                    >
                      <SelectTrigger id="preferredDay" className="h-12">
                        <SelectValue placeholder="Any day is fine" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Monday">Monday</SelectItem>
                        <SelectItem value="Tuesday">Tuesday</SelectItem>
                        <SelectItem value="Wednesday">Wednesday</SelectItem>
                        <SelectItem value="Thursday">Thursday</SelectItem>
                        <SelectItem value="No preference">No Preference</SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="preferredDay" value={formData.preferredDay} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredTime">Preferred Time</Label>
                    <Select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}
                    >
                      <SelectTrigger id="preferredTime" className="h-12">
                        <SelectValue placeholder="Any time is fine" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Morning (8:30am – 12pm)">Morning (8:30am – 12pm)</SelectItem>
                        <SelectItem value="Afternoon (12pm – 5pm)">Afternoon (12pm – 5pm)</SelectItem>
                        <SelectItem value="No preference">No Preference</SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="preferredTime" value={formData.preferredTime} />
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    placeholder="Anything else you'd like us to know before your visit?"
                    rows={4}
                    className="resize-none"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full h-12 text-base font-semibold bg-[hsl(184_82%_40%)] hover:bg-[hsl(184_82%_35%)] text-white"
                >
                  {status === "loading" ? "Submitting..." : "Request My Appointment"}
                </Button>

                {status === "error" && (
                  <p className="text-destructive text-sm text-center font-medium">
                    Something went wrong. Please try again or call us at{" "}
                    <a href={PHONE_TEL} className="underline font-semibold">
                      {PHONE_DISPLAY}
                    </a>.
                  </p>
                )}

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form you agree to be contacted by Wiese Dental regarding your appointment request.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
