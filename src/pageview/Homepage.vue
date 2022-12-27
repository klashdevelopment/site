<template>
    <Navbar />
    <Content />
</template>
<script>
import Content from '../components/Content.vue';
import Navbar from '../components/Navbar.vue';
export default {
    components: {
        Content,
        Navbar
    }
}
</script>