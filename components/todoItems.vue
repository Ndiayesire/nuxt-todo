<template>
  <div
    class="max-w-xl mx-auto p-1  rounded-lg border border-gray-100 ml-1 mr-1"
  >
    <!-- To-Do List -->
    <ul class="max-h-[23rem] overflow-y-auto  divide-y divide-gray-200">
      <li
        v-for="(task, index) in todo.Todo"
        :key="task.id"
        class="flex items-center justify-between p-1"
      >
        <div class="flex items-center space-x-2">
          <input
            type="checkbox"
            v-model="task.completed"
            class="w-4 h-4 rounded 0 focus:ring-blue-500"
          />
          <span class="text-xs text-gray-500 " :class="{ 'line-through text-yellow-400': task.completed }">
            {{ task.name }}
          </span>
        </div>
        <button class="text-red-500 hover:text-red-600" @click="deleteNote(task.id)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M7.616 20q-.691 0-1.153-.462T6 18.384V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.153T16.384 20zm2.192-3h1V8h-1zm3.384 0h1V8h-1z"
            ></path>
          </svg>
        </button>
      </li>
    </ul>
    <p v-if="todo.Todo.length === 0" class="text-gray-300 text-sm text-center mt-2">
      Aucune note...
    </p>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from "../stores/todo";

const todo = useTodoStore();

const deleteNote = (id: number): void => {
  todo.removeNote(id);
};
</script>
