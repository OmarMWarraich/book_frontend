import { StyleSheet, TouchableOpacity } from "react-native";
import BookCard from "./BookCard";

const BookGridTile = ({
    id,
    title,
    price,
    description,
    cover_image,
    discount_rate
}) => {
    return (
        <TouchableOpacity style={Styles.gridItem}>
            <BookCard
                id={id}
                title={title}
                price={price}
                description={description}
                cover_image={cover_image}
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