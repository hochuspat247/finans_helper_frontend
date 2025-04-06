import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path, G, Circle, Line } from 'react-native-svg';

interface Props {
  score: number;
  status: string;
}

const SemiCircleRating: React.FC<Props> = ({ score, status }) => {
  const size = 260;
  const strokeWidth = 30;
  const radius = (size - strokeWidth) / 2;
  const cx = size / 2;
  const cy = size / 2;

  const maxScore = 400;
  const angle = (score / maxScore) * 180;

  // Координаты точки на дуге
  const degToRad = (deg: number) => (deg * Math.PI) / 180;
  const polarToCartesian = (angle: number) => {
    const a = degToRad(180 - angle);
    return {
      x: cx + radius * Math.cos(a),
      y: cy - radius * Math.sin(a),
    };
  };

  const start = polarToCartesian(0);
  const end = polarToCartesian(angle);
  const fullEnd = polarToCartesian(180);

  const describeArc = (endAngle: number) => {
    const largeArcFlag = endAngle > 180 ? 1 : 0;
    const end = polarToCartesian(endAngle);
    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
  };

  const pointer = polarToCartesian(angle);

  return (
    <View style={styles.container}>
<View style={styles.header}>
  <View style={styles.badge}>
    <Text style={styles.badgeText}>КРЕДИТНЫЙ РЕЙТИНГ</Text>
  </View>
  <View style={styles.dots}>
    <View style={styles.dot} />
    <View style={styles.dot} />
    <View style={[styles.dot, styles.dotActive]} />
  </View>
</View>
      <View>
        <Svg width={size} height={size / 1.2}>
          {/* Серый фон дуги */}
          <Path
            d={describeArc(180)}
            stroke="#d3d3d3"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
          />

          {/* Зелёная дуга прогресса */}
          <Path
            d={describeArc(angle)}
            stroke="#4ADE80"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
          />
        </Svg>

        {/* Центр с эмоджи и текстом */}
        <View style={styles.centerContent}>
          <View style={styles.iconCircle}>
            <Text style={{ fontSize: 18 }}>😊</Text>
          </View>
          <Text style={styles.score}>{score}</Text>
          <Text style={styles.status}>{status}</Text>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Подробнее</Text>
  </TouchableOpacity>
</View>

    </View>
  );
};

export default SemiCircleRating;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A1A',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  badge: {
    backgroundColor: '#999',
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 10,
  },
  dots: {
    flexDirection: 'row',
    gap: 6,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
  },
  dotActive: {
    backgroundColor: '#4ADE80',
  },
  
  label: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 10,
    backgroundColor: '#555',
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  centerContent: {
    position: 'absolute',
    top: 55,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  iconCircle: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 6,
    marginBottom: 5,
  },
  score: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
  status: {
    fontSize: 14,
    color: '#ccc',
  },
  buttonWrapper: {
    width: '100%',
    paddingHorizontal: 16,
    marginTop: -30,
  },
  button: {
    backgroundColor: '#aaa',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
