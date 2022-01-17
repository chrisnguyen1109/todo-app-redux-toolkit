import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import todoReducerSlice from '../../redux/Todo/todoReducerSlice';

const priorityColorMapping = {
    High: 'red',
    Medium: 'blue',
    Low: 'gray',
};

TodoItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    prioriry: PropTypes.string,
    completed: PropTypes.bool,
};

TodoItem.defaultProps = {
    name: '',
    prioriry: '',
    completed: false,
};

function TodoItem({ id, name, prioriry, completed }) {
    const [checked, setChecked] = useState(completed);

    const dispatch = useDispatch();

    const toggleCheckbox = () => {
        setChecked(!checked);
        dispatch(todoReducerSlice.actions.toggleStatusTodo(id));
    };

    return (
        <Row
            justify="space-between"
            style={{
                marginBottom: 3,
                ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
            }}
        >
            <Checkbox checked={checked} onChange={toggleCheckbox}>
                {name}
            </Checkbox>
            <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
                {prioriry}
            </Tag>
        </Row>
    );
}

export default TodoItem;
