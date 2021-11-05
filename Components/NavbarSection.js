import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

import {COLORS, FONTS, SIZES, icons} from '../constants/index';

const NavbarSection = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => console.log('Back')}>
        <Image source={icons.back_arrow} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.touchable, {alignItems: 'flex-end'}]}
        onPress={() => console.log('More')}>
        <Image source={icons.more} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default NavbarSection;

const styles = StyleSheet.create({
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
