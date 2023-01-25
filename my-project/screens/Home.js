import * as React from 'react';
import * as RN from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {auth, signOut, database } from '../config/firebase';
import { collection, onSnapshot, orderBy, query, addDoc,} from 'firebase/firestore';
import Product from '../components/Product';
const Avatar = require("../assets/Avatar.png");
import { AntDesign } from '@expo/vector-icons';
import colors from '../colors';



export default function Home() {

    const [products, setProducts] = React.useState([]);
    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<RN.Button title='Add' onPress={() => navigation.navigate('Add')} />
         ),
           
        });
    }, [navigation ]);

    React.useEffect(() => {
        const collectionRef = collection(database, 'products');
        const q = query(collectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, querySnapshot => {
        console.log('querySnapshot unsusbscribe');
          setProducts(
            querySnapshot.docs.map(doc => ({
                
                id: doc.id,
                emoji: doc.data().emoji,
                name: doc.data().name,
                descricao: doc.data().descricao,
                createdAt: doc.data().createdAt,
                user: doc.data().user,
            }))
          );
        });
    return unsubscribe;
    },[])

    

    return(

      
        <RN.View style={styles.container}>
            <RN.ScrollView contentContainerStyle={{paddingBottom: 100}}>
            <RN.Button title='Chat' onPress={() => navigation.navigate('Chat')} />
                {products.map(product => <Product key={product.id} {...product} />)}
            </RN.ScrollView>
        </RN.View>
    )
}

const styles = RN.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F3F9',
    },
  
});