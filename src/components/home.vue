<template>
    <div>
        <input type="text" v-model="msg">
        <button @click="add_note">添加留言</button>

        <ol>
            <li v-for="(note, index) in notebook" :key="index">
                <span>{{note}}</span> <a href="javascript:;" @click="delNote(index)">删除</a>
            </li>
        </ol>

        <span>&nbsp留言总数量：{{notebook.length}}条</span>
        <br>
        <input type="button" value="删除所有" @click="del_all" style="margin-left: 5px">
    </div>
</template>

<script>
    export default {
        name: "home",
        data: function () {
            return {
                msg: "",
                notebook: localStorage.msgs ? JSON.parse(localStorage.msgs) : [],
            }
        },
        methods: {
            add_note() {
                let msg = this.msg;
                if (msg) {
                    this.notebook.push(this.msg);
                    // 将用户发表的留言储存到localstorage
                    // 储存前将数据进行序列化
                    localStorage.msgs = JSON.stringify(this.notebook);
                    this.msg = "";
                }
            },
            // 删除留言
            delNote(index) {
                console.log(index,this.notebook.length);
                // 根据下标取删除某个元素
                this.notebook.splice(index, 1);
                if (this.notebook.length == 0) {
                    this.is_show = true
                }

            },
            // 删除全部留言
            del_all() {
                this.is_show = true;
                this.notebook = [];
                localStorage.clear();
            }

        }
    }
</script>

<style scoped>

</style>
