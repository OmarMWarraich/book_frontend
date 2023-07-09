import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, ActivityIndicator, RefreshControl  } from 'react-native';
import BookGridTile from '../components/BookGridTile';
import { fetchBooks } from '../slice/bookSlice';


const BooksScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books.books);
    
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isRefreshing, setIsRefreshing ] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            await dispatch(fetchBooks());
        } catch (err) {
            console.log(err);
        }  finally {
            setIsLoading(false);
        }
    }

    const handleRefresh = async () => {
        setIsRefreshing(true);
        try {
            await dispatch(fetchBooks());
        } catch (err) {
            console.log(err);
        } finally {
            setIsRefreshing(false);
        }
    }


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
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    onRefresh={handleRefresh}
                />
            }
            ListFooterComponent={
                isLoading && <ActivityIndicator size="large" color="red" />
            }
            onEndReached={fetchData}
            onEndReachedThreshold={0.8}
        />
    );
}

export default BooksScreen;