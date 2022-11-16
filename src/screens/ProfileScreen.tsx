import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View, Text } from 'react-native';

import {
  NestedScreenProps,
  RootStackScreenProps,
} from '../typings/navigationTypes';
import CustomButton from '../components/common/CustomButton';
import HeaderTitle from '../components/common/HeaderTitle';
import { COLOURS } from '../constants/Colours';

interface ProfileScreenProps {
  navigation: NestedScreenProps<'ProfileScreen'>;
}

const ProfileScreen = (props: ProfileScreenProps) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const [editMode, setEditMode] = useState(false);

  return (
    <View>
      <HeaderTitle colour={COLOURS.RED}>
        {t('profile.logged_in_as') + '[user]'}
      </HeaderTitle>
      <CustomButton onPress={() => setEditMode(!editMode)}>
        {t('buttons.edit')}
      </CustomButton>
      <View style={styles.profileDetailsContainer}>
        <View>
          <Text>{t('user_details.first_name')}</Text>
          <Text>{t('user_details.last_name')}</Text>
          <Text>{t('user_details.mobile')}</Text>
          <Text>{t('user_details.email')}</Text>
          <Text>{t('user_details.company')}</Text>
        </View>
        <View></View>
      </View>
      <CustomButton
        style={{ backgroundColor: COLOURS.RED }}
        onPress={() => console.log('')}
      >
        {t('buttons.delete_account')}
      </CustomButton>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {},
  profileDetailsContainer: {
    flexDirection: 'row',
  },
});
