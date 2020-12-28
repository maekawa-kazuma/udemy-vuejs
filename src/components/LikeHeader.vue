<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["headerText"],
  data() {
    return {
      user: {
        firstName: 'Jack',
        lastName: 'Donald'
      }
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }

  h1 {
    color: red;
  }
</style>