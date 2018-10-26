<template>
    <div class="wrapper">
        <div class="profile">
            <router-link class="profile-image" to="/">
                <img src="../assets/img/wow.png">
            </router-link>
            <span class="profile-title">{{ genConfig.title }}</span>
        </div>
        <ul class="navbar">
            <li class="nav-warpper" v-for="nav in navs" :key="nav.link">
                <router-link class="navbar-link" :to="nav.link">
                    <i class="material-icons">{{nav.icon}}</i>
                    <span>{{nav.name}}</span>
                </router-link>
            </li>
        </ul>
        <ul class="thirdbar">
            <li>
                <a v-for="icon in icons" :key="icon.href" :style="{'mask-image': 'url('+icon.icon+')'}" class="third-icon icon-color" :href="icon.href"></a>
                <a class="third-icon icon-material" href="https://www.google.com/webhp#newwindow=1&safe=strict&q=site:https://dirusec.com/blog"><i class="material-icons">search</i></a>
            </li>
        </ul>
    </div>

</template>

<script>
export default {
    name: "Sidebar",
    computed: {
        genConfig: function(){
            return this.$store.state.sidebar.genConfig
        },

        navs: function(){
            return this.$store.state.sidebar.navs
        },

        icons: function(){
            return this.$store.state.sidebar.icons
        }
    }
}
</script>

<style scoped src="../assets/css/Sidebar.css">
</style>