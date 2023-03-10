import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function TodoDetails() {
  const router = useRouter();
  const [ todo, setTodo ] = useState();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/' + router.query.todoId)
    .then(res => setTodo(res.data))
    .catch(err => console.log(err))
  }, [router])

  return (
    <div>
      <h1>{todo?.title}</h1>
    </div>
  )
}