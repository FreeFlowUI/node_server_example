import {
  AppBar,
  Color,
  ListView,
  Row,
  Scaffold,
  SizedBox,
  Text,
  BoxDecoration,
  CrossAxisAlignment,
  MainAxisAlignment,
  EdgeInsets,
  Widget,
  TextStyle,
  Container,
} from "freeflow-ui";
import { listViewItem } from "./component/listViewItem";

const listOfThings = [1, 2, 3, 4, 5];
let children: Widget[] = [];

listOfThings.forEach((data) => children.push(listViewItem(`${data}`)));

const sample = new Scaffold({
  appBar: new AppBar({
    child: new Text({
      value: "The Bird Blog",
      textStyle: new TextStyle({
        fontSize: 24,
        fontWeight: 1,
      }),
    }),
  }),
  body: new ListView({
    children,
  }),
});

export default sample;
