<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <footer class="bg-gray-9 border-gray-7" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8 xl:col-span-1">
          <h1 class="font-serif text-2xl uppercase lg:text-4xl md:text-3xl text-gray-50">
            <router-link to="/" class="rounded-md lg:px-2 focus:outline-none focus:bg-pink-custom-2">
              Naked <span class="text-pink-8"> /NFT<span class="lowercase">s</span> </span>
            </router-link>
          </h1>

          <p class="text-base text-gray-5">
            Discover & collect NFTs in—what will be—the world’s first cross-chain marketplace, supporting SOL, ETH, ADA,
            and more. Early 2022.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-base tracking-wider lg:px-2 text-gray-4">Collections</h3>
              <ul role="list" class="mt-4 space-y-4">
                <li>
                  <router-link
                    to="/collections"
                    class="text-base transition duration-150 ease-in-out rounded-md  lg:p-2 focus:outline-none focus:bg-pink-custom-2 text-gray-5 hover:text-pink-8"
                  >
                    All NFTs
                  </router-link>
                </li>

                <li>
                  <span class="text-base opacity-50 select-none text-gray-5 lg:p-2"> Popular </span>
                </li>

                <li>
                  <span class="text-base opacity-50 select-none text-gray-5 lg:p-2"> Trending </span>
                </li>

                <li>
                  <span class="text-base opacity-50 select-none text-gray-5 lg:p-2"> Recent Drop </span>
                </li>

                <li>
                  <span class="text-base opacity-50 select-none text-gray-5 lg:p-2"> New </span>
                </li>

                <li>
                  <span class="text-base opacity-50 select-none text-gray-5 lg:p-2"> Our Picks </span>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-base tracking-wider lg:px-2 text-gray-4">Stats</h3>
              <ul role="list" class="mt-4 space-y-4">
                <li>
                  <span class="text-base opacity-50 select-none text-gray-5 lg:p-2"> Rankings </span>
                </li>

                <li>
                  <span class="text-base opacity-50 select-none text-gray-5 lg:p-2"> Activity </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-base tracking-wider lg:px-2 text-gray-4">Social</h3>
              <ul role="list" class="mt-4 space-y-4">
                <li>
                  <a
                    href="https://www.instagram.com/nakednfts/"
                    target="_blank"
                    class="text-base transition duration-150 ease-in-out rounded-md  lg:p-2 focus:outline-none focus:bg-pink-custom-2 text-gray-5 hover:text-pink-8"
                  >
                    Instagram
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/nakednfts/"
                    target="_blank"
                    class="text-base transition duration-150 ease-in-out rounded-md  lg:p-2 focus:outline-none focus:bg-pink-custom-2 text-gray-5 hover:text-pink-8"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/jsahnpyr4X"
                    target="_blank"
                    class="text-base transition duration-150 ease-in-out rounded-md  lg:p-2 focus:outline-none focus:bg-pink-custom-2 text-gray-5 hover:text-pink-8"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="https://hoodratz.io"
                    target="_blank"
                    class="text-base transition duration-150 ease-in-out rounded-md  lg:p-2 focus:outline-none focus:bg-pink-custom-2 text-gray-5 hover:text-pink-8"
                  >
                    Hoodratz.io
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-base tracking-wider text-gray-4 lg:px-2">Legal</h3>
              <ul role="list" class="mt-4 space-y-4">
                <li>
                  <router-link
                    to="/privacy-policy"
                    class="text-base transition duration-150 ease-in-out rounded-md  lg:p-2 focus:outline-none focus:bg-pink-custom-2 text-gray-5 hover:text-pink-8"
                  >
                    Privacy Policy
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between pt-8 mt-12 border-t border-gray-6">
        <p class="text-base text-gray-4 xl:text-left">&copy; 2022 Naked NFTs</p>

        <div>
          <ul class="flex items-center space-x-8">
            <li>
              <a
                class="transition duration-150 ease-in-out rounded-md  text-gray-7 lg:p-2 focus:outline-none focus:text-gray-5 hover:text-gray-5"
                target="_blank"
                href="https://www.instagram.com/nakednfts/"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.99805 0C3.13905 0 0 3.14195 0 7.00195V17.002C0 20.861 3.14195 24 7.00195 24H17.002C20.861 24 24 20.858 24 16.998V6.99805C24 3.13905 20.858 0 16.998 0H6.99805ZM19 4C19.552 4 20 4.448 20 5C20 5.552 19.552 6 19 6C18.448 6 18 5.552 18 5C18 4.448 18.448 4 19 4ZM12 6C15.309 6 18 8.691 18 12C18 15.309 15.309 18 12 18C8.691 18 6 15.309 6 12C6 8.691 8.691 6 12 6ZM12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                class="duration-150 ease-in-out rounded-md  text-gray-7 lg:p-2 focus:outline-none focus:text-gray-5 hover:text-gray-5"
                href="https://twitter.com/nakednfts/"
                target="_blank"
              >
                <svg width="28" height="24" viewBox="0 0 24 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.55016 19.7502C16.6045 19.7502 21.5583 12.2469 21.5583 5.74211C21.5583 5.53117 21.5536 5.31554 21.5442 5.1046C22.5079 4.40771 23.3395 3.5445 24 2.55554C23.1025 2.95484 22.1496 3.21563 21.1739 3.32898C22.2013 2.71315 22.9705 1.74572 23.3391 0.606011C22.3726 1.1788 21.3156 1.58286 20.2134 1.80085C19.4708 1.01181 18.489 0.48936 17.4197 0.314295C16.3504 0.13923 15.2532 0.321295 14.2977 0.832341C13.3423 1.34339 12.5818 2.15495 12.1338 3.14156C11.6859 4.12816 11.5754 5.23486 11.8195 6.29054C9.86249 6.19233 7.94794 5.68395 6.19998 4.79834C4.45203 3.91274 2.90969 2.66968 1.67297 1.14976C1.0444 2.23349 0.852057 3.51589 1.13503 4.73634C1.418 5.95678 2.15506 7.02369 3.19641 7.72023C2.41463 7.69541 1.64998 7.48492 0.965625 7.10617V7.1671C0.964925 8.30439 1.3581 9.40683 2.07831 10.287C2.79852 11.1672 3.80132 11.7708 4.91625 11.9952C4.19206 12.1934 3.43198 12.2222 2.69484 12.0796C3.00945 13.0577 3.62157 13.9131 4.44577 14.5266C5.26997 15.14 6.26512 15.4808 7.29234 15.5015C5.54842 16.8714 3.39417 17.6144 1.17656 17.6109C0.783287 17.6103 0.390399 17.5861 0 17.5387C2.25286 18.984 4.87353 19.7516 7.55016 19.7502Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                class="duration-150 ease-in-out rounded-md  text-gray-7 lg:p-2 focus:outline-none focus:text-gray-5 hover:text-gray-5"
                href="https://discord.gg/jsahnpyr4X"
                target="_blank"
              >
                <svg width="32" height="24" viewBox="0 0 22 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.98 2.69012C17.3 1.35012 14.9 0.980117 13.86 0.870117H13.82C13.66 0.870117 13.51 0.960117 13.46 1.11012C13.37 1.34012 13.51 1.59012 13.74 1.63012C14.91 1.87012 16.26 2.29012 17.49 3.06012C17.74 3.21012 17.8 3.55012 17.6 3.78012C17.44 3.96012 17.17 3.98012 16.96 3.86012C14.56 2.38012 11.58 2.30012 11 2.30012C10.42 2.30012 7.44 2.38012 5.04 3.86012C4.83 3.98012 4.56 3.96012 4.4 3.78012C4.2 3.55012 4.26 3.21012 4.51 3.06012C5.74 2.29012 7.09 1.87012 8.26 1.63012C8.49 1.59012 8.63 1.34012 8.54 1.11012C8.49 0.960117 8.34 0.870117 8.18 0.870117H8.14C7.1 0.980117 4.7 1.35012 3.02 2.69012C2.04 3.60012 0.09 8.83012 0 13.4601C0 13.7701 0.08 14.0801 0.26 14.3301C1.43 15.9801 3.97 16.9701 5.89 17.1101C6.18 17.1301 6.46 17.0001 6.63 16.7601C6.64 16.7601 6.64 16.7501 6.65 16.7401C7 16.2601 6.79 15.5801 6.23 15.3701C4.63 14.7801 3.81 14.0801 3.76 14.0301C3.56 13.8501 3.54 13.5501 3.71 13.3501C3.89 13.1501 4.19 13.1301 4.39 13.3101C4.42 13.3301 6.64 15.2201 11 15.2201C15.36 15.2201 17.58 13.3301 17.61 13.3101C17.81 13.1301 18.11 13.1501 18.29 13.3501C18.46 13.5501 18.44 13.8501 18.24 14.0301C18.19 14.0801 17.37 14.7801 15.77 15.3701C15.21 15.5801 15 16.2601 15.35 16.7401C15.36 16.7501 15.36 16.7601 15.37 16.7601C15.54 17.0001 15.82 17.1301 16.11 17.1101C18.03 16.9701 20.57 15.9801 21.74 14.3301C21.92 14.0801 22 13.7701 22 13.4601C21.91 8.83012 19.96 3.60012 18.98 2.69012ZM7.89 11.8701C6.97 11.8701 6.22 11.0101 6.22 9.96012C6.22 8.90012 6.97 8.04012 7.89 8.04012C8.82 8.04012 9.56 8.90012 9.56 9.96012C9.56 11.0101 8.82 11.8701 7.89 11.8701ZM14.11 11.8701C13.18 11.8701 12.44 11.0101 12.44 9.96012C12.44 8.90012 13.18 8.04012 14.11 8.04012C15.03 8.04012 15.78 8.90012 15.78 9.96012C15.78 11.0101 15.03 11.8701 14.11 11.8701Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
