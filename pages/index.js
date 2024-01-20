import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router'

export default function Home() {

  const [username, setUsername] = useState("");
  const [playerId, setPlayerId] = useState(0);

  const router = useRouter()

  const handleUsernameChange = (event) => {
    const { name, value } = event.target;

    setUsername(value);
  };

  const login = async (username) => {
    const res = await fetch("http://localhost:3001/player/" + username, {method: "POST"});

    const json = await res.json();
    const id = json.id;
    console.log(id);
  };

  const loginClickHandler = () => {
    login(username);
    router.replace('/lobby');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to game server!
        </h1>
        <div className={styles.loginForm}>
          <input id="username" type='text' height="96" className={styles.username} onChange={handleUsernameChange} placeholder='Username'></input>
          <button onClick={loginClickHandler}>Login</button>

        </div>


      </main>

    </div>
  );
}
