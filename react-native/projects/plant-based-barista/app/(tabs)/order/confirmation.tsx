
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Stack } from 'expo-router';

export default function ConfirmationScreen() {

  return (
    <ThemedView style={{
      flex: 1,
    }}>
      <Stack.Screen
        options={{
          title: "Order Confirmed",
        }}
      />
      <ThemedView style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <ThemedText type="title">Order Confirmed!</ThemedText>
        <ThemedText type="default">Thank you for ordering with us</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}