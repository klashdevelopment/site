<template>
    <Navbar activePage="products" />
    <center class="content codefont" style="margin-top:60px;">
        <h1 class="codefont-bold">Products & Downloads</h1>
        <!-- <h3>Welcome, {{ process.env.USER }}</h3> -->
        
        <ProductSection company="KlashDevelopment Gaming" :products="[
            {
                title: 'KlashKlient',
                btntext: 'Download',
                description: 'The Future of Minecraft PVP Clients.',
                download: '',
                icon: 'cube',
                color: 'green'
            },
            {
                title: 'KlashNetwork',
                btntext: 'Join on Minecraft',
                description: 'KlashDevelopment\'s Minecraft Server. Best with KlashKlient!', 
                download: 'javascript:(function(){prompt(\'Java: Join the server ip in 1.19.2.\\nBedrock: Join the server IP with this port: 19133\', \'klashnetwork.minecraft.best\');}())',
                icon: 'server',
                color: 'green'
            }
        ]" />
        <ProductSection company="Ropoid Studios (Formerly Garfuncle Inc.)" :products="[
            {
                title: 'Ætheria & Beyond',
                btntext: 'Download',
                description: 'An open-world multi-campaign RP game with elements similar to D&D but with many unique suprises, twists, and turns.',
                download: 'javascript:(function(){alert(\'This game is still in development.\');}())',
                icon: 'wand-sparkles',
                color: 'blue'
            },
            {
                title: 'Mythos beyond the 3rd axis',
                btntext: 'Download',
                description: 'Mythos beyond the 3rd axis is a game where players battle in a high-speed, movement-based 4D arena shooter to harness the power of an ancient civilization\'s technology.',
                download: 'javascript:(function(){alert(\'This game is still in development.\');}())',
                icon: 'gun',
                color: 'red'
            }
        ]" />
        <ProductSection company="PotatoCat Game Studios" :products="[]" />
        <!-- <h5>PotatoCat does not have any current products.</h5> -->
        <ProductSection company="Klix Hardware" :products="[
            {
                title: 'Klixboard',
                description: 'A high quality gaming keyboard.',
                btntext: 'Purchase',
                download: 'javascript:(function(){alert(\'Not avalible for purchase\');}())',
                icon: 'keyboard',
                color: 'blue'
            },
            {
                title: 'Klixmouse',
                description: 'A high quality gaming mouse.',
                btntext: 'Purchase',
                download: 'javascript:(function(){alert(\'Not avalible for purchase\');}())',
                icon: 'computer-mouse',
                color: 'blue'
            },
            {
                title: 'Kliktop',
                description: 'A high quality gaming laptop.',
                btntext: 'Purchase',
                download: 'javascript:(function(){alert(\'Not avalible for purchase\');}())',
                icon: 'laptop-house',
                color: 'blue'
            }
        ]" />
        <ProductSection company="Klash Software" :products="[
            {
                title: 'Bluefire OS',
                btntext: 'Download',
                description: 'An operating system made for everyone.',
                download: 'javascript:(function(){alert(\'Not avalible for download. Going to be bundled on Klix products.\');}())',
                icon: 'fire-alt',
                color: 'blue'
            },
            {
                title: 'Ghosthost',
                btntext: 'Download',
                description: 'A VPS & Webserver host for super cheap prices.',
                download: 'javascript:(function(){alert(\'Ghosthost is not yet avalible.\');}())',
                icon: 'ghost',
                color: 'red'
            }
        ]" />

        <section>
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
import Content from '../components/Content.vue';
import Navbar from '../components/Navbar.vue';
import Seperator from '../components/Seperator.vue';
import ProductSection from '../components/ProductSection.vue';
export default {
    components: {
        Content,
        Navbar,
        Seperator,
        ProductSection
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
