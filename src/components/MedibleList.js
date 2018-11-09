import React, { Component } from 'react';
import { View } from 'react-native';
import { Spinner } from 'native-base';
import axios from 'axios';
import MedibleDetail from './MedibleDetail';

class MedibleList extends Component {
  state = {
    Medibles: []
  }

  componentDidMount() {
    axios.get('https://server420skincare.herokuapp.com/Medibles')
      .then(response => this.setState({ Medibles: response.data }));
  }

  renderMedibles() {
    if (this.state.Medibles.length === 0) {
            return <Spinner size='large' color='black' />;
    }
    return this.state.Medibles.map(Medible =>
      <MedibleDetail key={Medible.name} Medible={Medible} />
    );
  }

  render() {
    return (
      <View>
        {this.renderMedibles()}
      </View>
    );
  }
}
export default MedibleList;
