<template>
    <a :href="'#'+props.to">
        <slot />
    </a>
</template>

<script setup>
import { defineProps } from 'vue'
// 把 a 标签的 href 属性前面加了个一个 #， 就实现了 hash 的修改。
let props = defineProps({
    to:{type:String,required:true}
})
</script>