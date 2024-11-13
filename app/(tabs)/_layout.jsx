import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'midnightblue',
        tabBarLabelPosition: 'beside-icon',
        headerTitleStyle: {
          color: 'midnightblue',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'About me',
          
        }}
      />
      <Tabs.Screen
        name="experience"
        options={{
          title: 'My experience',
        }}
      />
    </Tabs>
  );
}
