<template>
  <div class="max-w-xl mx-auto p-2 bg-white mt-">
    <!-- To-Do List -->
    <ul class="">
      <li
        v-for="(task, index) in tasks"
        :key="task.id"
        class="flex items-center justify-between  p-2 border-b"
      >
        <div class="flex items-center space-x-2 text-sm">
          <input
            type="checkbox"
            v-model="task.completed"
            class="w-3 h-3  rounded"
          />
          <span class="text-xs text-gray-500" :class="{'line-through text-gray-500 ': task.completed}">
            {{ task.text }}
          </span>
        </div>
        <div class="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="red" d="M7.616 20q-.691 0-1.153-.462T6 18.384V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.153T16.384 20zm2.192-3h1V8h-1zm3.384 0h1V8h-1z"></path></svg>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const todo = useTodoStore()

</script>

