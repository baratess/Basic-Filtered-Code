export default function TodoItems({ todo, index }) {
  return <li key={index}>{todo}</li>;
}
