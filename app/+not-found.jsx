import {Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Not found, please try existing links</Text>
      <Link href={"/"} style={styles.link}>About me</Link>
      <Link href={"/experience"} style={styles.link}>My experience</Link>
    </View>
  );
}