import React, {Component, Fragment} from 'react';
import * as go from 'gojs';
 import { ReactDiagram } from 'gojs-react';

class Topology extends Component {

   constructor(...args) {
     super(...args);
   }

    initDiagram() {
      const $ = go.GraphObject.make;
// set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
      const diagram =
        $(go.Diagram,
          {
            'undoManager.isEnabled': true,  // must be set to allow for model change listening
            // 'undoManager.maxHistoryLength': 0,  // uncomment disable undo/redo functionality
            'clickCreatingTool.archetypeNodeData': { text: 'new node', color: 'lightblue' },
            model: $(go.GraphLinksModel,
              {
                linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
              })
          });
            // define a simple Node template
            diagram.nodeTemplate =
              $(go.Node, 'Auto',  // the Shape will go around the TextBlock
                new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
                $(go.Shape, 'RoundedRectangle',
                  { name: 'SHAPE', fill: 'white', strokeWidth: 0 },
                  // Shape.fill is bound to Node.data.color
                  new go.Binding('fill', 'color')),
                $(go.TextBlock,
                  { margin: 8, editable: true },  // some room around the text
                  new go.Binding('text').makeTwoWay()
                )
              );

            return diagram;
    }


    initDiagramTest(){

       let $ = go.GraphObject.make; // for conciseness in defining templates
        // get tooltip text from the object's data
        function tooltipTextConverter(person) {
           let str = "当前设备数据信息";
           return str;
          }
        let tooltiptemplate =
          $("ToolTip", { "Border.fill": "whitesmoke", "Border.stroke": "#00c3dd" },
                 $(go.TextBlock, {
                     font: "normal 12pt Helvetica, normal Arial, sans-serif",
                     wrap: go.TextBlock.WrapFit,
                     margin: 3
                 },new go.Binding("text", "", tooltipTextConverter))
          );
        const myDiagram =
          $(go.Diagram, {
              "undoManager.isEnabled": true,
              "allowCopy": false,
              "allowDelete": false,
              "allowMove": false,
              // "isReadOnly": true, // 只读  禁止节点拖拽
              "draggingTool.dragsTree": true,
              "maxSelectionCount": 1, // users can select only one part at a time
              "commandHandler.deletesTree": false,
              "layout": $(go.TreeLayout, {
                  angle: 90,
                  layerSpacing: 100, // 层级之间的距离
                  nodeSpacing: 100,  // 同层节点之间的距离
                  arrangement: go.TreeLayout.ArrangementFixedRoots
              }),

          });

        let bluegrad = $(go.Brush, "Linear", {  0: "#C4ECFF",  1: "#70D4FF"  });
        let greengrad = $(go.Brush, "Linear", {  0: "#B1E2A5",   1: "#7AE060" });
         // 右键菜单样式
        let styleTextBlock = {
              margin: 3,
              width: 70,
              stroke: "#000014",
              textAlign: 'center',
              font: "normal 14px sans-serif"
              // background:"rgb(255, 0, 0)"
        };

        myDiagram.nodeTemplate =
        $(go.Node, "Vertical", {
                locationSpot: go.Spot.Top,
                isShadowed: true,
                shadowBlur: 1,
                shadowOffset: new go.Point(0, 1),
                shadowColor: "rgba(0, 0, 0, .14)",
                selectable: false,
                toolTip: tooltiptemplate,
                contextMenu:
                    $("ContextMenu",
                        $("ContextMenuButton", $(go.TextBlock, styleTextBlock, "遥测数据"), {
                            click: function (e, obj) {
                                window.alert('遥测数据');
                            }
                        }),
                        $("ContextMenuButton", $(go.TextBlock, styleTextBlock, "遥信数据"), {
                            click: function (e, obj) {
                                window.alert('遥信数据');
                            }
                        }), $("ContextMenuButton", $(go.TextBlock, styleTextBlock, "用电分析"), {
                            click: function (e, obj) {
                                window.alert('用电分析');
                            }
                        }), $("ContextMenuButton", $(go.TextBlock, styleTextBlock, "电能质量"), {
                            click: function (e, obj) {
                                window.alert('电能质量');
                            }
                        })
                    )
                // selectionObjectName: "BODY"
            },
            // the main "BODY" consists of a RoundedRectangle surrounding nested Panels
            $(go.Panel, "Vertical", {
                    name: "BODY"
                },
                // 图片控制
                $(go.Picture,  // flag image, only visible if a nation is specified
                    {margin: new go.Margin(0, 0, 0, 0), visible: true, desiredSize: new go.Size(30, 30)},
                    new go.Binding("source", 'images')
                ),
                $(go.Panel, "Horizontal", { margin: 5  },
                    // the title 文本控制
                    $(go.TextBlock, {
                            stretch: go.GraphObject.Horizontal,
                            font: "bold 12pt Verdana, sans-serif",
                            stroke: "rgb(163, 202, 222)"
                        },
                        new go.Binding("text", "question")
                    )
                ) // end outer Vertical Panel
            ), // end "BODY"  Auto Panel
            $(go.Panel, // this is underneath the "BODY"
                { height: 20 }, // always this height, even if the TreeExpanderButton is not visible
                $("TreeExpanderButton")
            )
        );

        myDiagram.linkTemplate =
          $(go.Link, go.Link.Orthogonal, {
                  deletable: false,
                  corner: 0
              },
              $(go.Shape,
                  new go.Binding("stroke", "color"),
                  new go.Binding("strokeWidth", "width"),
              ),
              $(go.TextBlock, go.Link.OrientUpright, {
                      background: "rgb(163, 202, 222, 1)",
                      font: "10pt Verdana, sans-serif",
                      visible: false, // unless the binding sets it to true for a non-empty string
                      segmentIndex: -2,
                      stroke: "#ff0000",
                      segmentOrientation: go.Link.None
                  },
                  new go.Binding("text", "phase"),
                  new go.Binding("visible", "phase", function(a) {
                      return (a ? true : false);
                  })
              )
          );


          let nodeDataArray = [{
                key: 1,
                question: "设备",
                images:"../../assets/images/Root_dev.png"
            },
                {
                    key: 2,
                    question: "设备",
                    images:"../../assets/images/Root_dev.png",

                },
                {
                    key: 3,
                    images:"../../assets/images/Root_dev.png",
                    question: "设备"
                },
                {
                    key: 4,
                    images:"../../assets/images/Root_dev.png",
                    question: "设备"
                },
                {
                    key: 5,
                    images:"../../assets/images/Root_dev.png",
                    question: "设备"
                },
                {
                    key: 6,
                    images:"../../assets/images/Root_dev.png",
                    question: "设备"
                },
                {
                    key: 7,
                    images:"../../assets/images/Root_dev.png",
                    question: "设备"
                },
                {
                    key: 8,
                    images:"../../assets/images/Root_dev.png",
                    question: "设备"
                },
                {
                    key: 9,
                    images:"../../assets/images/Root_dev.png",
                    question: "设备"
                },
                {
                    key: 10,
                    images:"../../assets/images/Root_dev.png",
                    question: "设备"
                },
                {
                    key: 11,
                    images:"../../assets/images/Root_dev.png",
                    question: "设备"
                },
                {
                    key: 12,
                    images:"../../assets/images/Root_dev.png",
                    question: "设备"

                },
                {
                    key: 13,
                    category: "Terminal",
                    images:"../../assets/images/Root_dev.png",
                    question: "设备"
                },
                {
                    key: 14,
                    category: "Terminal",
                    images:"../../assets/images/Root_dev.png",
                    question: "设备"
                },
                {
                    key: 15,
                    category: "Terminal",
                    images:"../../assets/images/Root_dev.png",
                    question: "设备"
                },
                {
                    key: 16,
                    category: "Terminal",
                    images:"../../assets/images/Root_dev.png",
                    question: "设备"
                },
                {
                    key: 17,
                    category: "Terminal",
                    images:"../../assets/images/Root_dev.png",
                    question: "设备"
                },
                {
                    key: 18,
                    category: "Terminal",
                    images:"../../assets/images/Root_dev.png",
                    question: "设备"
                },
                {
                    key: 19,
                    images:"../../assets/images/Root_dev.png",
                    category: "Terminal",
                    question: "设备"
                },
                {
                    key: 20,
                    category: "Terminal",
                    question: "设备",
                    images:"../../assets/images/Root_dev.png"
                }
            ];
            let linkDataArray = [{
                from: 1,
                to: 2,
                color:"black",
                width: 2,
                // answer: 20,
                answer: "A相",
                phase:"A相"
            },
                {
                    from: 1,
                    to: 3,
                    color:"red",
                    width: 2,
                    answer: 2,
                    phase:"A相"
                },
                {
                    from: 1,
                    to: 4,
                    color:"gray",
                    width: 2,
                    answer: "C相",
                    phase:"A相"
                },
                {
                    from: 2,
                    to: 5,
                    color:"rgb(255,145,35)",
                    width: 2,
                    answer: 1,
                    phase:"A相"
                },
                {
                    from: 2,
                    to: 6,
                    color:"rgb(135,145,35)",
                    width: 2,
                    answer: 2,
                    phase:"B相"
                },
                {
                    from: 2,
                    to: 7,
                    color:"rgb(255,145,135)",
                    width: 2,
                    answer: 3,
                    phase:"B相"
                },
                {
                    from: 3,
                    to: 8,
                    color:"rgb(78,145,35)",
                    width: 2,
                    answer: 1,
                    phase:"B相"
                },
                {
                    from: 3,
                    to: 9,
                    color:"rgb(255,25,35)",
                    width: 2,
                    answer: 2,
                    phase:"B相"
                },
                {
                    from: 3,
                    to: 10,
                    color:"rgb(255,36,35)",
                    width: 2,
                    answer: 3,
                    phase:"B相"
                },
                {
                    from: 7,
                    to: 11,
                    color:"rgb(25,78,35)",
                    width: 2,
                    answer: 1,
                    phase:"B相"
                },
                {
                    from: 7,
                    to: 12,
                    color:"rgb(255,0,255)",
                    width: 2,
                    answer: 2,
                    phase:"B相"
                },
                {
                    from: 5,
                    color:"rgb(255,145,35)",
                    width: 2,
                    to: 13,
                    phase:"B相"
                },
                {
                    from: 6,
                    color:"rgb(255,145,35)",
                    width: 2,
                    to: 14,
                    phase:"B相"
                },
                {
                    from: 11,
                    color:"rgb(255,145,35)",
                    width: 2,
                    to: 15,
                    phase:"B相"
                },
                {
                    from: 12,
                    color:"rgb(255,145,35)",
                    width: 2,
                    to: 16,
                    phase:"B相"
                },
                {
                    from: 8,
                    color:"rgb(255,145,35)",
                    width: 2,
                    to: 17,
                    phase:"B相"
                },
                {
                    from: 9,
                    color:"rgb(255,78,35)",
                    width: 2,
                    to: 18,
                    phase:"B相"
                },
                {
                    from: 10,
                    color:"rgb(255,5,255)",
                    width: 2,
                    to: 19,
                    phase:"B相"
                },
                {
                    from: 4,
                    color:"rgb(255,255,35)",
                    width: 2,
                    to: 20,
                    phase:"B相"
                }
            ];
        // create the Model with the above data, and assign to the Diagram
        myDiagram.model = $(go.GraphLinksModel, {
            copiesArrays: true,
            copiesArrayObjects: true,
            nodeDataArray: nodeDataArray,
            linkDataArray: linkDataArray
        });

        return myDiagram;

    // 函数结束标志
    }

    render() {
       return (
            <Fragment>
               <section className="body_wrapper">
               <ReactDiagram
                      initDiagram={this.initDiagramTest}
                      divClassName='diagram-component'
                    />
               </section>
            </Fragment>
       );
    }
}

export default Topology;
