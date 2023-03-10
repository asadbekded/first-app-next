import Link from 'next/link';
import React from 'react';
import styled from '../../styles/Card.module.css';

function Card ({users}) {
  return (
    <Link href={`/users/${users.id}`} >
        <h3 className={styled.card__title} >Name : {users?.name} </h3>
        <h4 className={styled.card__title} >Username : {users?.username}</h4>
        <p className={styled.card__text} >Email : {users?.email}</p>
    </Link>
  )
}

export default Card