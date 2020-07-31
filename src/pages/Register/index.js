import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Input, Button} from '../../components';
import {colors} from '../../utils/colors';
import {IconBack, IllustrationsRegister} from '../../assets';
import {useSelector} from 'react-redux';

export default function Register() {
  const RegisterReducer = useSelector((state) => state.RegisterReducer);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const sendData = () => {
    console.log('send data', form);
  };

  const onInputChange = (input, value) => {
    setForm({
      ...form,
      [input]: value,
    });
  };

  return (
    <View style={styles.wrapper.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <IconBack width={25} height={25} />
        <IllustrationsRegister
          width={106}
          height={115}
          style={styles.illustration}
        />
        <Text style={styles.text.desc}>
          Mohon mengisi beberapa data untuk proses daftar anda{' '}
          {RegisterReducer.title}
        </Text>
        <View style={styles.space(64)} />
        <Input
          placeholder="nama lengkap"
          value={form.fullName}
          onChangeText={(value) => onInputChange('fullName', value)}
        />
        <View style={styles.space(33)} />
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
        <Button title="Daftar" onPress={sendData} />
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
