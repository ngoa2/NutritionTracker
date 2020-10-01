import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Row, Card, CardItem } from "native-base";
// import * as Progress from 'react-native-progress';
import GoalBar from "../components/GoalBar";
import {VictoryBar, VictoryChart, VictoryTheme} from 'victory-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Button from "../components/Button";
export class OverviewScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
       showGraph: 0,

    };
  }

  render() {
    const data = [
      {x: 1, y: 2000},
      {x: 2, y: 1500},
      {x: 3, y: 1750},
      {x: 4, y: 2500},
      {x: 5, y: 1300},
      {x: 6, y: 2250},
      {x: 7, y: 1700},
    ];

    const data2 = [
      {x: 1, y: 2000},
      {x: 2, y: 1500},
      {x: 3, y: 1750},
      {x: 4, y: 2500},
      {x: 5, y: 1300},
      {x: 6, y: 2250},
      {x: 7, y: 1700},
      {x: 8, y: 2000},
      {x: 9, y: 1500},
      {x: 10, y: 1750},
      {x: 11, y: 2500},
      {x: 12, y: 1300},
      {x: 13, y: 2250},
      {x: 14, y: 1700},
      {x: 15, y: 2000},
      {x: 16, y: 1500},
      {x: 17, y: 1750},
      {x: 18, y: 2500},
      {x: 19, y: 1300},
      {x: 20, y: 2250},
      {x: 21, y: 1700},
      {x: 22, y: 2000},
      {x: 23, y: 1500},
      {x: 24, y: 1750},
      {x: 25, y: 2500},
      {x: 26, y: 1300},
      {x: 27, y: 2250},
      {x: 28, y: 1700},
      {x: 29, y: 2250},
      {x: 30, y: 1700},
      {x: 31, y: 1700},
    ];
    var graph;
    if (this.state.showGraph === 1) {
      graph = (
        <VictoryBar
        style={{
          data: {
            fill: "#C4C4C4",
            width: 5
          }
        }}
        alignment="middle"
        cornerRadius={{top: 3}}
        data={data2}
        x="x"
        y="y"
      />
      );
    } else if (this.state.showGraph === 0) {
      graph = (
        <VictoryBar
            style={{
              data: {
                fill: "#C4C4C4",
                width: 15
              }
            }}
            events={[{
              target: "data",
              eventHandlers: {
                onPressIn: () => {
                  return [
                    {
                      target: "data",
                      mutation: (props) => {
                        const fill = props.style && props.style.fill;
                        return fill === "#2CBA8D" ? null : { style: { fill: "#2CBA8D" } };
                      }
                    }
                  ];
                }
              }
            }]}
            categories={{x:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}}
            alignment="middle"
            cornerRadius={{top: 8}}
            data={data}
            x="x"
            y="y"
          />
      );
    }


    return (
      <View style={styles.background}>
        <Text style={styles.textTitle}>Overview</Text>
        <View style={{width: "100%", alignSelf:"center", alignContent:"center"}}>
        <Text style= {{textAlign:"center", marginBottom:10}}>July 7, 2020</Text>
        <View style={{alignContent:"center", alignSelf:"center", justifyContent:"center"}}>
        <VictoryChart
        height={200}
        width={350}
        
        padding={{top: 10, bottom: 50, left: 50, right: 25}}
        theme={VictoryTheme.material}
        domainPadding={{ x: 20 }}
        >
          {graph}

        </VictoryChart>
        </View>
        </View>

        <View style={{alignItems: "center", height: "5%", flexDirection:"row", justifyContent:"space-between", marginBottom: 20, marginLeft: 40, marginRight: 40,}}>
          <Button onPress = {() => this.setState({showGraph: 0})} text = "Week"></Button>

          <Button onPress = {() => this.setState({showGraph: 1})} text = "Month"></Button>
        </View>


        <View style={{flexDirection:"row", justifyContent:"space-between", marginBottom: 20, marginTop: 10,}}>
          <View style = {{marginLeft: 75, alignItems: "center"}}>
            <Text style={{ color: "#FFA26B", fontWeight: 'bold', fontSize: 34, paddingBottom: 8,}}>1250g</Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold', paddingBottom: 15}}>Calories Avg</Text>
          </View>
          <View style = {{marginRight: 75, alignItems: "center"}}>
            <Text style={{ color: "#FFA26B", fontWeight: 'bold', fontSize: 34, paddingBottom: 8,}}>1250g</Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold', paddingBottom: 15}}>Carbohydrates Avg</Text>
          </View>
        </View>
        <View style={{width: "90%", alignContent:"center", alignItems:"center", justifyContent: "center",  marginLeft: 20,}}>
          <Text style={{fontSize: 20, fontWeight:"bold", alignSelf:"flex-start",  marginLeft: 17, marginBottom: 10,}}>Goals</Text>
          <GoalBar percentage={.75} goalName = "eat food"></GoalBar>
          <GoalBar percentage={.5} goalName = "eat good food"></GoalBar>

          <Text style={styles.mealButton}>+ Add A Goal</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    backgroundColor: "#E5E5E5",
  },

  bottomHalf: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
    width: "100%",
    position: "relative",
  },

  roundedBody: {
    backgroundColor: "#F9F9F9",
    paddingTop: 8,
    borderTopRightRadius: 36,
    borderTopLeftRadius: 36,
    height: "100%",
    width: "100%",
    alignItems: "center",
  },

  textHeading: {
    fontSize: 17,
    marginTop: 0,
    fontWeight: "bold",
  },

  textTitle: {
    fontSize: 34,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "black",
    marginTop: 68,
    marginLeft: 37,
    marginBottom: 50,
  },

  mealButton: {
    alignSelf: "flex-start",
    fontSize: 10,
    fontWeight: "bold",
    color: "#2CBA8D",
    marginLeft: 17,
  },
  roundedCardGreen: {
    position: 'relative',
    width: '40%',
    flex: 0,
    flexDirection: "row",
    alignItems: 'center',
    padding: 0,
    borderRadius: 15,
    backgroundColor: "#2CBA8D",
    marginRight: 35,
},
  roundedCardWhite: {
    marginLeft: 35,
    position: 'relative',
    width: '40%',
    flex: 0,
    flexDirection: "row",
    alignItems: 'center',
    padding: 0,
    borderRadius: 15,
    backgroundColor: "white",
  },

cardItemGreen: {
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
},
});

export default OverviewScreen;
