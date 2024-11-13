import React, {useState, useCallback} from 'react'
import styled from 'styled-components/native'
import {
  RefreshControl,
  Image,
  View,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';




const DATA = [
  {
    id: '1',
    header: 'JavaScript',
    text: '3 years of expirience. 10 different projects on Github and one commercial project.',
    image: 'https://img.icons8.com/nolan/64/javascript-logo.png'
  },
  {
    id: '2',
    header: 'Python',
    text: '1 year of learning. I have two fullstack projects on python.',
    image: 'https://img.icons8.com/nolan/64/python.png'
  },
  {
    id: '3',
    header: 'Java',
    text: 'I had learned this language during several mounths, but decided that i do not need it in my future, so my study had been finished in sort time',
    image: 'https://img.icons8.com/nolan/64/java-coffee-cup-logo.png'
  },
  {
    id: '4',
    header: 'Kotlin',
    text: 'I do not have any expirience of working with this language, but i am going to have it in the future.',
    image: 'https://img.icons8.com/nolan/64/kotlin.png'
  },
  {
    id: '5',
    header: 'Visual Basic',
    text: 'I have some experience of visual basic when i was a scholar. It was in 2000.',
    image: 'https://img.icons8.com/nolan/64/visual-basic.png'
  },
  {
    id: '6',
    header: 'C ++',
    text: 'I suppose that this language is quite difficult, so i have no plan to touch it.',
    image: 'https://img.icons8.com/nolan/64/c-plus-plus-logo.png'
  },
];


const Item = ({item}) => (
  <ItemContainer>
            <ImageContainer>
            <Image source={item.image} style={styles.image}/>
            </ImageContainer>
            <TextContainer>
            <Text style={styles.header}>{item.header}</Text>
            <Text style={styles.text}>{item.text}</Text>
            </TextContainer>
          </ItemContainer>
);



const ExperienceScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
        <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({ item }) => (
          <Item item={item}></Item>
        )
      }
      />
    </View>
  );
};

const Header = styled.View`
    font-size: 18;
    font-weight: bold;
`

const ItemContainer = styled.View`
  background-color: white;
  padding: 20px;
  margin: 0px 30px 20px 30px;
  flex-direction: row;
  border-radius: 10px;
  display: flex;
  font-family: sans-serif;
`
const ImageContainer = styled.View`
  justify-content: top;
  align-items: center;
  flex: 1;
  padding: 0px 20px 10px 20px;
`
const TextContainer = styled.View`
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex: 6;
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'midnightblue',
    paddingTop: 50,
    paddingRight: 20,
    paddingLeft: 20,
  },
  image: {
    width: 50,
    height: 50,
    margin: '0px 10px 0 10px'
  },
  text: {
    fontSize: 14,
    overflow: 'hidden',
    textAlign: 'justify',
    maxWidth: '90%',
  },
  header: {
    fontSize: 18,
    fontWeight:'bold',
  }
  
});

export default ExperienceScreen;