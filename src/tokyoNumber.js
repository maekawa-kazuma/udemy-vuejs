export const tokyoNumber = {
  data () {
    return {
      title: "Hello Vue.js",
      subtitle: "Hello javascript",
      number: 0
    };
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
  created() {
    console.log("created mixdin");
  }
};