import React from 'react';
import { Table, Button, Icon} from 'antd';
import './order-page.scss';
import Axios from 'axios';

export class OrderPage extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        data: [],
        total: '',
        id: '1'
      }
    }

    componentDidMount () {
        let tmp = []
        Axios.get('/order/get/' + this.state.id).then((res) => {
            if (res.data) {
                for (var shop in res.data[0].itemsByShop) {
                    var items = res.data[0].itemsByShop[shop]
                    for (var i = 0; i < items.length; i++){
                        tmp.push({
                            name: items[i].nameEn,
                            price: items[i].priceTimesN,
                            qty: items[i].n,
                            status: items[i].status,
                            description: "Sold by " + items[i].shop_id
                        })
                    }  
                }
                this.state.total = res.data[0].totalPrice
                this.setState({ data: tmp });
            }
        });
      }

    render () {
        let orderNum = 'Order Number : ' + this.state.id

        const columns = [{
            title: "Product",
            dataIndex: "name",
            key: "name",
         }, {
            title: "Price",
            dataIndex: "price",
            key: "price",
         }, {
            title: "Quantity",
            dataIndex: "qty",
            key: "qty",
         }, {
            title: "Status",
            dataIndex: "status",
            key: "status",
        }];

        return (
            <div className="order-page">
                <Table
                    columns={columns}
                    expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
                    dataSource={this.state.data}
                    title={() => orderNum}
                    footer={() => 'Total : ฿' + this.state.total}
                />
            </div>
        );
    }
}