import { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, SafeAreaView, Text, Image, StyleSheet } from 'react-native';


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

    return (
        <SafeAreaView>
            <Image source={{ uri: `http://localhost:3000${selectedBook.image_url}` }} style={{ width: '100%', height: 300 }} />
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{selectedBook.title}</Text>
                </View>
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 16 }}>{selectedBook.description}</Text>
            </View>
            <View style={Styles.textContainer}>
                <Text style={{ marginBottom: 10, color: 'red' }}>
                    {selectedBook.discount_rate}%
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    {selectedBook.price}원
                </Text>
            </View>
            
        </SafeAreaView>
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
});