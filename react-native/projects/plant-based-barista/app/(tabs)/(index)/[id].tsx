import { Image, ScrollView } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Stack, useLocalSearchParams } from 'expo-router';

import { coffees } from '@/data/coffees';

export default function CoffeeDetailScreen() {

  const { id } = useLocalSearchParams<{ id: string }>();
  const coffee = coffees.find(coffee => coffee.id === parseInt(id));
  if(!coffee) throw new Error(`No coffee found with id ${id}`);

  return (
    <ScrollView>
      <Stack.Screen
        options={{
          title: coffee.name,
        }}
      />
      <Image source={coffee.image} style={{
        width: '100%',
        height: 300,
      }} />
      <ThemedView style={{ padding: 18 }}>
        <ThemedText>{coffee.description}</ThemedText>
      </ThemedView>
    </ScrollView>
  );
}