import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import colors from '../../../../config/colors';
import strings from '../../../../config/strings';
import metrics from '../../../../config/metrics';

export default class EditMyToon extends Component {
  showTitleBar = episode => {
    return (
      <View style={styles.titleContainer}>
        <TextInput style={styles.titleBar} value={episode.title} />
      </View>
    );
  };

  showListToon = (ep, index) => {
    return (
      <View key={index} style={styles.showListContainer}>
        <View style={styles.listImage}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('EditEpsToon', ep)}>
            <Image
              style={styles.showListImage}
              source={{
                uri: ep.imageURI,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.listNameContainer}>
          <Text style={styles.listName}>
            {strings.EPS}
            {ep.index}
          </Text>
          <Text style={styles.epsNameDate}>{ep.dateAdded}</Text>
        </View>
      </View>
    );
  };

  showListTitle = episode => {
    return (
      <View style={styles.listsContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {episode.map((ep, index) => this.showListToon(ep, index))}
        </ScrollView>
      </View>
    );
  };

  renderSub = () => {
    const {params} = this.props.navigation.state;

    return (
      <View style={styles.createToonContainer}>
        <Text style={styles.titleText}>{strings.TITLE}</Text>
        {this.showTitleBar(params)}
        <Text style={styles.titleText}>{strings.EPISODE}</Text>
        {this.showListTitle(params.episode)}
        <View style={styles.EpsBtnContainer}>
          <TouchableOpacity style={styles.addEpsBtn} onPress={() => {}}>
            <Text style={styles.EpsBtnText}>{strings.ADD_EPISODE}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.delEpsBtn} onPress={() => {}}>
            <Text style={styles.EpsBtnText}>{strings.DELETE}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>{this.renderSub()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '85%',
  },
  createToonContainer: {
    flex: 1,
  },
  titleText: {
    fontFamily: strings.FONT,
    fontSize: 25,
    marginTop: 10,
  },
  titleContainer: {
    borderWidth: 4,
    marginTop: 10,
  },
  titleBar: {
    fontFamily: strings.FONT,
    fontSize: 20,
    padding: 10,
  },
  listsContainer: {
    flex: 1,
    marginTop: 15,
  },
  showListContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  listImage: {
    borderWidth: 4,
    marginRight: 10,
  },
  showListImage: {
    width: metrics.DEVICE_WIDTH / 5,
    height: metrics.DEVICE_HEIGHT / 7,
    resizeMode: 'contain',
  },
  listNameContainer: {
    flex: 1,
  },
  listName: {
    fontFamily: strings.FONT,
    fontSize: 18,
    marginTop: 10,
  },
  epsNameDate: {
    fontFamily: strings.FONT,
    fontSize: 18,
    opacity: 0.3,
  },
  EpsBtnContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  addEpsBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.DARK_GREEN,
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.7)',
    marginBottom: 10,
  },
  EpsBtnText: {
    fontFamily: strings.FONT,
    color: colors.WHITE,
    fontSize: 25,
    padding: 10,
  },
  delEpsBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.TORCH_RED,
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.7)',
  },
});
