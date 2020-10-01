import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class Button extends Component {
	render() {
		const { text, onPress} = this.props;
		return (
		  <TouchableOpacity style={styles.buttonStyle}
			onPress={() => onPress()}
		  >
			 <Text style={styles.textStyle}>{text}</Text>
		  </TouchableOpacity>
		);
	}
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize:10, 
    fontWeight:'bold',
    color: 'black',
    textAlign: 'center',
    margin: 0,
    padding: 0,
  },
  
  buttonStyle: {
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
    height: '65%',
    borderRadius: 10,
    backgroundColor: "white",
  }
});

export default Button;