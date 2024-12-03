import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    Todo: [] as { id: number, name: string, completed: boolean }[],
  }),
  actions: {
    async addNote(name: string) {
      const newTodo = {
        id: Math.round(Math.random() * 1000),
        name: name,
        completed: false,
      };
      this.Todo.push(newTodo);
    },
 
  async removeNote(id: number){
    const index = this.Todo.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.Todo.splice(index, 1);
    }
  }
 },

});
