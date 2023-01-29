<template>
    <!-- <button @click="collapse(this)">Open Collapsible</button> -->
    <div :id="'product-section-'+company">
        <div style="border-top: 1px solid white; border-bottom: 1px solid white;">
            <h2>{{ company }}</h2>

            <section :class="['codefont', 'fa-link'+(item.color == 'blue' ? '-blue' : (item.color == 'green' ? '2' : '-del'))+'-colors', 'minibutton'+(item.color == 'blue' ? 'blue' : (item.color == 'green' ? '' : 'del'))]" @click="download(item)" v-for="item in products" style="max-width: 40%;">
                <font-awesome-icon class="fa-link2" :icon="['fas', item.icon]"/><br>
                <b>{{ item.title }}</b><br>
                <a>{{ item.description }}</a><br>
                <button class="download-button" @click="download(item)"> {{ item.btntext }} </button>
            </section><br>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        products: {
            type: Array,
            required: true
        },
        company: String,
    },
    methods: {
        download(item) {
            window.open(item.download);
        }
    }
}
</script>