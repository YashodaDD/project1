import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

class HomeCC extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>THIS HOME</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
export default HomeCC;
