import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import BookGridTile from '../components/BookGridTile';
import getBooks from '../utils/api';

/* export const books = [
    {
        id: 1,
        title: "레이블라우스",
        price: 57600,
        description: "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.",
        cover_image: "https://upload.wikimedia.org/wikipedia/en/8/8e/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_%282001%29_theatrical_poster.jpg",
        discount_rate: 10
    },
    {
        id: 2,
        title: "레이블라우스",
        price: 57600,
        description: "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien.",
        cover_image: "https://upload.wikimedia.org/wikipedia/en/3/30/Hobbit_cover.JPG",
        discount_rate: 10
    },
]; */


const BooksScreen = ({navigation}) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks().then((books) => setBooks(books));
    }, []);

    const renderGridItem = (itemData) => {
        const pressHandler = () => {
            navigation.navigate('BookDetails', { bookId: itemData.item.id });
        };
        return (
            <BookGridTile
                id={itemData.item.id}
                title={itemData.item.title}
                price={itemData.item.price}
                description={itemData.item.description}
                cover_image={itemData.item.cover_image}
                discount_rate={itemData.item.discount_rate}
                onPress={pressHandler}
            />
        );
    }
    

    return (
        <FlatList
            keyExtractor={(item, index) => item.id.toString()}
            data={books}
            renderItem={renderGridItem}
            numColumns={2}
        />
    );
}

export default BooksScreen;