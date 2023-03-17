import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import defaultStyle, {makerStyle} from '../../styles';
import defaultColor from '../../theme/colors';

interface dataInterface {
  category_ids: number[] | null;
  created_date: string | null;
  id: number | null;
  sort_content: string | null;
  thumbnail: string;
  title: string | null;
  viewers: string | null;
}

interface renderHome {
  item: dataInterface;
  index: number;
}

const RenderHome: React.FC<renderHome> = ({item, index}) => {
  return (
    <View key={index} style={[styles.container, makerStyle.AliginCenter]}>
      <Image
        key={item.id}
        source={{uri: item.thumbnail}}
        style={{
          height: 200,
          backgroundColor: '#ddd',
          borderRadius: defaultStyle.borderRadius,
        }}
      />
      <Text style={{color: defaultColor.Black, fontSize: 15}}>
        {item.title}
      </Text>
      <Text style={{color: defaultColor.Smoke, fontSize: 13}}>
        {item.sort_content}
      </Text>
    </View>
  );
};

export default React.memo(RenderHome);

const styles = StyleSheet.create({
  container: {
    padding: defaultStyle.pandding,
    marginHorizontal: defaultStyle.marginHorizontal,
    borderBottomWidth: defaultStyle.borderBottomWidth,
  },
});
