"use client";
export default function Footer() {
  return (
<section className="py-10">
  <div className="container">
    <footer>

      <img src="/Logo.png" alt="Dakka Marrakechia Nassim" className="h-10" />

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-4">

        <div>
          <h3 className="mb-4 font-bold">Leistungen</h3>
          <ul className="space-y-4 text-zinc-600">
            <li className="font-medium hover:text-gray-800"><a href="#leistungen">Brautabholung</a></li>
            <li className="font-medium hover:text-gray-800"><a href="#leistungen">Saalempfang</a></li>
            <li className="font-medium hover:text-gray-800"><a href="#leistungen">Gästeempfang</a></li>
            <li className="font-medium hover:text-gray-800"><a href="#leistungen">Show Highlights</a></li>
            <li className="font-medium hover:text-gray-800"><a href="#leistungen">Henna Abend</a></li>
            <li className="font-medium hover:text-gray-800"><a href="#leistungen">Verlobung</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-bold">Informationen</h3>
          <ul className="space-y-4 text-zinc-600">
            <li className="font-medium hover:text-gray-800"><a href="#packs">Pakete</a></li>
            <li className="font-medium hover:text-gray-800"><a href="#buchung">Verfügbarkeit</a></li>
            {/* <li className="font-medium hover:text-gray-800"><a href="/kontakt">Kontakt</a></li> */}
            {/* <li className="font-medium hover:text-gray-800"><a href="#">FAQ</a></li>
            <li className="font-medium hover:text-gray-800"><a href="#">Datenschutz</a></li>
            <li className="font-medium hover:text-gray-800"><a href="#">Impressum</a></li> */}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-bold">Regionen</h3>
          <ul className="space-y-4 text-zinc-600">
            <li className="font-medium hover:text-gray-800"><a href="#nrw">NRW</a></li>
            <li className="font-medium hover:text-gray-800"><a href="#hessen">Hessen</a></li>
            <li className="font-medium hover:text-gray-800"><a href="#deutschlandweit">Deutschlandweit</a></li>
          </ul>
        </div>

        <div className="lg:col-span-2 xl:col-span-1">

          <ul className="mb-10 flex items-center gap-2 text-zinc-600">

            <li className="font-medium">
              <a
    href="https://www.instagram.com/dakka_marrakechia_nassim/"
    target="_blank"
    rel="noreferrer"
    className="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
    aria-label="Instagram"
    title="Instagram"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 71 72" fill="none">
      <path
        d="M27.3762 35.7808C27.3762 31.1786 31.1083 27.4468 35.7132 27.4468C40.3182 27.4468 44.0522 31.1786 44.0522 35.7808C44.0522 40.383 40.3182 44.1148 35.7132 44.1148C31.1083 44.1148 27.3762 40.383 27.3762 35.7808ZM22.8683 35.7808C22.8683 42.8708 28.619 48.618 35.7132 48.618C42.8075 48.618 48.5581 42.8708 48.5581 35.7808C48.5581 28.6908 42.8075 22.9436 35.7132 22.9436C28.619 22.9436 22.8683 28.6908 22.8683 35.7808ZM46.0648 22.4346C46.0646 23.0279 46.2404 23.608 46.5701 24.1015C46.8997 24.595 47.3684 24.9797 47.9168 25.2069C48.4652 25.4342 49.0688 25.4939 49.6511 25.3784C50.2334 25.2628 50.7684 24.9773 51.1884 24.5579C51.6084 24.1385 51.8945 23.6041 52.0105 23.0222C52.1266 22.4403 52.0674 21.8371 51.8404 21.2888C51.6134 20.7406 51.2289 20.2719 50.7354 19.942C50.2418 19.6122 49.6615 19.436 49.0679 19.4358H49.0667C48.2708 19.4361 47.5077 19.7522 46.9449 20.3144C46.3821 20.8767 46.0655 21.6392 46.0648 22.4346ZM25.6072 56.1302C23.1683 56.0192 21.8427 55.6132 20.9618 55.2702C19.7939 54.8158 18.9606 54.2746 18.0845 53.4002C17.2083 52.5258 16.666 51.6938 16.2133 50.5266C15.8699 49.6466 15.4637 48.3214 15.3528 45.884C15.2316 43.2488 15.2073 42.4572 15.2073 35.781C15.2073 29.1048 15.2336 28.3154 15.3528 25.678C15.4639 23.2406 15.8731 21.918 16.2133 21.0354C16.668 19.8682 17.2095 19.0354 18.0845 18.1598C18.9594 17.2842 19.7919 16.7422 20.9618 16.2898C21.8423 15.9466 23.1683 15.5406 25.6072 15.4298C28.244 15.3086 29.036 15.2844 35.7132 15.2844C42.3904 15.2844 43.1833 15.3106 45.8223 15.4298C48.2612 15.5408 49.5846 15.9498 50.4677 16.2898C51.6356 16.7422 52.4689 17.2854 53.345 18.1598C54.2211 19.0342 54.7615 19.8682 55.2161 21.0354C55.5595 21.9154 55.9658 23.2406 56.0767 25.678C56.1979 28.3154 56.2221 29.1048 56.2221 35.781C56.2221 42.4572 56.1979 43.2466 56.0767 45.884C55.9656 48.3214 55.5573 49.6462 55.2161 50.5266C54.7615 51.6938 54.2199 52.5266 53.345 53.4002C52.4701 54.2738 51.6356 54.8158 50.4677 55.2702C49.5872 55.6134 48.2612 56.0194 45.8223 56.1302C43.1855 56.2514 42.3934 56.2756 35.7132 56.2756C29.033 56.2756 28.2432 56.2514 25.6072 56.1302Z"
        fill="#111827"
      />
    </svg>
  </a>
            </li>
            <li className="font-medium">
              
               <a
    href="https://wa.me/491776889333"
    target="_blank"
    rel="noreferrer"
    className="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
    aria-label="WhatsApp"
    title="WhatsApp"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 71 72" fill="none">
      <path
        d="M12.5068 56.8405L15.7915 44.6381C13.1425 39.8847 12.3009 34.3378 13.4211 29.0154C14.5413 23.693 17.5482 18.952 21.89 15.6624C26.2319 12.3729 31.6173 10.7554 37.0583 11.1068C42.4992 11.4582 47.6306 13.755 51.5108 17.5756C55.3911 21.3962 57.7599 26.4844 58.1826 31.9065C58.6053 37.3286 57.0535 42.7208 53.812 47.0938C50.5705 51.4668 45.8568 54.5271 40.5357 55.7133C35.2146 56.8994 29.6432 56.1318 24.8438 53.5513L12.5068 56.8405Z"
        fill="#111827"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.9566 36.8847C43.5093 36.5249 42.9856 36.2716 42.4254 36.1442C41.8651 36.0168 41.2831 36.0186 40.7236 36.1495C39.8831 36.4977 39.3399 37.8134 38.7968 38.4713C38.6823 38.629 38.514 38.7396 38.3235 38.7823C38.133 38.8251 37.9335 38.797 37.7623 38.7034C34.6849 37.5012 32.1055 35.2965 30.4429 32.4475C30.3011 32.2697 30.2339 32.044 30.2557 31.8178C30.2774 31.5916 30.3862 31.3827 30.5593 31.235C31.165 30.6368 31.6098 29.8959 31.8524 29.0809C31.9063 28.1818 31.6998 27.2863 31.2576 26.5011C30.9157 25.4002 30.265 24.42 29.3825 23.6762C28.9273 23.472 28.4225 23.4036 27.9292 23.4791C27.4359 23.5546 26.975 23.7709 26.6021 24.1019C25.9548 24.6589 25.4411 25.3537 25.0987 26.135C24.7562 26.9163 24.5939 27.7643 24.6236 28.6165C24.6256 29.0951 24.6864 29.5716 24.8046 30.0354C25.1049 31.1497 25.5667 32.2144 26.1754 33.1956C26.6145 33.9473 27.0937 34.6749 27.6108 35.3755C29.2914 37.6767 31.4038 39.6305 33.831 41.1284C35.049 41.8897 36.3507 42.5086 37.7105 42.973C39.1231 43.6117 40.6827 43.8568 42.2237 43.6824C43.1018 43.5499 43.9337 43.2041 44.6462 42.6755C45.3588 42.1469 45.9302 41.4518 46.3102 40.6512C46.5334 40.1675 46.6012 39.6269 46.5042 39.1033C46.2714 38.0327 44.836 37.4007 43.9566 36.8847Z"
        fill="#111827"
      />
    </svg>
  </a>
            </li>

            <li className="font-medium">

                 <a
    href="https://www.tiktok.com/@dakka_marrakechia_nassim"
    target="_blank"
    rel="noreferrer"
    className="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
    aria-label="TikTok"
    title="TikTok"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72" fill="none">
      <path
        d="M50.0783 22.6244C49.7746 22.4674 49.4789 22.2953 49.1924 22.1088C48.3592 21.5579 47.5952 20.9089 46.9171 20.1756C45.2202 18.2341 44.5864 16.2644 44.353 14.8853H44.3624C44.1674 13.7406 44.248 13 44.2602 13H36.5314V42.8856C36.5314 43.2869 36.5314 43.6834 36.5146 44.0753C36.5146 44.1241 36.5099 44.1691 36.5071 44.2216C36.5071 44.2431 36.5071 44.2656 36.5024 44.2881C36.5024 44.2938 36.5024 44.2994 36.5024 44.305C36.4209 45.3773 36.0772 46.4131 35.5014 47.3214C34.9257 48.2297 34.1355 48.9825 33.2005 49.5138C32.226 50.0681 31.1238 50.359 30.0027 50.3575C26.4017 50.3575 23.4833 47.4213 23.4833 43.795C23.4833 40.1688 26.4017 37.2325 30.0027 37.2325C30.6843 37.2319 31.3618 37.3391 32.0099 37.5503L32.0192 29.6809C30.0518 29.4268 28.053 29.5832 26.149 30.1402C24.245 30.6972 22.477 31.6427 20.9567 32.9172C19.6246 34.0746 18.5047 35.4557 17.6474 36.9981C17.3211 37.5606 16.0902 39.8209 15.9411 43.4894C15.8474 45.5716 16.4727 47.7288 16.7708 48.6203V48.6391C16.9583 49.1641 17.6849 50.9556 18.8689 52.4659C19.8237 53.6774 20.9518 54.7417 22.2167 55.6244V55.6056L22.2355 55.6244C25.9771 58.1669 30.1255 58 30.1255 58C30.8436 57.9709 33.2492 58 35.9811 56.7053C39.0111 55.27 40.7361 53.1316 40.7361 53.1316C41.8381 51.8538 42.7144 50.3977 43.3274 48.8256C44.0267 46.9872 44.2602 44.7822 44.2602 43.9009V28.0459C44.3539 28.1022 45.6027 28.9281 45.6027 28.9281C45.6027 28.9281 47.4017 30.0813 50.2086 30.8322C52.2224 31.3666 54.9355 31.4791 54.9355 31.4791V23.8066C53.9849 23.9097 52.0546 23.6097 50.0783 22.6244Z"
        fill="#111827"
      />
    </svg>
  </a>
            </li>

          </ul>

          <div className="grid w-full max-w-sm items-center gap-1.5">

            <label className="text-sm font-medium">
              Angebot anfragen
            </label>

            <div className="flex w-full max-w-sm items-center space-x-2">

              <a
                href="https://wa.me/491776889333?text=Hallo%20Dakka%20Nassim,%0A%0AIch%20m%C3%B6chte%20eine%20Anfrage%20stellen."
                className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-zinc-900 text-white hover:bg-zinc-900/90 h-10 px-4 py-2">
                WhatsApp Anfrage
              </a>

            </div>

            <p className="mt-1 text-xs text-zinc-600">
              Schnellste Antwort per WhatsApp.
            </p>

          </div>

        </div>
      </div>

      <div
        className="mt-24 flex flex-col flex-wrap justify-between gap-4 border-t pt-8 text-sm font-medium text-zinc-600 md:flex-row md:items-center">

        <p>© 2026 Dakka Marrakechia Nassim. Alle Rechte vorbehalten.</p>

        {/* <ul className="flex gap-4">
          <li className="whitespace-nowrap underline hover:text-gray-800">
            <a href="#">AGB</a>
          </li>
          <li className="whitespace-nowrap underline hover:text-gray-800">
            <a href="#">Datenschutz</a>
          </li>
        </ul> */}

      </div>

    </footer>
  </div>
</section>
  );
}