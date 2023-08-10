import { createStore } from 'vuex'

export default createStore({
  state: {
    email: "",
    password: "",
    address1: "",
    address2: "",
    city: "",
    State: "",
    zip: "",
  },
  getters: {
  },
  mutations: {
    login(state, { email, password }) {
      state.email = email;
      state.password = password;
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      alert('Logged in');
    },
    logout(state) {
      state.email = "";
      state.password = "";
      localStorage.removeItem('email');
      localStorage.removeItem('password');
      alert('Logged out');
    },
    initializeStore(state) {
      if (localStorage.getItem('email') && localStorage.getItem('password')) {
        state.email = localStorage.getItem('email');
        state.password = localStorage.getItem('password');
      }
    },
    register(state, payload) {
      const { email, password, address1, address2, city, State, zip } = payload;

      state.email = email;
      state.password = password;
      state.address1 = address1;
      state.address2 = address2;
      state.city = city;
      state.State = State;
      state.zip = zip;

      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      localStorage.setItem('address1', address1);
      localStorage.setItem('address2', address2);
      localStorage.setItem('city', city);
      localStorage.setItem('State', State);
      localStorage.setItem('zip', zip);

      alert('Registered');
    }
  },
  actions: {
  },
  modules: {
  }
})
