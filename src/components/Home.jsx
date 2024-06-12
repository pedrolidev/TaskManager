import { AddTask } from "./AddTask";
import { Card } from "./Card";
import { Header } from "./Header";

import styles from "./Home.module.css"

export function Home() {
    const tasks = [
        {
            id: '1',
            task: 'Leitura',
            description: 'Ler 20 páginas do capítulo 13'
        },
        {
            id: '2',
            task: 'React',
            description: 'Assistir 3 aulas e fazer exercícios práticos'
        },
        {
            id: '3',
            task: 'Node',
            description: ''
        }
    ]

    return (
        <div className={styles.home}>
        <Header />

    {tasks.map(task => (
        <Card
        key={task.id}
        task={task}
        />
    ))}

        <AddTask />
        </div>
    );
}