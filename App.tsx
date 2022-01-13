/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';

const App: React.FC<{}> = () => {
  const NUM_OF_LINES = 8;
  const MAX_CHARS = 280;

  const [text, setText] = useState('');
  const onChangeText = (text: string) => setText(text);
  const charsRemain: number = MAX_CHARS - text.length;

  const getColor = (charsRemain: number): string => {
    let color = 'lightgrey';
    if (charsRemain < 0) {
      color = 'red';
    }
    if (charsRemain < 10 && charsRemain >= 0) {
      color = 'yellow';
    }
    return color;
  };

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <TextInput
        value={text}
        onChangeText={onChangeText}
        numberOfLines={NUM_OF_LINES}
        style={[
          styles.textInput,
          {
            borderColor: getColor(charsRemain),
          },
        ]}
        textAlignVertical="top"
        multiline
      />
      <Text
        style={[
          styles.info,
          {
            color: getColor(charsRemain),
          },
        ]}>{`${charsRemain} characters remaining`}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 16,
  },
  textInput: {
    borderWidth: 2,
    padding: 12,
    borderRadius: 12,
    fontSize: 18,
  },
  info: {
    fontSize: 18,
    marginTop: 18,
    textAlign: 'center',
    backgroundColor: '#2f0909',
    padding: 16,
    borderRadius: 12,
  },
});

export default App;
