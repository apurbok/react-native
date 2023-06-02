import { Button, StyleSheet, Text, View } from 'react-native';

export default function TestContent(props) {
  return (
    <View>
      <Text>This is child component for {props.name}.</Text>
      <div>
          fdfdf
      </div>
      <Button onPress={async()=>{
          const response = await fetch("https://reqres.in/api/users?page=2");
          const jsonData = await response.json();
          alert(JSON.stringify(jsonData));
      }}>Click me</Button>
    </View>
  );
}