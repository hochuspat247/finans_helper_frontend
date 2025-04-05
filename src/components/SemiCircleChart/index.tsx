import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

// Определяем размеры
const { width } = Dimensions.get('window');
const chartSize = width * 0.6; // Размер диаграммы
const strokeWidth = 40; // Толщина линии
const radius = (chartSize - strokeWidth) / 2; // Радиус
const cx = chartSize / 2; // Центр по X
const cy = chartSize / 2; // Центр по Y

// Компонент дуги
const Arc: React.FC<{
  startAngle: number;
  endAngle: number;
  color: string;
}> = ({ startAngle, endAngle, color }) => {
  const startRad = (startAngle * Math.PI) / 180;
  const endRad = (endAngle * Math.PI) / 180;
  const startX = cx + radius * Math.cos(startRad);
  const startY = cy + radius * Math.sin(startRad);
  const endX = cx + radius * Math.cos(endRad);
  const endY = cy + radius * Math.sin(endRad);

  return (
    <Path
      d={`M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`}
      stroke={color}
      strokeWidth={strokeWidth}
      fill="none"
      strokeLinecap="round"
    />
  );
};

// Компонент метки с процентом
const PercentageLabel: React.FC<{
  percentage: number;
  startAngle: number;
  endAngle: number;
}> = ({ percentage, startAngle, endAngle }) => {
  const midpointAngle = (startAngle + endAngle) / 2;
  const labelRad = (midpointAngle * Math.PI) / 180;
  const labelX = cx + (radius + 40) * Math.cos(labelRad);
  const labelY = cy + (radius + 40) * Math.sin(labelRad);

  return (
    <View style={[styles.percentageLabel, { left: labelX - 25, top: labelY - 25 }]}>
      <Text style={styles.percentageText}>{percentage}%</Text>
    </View>
  );
};

// Основной компонент диаграммы
const SemiCircleChart: React.FC = () => {
  const segments = [
    { label: 'Продукты', percentage: 10, color: '#4FB848' },
    { label: 'Отели', percentage: 40, color: '#B5FF36' },
    { label: 'Переводы', percentage: 50, color: '#D4D4D4' },
  ];

  // Расчёт углов для сегментов
  const totalAngle = 180; // Полукруг — 180 градусов (от 180° до 360°)
  const gapAngle = 30; // Промежуток между сегментами в градусах
  const numberOfGaps = segments.length - 1; // Количество промежутков
  const totalGapAngle = numberOfGaps * gapAngle; // Общий угол промежутков
  const totalSegmentAngle = totalAngle - totalGapAngle; // Общий угол для сегментов

  let cumulativeAngle = 180; // Начальный угол (левая часть полукруга, 180°)
  const segmentAngles = segments.map((segment) => {
    const segmentAngle = (segment.percentage / 100) * totalSegmentAngle;
    const startAngle = cumulativeAngle;
    const endAngle = startAngle + segmentAngle; // Идём по часовой стрелке
    cumulativeAngle = endAngle + gapAngle;
    return { startAngle, endAngle };
  });

  return (
    <View style={styles.container}>
      {/* Контейнер для диаграммы */}
      <View style={styles.chartContainer}>
        <Svg height={chartSize} width={chartSize}>
          {segments.map((segment, i) => {
            const { startAngle, endAngle } = segmentAngles[i];
            return (
              <Arc
                key={i}
                startAngle={startAngle}
                endAngle={endAngle}
                color={segment.color}
              />
            );
          })}
        </Svg>

        {/* Центральный текст */}
        <View style={[styles.centerTextContainer, { top: cy - 35 }]}>
          <Text style={styles.centerText}>Всего</Text>
          <Text style={styles.amountText}>23 456 ₽</Text>
        </View>

        {/* Круги с процентами */}
        {segments.map((segment, i) => {
          const { startAngle, endAngle } = segmentAngles[i];
          return (
            <PercentageLabel
              key={i}
              percentage={segment.percentage}
              startAngle={startAngle}
              endAngle={endAngle}
            />
          );
        })}
      </View>

      {/* Легенда */}
      <View style={styles.legendContainer}>
        {segments.map((segment, i) => (
          <View key={i} style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: segment.color }]} />
            <Text style={styles.legendText}>
              {segment.label} {segment.percentage}%
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

// Стили
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  chartContainer: {
    position: 'relative',
    width: chartSize,
    height: chartSize,
  },
  chart: {
    // Убрали transform, так как теперь углы рассчитаны правильно
  },
  centerTextContainer: {
    position: 'absolute',
    alignItems: 'center',
    left: "32%",
  },
  centerText: {
    fontSize: 16,
    color: '#666',
  },
  amountText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  percentageLabel: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  percentageText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  legendContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Добавляем перенос на следующую строку
    justifyContent: 'center', // Центрируем элементы
    alignItems: 'center', // Выравниваем элементы по центру
    marginTop: -60, // Уменьшаем расстояние между диаграммой и легендой
    width: '100%',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    padding: 5,
    margin: 5, // Добавляем небольшой отступ между элементами
  },
  legendColor: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    color: '#F6F6F6',
    marginRight: 5,
  },
  legendText: {
    fontSize: 14,
    color: '#666',
  },
});

export default SemiCircleChart;