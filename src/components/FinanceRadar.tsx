import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Polygon, Line, Circle, Rect, Text as SvgText } from 'react-native-svg';

const size = 320;
const center = size / 2;
const levels = 4;
const radius = size * 0.39;
const categories = ['UI', 'UX', 'Soft skills', 'Фин. интуиция', 'Креатив'];
const values = [56, 72, 98, 40, 60];

const FinanceRadar: React.FC = () => {
  const angleSlice = (2 * Math.PI) / categories.length;

  const getCoordinates = (valuePercent: number, index: number, scale = 1) => {
    const angle = angleSlice * index - Math.PI / 2;
    const r = (valuePercent / 100) * radius * scale;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y, angle };
  };

  const gridPolygons = Array.from({ length: levels }, (_, i) => {
    const scale = (i + 1) / levels;
    const points = categories
      .map((_, index) => {
        const { x, y } = getCoordinates(100, index, scale);
        return `${x},${y}`;
      })
      .join(' ');
    return <Polygon key={i} points={points} stroke="#4ADE80" strokeWidth={1} fill="none" />;
  });

  const radarPoints = values
    .map((val, index) => {
      const { x, y } = getCoordinates(val, index);
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Люди в твоей финансовой категории</Text>
      <Svg width={size} height={size}>
        {/* Сетка */}
        {gridPolygons}

        {/* Линии и подписи категорий */}
        {categories.map((label, i) => {
          const { x, y } = getCoordinates(100, i);
          const offsetX = x - center;
          const offsetY = y - center;
          const labelX = x + (offsetX * 0.1);
          const labelY = y + (offsetY * 0.1);

          return (
            <React.Fragment key={i}>
              <Line x1={center} y1={center} x2={x} y2={y} stroke="#4ADE80" strokeWidth={1} />
              <SvgText
                x={labelX}
                y={labelY}
                fontSize="11"
                fill="#000"
                fontWeight="bold"
                textAnchor="middle"
                alignmentBaseline="middle"
              >
                {label}
              </SvgText>
            </React.Fragment>
          );
        })}

        {/* Заливка значений */}
        <Polygon points={radarPoints} fill="gray" opacity={0.4} stroke="black" strokeWidth={2} />

        {/* Точки и процентные метки */}
        {values.map((val, i) => {
          const { x, y } = getCoordinates(val, i);
          const labelY = y - 28; // подняли ещё выше
          return (
            <React.Fragment key={i}>
              <Circle cx={x} cy={y} r={5} fill="black" />
              {/* Чёрный овальный фон */}
              <Rect
                x={x - 22}
                y={labelY - 14}
                rx={14}
                ry={14}
                width={44}
                height={28}
                fill="black"
              />
              {/* Белый текст по центру овала */}
              <SvgText
                x={x}
                y={labelY}
                fontSize="11"
                fill="white"
                fontWeight="bold"
                textAnchor="middle"
                alignmentBaseline="middle"
              >
                {val}%
              </SvgText>
            </React.Fragment>
          );
        })}
      </Svg>

      <View style={styles.summaryBox}>
        <Text style={styles.percent}>72%</Text>
        <Text style={styles.summaryText}>
          Вы грамотно распределяете финансы и делаете это лучше 72% пользователей
        </Text>
      </View>
    </View>
  );
};

export default FinanceRadar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F4F4',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 10,
  },
  summaryBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginTop: -10,
    width: '100%',
  },
  percent: {
    backgroundColor: '#4ADE80',
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    borderRadius: 12,
    marginRight: 12,
    textAlign: 'center',
  },
  summaryText: {
    flex: 1,
    color: '#333',
    fontSize: 11,
  },
});
