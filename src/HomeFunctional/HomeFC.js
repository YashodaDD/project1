import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from '../Home/HomeCC.styles';

const HomeFC = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count} </Text>

      <View
        style={{flexDirection: 'row', backgroundColor: 'yellow', paddding: 10}}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setCount(count + 1)}>
          <Text style={styles.btnTitle}> +Button </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn2}
          onPress={() => setCount(count - 1)}>
          <Text style={styles.btnTitle}> -Button </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeFC;
