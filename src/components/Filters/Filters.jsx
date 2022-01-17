import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import filterReducerSlice from '../../redux/Todo/filterReducerSlice';
import useDebounce from '../../hooks/useDebounce';

const { Search } = Input;

function Filters() {
    const [searchInput, setSearchInput] = useState('');
    const [statusInput, setStatusInput] = useState('All');
    const [priorityInput, setPriorityInput] = useState([]);

    const searchDebounce = useDebounce();

    const dispatch = useDispatch();

    const searchInputHandler = e => {
        setSearchInput(e.target.value);

        searchDebounce(() => dispatch(filterReducerSlice.actions.filterSearchTodo(e.target.value)));
    };

    const statusInputHandler = e => {
        setStatusInput(e.target.value);
        dispatch(filterReducerSlice.actions.filterStatusTodo(e.target.value));
    };

    const priorityInputHandler = value => {
        setPriorityInput(value);
        dispatch(filterReducerSlice.actions.filterPriorityTodo(value));
    };

    return (
        <Row justify="center">
            <Col span={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Search
                </Typography.Paragraph>
                <Search
                    placeholder="input search text"
                    value={searchInput}
                    onChange={searchInputHandler}
                />
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Filter By Status
                </Typography.Paragraph>
                <Radio.Group onChange={statusInputHandler} value={statusInput}>
                    <Radio value="All">All</Radio>
                    <Radio value="Completed">Completed</Radio>
                    <Radio value="Todo">To do</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Filter By Priority
                </Typography.Paragraph>
                <Select
                    mode="multiple"
                    allowClear
                    placeholder="Please select"
                    style={{ width: '100%' }}
                    value={priorityInput}
                    onChange={priorityInputHandler}
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
            </Col>
        </Row>
    );
}

export default Filters;
