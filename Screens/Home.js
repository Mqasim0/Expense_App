import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {COLORS, FONTS, SIZES, icons} from '../constants/index';

import NavbarSection from '../Components/NavbarSection';
import Header from '../Components/Header';
import Category from '../Components/Category';

const Home = () => {
  return (
    <View style={styles.navbar}>
      {/* navbar section */}
      <NavbarSection />
      <Header />
      <Category />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
});
