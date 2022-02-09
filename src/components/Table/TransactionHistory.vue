  <template>
  <div class="flex flex-col mt-8">
    <div class="flex items-center justify-between p-3 border border-gray-200 rounded-t-lg">
      <h2 class="font-semibold text-gray-900">Transaction History</h2>
      <select
        id="location"
        name="location"
        class="block py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option>United States</option>
        <option selected>Canada</option>
        <option>Mexico</option>
      </select>
    </div>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div class="overflow-hidden border border-t-0 border-gray-200 rounded-b-lg">
          <table class="min-w-full divide-y divide-gray-200 table-fixed">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Event</th>
                <th class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Price</th>
                <th class="py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase focus-within:px-6">
                  From
                </th>
                <th class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">To</th>
                <th class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Date</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(transaction, index) in transactions" :key="index">
                <td class="px-6 py-4 text-sm text-gray-700">Sale</td>
                <td class="px-6 py-4 text-sm text-gray-700">{{ transaction.amount_sol }}</td>
                <td class="px-6 py-4 text-sm text-gray-700">{{ transaction.sender_address }}</td>
                <td class="px-6 py-4 text-sm text-gray-700">{{ transaction.receiver_address }}</td>
                <td class="px-6 py-4 text-sm text-gray-700">{{ transaction.created_at }}</td>
              </tr>
              <!-- More people... -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup(props) {
    const store = useStore();
    const route = useRoute();

    let transactions = ref([]);

    onMounted(async () => {
      await fetchTransactions();
    });

    const fetchTransactions = async () => {
      await store.dispatch('fetchItemTransactions', route.params.mint);

      transactions.value = computed(() => store.getters.itemTransactions).value;
    };

    return {
      transactions,
      fetchTransactions,
    };
  },
});
</script>
