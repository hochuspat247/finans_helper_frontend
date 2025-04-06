import ForecastChart from '@components/ForecastChart/index (4)';
import PulseHeader from '@components/PulseHeader/PulseHeader';
import SummaryCard from '@components/SummaryCard/SummaryCard';
import TotalMoneyCard from '@components/TotalMoneyCard/TotalMoneyCard';
import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import IncomeBalanceCard from '@components/IncomeBalanceCard/IncomeBalanceCard';
import InvestmentCard from '@components/InvestmentCard/InvestmentCard';
import FixedExpensesCard from '@components/FixedExpensesCard/FixedExpensesCard';
import SemiCircleRating from '@components/CreditRating/index (5)';
import FinanceRadar from '@components/FinanceRadar';
import { useNavigation } from '@react-navigation/native';

interface Props {
  total?: number;
  income?: number;
  expenses?: number;
}

const PulseScreen: React.FC<Props> = ({ total = 0, income = 0, expenses = 0 }) => {
  const navigation = useNavigation(); // Хук для навигации

  // Функция для перехода на ScreenAllMoney
  const handleTotalMoneyPress = () => {
    navigation.navigate('ScreenAllMoney');
  };

  // Функция для перехода на OstDoh
  const handleForecastChartPress = () => {
    navigation.navigate('OstDoh');
  };

  // Функция для перехода на Invest
  const handleInvestPress = () => {
    navigation.navigate('Invest'); // Укажи имя экрана, как он зарегистрирован в навигаторе
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.safe}>
        <ImageBackground
          source={require('@assets/icons/Frame 2087326610.png')}
          imageStyle={styles.imageStyle}
        >
          <View style={styles.contentWrapper}>
            {/* Верхняя часть */}
            <View style={styles.overlay}>
              <PulseHeader />
              {/* Оборачиваем TotalMoneyCard в TouchableOpacity */}
              <TouchableOpacity onPress={handleTotalMoneyPress}>
                <TotalMoneyCard total={total} />
              </TouchableOpacity>
            </View>

            {/* Нижняя часть */}
            <View style={styles.summaryRow}>
              <SummaryCard type="expenses" amount={expenses} />
              <SummaryCard type="income" amount={income} />
            </View>
            {/* Оборачиваем ForecastChart в TouchableOpacity */}
            <TouchableOpacity onPress={handleForecastChartPress}>
              <ForecastChart style={{ marginTop: width * 0.04 }} />
            </TouchableOpacity>
            {/* Оборачиваем summaryRow1 в TouchableOpacity */}
            <TouchableOpacity onPress={handleInvestPress}>
              <View style={styles.summaryRow1}>
                <IncomeBalanceCard value={10000} />
                <InvestmentCard percentage="72,5%" change="+0,10 (+0,13%)" />
              </View>
            </TouchableOpacity>
            <View style={styles.summaryRow2}>
              <FixedExpensesCard amount={5676} />
            </View>
            <View style={styles.summaryRow2}>
              <SemiCircleRating score={350} status="Надежный" />
            </View>
            <View style={styles.summaryRow2}>
              <FinanceRadar />
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </ScrollView>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F6F6F9',
  },
  imageStyle: {
    resizeMode: 'cover',
    position: 'absolute',
    width: '110%',
    height: '60%',
    top: '-20%',
    left: '-10%',
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 32,
    alignItems: 'center',
  },
  overlay: {
    alignItems: 'center',
    gap: 12,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    marginTop: '45%',
  },
  summaryRow1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    marginTop: width * 0.04,
  },
  summaryRow2: {
    marginTop: width * 0.04,
    width: '100%',
  },
});

export default PulseScreen;