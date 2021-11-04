import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {COLORS, FONTS, SIZES, icons} from '../constants/index';

const Home = () => {
  function renderNavBar() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={console.log('Back')}>
          <Image source={icons.back_arrow} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.touchable, {alignItems: 'flex-end'}]}
          onPress={console.log('More')}>
          <Image source={icons.more} style={styles.image} />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.navbar}>
      {/* navbar section */}
      {renderNavBar()}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
  image: {
    width: 30,
    height: 30,
    tintColor: COLORS.primary,
  },
  container: {
    flexDirection: 'row',
    height: Dimensions.get('window').height / 18,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  touchable: {
    justifyContent: 'center',
    width: 50,
  },
});
