<template>
    <div>
        这是User组件
        <h3>用户列表页</h3>
        <div v-if="is_show">
            空空如也
        </div>
        <div v-else>
            <table style="border: solid black 2px">
            <tr style="border: solid black 2px">
                <td>ID</td>
                <td>姓名</td>
                <td>生日</td>
                <td>个人信息</td>
                <td>操作</td>
            </tr>
            <tr v-for="(user, index) in users" :key="user.id" style="border: solid black 2px">
                <td>{{user.id}}</td>
                <td>{{user.username}}</td>
                <td>{{user.bir}}</td>
                <td>{{user.content}}</td>
                <td> <a href="javascript:;" @click="del_user(index)">删除|</a> <router-link :to="`/detail/${user.id}/${user.username}/${user.bir}/${user.content}`">查看用户详情</router-link></td>
            </tr>
        </table>
        </div>
        <br>
        用户名: <input type="text" v-model="username"><br>
        生日&nbsp&nbsp : <input type="text" v-model="bir"><br>
        个人信息: <input type="text" v-model="content"><br>
        <button @click="add_user">添加用户</button>
        <input type="button" value="删除所有" @click="del_all" style="margin-left: 5px">
    </div>
</template>

<script>
    export default {
        name: "user",
        data: function () {
            return {
                // users:[
                //     {"id": 1, username:"kuro", bir:"2000-12-21",content: "我是小黑"},
                //     {"id": 2, username:"hero", bir:"2001-02-15",content: "我是小白"},
                //     {"id": 3, username:"aka", bir:"1992-03-11",content: "我是小红"}
                // ],
                users:localStorage.users ? JSON.parse(localStorage.users) : [{"id": 1, username:"kuro", bir:"2000-12-21",content: "我是小黑"},],
                username:"",
                bir:"",
                content:"",
                id : 1,
                is_show: localStorage.users ? 0 : 1
            }
        },
        methods:{
            add_user(){
                let username = this.username;
                let bir = this.bir;
                let content = this.content;
                if (username) {
                    this.users.push({"id": this.id, username:username, bir:bir,content: content});
                    localStorage.users = JSON.stringify(this.users);
                    this.id += 1;
                    this.username = "";
                    this.bir = "";
                    this.content = "";
                }
            },
            del_user(index) {
                console.log(index,this.users.length);
                // 根据下标取删除某个元素
                this.users.splice(index, 1);
                if (this.users.length == 0) {
                    this.is_show = true
                }

            },
            del_all() {
                this.is_show = true;
                this.users = [];
                localStorage.clear();
            }
        }
    }
</script>

<style scoped>

</style>
