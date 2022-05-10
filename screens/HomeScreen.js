import { Button, FlatList, Text, View, Checkbox } from "native-base";
import React, { useState } from "react";
import Welcome from "../components/welcome";
import Wel_image from "../components/assets/welcome.png";
import TaskList from "../components/taskList";

const initialTasks = [
  {
    _id: 1,
    task: "Hey there this is first task",
    done: true,
  },
  {
    _id: 2,
    task: "Hey there this is second task",
    done: false,
  },
];

const HomeScreen = ({ navigation }) => {
  const [task, setTask] = useState(initialTasks);
  const [groupValue, setGroupValue] = useState(["Photography", "Gardening"]);

  return (
    <View>
      <Welcome title="Hey Manjeet!" image={Wel_image} />

      <Checkbox.Group
        colorScheme="green"
        defaultValue={groupValue}
        accessibilityLabel="pick an item"
        onChange={(values) => {
          setGroupValue(values || []);
        }}
      >
        <FlatList
          data={task}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <TaskList status={item.done} data={item.task} />
          )}
        />
      </Checkbox.Group>

      <Button onPress={() => navigation.navigate("Notifications")}>
        <Text>Go to Notifications</Text>
      </Button>
    </View>
  );
};

export default HomeScreen;
