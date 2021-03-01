import React, { useState } from "react";
import {View} from 'react-native';
import { theme } from "../../styles";
import {TabBar} from '../../components';

import Categories from "./Categories"
import Users from "./Users"
import Products from "./Products/ListProducts"
import FormProducts from "./Products/FormProducts"
import EditProducts from "./Products/EditProducts"

const Dashboard: React.FC = () => {
    const [screen, setScreen] = useState("products")
    const [productId, setProductId] = useState(0)
    return <View>
        <TabBar screen={screen} setScreen={setScreen}/>
        {screen === "products" && <Products setScreen={setScreen} setProductId={setProductId}/>}
        {screen === "newProduct" && <FormProducts setScreen={setScreen}/>}
        {screen === "editProduct" && <EditProducts setScreen={setScreen} productId={productId}/>}
        {screen === "users" && <Users/>}
        {screen === "categories" && <Categories/>}
    </View>
};

export default Dashboard;