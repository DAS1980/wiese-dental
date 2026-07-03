import { useState } from "react";
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

// Generate a unique UUID for each form
const FORM_UUID = "3d287865-e13d-4f1f-b17e-8b6e815aac77";
const FORM_ACTION = `${import.meta.env.VITE_FORM_SUBMIT_URL || ""}/api/forms/${FORM_UUID}/submit/`;

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    patient: "",
    hear: "",
    reason: "",
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
        setFormData({ patient: "", hear: "", reason: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Google Maps Column */}
          <div className="h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13387.042682617857!2d-96.6120887!3d32.9837155!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xca0bcbef6016df08!2sWiese%20Dental!5e0!3m2!1sen!2sus!4v1642011618916!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Wiese Dental office location"
            />
          </div>

          {/* Contact Form Column */}
          <div className="bg-background rounded-lg shadow-md p-8 lg:p-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Have Questions?<br />
              Get Answers.
            </h2>

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

              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="sr-only">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                  className="h-12"
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="sr-only">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="h-12"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="sr-only">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="h-12"
                />
              </div>

              {/* Patient Status Select */}
              <div className="space-y-2">
                <Select
                  name="patient"
                  value={formData.patient}
                  onValueChange={(value) => setFormData({ ...formData, patient: value })}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Are you a..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="New Patient">New Patient</SelectItem>
                    <SelectItem value="Existing Patient">Existing Patient</SelectItem>
                  </SelectContent>
                </Select>
                <input type="hidden" name="patient" value={formData.patient} />
              </div>

              {/* How Did You Hear Select */}
              <div className="space-y-2">
                <Select
                  name="hear"
                  value={formData.hear}
                  onValueChange={(value) => setFormData({ ...formData, hear: value })}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="How Did You Hear About Us?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Search Engine">Search Engine</SelectItem>
                    <SelectItem value="Family/Friend">Family/Friend</SelectItem>
                    <SelectItem value="Promotion">Promotion</SelectItem>
                    <SelectItem value="Social Media">Social Media</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <input type="hidden" name="hear" value={formData.hear} />
              </div>

              {/* Reason for Visit Select */}
              <div className="space-y-2">
                <Select
                  name="reason"
                  value={formData.reason}
                  onValueChange={(value) => setFormData({ ...formData, reason: value })}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="What is the reason for your visit?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="I Need a Checkup & Cleaning">I Need a Checkup & Cleaning</SelectItem>
                    <SelectItem value="I am Concerned About Bleeding Gums">I am Concerned About Bleeding Gums</SelectItem>
                    <SelectItem value="I Have a Cavity or Broken Tooth">I Have a Cavity or Broken Tooth</SelectItem>
                    <SelectItem value="I am Missing One or More Teeth">I am Missing One or More Teeth</SelectItem>
                    <SelectItem value="I Want to Enhance My Smile">I Want to Enhance My Smile</SelectItem>
                    <SelectItem value="I Want a Straighter Smile">I Want a Straighter Smile</SelectItem>
                    <SelectItem value="I am Scared of the Dentist">I am Scared of the Dentist</SelectItem>
                    <SelectItem value="I am In Pain and Need Help">I am In Pain & Need Help</SelectItem>
                    <SelectItem value="I Have Pain in My Jaw">I Have Pain in My Jaw</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <input type="hidden" name="reason" value={formData.reason} />
              </div>

              {/* Questions/Comments Textarea */}
              <div className="space-y-2">
                <Label htmlFor="question" className="sr-only">Questions/Comments</Label>
                <Textarea
                  id="question"
                  name="question"
                  placeholder="Questions/Comments"
                  rows={4}
                  className="resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {status === "loading" ? "Sending..." : "Ask Question"}
              </Button>

              {/* Status Messages */}
              {status === "success" && (
                <p className="text-green-600 text-sm text-center font-medium">
                  Message sent successfully! We'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm text-center font-medium">
                  Failed to send. Please try again or call us directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
