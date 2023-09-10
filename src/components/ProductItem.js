import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const ProductItem = ({ element, onRemoveItemWishlist, isWishlist }) => {
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.evImage}
                        source={{ uri: element.image }}
                    />
                </View>
                <View style={{ justifyContent: 'flex-start' }}>
                    <View style={styles.vehichleName}>
                        <Text style={{ fontWeight: 'bold' }}>
                            {element.name}
                        </Text>
                    </View>
                    <View>
                        <Text> {element.description}</Text>
                    </View>
                    <View>
                        <Text> {'$' + element.price}</Text>
                    </View>
                    {isWishlist ? null : (
                        <TouchableOpacity
                            onPress={() => {
                                onRemoveItemWishlist();
                            }}>
                            <Text style={styles.removeCart}>Remove From Wishlist</Text>
                        </TouchableOpacity>
                    )}

                    <Text style={styles.detaills}>Quantity:1</Text>
                </View>
            </View>
            <View />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        marginVertical: 8,
        flexDirection: 'column',
        backgroundColor: '#fff',

    },
    imageContainer: {
        width: '100%',
        flex: 1,
    },
    removeCart: {
        color: 'black',
        fontWeight: 'bold',
        marginRight: 18
    },
    detaills: {
        marginRight: 10
    },
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,

    },
    touchableCartButton: {
        borderWidth: 0.5,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 15,
    },


    red: {
        color: 'red',
        fontWeight: 'bold',
        padding: 8,
    },
    vehichleName: {
        marginTop: 20,
        fontWeight: 'bold',
    },
    default: {
        color: 'blue',
        fontWeight: 'bold',
        padding: 8,
    },
    imageView: {
        marginHorizontal: 2,
        flexDirection: 'row',
        resizeMode: 'contain',
        backgroundColor: 'blue',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',

    },
    evImage: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'stretch',
        width: 110,
        height: 150

    },
    textContainer: {
        fontFamily: 'roboto',
        fontWeight: 'bold',
        fontSize: 20,
    },
    card: {
        fontSize: 20,
        marginHorizontal: 6,
        paddingHorizontal: 8,
        elevation: 8,
    },

    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
export default ProductItem;
