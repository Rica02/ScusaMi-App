import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';

const LanguagePicker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { i18n } = useTranslation(); //i18n instance

  //array with all supported languages
  const languages = [
    { name: 'en', label: 'English' },
    { name: 'zh', label: 'Chinese' },
  ];

  const LanguageItem = ({ name, label }: { name: string; label: string }) => (
    <Pressable
      onPress={() => {
        i18n.changeLanguage(name); //changes the app language
        setModalVisible(!modalVisible);
      }}
    >
      <Text style={{ color: 'blue' }}>{label}</Text>
    </Pressable>
  );

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{ justifyContent: 'center', alignItems: 'center', top: 100 }}
        >
          <View style={{ backgroundColor: 'lightgrey' }}>
            {languages.map((lang) => (
              <LanguageItem {...lang} key={lang.name} />
            ))}
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text style={{ color: 'blue' }}>{i18n.language}</Text>
      </Pressable>
    </View>
  );
};

export default LanguagePicker;
