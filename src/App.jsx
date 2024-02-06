import "./App.css";
import { useState } from "react";

function App() {
  const [activeContainer, setActiveContainer] = useState(0);

  const handleContainerClick = (index) => {
    setActiveContainer(index);
  };

  return (
    <div className="w-full h-full bg-white ">
      <div className="flex gap-4 justify-center align-middle flex-wrap py-7">
        <div
          id="first-card-container"
          className={`bg-white p-8 rounded-md 
          border-2 border-gray-100 border-solid 
          cursor-pointer 
          ${activeContainer === 0 ? "active-container" : ""}
          `}
          onClick={() => handleContainerClick(0)}
        >
          <div className="rounded-full bg-red-200 p-3 inline-block mb-5">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#991B1B"
                stroke="none"
              >
                <path
                  d="M905 3945 c-81 -18 -136 -41 -222 -92 -80 -49 -118 -88 -128 -133 -9
-40 9 -91 43 -122 15 -14 260 -176 545 -361 285 -185 518 -339 518 -343 1 -4
-93 -57 -208 -119 -114 -61 -269 -146 -343 -188 -74 -42 -138 -77 -142 -77 -4
0 -127 64 -275 142 -147 79 -290 150 -318 160 -142 49 -345 -15 -371 -117 -12
-48 7 -91 160 -360 l153 -270 -72 -75 c-91 -95 -109 -128 -100 -187 18 -121
187 -196 405 -179 181 13 621 107 1205 256 1179 301 2169 651 2765 978 127 69
316 201 399 279 145 134 210 259 198 378 -11 105 -69 179 -182 231 -126 57
-86 68 -541 -141 -223 -103 -408 -185 -410 -182 -2 2 -1 42 3 88 l8 83 257
116 c142 63 257 118 258 123 0 13 -311 7 -405 -7 -254 -40 -555 -126 -924
-265 -117 -45 -222 -81 -232 -81 -10 0 -409 103 -886 229 -478 126 -895 234
-927 240 -77 14 -155 13 -231 -4z"
                />
                <path
                  d="M3925 2388 c-16 -6 -232 -82 -478 -168 -247 -87 -457 -166 -468 -176
-43 -39 -30 -62 163 -282 401 -455 492 -557 515 -576 47 -36 98 -32 199 17
151 74 231 176 255 325 9 59 5 112 -35 447 -44 370 -46 381 -71 403 -29 24
-36 25 -80 10z"
                />
              </g>
            </svg>
          </div>
          <div className="text-2xl text-red-800 my-3">Basic</div>
          <div className="my-3">Published to 100+ news sites </div>
          <div className="flex gap-3 my-5">
            <div className="font-extrabold text-4xl">$74.99</div>
            <div className="text-xl font-semibold">Per release</div>
          </div>

          <ul className="space-y-4">
            <li>
              <i className="fas fa-check-circle text-emerald-500 mr-2"></i>
              <span>Published on digital journal</span>
            </li>
            <li>
              <i className="fas fa-check-circle text-emerald-500 mr-2"></i>
              <span>Sent to google news</span>
            </li>
            <li>
              <i className="fas fa-check-circle text-emerald-500 mr-2"></i>
              <span>And many more</span>
            </li>
          </ul>
        </div>

        <div
          id="second-card-container"
          className={` bg-white p-8 rounded-md border-2 border-gray-100 border-solid cursor-pointer ${
            activeContainer === 1 ? "active-container" : ""
          }`}
          onClick={() => handleContainerClick(1)}
        >
          <div className="rounded-full bg-red-200 p-3 inline-block mb-5">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#991B1B"
                stroke="none"
              >
                <path
                  d="M4765 5113 c-724 -58 -1447 -342 -2070 -812 -144 -108 -230 -184
-400 -351 l-150 -148 -120 -6 c-594 -30 -1232 -308 -1668 -727 -83 -80 -87
-86 -87 -126 0 -32 7 -50 28 -73 l27 -31 428 -62 427 -62 -59 -67 c-67 -76
-80 -111 -57 -160 22 -45 1393 -1414 1430 -1428 46 -17 81 -3 154 60 l67 59
60 -417 c43 -298 65 -426 77 -444 24 -36 78 -53 123 -38 62 20 241 229 387
450 251 379 412 862 434 1295 l6 120 148 150 c222 226 345 376 508 622 414
621 662 1380 662 2021 0 108 -18 154 -66 172 -23 9 -194 11 -289 3z m-1002
-938 c207 -44 368 -205 412 -412 8 -37 15 -86 15 -108 0 -189 -125 -391 -292
-473 -71 -35 -177 -62 -243 -62 -188 0 -391 126 -473 292 -35 71 -62 177 -62
243 0 132 62 277 160 375 131 131 305 183 483 145z"
                />
                <path
                  d="M955 1699 c-122 -18 -237 -70 -340 -155 -135 -110 -298 -462 -511
-1101 -114 -342 -118 -363 -71 -410 47 -47 69 -43 408 70 640 213 993 377
1103 512 223 272 214 638 -22 887 -101 107 -236 176 -388 198 -79 11 -96 11
-179 -1z"
                />
              </g>
            </svg>
          </div>
          <div className="text-2xl text-red-800 my-3">US National</div>
          <div className="my-3">Published to 200+ news sites </div>
          <div className="flex gap-3 my-5">
            <div className="font-extrabold text-4xl">$419.99</div>
            <div className="text-xl font-semibold">Per release</div>
          </div>

          <ul className="space-y-4">
            <li>
              <i className="fas fa-check-circle text-emerald-500 mr-2"></i>
              <span>Published on digital journal</span>
            </li>
            <li>
              <i className="fas fa-check-circle text-emerald-500 mr-2"></i>
              <span>Published on PRnewswire.com</span>
            </li>
            <li>
              <i className="fas fa-check-circle text-emerald-500 mr-2"></i>
              <span>Published on Yahoo finance</span>
            </li>
            <li>
              <i className="fas fa-check-circle text-emerald-500 mr-2"></i>
              <span>Sent to market watch</span>
            </li>
            <li>
              <i className="fas fa-check-circle text-emerald-500 mr-2"></i>
              <span>Sent to google news</span>
            </li>
            <li>
              <i className="fas fa-check-circle text-emerald-500 mr-2"></i>
              <span>And many more</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
