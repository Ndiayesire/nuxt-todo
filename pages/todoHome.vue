<script setup lang="ts">
import todoItems from "../components/todoItems.vue";
import { useTodoStore } from "../stores/todo";
import { reactive, ref } from "vue";

const todo = useTodoStore();

const isVisible = ref(false);

const state = reactive({
  name: "",
});

function toggle() {
  isVisible.value = !isVisible.value;
}

function addTodo() {
  todo.addNote(state.name);
  state.name = ''
}
</script>

<template>
  <div class="flex justify-between items-center mt-2 p-1 m-1">
    <h1 class="text-md font-bold text-teal-800">Todo APP</h1>

    <div class="cursor-pointer" @click="toggle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 1024 1024"
      >
        <path
          fill="teal"
          d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896m-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0z"
        ></path>
      </svg>
    </div>
  </div>

  <div class="flex gap-2 p-2" v-if="isVisible">
    <input
      type="text"
      v-model="state.name"
      class="border rounded-md outline-none p-1 text-xs text-gray-500 w-full"
      placeholder="Ecrire une note"
    />
    <button
      class="bg-teal-600 rounded-md text-xs text-white font-bold p-1"
      @click="addTodo"
    >
      Ajouter
    </button>
  </div>

  <div>
    <todoItems />
  </div>
</template>
