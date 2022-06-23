export function ChevronLeft(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      height="20"
      width="20"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

export function CancelIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function List() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      height="16"
      width="16"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 10h16M4 14h16M4 18h16"
      />
    </svg>
  );
}

export function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
      height="16"
      width="16"
    >
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
  );
}

export function LogoutIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      height="16"
      width="16"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
      />
    </svg>
  );
}

export function LoginIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      height="16"
      width="16"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
      />
    </svg>
  );
}

export function Logo() {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 320 320"
    >
      <g id="XMLID_934_">
        <g id="XMLID_935_">
          <path
            id="XMLID_936_"
            fill="#FFAD41"
            d="M300,124.677v-20c0-54.872-44.482-99.355-99.355-99.355h-81.289
            C64.482,5.323,20,49.805,20,104.677v20H300z"
          />
          <path
            id="XMLID_937_"
            fill="#FF9811"
            d="M160,5.323h-40.645C64.482,5.323,20,49.805,20,104.677v20h140V5.323z"
          />
          <circle id="XMLID_938_" fill="#804C09" cx="70" cy="75.323" r="10" />
          <circle id="XMLID_939_" fill="#804C09" cx="120" cy="45.322" r="10" />
          <circle id="XMLID_940_" fill="#BD720D" cx="250" cy="75.323" r="10" />
          <circle id="XMLID_941_" fill="#BD720D" cx="200" cy="45.322" r="10" />
          <circle id="XMLID_942_" fill="#BD720D" cx="160" cy="75.323" r="10" />
          <path
            id="XMLID_943_"
            fill="#804C09"
            d="M160,65.323c-5.523,0-10,4.477-10,10c0,5.523,4.477,10,10,10"
          />
        </g>
        <path
          id="XMLID_944_"
          fill="#BD720D"
          d="M270,204.678H50c-16.568,0-30,13.432-30,30s13.432,30,30,30h220
		c16.568,0,30-13.432,30-30S286.568,204.678,270,204.678z"
        />
        <path
          id="XMLID_945_"
          fill="#804C09"
          d="M160,204.678H50c-16.568,0-30,13.432-30,30s13.432,30,30,30h110V204.678z"
        />
        <path
          id="XMLID_946_"
          fill="#FFAD41"
          d="M320,284.677c0,16.568-13.432,30-30,30H30c-16.568,0-30-13.432-30-30l0,0
		c0-16.568,13.432-30,30-30h260C306.568,254.678,320,268.109,320,284.677L320,284.677z"
        />
        <path
          id="XMLID_947_"
          fill="#FF9811"
          d="M160,254.678H30c-16.568,0-30,13.432-30,30s13.432,30,30,30h130V254.678z"
        />
        <g id="XMLID_948_">
          <polygon
            id="XMLID_949_"
            fill="#FFE98F"
            points="60,214.678 160,204.678 260,214.678 160,264.677 		"
          />
          <polygon
            id="XMLID_950_"
            fill="#FFDA44"
            points="60,214.678 160,204.678 160,264.677 		"
          />
        </g>
        <path
          id="XMLID_951_"
          fill="#BD720D"
          d="M270,134.678H50c-16.568,0-30,13.432-30,30s13.432,30,30,30h220
		c16.568,0,30-13.432,30-30S286.568,134.678,270,134.678z"
        />
        <path
          id="XMLID_952_"
          fill="#804C09"
          d="M160,134.678H50c-16.568,0-30,13.432-30,30s13.432,30,30,30h110V134.678z"
        />
        <path
          id="XMLID_953_"
          fill="#FF5023"
          d="M320,199.678c0,8.284-6.715,15-15,15H15c-8.283,0-15-6.716-15-15l0,0
		c0-8.284,6.717-15,15-15h290C313.285,184.678,320,191.393,320,199.678L320,199.678z"
        />
        <path
          id="XMLID_954_"
          fill="#BD3C1A"
          d="M160,184.678H15c-8.283,0-15,6.716-15,15s6.717,15,15,15h145V184.678z"
        />
        <g id="XMLID_955_">
          <polygon
            id="XMLID_956_"
            fill="#FFE98F"
            points="60,144.678 160,134.678 260,144.678 160,194.678 		"
          />
          <polygon
            id="XMLID_957_"
            fill="#FFDA44"
            points="60,144.678 160,134.678 160,194.678 		"
          />
        </g>
        <path
          id="XMLID_958_"
          fill="#91DC5A"
          d="M320,129.678c0,8.284-6.715,15-15,15H15c-8.283,0-15-6.716-15-15l0,0
		c0-8.284,6.717-15,15-15h290C313.285,114.677,320,121.393,320,129.678L320,129.678z"
        />
        <path
          id="XMLID_959_"
          fill="#64C37D"
          d="M160,114.677H15c-8.283,0-15,6.716-15,15s6.717,15,15,15h145V114.677z"
        />
      </g>
    </svg>
  );
}
