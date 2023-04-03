import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: 1,
    title: 'BANANA',
  },
  {
    id: 2,
    title: 'APPLE',
  },
  {
    id: 3,
    title: 'ORANGE',
  },
  {
    id: 4,
    title: 'Pine Apple',
  },
];

const lesson2 = () => {
  const [listData, setlistData] = React.useState(DATA);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        //   12 MADE A array and passed to here,
        data={listData}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.item}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    // ===========================
    shadowColor: 'black',
    // elevation 1-10 work for android
    elevation: 9,
    // shadow properties work only for ios
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    borderRadius: 8,
  },
  title: {
    fontSize: 40,
  },
});

export default lesson2;
