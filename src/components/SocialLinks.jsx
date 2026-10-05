import React from "react";

const SocialLinks = () => {
  return (
    <>
      <div className="hidden md:flex fixed left-5 lg:left-7 bottom-8 z-40 flex-col items-center">
        <div className="flex flex-col items-center gap-2 p-2 rounded-full bg-white/90 backdrop-blur-xl border border-[#E3E3F2] shadow-[0_12px_35px_rgba(50,50,120,0.08)]">
          <a
            href="https://github.com/aaryan-jais"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center w-10 h-10 rounded-full text-[#62627A] hover:bg-[#5B5BD6] hover:text-white transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.13c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18A11.1 11.1 0 0 1 12 6.01c.98 0 1.97.13 2.89.38 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.08.78 2.18v3.23c0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/aaryan-raj-586501118/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center w-10 h-10 rounded-full text-[#62627A] hover:bg-[#5B5BD6] hover:text-white transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
              <path d="M4.98 3.5a2.49 2.49 0 1 0 0 4.98 2.49 2.49 0 0 0 0-4.98ZM2.75 9.75h4.46V21H2.75V9.75ZM9.2 9.75h4.28v1.54h.06c.6-1.13 2.06-2.32 4.24-2.32 4.53 0 5.37 2.98 5.37 6.86V21h-4.45v-4.58c0-1.09-.02-2.49-1.52-2.49-1.52 0-1.75 1.18-1.75 2.41V21H9.2V9.75Z" />
            </svg>
          </a>

          <a
            href="mailto:aaryanjaiswal195@gmail.com"
            aria-label="Email"
            className="flex items-center justify-center w-10 h-10 rounded-full text-[#62627A] hover:bg-[#5B5BD6] hover:text-white transition-all duration-300"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-[18px] h-[18px] fill-none stroke-current"
              strokeWidth="1.8"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </a>
        </div>

        <div className="mt-4 w-px h-16 bg-gradient-to-b from-[#5B5BD6] to-transparent" />
      </div>

      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-white/95 backdrop-blur-xl border border-[#E3E3F2] shadow-[0_10px_30px_rgba(50,50,120,0.14)]">
          <a
            href="https://github.com/aaryan-jais"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center w-10 h-10 rounded-full text-[#62627A] active:bg-[#5B5BD6] active:text-white transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" className="w-[17px] h-[17px] fill-current">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.13c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18A11.1 11.1 0 0 1 12 6.01c.98 0 1.97.13 2.89.38 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.08.78 2.18v3.23c0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/aaryan-raj-586501118/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center w-10 h-10 rounded-full text-[#62627A] active:bg-[#5B5BD6] active:text-white transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" className="w-[17px] h-[17px] fill-current">
              <path d="M4.98 3.5a2.49 2.49 0 1 0 0 4.98 2.49 2.49 0 0 0 0-4.98ZM2.75 9.75h4.46V21H2.75V9.75ZM9.2 9.75h4.28v1.54h.06c.6-1.13 2.06-2.32 4.24-2.32 4.53 0 5.37 2.98 5.37 6.86V21h-4.45v-4.58c0-1.09-.02-2.49-1.52-2.49-1.52 0-1.75 1.18-1.75 2.41V21H9.2V9.75Z" />
            </svg>
          </a>

          <a
            href="mailto:aaryanjaiswal195@gmail.com"
            aria-label="Email"
            className="flex items-center justify-center w-10 h-10 rounded-full text-[#62627A] active:bg-[#5B5BD6] active:text-white transition-all duration-300"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-[17px] h-[17px] fill-none stroke-current"
              strokeWidth="1.8"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialLinks;
