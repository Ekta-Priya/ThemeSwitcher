import React from "react";

export default function Card() {
  return (
    <div
      className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg
                 overflow-hidden dark:bg-gray-900 dark:text-gray-100
                 transition-transform transform hover:scale-[1.03] hover:shadow-2xl
                 border border-transparent hover:border-green-400"
    >
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/2017021/pexels-photo-2017021.jpeg"
          alt="White Petaled Flower"
          className="w-full h-60 object-cover rounded-t-2xl shadow-md"
          loading="lazy"
        />
        {/* Soft blurred background shape behind image */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-t-2xl bg-green-100 opacity-20 blur-xl pointer-events-none dark:bg-green-900"
        />
      </div>

      <div className="p-7">
        <a href="/" className="block mb-3">
          <h2
            className="text-3xl font-serif font-semibold tracking-tight text-gray-900 dark:text-gray-100
                       drop-shadow-sm"
          >
            White Petaled Flower
          </h2>
        </a>

        {/* Decorative divider */}
        <div className="w-20 h-1 bg-green-400 rounded-full mb-4"></div>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Delicate white petals blooming gracefully in the sunlight,
          symbolizing purity and serenity. A timeless natural beauty that
          captivates every gaze.
        </p>

        <a
          href="/"
          className="inline-block text-green-600 dark:text-green-400 font-medium
                     hover:underline hover:text-green-800 dark:hover:text-green-200
                     transition-colors"
        >
          Learn More &rarr;
        </a>
      </div>
    </div>
  );
}
