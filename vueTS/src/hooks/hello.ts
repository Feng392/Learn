import { ref } from "vue";

export function useAdd() {
  const count = ref(1);
  setInterval(() => {
    count.value++;
  }, 1000);
  return {
    count,
    fn(a: number) {
      count.value = a;
    }
  };
}