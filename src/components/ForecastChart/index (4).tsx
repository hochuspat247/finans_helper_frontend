import React, { useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Svg, { Path, Circle, Line } from 'react-native-svg';
import styles from './styled (3)';

interface ForecastChartProps {
  style?: StyleProp<ViewStyle>;
}

// Определяем размеры
const { width } = Dimensions.get('window');
const chartWidth = width * 0.4;
const chartHeight = 70;
const padding = 20;
const maxValue = 10000;

const months = ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь'];
const incomeData = [4000, 5000, 9250, 6000, 7000, 8000];
const expenseData = [6000, 4500, 5000, 7000, 6500, 6000];

const ForecastChart: React.FC<ForecastChartProps> = ({ style }) => {
  const [period, setPeriod] = useState<'Год' | 'Неделя'>('Год');

  const togglePeriod = (newPeriod: 'Год' | 'Неделя') => {
    setPeriod(newPeriod);
  };

  const totalPoints = months.length;
  const pointSpacing = chartWidth / (totalPoints - 1);

  const incomePoints = incomeData.map((value, i) => {
    const x = i * pointSpacing;
    const y = chartHeight - (value / maxValue) * chartHeight;
    return { x, y };
  });

  const expensePoints = expenseData.map((value, i) => {
    const x = i * pointSpacing;
    const y = chartHeight - (value / maxValue) * chartHeight;
    return { x, y };
  });

  const incomePathData = incomePoints
    .map((point, i) => `${i === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
    .join(' ');

  const expensePathData = expensePoints
    .map((point, i) => `${i === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
    .join(' ');

  const tooltipIndex = 2;
  const tooltipPoint = incomePoints[tooltipIndex];
  const tooltipX = tooltipPoint.x;
  const tooltipY = tooltipPoint.y - 40;

  return (
    <View style={[styles.container, style]}>
      {/* Заголовок */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Прогнозы</Text>
        <View style={styles.switchContainer}>
          <TouchableOpacity
            onPress={() => togglePeriod('Год')}
            style={[
              styles.switchButton,
              period === 'Год'
                ? styles.switchButtonActive
                : styles.switchButtonInactive,
            ]}
          >
            <Text
              style={[
                styles.switchButtonText,
                period === 'Год'
                  ? styles.switchButtonTextActive
                  : styles.switchButtonTextInactive,
              ]}
            >
              Год
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => togglePeriod('Неделя')}
            style={[
              styles.switchButton,
              period === 'Неделя'
                ? styles.switchButtonActive
                : styles.switchButtonInactive,
            ]}
          >
            <Text
              style={[
                styles.switchButtonText,
                period === 'Неделя'
                  ? styles.switchButtonTextActive
                  : styles.switchButtonTextInactive,
              ]}
            >
              Неделя
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Основной контент */}
      <View style={styles.content}>
        <View style={styles.leftSection}>
          <View style={styles.legend}>
            <View style={styles.legendItem}>
              <View
                style={[styles.legendDot, { backgroundColor: '#FFFFFF' }]}
              />
              <Text style={styles.legendText}>Доходы</Text>
            </View>
            <View style={styles.legendItem}>
              <View
                style={[styles.legendDot, { backgroundColor: '#000000' }]}
              />
              <Text style={styles.legendText}>Расходы</Text>
            </View>
          </View>
          <Text style={styles.percentage}>51%</Text>
        </View>

        <View style={styles.chartWrapper}>
          <Svg height={chartHeight + padding} width={chartWidth}>
            {months.map((_, i) => {
              const x = i * pointSpacing;
              return (
                <Line
                  key={i}
                  x1={x}
                  y1={0}
                  x2={x}
                  y2={chartHeight}
                  stroke="#FFFFFF"
                  strokeWidth={1}
                  strokeDasharray="4,4"
                />
              );
            })}

            <Path d={incomePathData} fill="none" stroke="#FFFFFF" strokeWidth={2} />

            <Path
              d={expensePathData}
              fill="none"
              stroke="#000000"
              strokeWidth={2}
              strokeDasharray="4,4"
            />

            {incomePoints.map((point, i) => (
              <Circle
                key={`income-${i}`}
                cx={point.x}
                cy={point.y}
                r={4}
                fill="#FFFFFF"
              />
            ))}
            {expensePoints.map((point, i) => (
              <Circle
                key={`expense-${i}`}
                cx={point.x}
                cy={point.y}
                r={4}
                fill="#000000"
              />
            ))}
          </Svg>

          {/* Подсказка */}
          <View
            style={[
              styles.tooltipContainer,
              { left: tooltipX - 40, top: tooltipY - 1 },
            ]}
          >
            <Text style={styles.tooltipText}>9 250</Text>
            <Text style={styles.tooltipSubText}>Баланс</Text>
          </View>

          {/* Метки оси X */}
          <View style={[styles.xAxisContainer, { width: chartWidth }]}>
            {months.map((month, i) => {
              const x = i * pointSpacing;
              return (
                <Text key={i} style={[styles.xAxisLabel, { left: x - 15 }]}>
                  {month}
                </Text>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ForecastChart;
