<template>
  <div class="flex flex-col my-5">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div class="overflow-hidden border-b border-gray-200 shadow">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-sm font-medium tracking-wider text-left text-gray-500 uppercase">
                  Item
                </th>
                <th scope="col" class="px-6 py-3 text-sm font-medium tracking-wider text-left text-gray-500 uppercase">
                  Price
                </th>
                <th scope="col" class="px-6 py-3 text-sm font-medium tracking-wider text-left text-gray-500 uppercase">
                  Expiration
                </th>
                <th scope="col" class="px-6 py-3 text-sm font-medium tracking-wider text-left text-gray-500 uppercase">
                  To
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="w-20 h-20 shrink-0">
                      <img
                        src="https://cdn.alpha.art/opt/a/8/a839057f9b19f052d4203b745ba095c4709b1c5a/original.webp"
                        class="object-cover object-center w-full h-full rounded-md"
                      />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">Baby Apes</div>
                      <div class="text-sm text-gray-500">BabyApe #1407</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">◎ 0.9</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">2 days</div>
                </td>
                <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  <a href="#" class="text-blue-600"> BHfD...F9DK </a>
                </td>
                <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                  <a href="#" class="text-red-600 transition duration-150 ease-in-out hover:text-red-900">Cancel</a>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="w-20 h-20 shrink-0">
                      <img
                        src="https://cdn.alpha.art/opt/f/4/f41375343ecfe67286b53b50667593e5f62fc6fc/original.webp"
                        class="object-cover object-center w-full h-full rounded-md"
                      />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">DeGods</div>
                      <div class="text-sm text-gray-500">DeGod #3293</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">◎ 0.1</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">2 days</div>
                </td>
                <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  <a href="#" class="text-blue-600"> BHfD...F9DK </a>
                </td>
                <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                  <a href="#" class="text-red-600 transition duration-150 ease-in-out hover:text-red-900">Cancel</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>