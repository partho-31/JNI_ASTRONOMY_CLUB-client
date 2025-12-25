import { Metadata } from "next";

export const metadata : Metadata = {
  title : "JNIAC JUST | Contact Us",
}

const page = () => {
  return (
    <div className="min-h-screen py-30 bg-linear-to-b from-slate-900 to-slate-950 text-white px-6 ">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 tracking-wide">Contact Us</h1>
        <p className="text-slate-300 text-lg">
          Have questions about the cosmos, events or joining our astronomy
          community?
        </p>
        <p className="text-slate-300 text-lg mb-12">
          We would love to hear from you!
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-slate-800/50 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-slate-700">
        <form className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm mb-2">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white outline-none focus:border-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white outline-none focus:border-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              rows={5}
              placeholder="Write your message here..."
              className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 text-white outline-none focus:border-indigo-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-semibold text-white shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="max-w-3xl mx-auto text-center mt-16 text-slate-400">
        <h2 className="text-xl font-semibold mb-2">Or reach us directly</h2>
        <p>Email: Lorem ipsum dolor sit </p>
        <p>Facebook: famet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default page;
