const RoomQualities = ({ bath, rooms, area }) => {
  return (
    <ul className="absolute w-full flex justify-center items-center top-[20px] left-0 lg:top-[30px] xl:top-[50px] list-none mb-[10px] md:mb-[30px] lg:mb-[30px] xl:mb-[50px] ">
      <li className="flex items-center lg:me-6 me-4">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 32 32"
          className="lg:text-sm xl:text-2xl text-2xl md:text-sm me-2 text-customGreen"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 4.71875 3.28125 L 3.28125 4.71875 L 10.5625 12 L 5 12 L 5 14 L 14 14 L 14 5 L 12 5 L 12 10.5625 Z M 27.28125 3.28125 L 20 10.5625 L 20 5 L 18 5 L 18 14 L 27 14 L 27 12 L 21.4375 12 L 28.71875 4.71875 Z M 5 18 L 5 20 L 10.5625 20 L 3.28125 27.28125 L 4.71875 28.71875 L 12 21.4375 L 12 27 L 14 27 L 14 18 Z M 18 18 L 18 27 L 20 27 L 20 21.4375 L 27.28125 28.71875 L 28.71875 27.28125 L 21.4375 20 L 27 20 L 27 18 Z"></path>
        </svg>
        <span className="md:text-lg lg:text-xl xl:text-2xl dark: dark:text-slate-400">
          {area} м²
        </span>
      </li>
      <li className="flex items-center lg:me-6 me-4">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="lg:text-sm xl:text-2xl text-2xl md:text-sm me-2 text-customGreen"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 9.557V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.525 2 13v4a1 1 0 0 0 1 1h1v4h2v-4h12v4h2v-4h1a1 1 0 0 0 1-1v-4c0-1.475-.811-2.75-2-3.443zM18 7v2h-5V7h5zM6 7h5v2H6V7zm14 9H4v-3c0-1.103.897-2 2-2h12c1.103 0 2 .897 2 2v3z"></path>
        </svg>
        <span className="md:text-lg lg:text-xl xl:text-2xl dark: dark:text-slate-400">
          {rooms}
        </span>
      </li>
      <li className="flex items-center lg:me-6 me-4">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 32 32"
          className="lg:text-sm xl:text-2xl text-2xl md:text-sm me-2 text-customGreen"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 26 4 C 23.789063 4 22 5.789063 22 8 L 20 8 L 20 10 L 26 10 L 26 8 L 24 8 C 24 6.808594 24.808594 6 26 6 C 27.191406 6 28 6.808594 28 8 L 28 14 L 1 14 L 1 16 L 2.1875 16 L 3.71875 23.59375 L 3.71875 23.625 C 3.949219 24.65625 4.714844 25.503906 5.71875 25.84375 L 5 28 L 7 28 L 7.65625 26 L 24.34375 26 L 25 28 L 27 28 L 26.28125 25.84375 C 27.328125 25.523438 28.140625 24.683594 28.375 23.625 L 28.375 23.59375 L 29.8125 16 L 31 16 L 31 14 L 30 14 L 30 8 C 30 5.789063 28.210938 4 26 4 Z M 4.21875 16 L 27.8125 16 L 26.40625 23.21875 C 26.289063 23.652344 25.921875 24 25.40625 24 L 6.6875 24 C 6.152344 24 5.789063 23.644531 5.6875 23.1875 Z"></path>
        </svg>
        <span className="md:text-lg lg:text-xl xl:text-2xl dark dark:text-slate-400">
          {bath}
        </span>
      </li>
    </ul>
  );
};

export default RoomQualities;
