// components/ToggleButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';

const ToggleButton = ({ label, active = false, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, active ? styles.active : styles.inactive]}>
      <View style={styles.content}>
        <Text style={[styles.label, active ? styles.labelActive : styles.labelInactive]}>{label}</Text>
        <Image
          source={
            active
              ? require('@assets/icons/solar_alt-arrow-down-bold-duotone.png')
              : require('@assets/icons/solar_alt-arrow-down-bold-duotone (1).png')
          }
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 14,
    alignSelf: 'flex-start',
  },
  active: {
    backgroundColor: '#232323',
  },
  inactive: {
    backgroundColor: '#EBEBEB',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'SFPro',
    textAlign: 'center',
  },
  labelActive: {
    color: '#FFF',
  },
  labelInactive: {
    color: '#000',
  },
  icon: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
    marginTop: 2,
  },
});

export default ToggleButton;
