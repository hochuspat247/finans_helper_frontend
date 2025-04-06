import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TouchableOpacity, Image } from 'react-native';

interface InfoBlockProps {
  title: string;
  subtitle?: string;
  value?: string;
  extra?: string;
  icon?: any;
  style?: ViewStyle;
}

const InfoBlock: React.FC<InfoBlockProps> = ({
  title,
  subtitle,
  value,
  extra,
  icon,
  style,
}) => {
  return (
    <View style={[styles.block, style]}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{title}</Text>
        {extra && (
          <TouchableOpacity style={styles.extra}>
            {icon && <Image source={icon} style={styles.icon} />}
            <Text style={styles.extraText}>{extra}</Text>
          </TouchableOpacity>
        )}
      </View>

      {subtitle && (
        <View style={styles.subtitleWrapper}>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      )}

      {value && <Text style={styles.value}>{value}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#EBEBEB',
    borderRadius: 24,
    padding: 14,
    gap: 8,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'SF Pro Display',
  },
  subtitleWrapper: {
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  subtitle: {
    color: '#9B9B9B',
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'SF Pro Display',
  },
  value: {
    color: '#232323',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'SF Pro Display',
  },
  extra: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  extraText: {
    color: '#9B9B9B',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'SF Pro Display',
  },
  icon: {
    width: 18,
    height: 18,
    tintColor: '#9B9B9B',
  },
});

export default InfoBlock;
