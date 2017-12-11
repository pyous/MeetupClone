import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import { fetchMeetups } from './constants/api';

export default class App extends React.Component {

  static defaultProps = {
    fetchMeetups
  }

  state = {
    loading: false,
    meetups: []
  }

  async componentDidMount() {
    this.setState({ loading: true});
    const res = await this.props.fetchMeetups();
    this.setState({ loading: false, meetups: res.meetup });
console.log(res);
console.log(this.state.meetups[0]);
  }


render() {
      if (this.state.loading) {
        return (
          <View style={styles.container}>
            <ActivityIndicator size="large" />
          </View>
        )
      }
      return (
        <View style={styles.container}>
          <Text>La liste des meetups :</Text>
          {this.state.meetups.map((meetup, i) => (
            <Text key={i}>{meetup.title}</Text>
          ))}
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
