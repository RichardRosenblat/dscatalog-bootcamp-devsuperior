import React, {useState, useEffect} from "react";
import { View, Text, ActivityIndicator, TouchableOpacity, Image, ScrollView } from "react-native";
import { colors, text, theme } from "../styles";
import { api } from "../services";
import arrow from '../assets/leftArrow.png';
import { useNavigation } from '@react-navigation/native';

const ProductDetails = ({
    route:{
        params: { id },
    },
    }) => {
    const navigation = useNavigation();

    const [product, setProduct] = useState({
        id: null,
        name: null,
        description: null,
        price: null,
        imgUrl: null,
        date: null, 
        categories: [], 
    });

    const [ loading, setLoading ] = useState(false);

    async function loadProductsData() {
        setLoading(true);
        const res = await api.get(`/products/${id}`);
        setProduct(res.data);
        setLoading(false);
    }

    useEffect(()=>{
        loadProductsData();
    },[]);

    return (
        <View style={theme.detailsContainer}>
            {
                loading ? <ActivityIndicator size="large" color={colors.mediumGray}/>
                :
                <View style={theme.detailCard}>
                    <TouchableOpacity 
                    style={theme.goBackContainer} 
                    onPress={() => navigation.goBack()} 
                    >
                        <Image source={arrow}/>
                        <Text style={text.goBackText}>Voltar</Text>
                    </TouchableOpacity>
                    <View  style={theme.productImageContainer}>
                        <Image 
                        source={{uri:product.imgUrl}}
                        style={theme.productImage}
                        />
                    </View>
                    <Text style={text.productDetailsName}>{product.name}</Text>
                    <View style={theme.priceContainer}>
                        <Text style={text.currency}>R$</Text>
                        <Text style={text.productPrice}>{product.price}</Text>
                    </View>
                    <ScrollView style={theme.scrollTextContainer}>
                        <Text style={text.productDescription}>
                            {product.description}
                        </Text>
                    </ScrollView>
                </View>
            }
        </View>
    )

}

export default ProductDetails;