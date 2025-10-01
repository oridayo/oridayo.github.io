import { useState } from "react";

const Contact = () => {
    // State to store form input values (name, email, description)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        description: "",
    });

    // State to track if form is currently being submitted (for loading spinner)
    const [isSubmitting, setIsSubmitting] = useState(false);

    // State to store success/error messages to show user after form submission
    const [submitMessage, setSubmitMessage] = useState("");

    // Function to handle input changes and update form data state
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value, // Update the specific field that changed
        }));
    };

    // Function to handle form submission and send data to Google Sheets
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission behavior
        setIsSubmitting(true); // Show loading spinner
        setSubmitMessage(""); // Clear any previous messages

        try {
            // Google Apps Script Web App URL - You'll need to replace this with your actual URL
            // This URL will be generated when you create the Google Apps Script
            const GOOGLE_SCRIPT_URL =
                "https://script.google.com/macros/s/AKfycbwIG39Rd3xq3Uwn72dyhflmT7YnDK2Vn3zvVmc-tvCHdIkUe-jqf7K9DBrDEpgAfXCY/exec";

            // Send POST request to Google Apps Script with form data
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors", // Required for Google Apps Script cross-origin requests
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    description: formData.description,
                    timestamp: new Date().toISOString(), // Add timestamp for record keeping
                }),
            });

            // Since we're using no-cors mode, we can't read the response
            // So we assume success if no error is thrown
            setSubmitMessage(
                "Thank you! Your message has been sent successfully."
            );

            // Clear the form after successful submission
            setFormData({ name: "", email: "", description: "" });
        } catch (error) {
            // Handle any errors that occur during form submission
            console.error("Error submitting form:", error);
            setSubmitMessage(
                "Sorry, there was an error sending your message. Please try again."
            );
        } finally {
            // Always hide loading spinner when done (success or error)
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container m-auto py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="contact-section">
                        {/* Page header with title and subtitle */}
                        <h1 className="text-center mb-4">Get In Touch</h1>
                        <p className="text-center lead mb-5">
                            Have a project in mind or want to collaborate? I'd
                            love to hear from you!
                        </p>

                        <div className="contact-form-container">
                            {/* Main contact form */}
                            <form
                                onSubmit={handleSubmit}
                                className="contact-form"
                            >
                                {/* Name input field */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="name"
                                        className="form-label"
                                    >
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange} // Update state when user types
                                        required
                                        placeholder="Your full name"
                                    />
                                </div>

                                {/* Email input field */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange} // Update state when user types
                                        required
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                {/* Message textarea field */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="description"
                                        className="form-label"
                                    >
                                        Message *
                                    </label>
                                    <textarea
                                        className="form-control form-control-lg"
                                        id="description"
                                        name="description"
                                        rows={6}
                                        value={formData.description}
                                        onChange={handleChange} // Update state when user types
                                        required
                                        placeholder="Tell me about your project, ideas, or just say hello..."
                                    ></textarea>
                                </div>

                                {/* Submit button with loading state */}
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg px-5"
                                        disabled={isSubmitting} // Disable button while submitting
                                    >
                                        {/* Show spinner and "Sending..." text while submitting */}
                                        {isSubmitting ? (
                                            <>
                                                <span
                                                    className="spinner-border spinner-border-sm me-2"
                                                    role="status"
                                                    aria-hidden="true"
                                                ></span>
                                                Sending...
                                            </>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </button>
                                </div>

                                {/* Success/error message display */}
                                {submitMessage && (
                                    <div
                                        className={`alert mt-4 ${
                                            submitMessage.includes("error")
                                                ? "alert-danger"
                                                : "alert-success"
                                        }`}
                                    >
                                        {submitMessage}
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* Additional contact information section */}
                        <div className="contact-info mt-5 pt-5 border-top">
                            <div className="row text-center">
                                <div className="col-md-6">
                                    <h5>Email</h5>
                                    <p>
                                        <a
                                            href="mailto:marcusmunyk@gmail.com"
                                            className="text-decoration-none"
                                        >
                                            marcusmunyk@gmail.com
                                        </a>
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <h5>Location</h5>
                                    <p>Kuala Lumpur, Malaysia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
