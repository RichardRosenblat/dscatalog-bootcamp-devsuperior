import React, { useState } from "react";
import {View} from 'react-native';
import { theme } from "../../styles";
import {TabBar} from '../../components';

import Categories from "./Categories"
import Users from "./Users"
import Products from "./Products/ListProducts"
import FormProducts from "./Products/FormProducts"

const Dashboard: React.FC = () => {
    const [screen, setScreen] = useState("products")
    return <View>
        <TabBar screen={screen} setScreen={setScreen}/>
        {screen === "products" && <Products setScreen={setScreen}/>}
        {screen === "newProduct" && <FormProducts setScreen={setScreen}/>}
        {screen === "users" && <Users/>}
        {screen === "categories" && <Categories/>}
    </View>
};

export default Dashboard;