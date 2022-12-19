import React, {useState, useRef} from 'react';
import {
StyleSheet,Text,View,NativeModules,requireNativeComponent,Image,TouchableOpacity,Button,} from 'react-native';
import CanvasPk from './nativecomponents/CanvasPk';
import ViewShot from 'react-native-view-shot';
import AppleSketch from './components/AppleSketch';

const increment = () => {
  NativeModules.CustomPlayer.increment(value => {
    console.log('The value is save :', value);
  });
};

const decrement = async () => {
  console.log(NativeModules.CustomPlayer);
  try {
    NativeModules.CustomPlayer.save()
      .then(result =>
        console.log('result for resolve :', JSON.stringify(result)),
      )
      .catch(e => console.log(e.message, e.code));
  } catch (error) {}
};
const redo = async () => {
  console.log(NativeModules.CustomPlayer);
  try {
    NativeModules.CustomPlayer.redo()
      .then(result =>
        console.log('result for resolve :', JSON.stringify(result)),
      )
      .catch(e => console.log(e.message, e.code));
  } catch (error) {}
};
const undo = async () => {
  console.log(NativeModules.CustomPlayer);
  try {
    NativeModules.CustomPlayer.undo()
      .then(result =>
        console.log('result for resolve :', JSON.stringify(result)),
      )
      .catch(e => console.log(e.message, e.code));
  } catch (error) {}
};
const reset = async () => {
  console.log(NativeModules.CustomPlayer);
  try {
    NativeModules.CustomPlayer.reset()
      .then(result =>
        console.log('result for resolve :', JSON.stringify(result)),
      )
      .catch(e => console.log(e.message, e.code));
  } catch (error) {}
};
const eraser = async () => {
  console.log(NativeModules.CustomPlayer);
  try {
    NativeModules.CustomPlayer.eraser()
      .then(result =>
        console.log('result for resolve :', JSON.stringify(result)),
      )
      .catch(e => console.log(e.message, e.code));
  } catch (error) {}
};
const pen = async () => {
  console.log(NativeModules.CustomPlayer);
  try {
    NativeModules.CustomPlayer.pen()
      .then(result =>
        console.log('result for resolve :', JSON.stringify(result)),
      )
      .catch(e => console.log(e.message, e.code));
  } catch (error) {}
};
const value = NativeModules.CustomPlayer.getConstants();

console.log(value.incraement);

const App = () => {
  const [imagevalue, setImageVlaue] = useState(
    '/Users/apple/Library/Developer/CoreSimulator/Devices/9C3BBE07-AB80-4385-94BE-02FFD7784BE9/data/Containers/Data/Application/870132C1-2C4F-4E10-B9E5-400C040F5961/tmp/ReactNative/236E9DD6-A45E-4D23-ACA6-BE18363ED020.png',
  );
  const ref = useRef(null);
  const takeImage = () => {
    ref?.current?.capture().then(uri => {
      console.log('do something with ', uri);
      setImageVlaue(`${uri}`);
    });
  };
  const [sw, setSw] = useState(2);
  const appleSketchRef = useRef();
  return (
    <View style={styles.container}>
      {/* <ViewShot
        style={{width: 330, height: 400, backgroundColor: 'blue'}}
        ref={ref}>
        <Image
          source={{
            url: 'https://images.pexels.com/photos/4835429/pexels-photo-4835429.jpeg?auto=compress&cs=tinysrgb&w=800',
          }}
          style={[{width: '100%', height: '100%'}, StyleSheet.absoluteFill]}
        />
        <CanvasPk
          strokeWidth={sw}
          style={{width: 330, height: 400}}
          applepencile={true}
          positionWidth={100}
          positionHeight={200}
          positionArray={['330', '400']}
        />
      </ViewShot>
      <Button
        title="add"
        onPress={() => {
          setSw(sw + 1);
        }}
      />
      <Button
        title="minus"
        onPress={() => {
          setSw(sw - 1);
        }}
      />
      <Button
        title="save"
        onPress={() => {
          decrement();
        }}
      />
      <Button
        title="redo"
        onPress={() => {
          redo();
        }}
      />
      <Button
        title="undo"
        onPress={() => {
          undo();
        }}
      />
      <Button
        title="reset"
        onPress={() => {
          reset();
        }}
      />
      <Button
        title="erase"
        onPress={() => {
          eraser();
        }}
      />
      <Button
        title="pen"
        onPress={() => {
          pen();
        }}
      />
      <View style={{width: 100, height: 100}}>
        <Image
          source={{uri: imagevalue}}
          style={{width: '100%', height: '100%'}}
        />
      </View> */}
      
      {/* <AppleSketch
      ref={appleSketchRef}
      strokeWidth={5}
      canvasWidth={300}
      canvasHeight={300}
      drawOnApple={false}
      backgroundColor={"red"}
      backgroundImageurl={'https://images.pexels.com/photos/4835429/pexels-photo-4835429.jpeg?auto=compress&cs=tinysrgb&w=800'}
      />

      <Button title='undo' onPress={()=>{appleSketchRef?.current?.undo()}}/>
      <Button title='redo' onPress={()=>{appleSketchRef?.current?.redo()}}/>
      <Button title='save' onPress={()=>{console.log(appleSketchRef?.current?.saveImage())}}/>
      <Button title='reset' onPress={()=>{appleSketchRef?.current?.reset()}}/>
      <Button title='eraser' onPress={()=>{appleSketchRef?.current?.eraser()}}/>
      <Button title='pen' onPress={()=>{appleSketchRef?.current?.pen()}}/> */}
     
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
