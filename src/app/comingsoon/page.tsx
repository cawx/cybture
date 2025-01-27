import React from "react";

function page() {
  return (
    <div className="p-4 max-w-[850px] mx-auto pt-12">
      <h1 className="text-2xl font-semibold">
        Some features i plan on implementing in the forseeable future.
      </h1>
      <p className="text-white/80 font-light mt-2">
        Currently building this project along with my 7 other different
        unfinished projects. Here are some stuff I plan on implementing soon
        enough.
      </p>
      <ul className="mt-4 flex flex-col gap-y-5">
        <li>
          <h2 className="text-xl font-semibold">AI helper</h2>
          <p className="text-white/80 font-light">
            - Ah yes the notorious AI chatbot. I want to create a cybersecurity
            focused bot that users could use it to get help regarding tools,
            thoughts or help in general regarding security.
          </p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">
            More tools + in-depth & actually useful commands.
          </h2>
          <p className="text-white/80 font-light">
            - Gonna do alot of research manually for this. ChatGPT doesnt always
            provide the best outcome for this thats why.
          </p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">Command generators</h2>
          <p className="text-white/80 font-light">
            - Sounds cool so thought why not? When I find something that could
            use this generator, I will definitely implement it.
          </p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">
            A lot of debugging, UI and UX fixing, performance issue fixes,
            accessibility etc.
          </h2>
          <p className="text-white/80 font-light">
            - Self-explanatory but very much needed. Ive written so much
            spaghetti and redundant code that even I, spaghetti professional,
            cant stand.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default page;
