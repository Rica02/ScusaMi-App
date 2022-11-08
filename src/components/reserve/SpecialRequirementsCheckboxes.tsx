import React, { useEffect, useState } from 'react';
import Checkbox from 'expo-checkbox';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View, Text } from 'react-native';

import { COLOURS } from '../../constants/Colours';
import { VALUES } from '../../constants/Styling';
import { SPECIAL_REQUIREMENTS } from '../../constants/AppConstants';

interface SpecialRequirementsCheckboxesProps {
  onToggle: (requirementsSelection: string[]) => void;
}

const SpecialRequirementsCheckboxes = (
  props: SpecialRequirementsCheckboxesProps
) => {
  const { onToggle } = props;
  const { t } = useTranslation();
  const [requirementsSelection, setRequirementsSelection] = useState<string[]>(
    []
  );
  const [birthdayChecked, setBirthdayChecked] = useState<boolean | undefined>();
  const [allergyChecked, setAllergyChecked] = useState<boolean | undefined>();
  const [pramChecked, setPramChecked] = useState<boolean | undefined>();
  const [accessChecked, setAccessChecked] = useState<boolean | undefined>();

  useEffect(() => {
    onToggle(requirementsSelection);
  }, [requirementsSelection]);

  useEffect(() => {
    setRequirementsSelection([]);
    if (birthdayChecked) {
      setRequirementsSelection((items) => [
        ...items,
        SPECIAL_REQUIREMENTS.BIRTHDAY,
      ]);
    }
    if (allergyChecked) {
      setRequirementsSelection((items) => [
        ...items,
        SPECIAL_REQUIREMENTS.ALLERGY,
      ]);
    }
    if (pramChecked) {
      setRequirementsSelection((items) => [
        ...items,
        SPECIAL_REQUIREMENTS.BRINGING_PRAM,
      ]);
    }
    if (accessChecked) {
      setRequirementsSelection((items) => [
        ...items,
        SPECIAL_REQUIREMENTS.SPECIAL_ACCESS,
      ]);
    }
  }, [birthdayChecked, allergyChecked, pramChecked, accessChecked]);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.requirementContainer}>
          <Checkbox
            value={birthdayChecked}
            onValueChange={() => {
              setBirthdayChecked(!birthdayChecked);
            }}
            color={birthdayChecked ? COLOURS.RED : undefined}
          />
          <Text style={styles.label}>{t('reserve.birthday')} </Text>
        </View>
        <View style={styles.requirementContainer}>
          <Checkbox
            value={allergyChecked}
            onValueChange={() => {
              setAllergyChecked(!allergyChecked);
            }}
            color={allergyChecked ? COLOURS.RED : undefined}
          />
          <Text style={styles.label}>{t('reserve.allergy')} </Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.requirementContainer}>
          <Checkbox
            value={pramChecked}
            onValueChange={() => {
              setPramChecked(!pramChecked);
            }}
            color={pramChecked ? COLOURS.RED : undefined}
          />
          <Text style={styles.label}>{t('reserve.bringing_pram')}</Text>
        </View>
        <View style={styles.requirementContainer}>
          <Checkbox
            value={accessChecked}
            onValueChange={() => {
              setAccessChecked(!accessChecked);
            }}
            color={accessChecked ? COLOURS.RED : undefined}
          />
          <Text style={styles.label}>
            {t('reserve.special_access_required')}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SpecialRequirementsCheckboxes;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: VALUES.SPACING.MEDIUM,
    marginBottom: VALUES.SPACING.LARGE,
  },
  requirementContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: VALUES.SPACING.SMALL,
  },
  label: {
    fontSize: VALUES.FONT_SIZE.MEDIUM,
    marginLeft: VALUES.SPACING.SMALL,
  },
});
