import axios from "axios";
import Link from "next/link";

const Champ = async () => {

    const todo = (await axios.get("https://dummyjson.com/todos/1")).data

  return (
    <div>
      <h1>Champ page</h1>
      <h1>{todo.todo}</h1>
      <Link href="./">Go to home</Link>
    </div>
  );
};

export default Champ;
