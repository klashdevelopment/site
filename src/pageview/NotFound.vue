<template>
    <Navbar activePage="404" />
    <center>
        <h1>Uh-Oh!</h1>
        <h2>We could not find the page you are looking for.</h2>
        <a class="blue" href="/site">Return Home</a>
    </center>
    <section>
        <font-awesome-icon onclick="window.open('https://dsc.gg/klashdev')" class="fa-link" icon="fa-brands fa-discord" />
        <font-awesome-icon onclick="window.open('https://github.com/klashdevelopment')" class="fa-link" icon="fa-brands fa-github" />
        <font-awesome-icon onclick="window.open('https://twitter.com/KlashDev')" class="fa-link"  icon="fa-brands fa-twitter" />
        <font-awesome-icon onclick="window.open('https://youtube.com/@klashdevelopment')" class="fa-link"  icon="fa-brands fa-youtube" />
        <font-awesome-icon onclick="window.open('https://tiktok.com/@klashdevelopment')" class="fa-link" icon="fa-brands fa-tiktok" />
        <font-awesome-icon onclick="window.open('mailto:developmentklash@gmail.com')" class="fa-link"  icon="fa-solid fa-envelope" />
    </section>
</template>
<script>
    import Navbar from '../components/Navbar.vue';
    export default {
        components: {
            Navbar
        }
    }
</script>