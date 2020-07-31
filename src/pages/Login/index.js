import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Input, Button} from '../../components';
import {colors} from '../../utils/colors';
import {IllustrationsLogin} from '../../assets';
import {useSelector, useDispatch} from 'react-redux';
import {setForm} from '../../redux';

export default function Login({navigation}) {
  const {form} = useSelector((state) => state.LoginReducer);
  const dispatch = useDispatch();

  const sendData = () => {
    console.log('send data', form);
  };

  const onInputChange = (input, value) => {
    dispatch(setForm(input, value));
  };

  return (
    <View style={styles.wrapper.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Button type="icon" name="back" onPress={() => navigation.goBack()} />
        <IllustrationsLogin
          width={106}
          height={115}
          style={styles.illustration}
        />
        <Text style={styles.text.desc}>
          Silahkan ngisi data anda, untuk masuk ke aplikasi O-JOL
        </Text>
        <View style={styles.space(64)} />
        <Input
          placeholder="email"
          value={form.email}
          onChangeText={(value) => onInputChange('email', value)}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="password"
          value={form.password}
          onChangeText={(value) => onInputChange('password', value)}
          secureTextEntry={true}
        />
        <View style={styles.space(83)} />
        <Button title="Masuk" onPress={sendData} />
      </ScrollView>
    </View>
  );
}

const styles = {
  wrapper: {
    page: {
      padding: 20,
    },
  },
  illustration: {
    marginTop: 8,
  },
  text: {
    desc: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.default,
      marginTop: 16,
      maxWidth: 200,
    },
  },
  space: (value) => {
    return {
      height: value,
    };
  },
};
