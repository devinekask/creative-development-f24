import { Button } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useOrderStore } from '@/store/useOrderStore';
import { FlashList } from '@shopify/flash-list';
import { router, Stack } from 'expo-router';

export default function OrderScreen() {

  const orders = useOrderStore(state => state.orders);
  const resetOrders = useOrderStore(state => state.resetOrders);
  const totalPrice = orders.reduce((total, order) => total + order.amount * order.coffee.price, 0);

  return (
    <ThemedView>
      <Stack.Screen
        options={{
          title: "Order",
        }}
      />
      <ThemedView style={{
        flex: 1,
      }}>
        <FlashList
          data={orders}
          renderItem={({ item }) => <ThemedView style={{
            flexDirection: 'row',
            gap: 10,
            justifyContent: 'space-between',
            paddingHorizontal: 18,
            paddingVertical: 10,
          }}>
            <ThemedText>{item.coffee.name} x {item.amount}</ThemedText>
            <ThemedText>EUR {(item.amount * item.coffee.price).toFixed(2)}</ThemedText>
          </ThemedView>}
          estimatedItemSize={50}
        />
        <ThemedView style={{
          flexDirection: 'row',
          gap: 10,
          justifyContent: 'space-between',
          paddingHorizontal: 18,
          paddingVertical: 10,
        }}>
          <ThemedText>Total</ThemedText>
          <ThemedText>EUR {totalPrice.toFixed(2)}</ThemedText>
        </ThemedView>
        <ThemedView style={{
          paddingHorizontal: 18,
          paddingVertical: 18,
        }}>
          <Button title="Confirm Order" onPress={() => {
            resetOrders();
            router.push('/(tabs)/order/confirmation');
          }} />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}