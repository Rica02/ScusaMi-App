import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View, Text, Pressable } from 'react-native';

import { NestedScreenProps } from '../typings/navigationTypes';
import { UserType } from '../typings/userTypes';
import { COLOURS } from '../constants/Colours';
import { VALUES } from '../constants/Styling';
import CustomButton from '../components/common/CustomButton';
import HeaderTitle from '../components/common/HeaderTitle';

import { USER } from '../DummyData';

interface ProfileScreenProps {
  navigation: NestedScreenProps<'ProfileScreen'>;
}

const ProfileScreen = (props: ProfileScreenProps) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const [editMode, setEditMode] = useState(false);
  const [userDetails, setUserDetails] = useState<UserType | undefined>();
  const [userDetailsDesc, setUserDetailsDesc] = useState<
    string[] | undefined
  >();

  useEffect(() => {
    setUserDetails(USER);
    const array = [
      t('user_details.first_name'),
      t('user_details.last_name'),
      t('user_details.mobile'),
      t('user_details.email'),
      t('user_details.company'),
      t('user_details.password'),
    ];
    setUserDetailsDesc(array);
  }, []);

  const UserDetails = () => {
    return (
      <>
        {userDetails &&
          userDetailsDesc &&
          Object.entries(userDetails).map(([key, value], index) => (
            <View key={key} style={styles.detailsRow}>
              <View style={styles.detailsLeftContainer}>
                <Text style={[styles.detailsRightText, styles.boldText]}>
                  {userDetailsDesc[index]}
                </Text>
              </View>
              <View style={styles.detailsRightContainer}>
                <Text style={styles.detailsRightText}>{value}</Text>
              </View>
            </View>
          ))}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <HeaderTitle colour={COLOURS.RED}>
        {t('profile.logged_in_as') + USER.fName}
      </HeaderTitle>
      <CustomButton
        style={styles.editButton}
        onPress={() => setEditMode(!editMode)}
      >
        {t('buttons.edit')}
      </CustomButton>
      <View style={styles.profileDetailsContainer}>
        <UserDetails />
        <Pressable>
          <Text style={[styles.deleteAccText, styles.boldText]}>
            {t('buttons.delete_account')}
          </Text>
        </Pressable>
      </View>
      <CustomButton
        style={styles.signOutButton}
        onPress={() => console.log('')}
      >
        {t('buttons.sign_out')}
      </CustomButton>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLOURS.WHITE,
    paddingHorizontal: VALUES.SPACING.MEDIUM,
    paddingVertical: VALUES.SPACING.LARGE,
  },
  editButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: VALUES.SPACING.LARGE,
    marginVertical: VALUES.SPACING.LARGE,
  },
  profileDetailsContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: VALUES.SPACING.LARGE,
  },
  detailsRow: {
    flexDirection: 'row',
  },
  detailsLeftContainer: {
    flex: 1,
  },
  detailsRightText: {
    fontSize: VALUES.FONT_SIZE.MEDIUM,
    paddingVertical: VALUES.SPACING.MEDIUM,
  },
  detailsRightContainer: {
    flex: 1.5,
  },
  boldText: {
    fontWeight: '600',
  },
  deleteAccText: {
    textAlign: 'center',
    color: COLOURS.RED,
    textDecorationLine: 'underline',
    fontSize: VALUES.FONT_SIZE.MEDIUM,
    paddingVertical: VALUES.SPACING.LARGE,
  },
  signOutButton: {
    width: '100%',
    backgroundColor: COLOURS.RED,
  },
});
