<template>
  <header>
    <button>
      Home
    </button>
    <h1>{{ title }}</h1>
    <button>
      +
    </button>
  </header>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    title: {
      type: String,
      default: "Contact List",
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  color: #2c2605;
  background-color: rgba(44, 38, 5, 0.1);
  border-bottom: 1px solid rgba(44, 38, 5, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
}
header h1 {
  margin: 0;
  padding: 0;
  font-size: 24px;
  font-weight: 700;
}
header button {
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
}
header button svg {
  font-size: 24px;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid rgba(44, 38, 5, 0.2);
}
header button svg:hover {
  background-color: rgba(44, 38, 5, 0.1);
}
</style>
