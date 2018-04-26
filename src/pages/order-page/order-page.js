import React from 'react';
import { Table, Button, Icon} from 'antd';
import './order-page.scss';
import Axios from 'axios';

export class OrderPage extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        data: [],
        name: '',
        total: ''
      }
    }

    getNameStore = (id) => {
        let str = ''
        Axios.get('/item/get/' + id).then((val) => {
            str = val.data[0].shop.name
            this.setState({ name: str });
        });
    }

    componentDidMount () {
        let tmp = []
        Axios.get('/order/get/' + this.props.order_id).then((res) => {
            if (res.data) {
                for (var shop in res.data[0].itemsByShop) {
                    var items = res.data[0].itemsByShop[shop]
                    this.getNameStore(items[0].id)
                    console.log(this.state.name)
                    tmp.push({
                        name: 'Sold by : ' + this.state.name
                    })

                    for (var i = 0; i < items.length; i++){
                        tmp.push({
                            name: items[i].nameEn,
                            price: items[i].priceTimesN,
                            qty: items[i].n,
                            status: items[i].status,
                        })
                    }  
                }
                this.setState({ total: res.data[0].totalPrice });
                this.setState({ data: tmp });
            }
        });
    }

    render () {
        let orderNum = 'Order Number : ' + this.props.order_id
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
                    dataSource={this.state.data}
                    title={() => orderNum}
                    footer={() => 'Total : ฿' + this.state.total}
                />
            </div>
        );
    }
}