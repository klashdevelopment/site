<template>
    <nav class="nav-nav">
  <ul class="nav-ul">
    <NavIcon src="/website/profile.png" />
    <NavItem text="Home" link="/" :active="(activePage == 'home')" />
    <NavItem text="Products" link="products" :right="true" :active="(activePage == 'products')" />
  </ul>
</nav>
</template>
<script>
import NavItem from './NavItem.vue';
import NavIcon from './NavIcon.vue';
export default {
    components: {
      NavItem,
      NavIcon
    },
    props: {
      activePage: {
        default: 'home',
        type: String
      }
    }
}
</script>
<style scoped>
</style>