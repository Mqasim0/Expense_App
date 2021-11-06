import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {COLORS, FONTS, SIZES, icons} from '../constants/index';

const IncomingExpenses = ({select}) => {
  const [allselect, setAllSelect] = useState([]);

  let allExpenses = select ? select.expenses : [];

  let incomingExpenses = allExpenses.filter(a => a.status == 'P');
  useEffect(() => {
    if (select == null) {
    } else {
      setAllSelect([...allselect, select]);
    }
  }, [select]);

  const renderItem = ({item, index}) => {
    return (
      <View
        style={[
          styles.main_container,
          {marginLeft: index == 0 ? SIZES.padding : 0},
        ]}>
        <View style={styles.sub_main_container}>
          <View style={styles.img_container}>
            <Image
              source={select.icon}
              style={[styles.image, {tintColor: select.color}]}
            />
          </View>
          <Text style={[styles.name, {color: select.color}]}>
            {select.name}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>INCOMING EXPENSES</Text>
        <Text style={styles.text1}>12 Total</Text>
      </View>
      <View>
        {incomingExpenses.length > 0 && (
          <FlatList
            data={allselect}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}
        {incomingExpenses.length == 0 && (
          <View style={styles.sub_container}>
            <Text style={styles.record}>No Record</Text>
          </View>
        )}
      </View>
    </>
  );
};

export default IncomingExpenses;

const styles = StyleSheet.create({
  container: {
    padding: SIZES.padding,
    backgroundColor: COLORS.lightGray2,
  },
  text: {
    ...FONTS.h3,
    color: COLORS.primary,
  },
  text1: {
    ...FONTS.body4,
    color: COLORS.darkgray,
  },
  sub_container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
  },
  name: {
    ...FONTS.h3,
  },
  main_container: {
    width: 300,
    marginRight: SIZES.padding,
    marginVertical: SIZES.radius,
    borderRadius: SIZES.radius,
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
  img_container: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: COLORS.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.base,
  },
  sub_main_container: {
    flexDirection: 'row',
    padding: SIZES.padding,
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
  },
  record: {
    color: COLORS.primary,
    ...FONTS.h3,
  },
});
