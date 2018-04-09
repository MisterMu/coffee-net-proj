import React from 'react';
import { Table, Button } from 'antd';
import './styles.scss';

export class ShopListTable extends React.Component {
  renderActionBtn = (record) => {
    return (
      <div className="btn-container">
        {(record.approved)? null : <Button type="primary" shape="circle" icon="plus" onClick={() => this.props.action.approve(record)} />}
        <Button type="danger" shape="circle" icon="delete" onClick={() => this.props.action.delete(record)} />
      </div>
    );
  }

  render () {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: 'Revenue',
      dataIndex: 'revenue',
      key: 'revenue'
    }, {
      title: 'Action',
      key: 'action',
      render: this.renderActionBtn
    }];
    console.log('data table', this.props.data)
    return (
      <div>
        <Table dataSource={this.props.data} columns={columns} />
      </div>
    );
  }
}