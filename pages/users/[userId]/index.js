import Todo from "@/components/Todo/Todo";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from '../../../styles/UserSingle.module.css';

function UserDetails({ user, comment, posts }) {
  const router = useRouter();
  return (
    <div>
      <div className={styled.single__box}>
        <h2>{user.name}</h2>
        <h3>{user.username}</h3>
        <h4>
          {user.address.city} {user.address.street} {user.address.suite}{" "}
        </h4>
        <Link href={`mailto:${user.email}`}>{user.email}</Link>
        <p>{user.website}</p>
        <Link href={`tel:${user.phone}`}>{user.phone}</Link>
      </div>

      <div className={styled.single__content}>
      <ul className={styled.single__list}>
        {
          comment.map(el => (
            <li className={styled.single__item} key={el.id}>
              <Todo todo={el} />
            </li>
          ))
        }
      </ul>
      <div className={styled.post__content}>
        {
          posts.map(el => (
            <div key={el.id}>
              <h3>{el.title}</h3>
              <p>{el.body}</p>
            </div>
          ))
        }
      </div>
      </div>
    </div>
  );
}

export default UserDetails;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: {
        userId: item.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  // first get users
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + params.userId
  );
  const data = await res.json();
  // get users todo
  const todo = await fetch(
    "https://jsonplaceholder.typicode.com/todos?userId=" + params.userId
  );
  const dataTodo = await todo.json();

  const resPost = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + params.userId)
  const dataPost = await resPost.json();


  return {
    props: {
      user: data,
      comment: dataTodo,
      posts: dataPost
    },
  };
}
