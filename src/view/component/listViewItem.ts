import { Row, Column, Container, Widget, BoxDecoration, MainAxisAlignment, CrossAxisAlignment} from "freeflow-ui";
import { Color } from "freeflow-ui";
import BoxFit from "freeflow-ui";
import {EdgeInsets} from "freeflow-ui";
import {Text, TextStyle} from "freeflow-ui";


export const listViewItem = (value:String): Widget => {
    return new Container({
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
                    // child: new Image({
                    //     url:`https://picsum.photos/200/200/?id=${value}`,
                    //     fit: BoxFit.cover,
                    // }),
                }),
                new Container({
                    width: 20,
                }),
                new Column({
                    // mainAxisAlignment: MainAxisAlignment.start
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
}