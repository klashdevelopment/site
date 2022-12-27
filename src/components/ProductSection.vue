<template>
    <!-- <button @click="collapse(this)">Open Collapsible</button> -->
    <div :id="'product-section-'+company">
        <div style="border-top: 1px solid white; border-bottom: 1px solid white;">
            <h2>{{ company }}</h2>
            
            <div style="margin: 8px; padding: 8px;" v-for="item in products"><a class="codefont-bold" style="font-size:20px;">{{ item.title }}</a> <p> {{ item.description }} </p> <button class="download-button" @click="download(item)"> {{ item.btntext }} </button></div>
        </div>
    </div>
</template>
<!-- <style>
.collapsible {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
}
.active, .collapsible:hover {
  background-color: #ccc;
}
.content {
  display: none;
  overflow: hidden;
}
</style> -->
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
        // collapse(item) {
        //     item.classList.toggle("active");
        //     var content = document.getElementById("product-section-"+company);
        //     if (content.style.display === "block") {
        //         content.style.display = "none";
        //     } else {
        //         content.style.display = "block";
        //     }
        // }
    }
}
</script>