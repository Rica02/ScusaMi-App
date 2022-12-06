import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View, Text, Pressable, TextInput } from 'react-native';

import { UserType } from '../../typings/userTypes';
import { COLOURS } from '../../constants/Colours';
import { VALUES } from '../../constants/Styling';
import CustomButton from '../../components/common/CustomButton';
import HeaderTitle from '../../components/common/HeaderTitle';

import { USER } from '../../DummyData';

interface ProfileScreenProps {
  navigation: any;
}

const ProfileScreen = (props: ProfileScreenProps) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState<UserType | undefined>();
  const [userDetailsDesc, setUserDetailsDesc] = useState<
    string[] | undefined
  >();

  const [newFirstName, setNewFirstName] = useState<string | undefined>();
  const [newLastName, setNewLastName] = useState<string | undefined>();
  const [newMobile, setNewMobile] = useState<string | undefined>();
  const [newEmail, setNewEmail] = useState<string | undefined>();
  const [newCompany, setNewCompany] = useState<string | undefined>();

  useEffect(() => {
    setUser(USER);
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

  const handleEdit = () => {
    // if (editMode) {
    //   let updatedDetails: any;
    //   if (newFirstName) {
    //     updatedDetails.firstName = newFirstName;
    //   }
    //   if (newLastName) {
    //     updatedDetails.lastName = newLastName;
    //   }
    //   if (newMobile) {
    //     updatedDetails.mobile = newMobile;
    //   }
    //   if (newEmail) {
    //     updatedDetails.email = newEmail;
    //   }
    //   if (newCompany) {
    //     updatedDetails.company = newCompany;
    //   }

    //   console.log('Updated details: ' + JSON.stringify(updatedDetails));
    //   if (updatedDetails) {
    //     setUser((oldValues) => ({ ...oldValues, updatedDetails } as UserType));
    //   }

    //   setNewFirstName(undefined);
    //   setNewLastName(undefined);
    //   setNewMobile(undefined);
    //   setNewEmail(undefined);
    //   setNewCompany(undefined);
    // }
    setEditMode(!editMode);
  };

  const UserDetails = () => {
    return (
      <>
        {user &&
          userDetailsDesc &&
          Object.entries(user).map(([key, value], index) => (
            <View key={key} style={styles.detailsRow}>
              <View style={styles.detailsLeftContainer}>
                <Text style={[styles.detailsRightText, styles.boldText]}>
                  {userDetailsDesc[index]}
                </Text>
              </View>
              <View style={styles.detailsRightContainer}>
                {editMode ? (
                  <TextInput
                    style={[styles.detailsRightText, styles.textInput]}
                    placeholder={value.toString()}
                  />
                ) : (
                  <Text style={styles.detailsRightText}>{value}</Text>
                )}
              </View>
            </View>
          ))}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <HeaderTitle colour={COLOURS.RED}>
        {t('profile.logged_in_as') + USER.firstName}
      </HeaderTitle>
      <CustomButton style={styles.editButton} onPress={handleEdit}>
        {editMode ? t('buttons.done') : t('buttons.edit')}
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
        onPress={() => {
          // Log user out
          navigation.navigate('Root', { screen: 'HomeScreen' });
        }}
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
    width: VALUES.SIZE['4XLARGE'],
    marginVertical: VALUES.SPACING.LARGE,
  },
  profileDetailsContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: VALUES.SPACING.LARGE,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
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
  textInput: {
    paddingVertical: VALUES.SPACING.SMALL,
    paddingLeft: VALUES.SPACING.SMALL,
    borderBottomWidth: 0.5,
    borderColor: COLOURS.GREY,
  },
});
