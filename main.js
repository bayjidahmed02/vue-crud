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
      editModal: false,
    };
  },
  methods: {
    showModal() {
      this.addModal = true;
    },
    hideModal() {
      this.addModal = false;
    },
    showUpdateModal(user) {
      this.form.id = user.id;
      this.form.name = user.name;
      this.form.email = user.email;
      this.form.phone = user.phone;
      this.editModal = true;
    },
    hideUpdateModal() {
      this.editModal = false;
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
          this.getData();
          this.hideModal();
          this.form.name = "";
          this.form.email = "";
          this.form.phone = "";
        });
    },
    updateData() {
      let formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("email", this.form.email);
      formData.append("phone", this.form.phone);
      axios
        .post(
          `http://localhost/vue/api.php?action=update&id=${this.form.id}`,
          formData
        )
        .then((res) => {
          // this.users = res.data.users;
          this.getData();
          this.editModal = false;
          this.form.name = "";
          this.form.email = "";
          this.form.phone = "";
        });
    },
    deleteData(id) {
      axios
        .get(`http://localhost/vue/api.php?action=delete&id=${id}`)
        .then((res) => {
          this.getData();
        });
    },
  },
  mounted() {
    this.getData();
  },
}).mount("#app");
