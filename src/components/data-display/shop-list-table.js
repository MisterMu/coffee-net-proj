import React from 'react';
import { Table, Button } from 'antd';
import './styles.scss';

export class ShopListTable extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      sort_info: null
    };
  }

  handleChange = (pagination, filter, sorter) => {
    this.setState({ sort_info: sorter });
  }

  renderActionBtn = (record) => {
    return (
      <div className="btn-container">
        {(record.approved)? null : <Button type="primary" shape="circle" icon="plus" onClick={() => this.props.action.approve(record)} />}
        <Button type="danger" shape="circle" icon="delete" onClick={() => this.props.action.delete(record)} />
      </div>
    );
  }

  render () {
    let sort_info = this.state.sort_info || {};
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => (a.name > b.name)? 1 : -1,
      sortOrder: sort_info.columnKey === 'name' && sort_info.order
    }, {
      title: 'Order',
      dataIndex: 'order',
      key: 'order',
      sorter: (a, b) => a.order - b.order,
      sortOrder: sort_info.columnKey === 'order' && sort_info.order
    }, {
      title: 'Delivered',
      dataIndex: 'delivered',
      key: 'delivered',
      sorter: (a, b) => a.delivered - b.delivered,
      sortOrder: sort_info.columnKey === 'delivered' && sort_info.order
    }, {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      sorter: (a, b) => (a.status > b.status)? 1 : -1,
      sortOrder: sort_info.columnKey === 'status' && sort_info.order
    }, {
      title: 'Action',
      key: 'action',
      render: this.renderActionBtn
    }];
    return (
      <div>
        <Table dataSource={this.props.data} columns={columns} onChange={this.handleChange} />
      </div>
    );
  }
}