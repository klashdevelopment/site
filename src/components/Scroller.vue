<template>
    <marquee class=".scroller-marquee" direction="up" behavior="scroll" scrollamount=10>
    <img :src="image" class=".scroller-bgimg">
    </marquee>
</template>
<style>
.scroller-bgimg {
  width: 100%;
  object-fit: cover;
}
.scroller-marquee {
  height: 200px;
}
</style>
<script>
export default {
    props: {
        image: String
    }
}
</script>