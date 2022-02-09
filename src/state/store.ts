import { createStore } from 'vuex';
import wallet from './modules/wallet';
import transaction from './modules/transaction';
import user from './modules/user';
import collection from './modules/collection';
import item from './modules/item';

export default createStore({
  modules: {
    wallet,
    transaction,
    user,
    collection,
    item,
  },
});
