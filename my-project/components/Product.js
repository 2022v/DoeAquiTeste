import * as React from 'react';
import * as RN from 'react-native';
import { database } from '../config/firebase';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { AntDesign } from '@expo/vector-icons';

export default function Product({
    id,
    emoji,
    name,
    descricao,
    isSold,
}) {

    const onDelete = () => {
        const docRef = doc(database, 'products', id);
        deleteDoc(docRef);
    }

    const onEdit = () => {
        const docRef = doc(database, 'products', id);
        updateDoc(docRef);
    }

    return(
        <RN.View>
            <RN.View style={styles.productContainer}>
                <RN.View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <RN.Text style={styles.emoji}>{emoji}</RN.Text>
                    <AntDesign onPress={onDelete} name="delete" size={24} color="black" />
                </RN.View>
                <RN.Text style={styles.name}>Nome: {name}</RN.Text>
                <RN.Text style={styles.descricao}>Descrição: {descricao}</RN.Text>
                {isSold ? (
                    <RN.TouchableOpacity 
                    style={[styles.button, {backgroundColor: 'gray'}]}>
                    <RN.Text style={styles.buttonText}>Sold</RN.Text>
                </RN.TouchableOpacity>
                )
                : (
                    <RN.TouchableOpacity>
                </RN.TouchableOpacity>
                )}
            </RN.View>
        </RN.View>
    )
}

const styles = RN.StyleSheet.create({
    productContainer: {
        padding: 16,
        backgroundColor: '#fff',
        margin: 16,
        borderRadius: 8,
    },
    emoji: {
        fontSize: 100,
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    descricao: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'gray',
        marginTop:10
    },
    button: {
        backgroundColor: '#0FA5E9',
        padding: 10,
        marginVertical: 6,
        borderRadius: 8,
        alignItems: 'center'
   },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
});