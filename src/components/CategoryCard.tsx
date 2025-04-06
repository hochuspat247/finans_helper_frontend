import React from 'react';
import { View, Text, StyleSheet, Image, ViewStyle } from 'react-native';

interface CategoryCardProps {
  title: string;
  spent: number;
  limit: number;
  icon: any;
  isActive?: boolean;
  style?: ViewStyle;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  spent,
  limit,
  icon,
  isActive = false,
  style,
}) => {
  const progress = Math.min(spent / limit, 1);

  const containerStyle = [
    styles.card,
    { backgroundColor: isActive ? '#232323' : '#FFFFFF' },
    style,
  ];

  const titleStyle = [
    styles.title,
    { color: isActive ? '#FFFFFF' : '#656565' },
  ];

  const spentStyle = [
    styles.spent,
    { color: isActive ? '#FFFFFF' : '#000000' },
  ];

  const limitStyle = [
    styles.limit,
    { color: isActive ? 'rgba(255, 255, 255, 0.5)' : '#C0C0C0' },
  ];

  const progressColor = isActive ? '#656565' : '#5FE274';

  return (
    <View style={containerStyle}>
      <View style={styles.iconCircle}>
        <Image source={icon} style={styles.icon} />
      </View>

      <Text style={titleStyle}>{title}</Text>

      <View style={styles.row}>
        <Text style={spentStyle}>
          {spent.toLocaleString('ru-RU')} ₽
        </Text>
        <Text style={limitStyle}>
          /{limit.toLocaleString('ru-RU')} ₽
        </Text>
      </View>

      <View style={styles.progressBar}>
        <View
          style={[
            styles.progress,
            {
              backgroundColor: progressColor,
              width: `${progress * 100}%`,
              borderTopLeftRadius: 6.114,
              borderBottomLeftRadius: 6.114,
              borderTopRightRadius: progress === 1 ? 6.114 : 0,
              borderBottomRightRadius: progress === 1 ? 6.114 : 0,
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    padding: 16,
    gap: 8,
  },
  iconCircle: {
    width: 40,
    height: 40,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'SF Pro Display',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  spent: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'SF Pro Display',
  },
  limit: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'SF Pro Display',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#DADADA',
    borderRadius: 6.114,
    overflow: 'hidden',
    marginTop: 4,
  },
  progress: {
    height: '100%',
  },
});

export default CategoryCard;
