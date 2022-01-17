import { Typography, Divider } from 'antd';

import './App.css';
import TodoList from './components/TodoList/TodoList';
import Filters from './components/Filters/Filters';

const { Title } = Typography;

function App() {
    return (
        <div
            style={{
                width: '550px',
                margin: '30px auto',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'white',
                padding: 20,
                boxShadow: '0 0 10px 4px #bfbfbf',
                borderRadius: 5,
                height: '80vh',
            }}
        >
            <Title style={{ textAlign: 'center' }}>TODO APP with REDUX TOOLKIT</Title>
            <Filters />
            <Divider />
            <TodoList />
        </div>
    );
}

export default App;
