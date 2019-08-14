import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "",
    url: "",
    picture: "",
    address: "",
    hours: ""
  },
  mutations: {

  },
  actions: {
    async search (context) {
      let config = {
        headers: {'Authorization' : "bearer" + process.env.VUE_APP_YELP_KEY}
      };
      let testYelp = await Axios.get('https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972', {}, config);
      console.log(testYelp);
    }
  }
})
