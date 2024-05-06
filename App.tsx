/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import {useSelector, useDispatch} from 'react-redux';
import {
  Canvas,
  Path,
  Skia,
  SkiaDomView,
  useTouchHandler,
  TouchInfo,
  ExtendedTouchInfo,
} from '@shopify/react-native-skia';

function App(): React.JSX.Element {
  // const dispatch = useDispatch();

  const [path] = React.useState(Skia.Path.Make());
  const paintRef = React.useRef<SkiaDomView | null>(null);

  const touchHandler = useTouchHandler({
    onStart: (touchinfo: TouchInfo) => {
      const {x, y} = touchinfo;

      path.moveTo(x, y);
    },
    onActive: (touchInfo: ExtendedTouchInfo) => {
      const {x, y} = touchInfo;

      path.lineTo(x, y);
    },
    onEnd: () => {
      console.log('Ended!');
    },
  });

  const resetCanva = () => {
    path.reset();

    paintRef.current?.redraw();
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F2F2F2'}}>
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={resetCanva}>
          <Text>Clear Signature</Text>
        </TouchableOpacity>

        <View
          style={{
            marginTop: 20,
            padding: 20,
            backgroundColor: 'white',
          }}>
          <Canvas onTouch={touchHandler} ref={paintRef} style={styles.canva}>
            <Path path={path} strokeWidth={1} style="stroke" />
          </Canvas>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  canva: {
    height: 300,
    backgroundColor: 'red ',
  },
});

export default App;
