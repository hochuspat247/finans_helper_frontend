import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4FB848', // Зелёный фон
    borderRadius: 20, // Закруглённые углы
    padding: 20,
    alignItems: 'center',
    width: "99%",
    marginHorizontal: 15, // Добавляем отступы по краям
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  headerPeriod: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  headerPeriodText: {
    fontSize: 12,
    color: '#000',
  },
  content: {
    flexDirection: 'row', // Располагаем элементы горизонтально
    width: '100%',
    alignItems: 'center',
  },
  leftSection: {
    flex: 1.6, // Занимает 1/3 ширины
    alignItems: 'flex-start',
  },
  percentage: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 10, // Отступ сверху
  },
  legend: {
    flexDirection: 'column', // Легенда в столбик
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5, // Отступ между элементами легенды
  },
  legendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  legendText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  chartWrapper: {
    flex: 2, // Занимает 2/3 ширины
    position: 'relative',
    top: 16, // Сдвигаем вверх
  },
  xAxisContainer: {
    position: 'relative',
    height: 20,
  },
  xAxisLabel: {
    position: 'absolute',
    fontSize: 7,
    color: '#FFFFFF',
    textAlign: 'center',
    width: 40,
  },
  tooltipContainer: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: 'center',
  },
  tooltipText: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#000',
  },
  tooltipSubText: {
    fontSize: 8,
    color: '#666',
  },
  switchContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  switchButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginLeft: 5,
  },
  switchButtonActive: {
    backgroundColor: '#FFFFFF',
  },
  switchButtonInactive: {
    backgroundColor: 'transparent',
  },
  switchButtonText: {
    fontSize: 9,
  },
  switchButtonTextActive: {
    color: '#000',
  },
  switchButtonTextInactive: {
    color: '#FFFFFF',
  },
});

export default styles;