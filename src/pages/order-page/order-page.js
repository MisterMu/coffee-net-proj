import React from 'react';
import { Table } from 'antd';
import './order-page.scss';
import Axios from 'axios';

export class OrderPage extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        data: [],
        total: ''
      }
    }

    getBill = () => {
        let tmp = []
        Axios.get('/order/get/' + this.props.order_id).then((res) => {
            for (var shop in res.data[0].itemsByShop) {
                var items = res.data[0].itemsByShop[shop]
                let shop_name = items[0].shop_id;
                if (items[0].shop_id == 1) {
                    shop_name = 'Offical Shop';
                } else if (items[0].shop_id == 2) {
                    shop_name = 'Preda Roastinghouse';
                } else if (items[0].shop_id == 3) {
                    shop_name = 'Nespresso';
                }
                tmp.push({
                    name: 'Sold by : ' + shop_name
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
        });
    }

    componentDidMount() {
        document.title = 'Order'
        this.getBill()
    }

    componentWillReceiveProps(nextProps) {
        this.getBill()
        this.forceUpdate()
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