<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div class="overflow-hidden border border-t-0 border-gray-200 rounded-b-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Price
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Expiration
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  From
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">10 SOL</td>
                <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">2 days</td>
                <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">FZav...RrKu</td>
              </tr>
              <tr>
                <td class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">10 SOL</td>
                <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">4 days</td>
                <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">FZav...RrKu</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>