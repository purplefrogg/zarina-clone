<script>
export default {
    data() {
        return {
            isCollapsed: true,

        }
    },
    methods: {
        setShow() {
            this.isCollapsed = !this.isCollapsed

        },
    },
    props: {
        header: String
    },

}
</script>
<template>
    <div>

        <button @click="setShow" class="text-xl">{{ header }}</button>
        <div :class="cn(isCollapsed ? ' max-h-0' : 'max-h-[1000px]',

        )" class="duration-500 overflow-hidden will-change-auto">
            <slot></slot>

        </div>
    </div>
</template>
 