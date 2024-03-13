import { memo } from "react";

function AddToDo({ submitHandle, onChange, todo }) {
  return (
    <form onSubmit={submitHandle}>
      <input type="text" value={todo} onChange={onChange} />
      <button type="submit">Filtrele</button>
    </form>
  );
}

export default memo(AddToDo);
