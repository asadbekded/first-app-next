import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "../../styles/Todo.module.css";

function Todo({ todo }) {
  const router = useRouter();

  return (
    <Link className={styled.todo__link} href={`${router.query.userId}/todo/${todo.id}`}>
      <span>{todo.id}</span>
      <h3 className={styled.todo__title}>{todo.title} </h3>
      <input className={styled.todo__checkbox} type="checkbox" defaultChecked={todo.completed} />
    </Link>
  );
}

export default Todo;
