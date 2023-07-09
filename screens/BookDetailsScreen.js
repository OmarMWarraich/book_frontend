import { useLayoutEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';


const BookDetailsScreen = ({ route, navigation }) => {
/*     const [books, setBooks] = useState([]); */
    const bId  = route.params.bookId;


/*     const selectedBook = books.find(book => book.id === bId);
    console.log(selectedBook); */
/*     useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedBook.title,
        });
    }, [navigation]); */

    return (
        <View>
            <Text>Book Details Screen{bId}</Text>
            
        </View>
    );
}

export default BookDetailsScreen;
