import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {Leanplum} from '@leanplum/react-native-sdk';
import config from './config';

const App: () => React$Node = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    // Get your App ID and Keys from https://www.leanplum.com/dashboard?#/account/apps
    // Leanplum.setAppIdForDevelopmentMode(
    //   config.leanplum.appId,
    //   config.leanplum.devApiKey,
    // );
    // Leanplum.start();
  });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <Text style={styles.sectionTitle}>Leanplum Demo</Text>
          <Button
            title={isRegistered ? 'User Registered' : 'Register User'}
            onPress={() => {
              // Leanplum.setUserId('1');
              // Leanplum.setUserAttributes({
              //   email: '',
              //   name: 'test user',
              // });
              // Leanplum.forceContentUpdate();
              // Leanplum.track('user_registered');
              setIsRegistered(true);
            }}
            disabled={isRegistered}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
