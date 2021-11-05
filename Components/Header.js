import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import {COLORS, FONTS, SIZES, icons} from '../constants/index';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text0}>My Expenses</Text>
        <Text style={styles.text1}>Summary (private)</Text>
      </View>
      <View style={styles.sub_container}>
        <View style={styles.img_container}>
          <Image source={icons.calendar} style={styles.image} />
        </View>
        <View style={styles.sub_container0}>
          <Text style={[styles.text0, {...FONTS.h3}]}>05/11/2021</Text>
          <Text style={[styles.text1, {...FONTS.body3}]}>
            18% more than last month
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  text0: {
    color: COLORS.primary,
    ...FONTS.h2,
  },
  text1: {
    color: COLORS.darkgray,
    ...FONTS.h3,
  },
  sub_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.padding,
  },
  img_container: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.lightGray,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sub_container0: {
    marginLeft: SIZES.padding,
  },
  image: {
    width: 20,
    height: 20,
    tintColor: COLORS.lightBlue,
  },
});
