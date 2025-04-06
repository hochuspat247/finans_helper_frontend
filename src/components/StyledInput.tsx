import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

interface StyledInputProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
}

const StyledInput: React.FC<StyledInputProps> = ({
  label = 'Название',
  placeholder = 'Название',
  value,
  onChangeText,
  ...props
}) => {
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholderTextColor="#C8C9CB"
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        numberOfLines={1}
        ellipsizeMode="tail"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    backgroundColor: '#EBEBEB',
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 13,
  },
  label: {
    color: '#C8C9CB',
    fontFamily: 'SF Pro Display',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: -0.037,
    marginBottom: 8,
  },
  input: {
    color: '#1C1B1B',
    fontFamily: 'SF Pro Display',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: -0.037,
    padding: 0,
  },
});

export default StyledInput;
