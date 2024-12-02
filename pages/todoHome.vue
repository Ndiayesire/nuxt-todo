<script setup lang="ts">
import todoItems from './components/todoItems.vue'

</script>

<template>
    <div class="flex  justify-between items-center mt-3 p-2">
        <h1 class="text-sm font-bold text-teal-800"> Todo APP</h1>

        <div class="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 1024 1024"><path fill="teal" d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896m-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0z"></path></svg>
        </div>
    </div>

    <div>
        <todoItems/>
    </div>
</template>