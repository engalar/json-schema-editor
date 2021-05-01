<template>
  <JsonSchemaEditor></JsonSchemaEditor>
</template>

<script>
import JsonSchemaEditor from "@/components/JsonSchemaEditor";
export default {
  components: {
    JsonSchemaEditor,
  },
  name: "app",
  computed: {
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.title {
  cursor: pointer;
}
.view-container {
  flex: 1;
  overflow-y: auto;
}
</style>
