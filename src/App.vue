<template>
<div id="app">
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: 'App',

    data() {
        return {
            map: null
        }
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
}
</style>
