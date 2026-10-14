export const initialTodos = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  text: `Todo ${index + 1}`,
  completed: false
}));
