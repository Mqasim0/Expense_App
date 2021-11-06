import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';

import {COLORS, FONTS, SIZES, icons} from '../constants/index';

const CategoryList = ({list}) => {
  const categoryListHeightAnimatedValue = useRef(
    new Animated.Value(115),
  ).current;
  const [selectCategory, setSelectCategory] = useState(null);
  const [showMoreToogle, setShowMoreToogle] = useState(false);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => setSelectCategory(item)}>
        <Image
          source={item.icon}
          style={[styles.image, {tintColor: item.color}]}
        />
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Animated.View style={{height: categoryListHeightAnimatedValue}}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          numColumns={2}
        />
      </Animated.View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (showMoreToogle) {
            Animated.timing(categoryListHeightAnimatedValue, {
              toValue: 115,
              duration: 300,
              useNativeDriver: false,
            }).start();
          } else {
            Animated.timing(categoryListHeightAnimatedValue, {
              toValue: 172.5,
              duration: 300,
              useNativeDriver: false,
            }).start();
          }
          setShowMoreToogle(!showMoreToogle);
        }}>
        <Text style={styles.more}>{showMoreToogle ? 'LESS' : 'MORE'}</Text>
        <Image
          source={showMoreToogle ? icons.up_arrow : icons.down_arrow}
          style={styles.image01}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
  },
  touchable: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    borderRadius: 5,
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  image01: {
    marginLeft: 5,
    width: 15,
    height: 15,
    alignSelf: 'center',
  },
  container: {
    paddingHorizontal: SIZES.padding - 5,
  },
  button: {
    flexDirection: 'row',
    marginVertical: SIZES.base,
    justifyContent: 'center',
  },
  more: {
    ...FONTS.body4,
  },
  text: {
    marginLeft: SIZES.base,
    color: COLORS.primary,
    ...FONTS.h4,
  },
});
