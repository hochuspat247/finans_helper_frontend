import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const periods = ['Нед', 'Мес', 'Год'];

const TogglePanel = () => {
  const [activeIndex, setActiveIndex] = useState(1); // 'Мес' по умолчанию
  const [isChart, setIsChart] = useState(true); // Активный блок иконок

  return (
    <View style={styles.container}>
      {/* Первая панель кнопок */}
      <View style={styles.buttonGroup}>
        {periods.map((label, index) => {
          const isActive = index === activeIndex;
          const isLeft = index < activeIndex;
          const isRight = index > activeIndex;

          let buttonStyle = [styles.buttonBase];
          let textStyle = [styles.textBase];

          if (isActive) {
            buttonStyle.push(styles.buttonActive);
            textStyle.push(styles.textActive);
          } else if (isLeft) {
            buttonStyle.push(styles.buttonRightInactive); // теперь "светлее"
          } else if (isRight) {
            buttonStyle.push(styles.buttonLeftInactive); // теперь "темнее"
          }          

          return (
            <TouchableOpacity
              key={index}
              style={buttonStyle}
              onPress={() => setActiveIndex(index)}
            >
              <Text style={textStyle}>{label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={{width: "10%"}}></View>

      {/* Блок с иконками */}
      <View style={styles.iconGroup}>
        <TouchableOpacity onPress={() => setIsChart(false)}>
          <Image
            source={
              isChart
                ? require('@assets/icons/Group.png')
                : require('@assets/icons/Component 3.png')
            }
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsChart(true)}>
          <Image
            source={
              isChart
                ? require('@assets/icons/Component 4.png')
                : require('@assets/icons/Component 4 (1).png')
            }
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
  },
  buttonGroup: {
    flexDirection: 'row',
    backgroundColor: '#F7F9FB',
    borderRadius: 40,
    padding: 4,
    gap: 4,
  },
  buttonBase: {
    borderRadius: 40,
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  buttonActive: {
    backgroundColor: '#000',
    paddingHorizontal: 24,
    paddingVertical: 14,

  },
  buttonLeftInactive: {
    backgroundColor: '#F7F9FB',
    boxShadow: 'inset 0px 0px 2px rgba(0,0,0,0.1)', // не работает в RN, но оставлю как примечание
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  buttonRightInactive: {
    backgroundColor: '#F7F9FB',
    opacity: 0.2,
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  textBase: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14,
    fontFamily: 'SF Pro Display',
    color: '#000',
    textAlign: 'center',
  },
  textActive: {
    color: '#FFF',
    fontSize: 12,
  },
  iconGroup: {
    flexDirection: 'row',
    gap: 10,
    marginLeft: 12,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default TogglePanel;
