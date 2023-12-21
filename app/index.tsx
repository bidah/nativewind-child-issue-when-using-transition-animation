import { Text, View } from "react-native";

const Home = () => {
  return (
    <View className="flex-1 bg-gray-400 justify-end items-end p-8">
      <View className="bg-black rounded-full w-[50] h-[50] items-center justify-center">
        <Text className="text-white text-6xl">+</Text>
      </View>
    </View>
  );
};

export default Home;
