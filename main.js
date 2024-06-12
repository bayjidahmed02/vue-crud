const app = Vue.createApp({
  data() {
    return {
      users: [],
    };
  },
  methods: {
    getData() {
      axios.get("http://localhost/vue/api.php?action=read").then((res) => {
        this.users = res.data.users;
      });
    },
  },
  mounted() {
    this.getData();
  },
}).mount("#app");
