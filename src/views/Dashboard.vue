<template>
    <div class="app">
        <div id='loader'>
            <div class="spinner"></div>
        </div>
        
        <dashboardHeader />
        <dashboardSidebar />
        <router-view></router-view>
    </div>
</template>

<script>
    import dashboardSidebar from "@/components/dashboard/sidebar.vue"

    export default {
        components: {
            dashboardHeader: () => {
                // let vm = this;
                let script = document.createElement('script');
                script.src = "./assets/js/dashboard/bundle.js";
                document.head.appendChild(script);
                return import("@/components/dashboard/header.vue");
                // var promi = await new Promise((resolve, reject) => {
                //     script.onload = () => {
                //         resolve(import("@/components/dashboard/header.vue"))
                //     }
                //     script.async = true;
                // });
                // return promi;
                //return;
            },
            dashboardSidebar
        }
    }
</script>