import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native';
import BookGridTile from '../components/BookGridTile';
import { fetchBooks } from '../slice/bookSlice';


const BooksScreen = ({navigation}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBooks());
    }, []);

    const books = useSelector((state) => state.books.books);

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
                image_url={`http://localhost:3000${itemData.item.image_url}`}
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