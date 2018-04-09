import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import OrderInfoTotal from './OrderInfoTotal';
import OrderInfoOverview from './OrderInfoOverview';
import Header from '../../headers/Header';
import { Template } from '../../common';

class OrderInfo extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Template>
                <Header
                    renderBackButton
                    headerTitle="Tu pedido"
                />

                <ScrollView style={{ flex: 1 }}>
                    <OrderInfoTotal />
                    <OrderInfoOverview />
                </ScrollView>
            </Template>
        );
    }
}

export default OrderInfo;
