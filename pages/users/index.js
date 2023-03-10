import Card from "@/components/Card/Card";
import styled from '../../styles/User.module.css';

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
}

function Users({ users }) {
  return (
    <div>
      <h1>Users Page</h1>
      <ul className={styled.user__list} >
        {users.map((user) => (
          <li className={styled.user__item} key={user?.id} >
            <Card  users={user} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
