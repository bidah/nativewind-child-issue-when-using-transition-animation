import { cn } from "@/lib/utils";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <View className="flex-1 bg-white justify-end items-end p-8 pb-28">
      <Pressable className="" onPress={() => setToggle(!toggle)}>
        <Text className="text-black text-6xl">Toggle</Text>
      </Pressable>
      <View
        className={cn(
          "duration-500 bg-black rounded-[100%] w-[50] h-[50] items-center justify-center",
          "transition translate translate-y-0 transform",
          toggle && "translate-y-20 rounded-[10%]"
        )}
      >
        {/* <Text className="text-white text-6xl">+</Text> */}
      </View>
    </View>
  );
};

export default Home;
