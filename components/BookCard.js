import { Text, StyleSheet, View, Image } from "react-native";

const BookCard = ({ 
    id,
    title,
    price,
    description,
    image_url,
    discount_rate
 }) => {
    return (
        <View style={Styles.cardContainer}>
            <Image style={Styles.cardImage} source={{ uri: image_url }} />
            <Text style={Styles.cardTitle}>{title}</Text>
            <View style={Styles.textContainer}>
                <Text style={{ marginBottom: 10, color: 'red' }}>
                    {discount_rate}%
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    {price}원
                </Text>
            </View>
        </View>
    );
};

export default BookCard;

const Styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        height: 70,
    },
    cardImage: {
        width: '100%',
        height: 187,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
});
