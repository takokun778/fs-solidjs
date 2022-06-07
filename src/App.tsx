import { Component, createSignal } from 'solid-js';

import { Button, Center } from '@hope-ui/solid';

import styles from './App.module.css';
import logo from './logo.svg';
import { setStore, store } from './store/store';

const App: Component = () => {
    const [count, setCount] = createSignal(0);
    return (
        <div class={styles.App}>
            <header class={styles.header}>
                <img src={logo} class={styles.logo} alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    class={styles.link}
                    href="https://github.com/solidjs/solid"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn Solid
                </a>
                <Center>
                    <p>local: {count}</p>
                    <Button
                        m={10}
                        onClick={() => {
                            setCount(count() + 1);
                        }}
                    >
                        Up
                    </Button>
                </Center>
                <Center>
                    <p>global: {store.count}</p>
                    <Button
                        m={10}
                        onClick={() => {
                            setStore({ count: store.count + 1 });
                        }}
                    >
                        Up
                    </Button>
                </Center>
            </header>
        </div>
    );
};

export default App;
