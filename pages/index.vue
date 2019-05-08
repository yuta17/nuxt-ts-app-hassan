<template>
  <div>
    <NewTodo />
    <TodoList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TodoList from '~/components/TodoList.vue'
import NewTodo from '~/components/NewTodo.vue'

@Component({
  components: {
    TodoList,
    NewTodo
  }
})
export default class Home extends Vue {}
</script>
