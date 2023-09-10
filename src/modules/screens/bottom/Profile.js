import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeLogin} from '../../../redux/action/ProfileActions';
import {useNavigation} from '@react-navigation/native';

const Profile = props => {
  const navigation = useNavigation();

  const user = useSelector(state => state.ProfileReducer.user);
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {user && (
          <View style={styles.user}>
            <Text style={styles.userInfo}>Hello 👋</Text>
            <Text style={styles.userInfo}>{user.email}</Text>
          </View>
        )}
      </View>
      <TouchableOpacity
        onPress={() => {
          dispatch(removeLogin());
          navigation.navigate('Login');
        }}>
        <Text style={styles.userInfo}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  user: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: 10,
  },
  userInfo: {
    color: '#222',
    fontSize: 22,
    padding: 10,
    fontWeight: 'bold',
  },
});
export default Profile;
