<template>
    <center class="content" style="margin-top:60px;">
        <h1 class="codefont-bold">KlashDevelopment</h1>
        <p class="codefont">
            We are KlashDevelopment. A computer engineering company that wants to simplify tech and create the best products possible. We hope that in the future, we will be able to expand to hardware and other software platforms.
        </p>
        <Seperator linestyle="solid" />
        <section class="codefont">
            <h2 class="codefont-bold">Download</h2>
            <p>To download our products, head to the products page.</p>
            <!-- <h3 class="arialfont" style="color: #f43636;">All products are currently downloadable through <a class="blue" href="https://discord.gg/epBXp5hHBQ">Discord</a> as the website still is in a Work-In-Progress stage.</h3> -->
        </section>
        <Seperator linestyle="solid" />
        <section class="codefont">
            <font-awesome-icon onclick="window.open('https://dsc.gg/klashdev')" class="fa-link" icon="fa-brands fa-discord" />
            <font-awesome-icon onclick="window.open('https://github.com/klashdevelopment')" class="fa-link" icon="fa-brands fa-github" />
            <font-awesome-icon onclick="window.open('https://twitter.com/KlashDev')" class="fa-link"  icon="fa-brands fa-twitter" />
            <font-awesome-icon onclick="window.open('https://youtube.com/@klashdevelopment')" class="fa-link"  icon="fa-brands fa-youtube" />
            <font-awesome-icon onclick="window.open('https://tiktok.com/@klashdevelopment')" class="fa-link" icon="fa-brands fa-tiktok" />
            <font-awesome-icon onclick="window.open('mailto:developmentklash@gmail.com')" class="fa-link"  icon="fa-solid fa-envelope" />
        </section>
    </center>
</template>
<script>
import Seperator from './Seperator.vue';
export default {
    components: {
        Seperator
    }
}
</script>
<style>
    .content {
        width: 60%;
        margin-right: 20%;
        margin-left: 20%;
    }
</style>