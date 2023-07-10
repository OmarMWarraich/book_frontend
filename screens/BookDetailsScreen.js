import { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';


const BookDetailsScreen = ({ route, navigation }) => {
    const books = useSelector((state) => state.books.books);
    const bId  = route.params.bookId;

    const selectedBook = books.find(book => book.id === bId);
    console.log(selectedBook);
    useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedBook.title,
        });
    }, [navigation]);

    const formattedPrice =
        typeof selectedBook.price !== 'undefined' && !isNaN(selectedBook.price)
        ? Number(selectedBook.price).toLocaleString()
        : '';

    return (
        <ScrollView>
            <Image source={{ uri: `https://afternoon-castle-25737-b28e8fca3464.herokuapp.com${selectedBook.image_url}` }} style={{ width: '100%', height: 300 }} />
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{selectedBook.title}</Text>
                </View>
            <View style={{ margin: 10 }}>
                <Text style={Styles.textDescription}>{selectedBook.description}</Text>
            </View>
            <View style={Styles.textContainer}>
                <Text style={Styles.textRate}>
                    {selectedBook.discount_rate}%
                </Text>
                <Text style={Styles.textPrice}>
                    {formattedPrice} 원
                </Text>
            </View>
            
        </ScrollView>
    );
}

export default BookDetailsScreen;

const Styles = StyleSheet.create({
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        height: 70,
    },
    textRate: {
        marginBottom: 10,
        color: 'red',
    },
    textPrice: {
        marginBottom: 10,
        marginRight: 2,
    },
    textDescription: {
        fontSize: 12,
        textAlign: 'justify',
    }
});