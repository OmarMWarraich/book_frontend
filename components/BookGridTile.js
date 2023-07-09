import { StyleSheet, TouchableOpacity } from "react-native";
import BookCard from "./BookCard";

const BookGridTile = ({
    id,
    title,
    price,
    description,
    image_url,
    discount_rate,
    onPress,
}) => {
    return (
        <TouchableOpacity style={Styles.gridItem} onPress={onPress}>
            <BookCard
                id={id}
                title={title}
                price={price}
                description={description}
                image_url={image_url}
                discount_rate={discount_rate}
            />
        </TouchableOpacity>
    );
}

export default BookGridTile;

const Styles = StyleSheet.create({
    gridItem: {
    flex: 1,
    margin: 2,
    padding: 0,
    borderRadius: 2,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    },
});