const Contact = () => {
  return (
    <>
      <section className="text-gray-600 body-font  max-w-7xl mx-auto relative">
        <div className="absolute top-16 left-[10%] ">
          <h2 className="text-lg text-[#6b7280] animate-bounce">
            Check our new store in the center of Wroclaw!{' '}</h2>
          
        </div>
        <div className="absolute h-[60%] w-[50%] top-[50%] left-[10%] translate-y-[-50%] rounded-lg ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2199.118852374103!2d17.032299955524444!3d51.10944792976229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc275cfcf29b5%3A0xece44f3dc5d057c8!2sKurzy%20Targ%201%2C%2050-103%20Wroc%C5%82aw!5e1!3m2!1spl!2spl!4v1681402580495!5m2!1spl!2spl"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            className="rounded-xl shadow-md"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
         
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-[#4f46e5] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
         
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
