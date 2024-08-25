import { SearchIcon } from "../(icons)";

export function UnplashSearch() {
  return (
    <div className="mt-52">
      <h2 className="text-black dark:text-white text-cs-300 font-semibold text-center">
        Search
      </h2>
      <p className="text-black dark:text-cc-gray-200 text-center pt-2">
        Search high-resolution images from Unsplash
      </p>
      <div className="flex gap-4 p-4 bg-white dark:bg-slate-800 w-full md:w-[600px] mt-6 mx-auto rounded-lg border dark:border-slate-600">
        <input
          type="search"
          placeholder="Enter your keywords..."
          className="w-full bg-inherit text-black dark:text-white outline-none"
        />
        <SearchIcon className="text-gray-400 dark:text-cc-gray-100" />
      </div>
    </div>
  );
}
