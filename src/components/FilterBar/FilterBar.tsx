// components/FilterBar.js
import ToggleButton from '@components/ToggleButton/ToggleButton';
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const FilterBar = () => {
  const [activeFilter, setActiveFilter] = useState('month');

  const handlePress = (type) => {
    setActiveFilter(type);
  };

  return (
    <View style={styles.container}>
      <ToggleButton
        label="Март"
        active={activeFilter === 'month'}
        onPress={() => handlePress('month')}
      />
      <ToggleButton
        label="Счета и карты"
        active={activeFilter === 'accounts'}
        onPress={() => handlePress('accounts')}
      />
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  addButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
    fontFamily: 'SFPro', // если используешь SF Pro Display
    lineHeight: 22,
  },
});

export default FilterBar;
