const cardComponent = {
    props: ["title", "description", "url", "btn"],
    template: `
        <div class='card w-50 mx-auto mt-5'>
            <div class='card-header d-flex justify-content-between'>
                <h4 class='mb-0 align-self-center'>{{ title }}</h4>
                <a :href='url' class='btn btn-primary rounded-1'>{{ btn }}</a>
            </div>
            <div class='card-body'>
                <p class='card-text'>{{ description }}</p>
            </div>
        </div>
    `,
};
const app = Vue.createApp({
    data() {
        return {};
    },
    components: {
        "card-component": cardComponent,
    },
});
app.mount("#app");
