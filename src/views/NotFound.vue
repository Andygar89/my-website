<template>
  <div class="font-sora text-gray-4">
    <main class="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="max-w-xl py-16 mx-auto sm:py-24">
        <div class="text-center">
          <h1 class="mt-2 text-4xl font-extrabold tracking-tight text-black sm:text-5xl font-kumbh-bold">
            This page does not exist.
          </h1>
          <p class="mt-2 font-serif text-lg text-pink-3">The page you are looking for could not be found.</p>
        </div>
        <div class="mt-12">
          <h2 class="text-sm font-semibold tracking-wide text-gray-500 uppercase">Popular pages</h2>
          <ul role="list" class="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
            <li class="relative flex items-start py-6 space-x-4 hover:text-black">
              <div class="shrink-0">
                <span class="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-50">
                  <svg
                    class="w-6 h-6 text-pink-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </span>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="text-base font-medium">
                  <span class="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <a href="/" class="font-serif text-lg text-black focus:outline-none">
                      <span class="absolute inset-0" aria-hidden="true"></span>
                      Home
                    </a>
                  </span>
                </h3>
                <p class="text-base">Discover some NFTs!</p>
              </div>
              <div class="self-center shrink-0">
                <img src="/images/chevron.svg" alt="chevron icon" />
              </div>
            </li>

            <li class="relative flex items-start py-6 space-x-4 hover:text-black">
              <div class="shrink-0">
                <span class="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-50">
                  <svg
                    class="w-6 h-6 text-pink-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="text-base font-medium">
                  <span class="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <a href="/collections" class="font-serif text-lg text-black focus:outline-none">
                      <span class="absolute inset-0" aria-hidden="true"></span>
                      Collection
                    </a>
                  </span>
                </h3>
                <p class="text-base">Find out our NFTs!</p>
              </div>
              <div class="self-center shrink-0">
                <img src="/images/chevron.svg" alt="chevron icon" />
              </div>
            </li>
          </ul>
          <div class="mt-8">
            <a href="/" class="text-base font-medium text-pink-3 hover:text-pink-2"
              >Or go back home<span aria-hidden="true"> &rarr;</span></a
            >
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
