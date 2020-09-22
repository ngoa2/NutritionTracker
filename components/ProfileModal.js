import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

const ProfileModal = (props) => {

    return (
        <View>
            <Modal
        transparent={true}
        visible={props.visible}
      >hi</Modal>
        </View>
    )
}

export default ProfileModal;