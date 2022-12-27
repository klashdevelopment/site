<template>
    <RouterView />
</template>
<script>
    import CountUp from './components/CountUp.vue';
    import Navbar from './components/Navbar.vue';
    import Content from './components/Content.vue';
    import Seperator from './components/Seperator.vue';
    import { RouterView } from 'vue-router';
    export default {
        components: {
            Navbar,
            Content,
            Seperator,
            CountUp,
            RouterView
        }
    }
</script>
<style scoped>

</style>