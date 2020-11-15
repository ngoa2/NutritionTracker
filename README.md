# NutritionTracker

Requires git version 2.21.0, follow [this link](https://git-scm.com/downloads) to download
Requires node v12.18.2, follow [this link](https://nodejs.org/en/download/) to download

## Installation
From the terminal, run

```
npm install -g expo-cli
git clone https://github.com/ngoa2/NutritionTracker.git
cd NutritionTracker
npm install
```

Once you have installed all the packages, run

```
npm start
```

to start the local server.

It should open up a browser and you'll see a QR code.

Install the Expo app from the App Store.

Scan the code with your camera app (ios) or expo app (android).


## Troubleshooting

If you see

```
Uncaught Error: java.net.SocketTimeException
```

start the server by

```
expo start --tunnel
```

or choose 'tunnel' on browser

To quit the server, press Ctrl + C

If see during expo simulation:

```
warning
Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`
```

open file: `</node_modules/react-native-deck-swiper/Swiper.js/>`

add `<{useNativeDriver: true}>` to `<Animated.sring>` and `<Animated.event>`'s config prop (the second prop).
