import { Image, Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { coffees } from '@/data/coffees';
import { FlashList } from '@shopify/flash-list';
import { Ionicons } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import { useOrderStore } from '@/store/useOrderStore';

export default function HomeScreen() {

  const orderCoffee = useOrderStore(state => state.orderCoffee);

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen
        options={{
          title: "Coffees",
        }}
      />
      <FlashList
        data={coffees}
        renderItem={({ item }) => <ThemedView style={styles.item}>
          <Link href={`/(tabs)/(index)/${item.id}`} style={styles.link}>
            <ThemedView style={styles.left}>
              <Image
                source={item.image}
                style={{ width: 60, height: 60 }}
              />
              <ThemedView>
                <ThemedText style={styles.name}>{item.name}</ThemedText>
                <ThemedText>EUR {item.price}</ThemedText>
              </ThemedView>
            </ThemedView>
          </Link>
          <ThemedView>
            <Pressable
              onPress={() => orderCoffee(item)}
            >
              <Ionicons name="add-circle" size={24} />
            </Pressable>
          </ThemedView>
        </ThemedView>}
        estimatedItemSize={60}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 18,
  },
  left: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  link: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  }
});
