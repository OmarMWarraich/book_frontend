import { useLayoutEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { books } from './BooksScreen'

const BookDetailsScreen = ({ route, navigation }) => {
    const bId  = route.params.bookId;
    const selectedBook = books.find(book => book.id === bId);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedBook.title,
        });
    }, [navigation]);

    return (
        <View>
            <Image style={{ width: '100%', height: 300 }} source={{ uri: selectedBook.cover_image }} />
        </View>
    );
}

export default BookDetailsScreen;
