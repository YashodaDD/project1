import {View, Image, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

const screenName = () => {
  return (
    <SafeAreaView>
      <Image style={styles.image} source={require('./src/abc.jpg')} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
  },
});

export default screenName;
