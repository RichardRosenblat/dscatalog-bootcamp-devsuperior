import React, {useState, useEffect} from 'react'
import { 
    View, 
    Text,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';

interface ProductProps {
    setScreen: Function;
}

import { SearchInput, ProductCard } from '../../../components'
import { deleteProduct, getProducts } from '../../../services'
import { colors, admin, text } from '../../../styles';
const Products: React.FC<ProductProps> = (props) => {
    const [search, setSearch] = useState("");    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const { setScreen } = props;

    async function handleDelete(id:number) {
        setLoading(true);
        const res = await deleteProduct(id);
        fillProducts();
    }

    async function fillProducts() {
        setLoading(true);
        const res = await getProducts()
        setProducts(res.data.content);
        setLoading(false);
    }

    useEffect(() => {
        fillProducts();
    }, [])

    const data = 
    search.length > 0 
        ?   products.filter((product) => 
                product.name.toLowerCase().includes(search.toLowerCase())
            )
        :   products;

    return (
        <ScrollView contentContainerStyle={admin.container}>
            <TouchableOpacity style={admin.addButton} onPress={()=>setScreen("newProduct")}>
                <Text style={text.addButtonText}>Adicionar</Text>
            </TouchableOpacity>
            <SearchInput 
                search={search} 
                setSearch={setSearch} 
                placeholder="Nome do produto"
            />
            { loading ? (
                <ActivityIndicator size="large" color={colors.mediumGray}/>
            ):
            (data.map((product)=> { 
                const {id} = product;
                return (
                <ProductCard 
                { ...product } 
                key={id} 
                role='admin' 
                handleDelete={handleDelete}/>
                )})
            )}
        </ScrollView>
    )
}

export default Products;