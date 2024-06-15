const app = Vue.createApp({
  data() {
    return {
      users: [],
      form: {
        name: "",
        email: "",
        phone: "",
      },
      addModal: false,
    };
  },
  methods: {
    showModal() {
      this.addModal = true;
    },
    hideModal() {
      this.addModal = false;
    },
    getData() {
      axios.get("http://localhost/vue/api.php?action=read").then((res) => {
        this.users = res.data.users;
      });
    },
    addData() {
      let formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("email", this.form.email);
      formData.append("phone", this.form.phone);
      axios
        .post("http://localhost/vue/api.php?action=create", formData)
        .then((res) => {
          // this.users = res.data.users;
          console.log(res.data);
          this.getData();
          this.hideModal();
          this.form.name = "";
          this.form.email = "";
          this.form.phone = "";
        });
    },
  },
  mounted() {
    this.getData();
  },
}).mount("#app");
