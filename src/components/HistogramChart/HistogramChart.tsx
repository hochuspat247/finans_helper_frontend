import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Svg, { Path, Line } from 'react-native-svg';
import styles from './styled';

// Определяем размеры
const { width } = Dimensions.get('window');
const chartWidth = width * 0.9; // Ширина графика (90% ширины экрана)
const chartHeight = width * 0.5; // Высота графика
const padding = 20; // Отступы
const columnWidth = 30; // Увеличиваем ширину столбца с 20 до 30
const columnSpacing = width * 0.015; // Расстояние между столбцами
const maxValue = 100; // Максимальное значение для масштабирования высоты столбцов
const bottomOffset = 8; // Отступ снизу для приподнятия столбцов

// Данные для графика
const data = [
  { day: 10, value: 20, color: '#4FB848' },
  { day: 11, value: 30, color: '#4FB848' },
  { day: 12, value: 80, color: '#000000' },
  { day: 13, value: 50, color: '#4FB848' },
  { day: 14, value: 40, color: '#4FB848' },
  { day: 16, value: 60, color: '#D4D4D4' },
  { day: 18, value: 70, color: '#000000' },
  { day: 20, value: 40, color: '#4FB848' },
  { day: 22, value: 50, color: '#4FB848' },
  { day: 24, value: 30, color: '#D4D4D4' },
];

// Компонент столбца
const Column: React.FC<{
  x: number;
  value: number;
  color: string;
}> = ({ x, value, color }) => {
  const height = (value / maxValue) * (chartHeight - padding - bottomOffset); // Масштабируем высоту с учётом отступа снизу
  const y = chartHeight - height - bottomOffset; // Начальная точка по Y (с учётом приподнятия)

  // Координаты для закруглённого столбца
  const topLeftX = x;
  const topLeftY = y;
  const topRightX = x + columnWidth;
  const topRightY = y;
  const bottomRightX = x + columnWidth;
  const bottomRightY = y + height;
  const bottomLeftX = x;
  const bottomLeftY = y + height;

  // Радиус закругления (пропорционально ширине столбца)
  const capRadius = columnWidth / 6; // Уменьшаем радиус закругления

  // Координаты для дуг
  const topLeftArcX = topLeftX + capRadius;
  const topLeftArcY = topLeftY + capRadius;
  const topRightArcX = topRightX - capRadius;
  const topRightArcY = topRightY + capRadius;
  const bottomRightArcX = bottomRightX - capRadius;
  const bottomRightArcY = bottomRightY - capRadius;
  const bottomLeftArcX = bottomLeftX + capRadius;
  const bottomLeftArcY = bottomLeftY - capRadius;

  return (
    <Path
      d={`
        M ${topLeftArcX} ${topLeftY}
        A ${capRadius} ${capRadius} 0 0 1 ${topRightArcX} ${topRightY}
        L ${topRightArcX} ${topRightArcY}
        L ${bottomRightArcX} ${bottomRightArcY}
        A ${capRadius} ${capRadius} 0 0 1 ${bottomLeftArcX} ${bottomLeftY}
        L ${bottomLeftArcX} ${bottomLeftArcY}
        L ${topLeftArcX} ${topLeftArcY}
        Z
      `}
      fill={color}
    />
  );
};

// Основной компонент гистограммы
const HistogramChart: React.FC = () => {
  // Расчёт позиций столбцов
  const totalColumnsWidth = data.length * (columnWidth + columnSpacing) - columnSpacing;
  const startX = (chartWidth - totalColumnsWidth) / 2; // Центрируем столбцы

  return (
    <View style={styles.container}>
      <Svg height={chartHeight + padding} width={chartWidth}>
        {/* Горизонтальные линии сетки */}
        {[0, 25, 50, 75, 100].map((value, i) => {
          const y = chartHeight - (value / maxValue) * (chartHeight - padding - bottomOffset);
          return (
            <Line
              key={i}
              x1={0}
              y1={y}
              x2={chartWidth}
              y2={y}
              stroke="#E0E0E0"
              strokeWidth={1}
            />
          );
        })}

        {/* Столбцы */}
        {data.map((item, i) => {
          const x = startX + i * (columnWidth + columnSpacing);
          return <Column key={i} x={x} value={item.value} color={item.color} />;
        })}
      </Svg>

      {/* Метки оси X (дни) */}
      <View style={[styles.xAxisContainer, { width: chartWidth }]}>
        {data.map((item, i) => {
          const x = startX + i * (columnWidth + columnSpacing) + columnWidth / 2;
          return (
            <Text key={i} style={[styles.xAxisLabel, { left: x - 10 }]}>
              {item.day}
            </Text>
          );
        })}
      </View>
    </View>
  );
};

export default HistogramChart;