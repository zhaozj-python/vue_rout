<template>
    <div>
        这是userDetail
        <br>
        用户详情页接收的传递数据:{{$route.params.id}}
        <br>
        用户详情页接收的传递数据:{{$route.params.username}}
        <br>
        用户详情页接收的传递数据:{{$route.params.bir}}
            <br>
        用户详情页接收的传递数据:{{$route.params.content}}
    </div>
</template>

<script>
    export default {
        name: "userDEtail"
    }
</script>

<style scoped>

</style>
