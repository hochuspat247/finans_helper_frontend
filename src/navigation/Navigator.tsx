// src/navigation/Navigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '@screens/WelcomeScreen';
import ScreenCharts from '@screens/ScreenCharts';
import PulseScreen from '@screens/PulseScreen';
import ScreenAllMoney from '@screens/ScreenAllMoney';
import CategoryScreen from '@screens/CategoryScreen';
import EmptyCategoryCard from '@screens/EmptyCategoryCard';
import CategoryForm from '@screens/CategoryForm';
import ScreenCategoryList from '@screens/ScreenCategoryList';
import OstDoh from '@screens/OstDoh';
import Invest from '@screens/Invest';

const Stack = createStackNavigator();

interface NavigatorProps {
  onVerificationSuccess: () => void; // Проп для обработки успешной верификации
}

export const Navigator = ({ onVerificationSuccess }: NavigatorProps) => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Операция"
        component={WelcomeScreen}
      />
      <Stack.Screen
        name="ScreenCharts"
        component={ScreenCharts}
        options={{ headerTitle: 'Доходы' }}
      />
        <Stack.Screen
        name="PulseScreen"
        component={PulseScreen}
        options={{ headerShown: false }}
      />
             <Stack.Screen
        name="ScreenAllMoney"
        component={ScreenAllMoney}
        options={{ headerTitle: 'Денег всего' }}

      />
      <Stack.Screen
      name="CategoryScreen"
      component={CategoryScreen}
      options={{ headerShown: false }}

    />
         <Stack.Screen
      name="CategoryForm"
      component={CategoryForm}
      options={{ headerTitle: 'Мои категории' }}

    />
         <Stack.Screen
      name="EmptyCategoryCard"
      component={EmptyCategoryCard}
      options={{ headerTitle: 'Мои категории' }}
    />
            <Stack.Screen
      name="ScreenCategoryList"
      component={ScreenCategoryList}
      options={{ headerTitle: 'Мои категории' }}
    />
                 <Stack.Screen
        name="OstDoh"
        component={OstDoh}
        options={{ headerTitle: 'Остаток доходов' }}

      />
                       <Stack.Screen
        name="Invest"
        component={Invest}
        options={{ headerTitle: 'Инвестиции' }}

      />
    </Stack.Navigator>
  );
};