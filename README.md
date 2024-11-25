# FreeFlowUI

Build fully server driven cross-platform mobile apps with ease.

## Getting Started

Ensure Node.js is installed on your machine. Head over to [nodejs.org](https://nodejs.org/en) for details.

- Clone this repo
```bash
gh repo clone FreeFlowUI/node_server_example
```
```bash
cd ./node_server_example
```
- Install Dependencies
```bash
npm i
```
```bash
npm i nodemon -g
```
- Run the server
```bash
nodemon ./src/server.ts
```

### Once server is up and running, find the IPv4 of your machine and continue [here](https://github.com/FreeFlowUI/flutter_example) to clone mobile app.

## Consider Following Flutter Widget

```dart
import 'package:flutter/material.dart';

Container(
  padding: const EdgeInsets.all(10),
  margin: const EdgeInsets.all(10),
  decoration: BoxDecoration(
    color: Color(0xFFB9EDBA),
    borderRadius: BorderRadius.circular(10),
  ),
  child: Row(
    mainAxisAlignment: MainAxisAlignment.start,
    children: [
      Container(
        height: 100.0,
        width: 100.0,
        padding: const EdgeInsets.all(8),
        decoration: BoxDecoration(
          color: Color(0xFF5891ED),
          borderRadius: BorderRadius.circular(10),
        ),
      ),
      const SizedBox(width: 20),
      Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: const [
          Text(
            "Hello User",
            style: TextStyle(
              fontWeight: FontWeight.w500, // Adjusted for fontWeight
              fontSize: 20,
            ),
          ),
          Text("Some other value"),
          Text("This is price"),
        ],
      ),
    ],
  ),
);

```

## Building UI components for Flutter in TypeScript

```TypeScript
Container({
        padding: new EdgeInsets({
            l:10,
            t:10,
            r:10,
            b:10,
        }),
        margin: new EdgeInsets({
            l:10,
            t:10,
            r:10,
            b:10,
        }),
        decoration: new BoxDecoration({
            color: new Color({
                value:"0xFFB9EDBA",
            }),
            borderRadius: 10,
        }),
        child: new Row({
            mainAxisAlignment: MainAxisAlignment.start,
            children:[
                new Container({
                    height: 100.0,
                    width: 100.0,
                    padding: new EdgeInsets({
                        l: 8,
                        t: 8,
                        r: 8,
                        b: 8,
                    }),
                    decoration: new BoxDecoration({
                        color: new Color({value: "0xFF5891ED"}),
                        borderRadius: 10.0
                    }),
                }),
                new Container({
                    width: 20,
                }),
                new Column({
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children:[
                        new Text({
                            value: "Hello User",
                            textStyle: new TextStyle({
                                fontWeight: 5,
                                fontSize: 20,
                            })
                        }),
                        new Text({
                            value: "Some other value",
                        }),
                        new Text({
                            value: "This is price",
                        }),
                    ]
                })
            ]
        }),
    });
```