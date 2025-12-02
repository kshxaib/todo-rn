import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { Link } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
  const {toggleDarkMode} = useTheme()
  const todos = useQuery(api.todos.getTodos)
  const addTodo = useMutation(api.todos.addTodo)
  const clearAllTodos = useMutation(api.todos.clearAllTodos)

  return (
    <View style={styles.container}>
      <Text>Khan Shoaib</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addTodo({text: "Hit the gym"})}>
        <Text>Add Todo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => clearAllTodos()}>
        <Text>Clear All Todos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})