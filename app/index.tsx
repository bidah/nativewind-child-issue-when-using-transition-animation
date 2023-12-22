import { cn } from "@/lib/utils";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <View className="flex-1 bg-white justify-end items-center p-8 pb-28">
      <Pressable className="mb-20" onPress={() => setToggle(!toggle)}>
        <Text className="text-black text-6xl">Toggle</Text>
      </Pressable>
      <View
        className={cn(
          "bg-black rounded-[100%] w-[50] h-[50] items-center justify-center",
          "transition scale-[1]",
          toggle && "scale-[2] rounded-[10%]"
        )}
      >
        <Entypo name="plus" size={24} color="white" />
      </View>
    </View>
  );
};

export default Home;
