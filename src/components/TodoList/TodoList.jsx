import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { remainingTodoListSelector } from '../../redux/Todo/selectors';
import todoReducerSlice from '../../redux/Todo/todoReducerSlice';
import TodoItem from '../TodoItem/TodoItem';

function TodoList() {
    const [todoName, setTodoName] = useState('');
    const [todoPriority, setTodoPriority] = useState('Medium');

    const dispatch = useDispatch();

    const todoList = useSelector(remainingTodoListSelector);

    const changeTodoNameHandlers = e => {
        setTodoName(e.target.value);
    };

    const changeTodoPriorityHandlers = value => {
        setTodoPriority(value);
    };

    const addTodoHandler = () => {
        if (!todoName.trim() || !todoPriority.trim()) return;

        dispatch(
            todoReducerSlice.actions.addTodo({
                id: uuidv4(),
                name: todoName,
                priority: todoPriority,
                completed: false,
            })
        );

        setTodoName('');
        setTodoPriority('Medium');
    };

    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {todoList.map(todo => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        name={todo.name}
                        prioriry={todo.priority}
                        completed={todo.completed}
                    />
                ))}
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: 'flex' }} compact>
                    <Input value={todoName} onChange={changeTodoNameHandlers} />
                    <Select
                        defaultValue="Medium"
                        value={todoPriority}
                        onChange={changeTodoPriorityHandlers}
                    >
                        <Select.Option value="High" label="High">
                            <Tag color="red">High</Tag>
                        </Select.Option>
                        <Select.Option value="Medium" label="Medium">
                            <Tag color="blue">Medium</Tag>
                        </Select.Option>
                        <Select.Option value="Low" label="Low">
                            <Tag color="gray">Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button onClick={addTodoHandler} type="primary">
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}

export default TodoList;
