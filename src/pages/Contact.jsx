// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="w-full h-full px-4 xl:px-16 text-dark bg-neutral/85 font-[Modernist]">
      <Navbar />

      {/* Main Section */}
      <div className="w-full h-full p-8 px-0 flex flex-col items-center gap-8 lg:gap-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
          <h2 className="text-4xl font-bold leading-none underline">
            Get in Touch
          </h2>
          <p className="text-lg lg:text-xl text-center leading-tight">
            Have a question, feedback, or partnership idea? We'd love to hear
            from you. The ReHome India team is here to help every step of the
            way.
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <p className="text-lg lg:text-xl leading-tight">
              Reach out to us anytime — our support team usually replies within
              24 hours.
            </p>

            <ul className="flex flex-col gap-4 text-lg">
              <li>
                <i class="ri-mail-fill"></i> <b>Email:</b>{" "}
                support@rehomeindia.in
              </li>
              <li>
                <i class="ri-phone-fill"></i> <b>Call:</b> +91 98765 43210
              </li>
              <li>
                <i class="ri-whatsapp-fill"></i> <b>WhatsApp:</b> +91 98765
                43210
              </li>
              <li>
                <i class="ri-map-pin-2-fill"></i> <b>Address:</b> ReHome India,
                Lajpat Nagar, Delhi, India
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="p-6 rounded-xl flex flex-col gap-4 bg-dark/15">
            <h2 className="text-2xl font-bold">Send Us a Message</h2>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-2.5 px-4 text-lg rounded-md focus:outline-none bg-neutral"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-2.5 px-4 text-lg rounded-md focus:outline-none bg-neutral"
                required
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="p-2.5 px-4 text-lg rounded-md focus:outline-none bg-neutral resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="p-2.5 px-6 text-lg rounded-md text-neutral bg-brand"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
