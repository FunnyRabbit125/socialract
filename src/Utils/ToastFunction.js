import Toast from 'react-native-toast-message';
import _ from 'lodash';

export const ShowToast = (msg, type = 'success', otherProps = {}) =>
  Toast.show({text1: msg, type, ...otherProps});

export const handleDefaultEmoji = (data, blackList) => {
  const filteredData = data.filter(e => !_.includes(blackList, e.short_name));
  const sortedData = _.orderBy(filteredData, 'sort_order');
  const groupedData = _.groupBy(sortedData, 'category');

  const transformData = _.mapValues(groupedData, group =>
    group.map(value => {
      let skins = null;
      if (value.skin_variations) {
        skins = _.toArray(value.skin_variations).map(skin => {
          return {
            code: toEmoji(skin.unified),
            name: value.name,
          };
        });
      }
      return {
        code: toEmoji(value.unified),
        name: value.short_name,
        skins,
      };
    }),
  );
  return transformData;
};

export const toEmoji = code => {
  return String.fromCodePoint(...code.split('-').map(u => '0x' + u));
};
