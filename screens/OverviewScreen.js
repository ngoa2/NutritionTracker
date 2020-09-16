import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Row, Card, CardItem } from "native-base";
import * as Progress from 'react-native-progress';
import GoalBar from "../components/GoalBar";
import { BarChart, Grid, XAxis, YAxis} from 'react-native-svg-charts'

export class OverviewScreen extends React.Component{
  render() {
    const fill = '#C4C4C4'
    const data = [1750, 1200, 2000, 2250, 1500, 1700, 2100]
    const contentInset = { top: 20, bottom: 20 }
    const svgs = [
      { fill: 'black', onPress: () => fill = 'red', },
      { fill: 'black', onPress: () => fill = 'red', },
      { fill: 'black', onPress: () => fill = 'red', },
      { fill: 'black', onPress: () => fill = 'red', },
      { fill: 'black', onPress: () => fill = 'red', },
      { fill: 'black', onPress: () => fill = 'red', },
      { fill: 'black', onPress: () => fill = 'red', },
    ]

    return (
      <View style={styles.background}>
        <Text style={styles.textTitle}>Overview</Text>
        <View style={{width: "80%", alignSelf:"center"}}>
        <Text style= {{textAlign:"center", marginBottom:10}}>July 7, 2020</Text>
        <View style={{flexDirection: 'row'}}>
        <YAxis      style={{marginLeft: 0}}
                    data={data}
                    contentInset={contentInset}
                    svg={{
                        fill: 'black',
                        fontSize: 10,
                    }}
                    numberOfTicks={5}
                    formatLabel={(value) => `${value}`}
                />
            <BarChart style={{height: 170, flex: 1, marginLeft: 20}} data={data} svg={{ svgs }} spacingInner ={.5} contentInset={contentInset}>
          </BarChart>
          </View>
            <XAxis
                style={{ marginHorizontal: 0, marginTop: 20, marginBottom: 20,}}
                data={data}
                formatLabel={(value, index) => index}
                contentInset={{ left: 10, right: 10 }}
                svg={{ fontSize: 10, fill: 'black' }}
            />

        </View>

        <View style={{flexDirection:"row", justifyContent:"space-between", marginBottom: 30}}>
        <Card style={styles.roundedCardWhite}>
            <CardItem style={styles.cardItemGreen}>
              <Text style={{ color:'white', fontSize:10, fontWeight:'bold', color: "black" }}>Week</Text>
            </CardItem>
        </Card>
        <Card style={styles.roundedCardGreen}>
            <CardItem style={styles.cardItemGreen}>
              <Text style={{ color:'white', fontSize:10, fontWeight:'bold' }}>Month</Text>
            </CardItem>
        </Card>
        </View>


        <View style={{flexDirection:"row", justifyContent:"space-between", marginBottom: 30,}}>
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
