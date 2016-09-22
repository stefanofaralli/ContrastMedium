function setState11() {
var stri = '<table><tr><td valign="top"><table><tr><th colspan="2">KB</th></tr><tr><th>Node</th><th>Weight</th></tr>';
stri =stri+ '<tr><td>R</td><td>0.3689914166883854</td></tr>';
stri =stri+ '<tr><td>l1</td><td>0.17296472657268067</td></tr>';
stri =stri+ '<tr><td>g1</td><td>0.16215443116188813</td></tr>';
stri =stri+ '<tr><td>l2</td><td>0.08107721558094406</td></tr>';
stri =stri+ '<tr><td>g2</td><td>0.07600988960713506</td></tr>';
stri =stri+ '<tr><td>l3</td><td>0.03800494480356753</td></tr>';
stri =stri+ '<tr><td>g3</td><td>0.03562963575334456</td></tr>';
stri =stri+ '<tr><td>l4</td><td>0.01781481787667228</td></tr>';
stri =stri+ '<tr><td>g4</td><td>0.016701391759380263</td></tr>';
stri =stri+ '<tr><td>l5</td><td>0.008350695879690131</td></tr>';
stri =stri+ '<tr><td>g5</td><td>0.007828777387209497</td></tr>';
stri =stri+ '<tr><td>l6</td><td>0.003914388693604749</td></tr>';
stri =stri+ '<tr><td>g6</td><td>0.003669739400254452</td></tr>';
stri =stri+ '<tr><td>l7</td><td>0.001834869700127226</td></tr>';
stri =stri+ '<tr><td>g7</td><td>0.0017201903438692743</td></tr>';
stri =stri+ '<tr><td>l8</td><td>0.0017201903438692743</td></tr>';
stri =stri+ '<tr><td>g8</td><td>0.0016126784473774448</td></tr>';
stri = stri+'</table></td><td valign="top">';
stri = stri+'<table><tr><th colspan="2">PCZ</th></tr><tr><th>Node</th><th>Weight</th></tr>';
stri =stri+'<tr><td>N_R</td><td>0.0</td></tr>';
stri =stri+'<tr><td>N_L</td><td>0.0</td></tr>';
stri =stri+'<tr><td>N_M</td><td>0.0</td></tr>';
stri =stri+'<tr><td>N_N</td><td>0.0</td></tr>';
stri =stri+'<tr><td>N_O</td><td>0.0</td></tr>';
stri =stri+'<tr><td>N_G</td><td>0.0</td></tr>';
stri = stri+'</table></td><td colspan="2" valign="top"><table><tr><th>Pruned Graph</th></tr><tr><th>Resulting edges</th></tr>';
stri = stri+'<tr><td>N_O->N_G</td></tr>';
stri = stri+'<tr><td>N_L->N_M</td></tr>';
stri = stri+'<tr><td>N_O->N_L</td></tr>';
stri = stri+'<tr><td>N_N->N_O</td></tr>';
stri = stri+'<tr><th>RANDOMLY GENERATED</th></tr>';
stri = stri+'</table></td><td> <div id="myDiagramDiv" style="border: solid 1px black; width:800px; height:400px"></div></td></tr></table>';
var temp = {
nodes: [
{ data: { id: 'R',color:'#ff2800', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'l1',color:'#ff2800', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'g1',color:'#ff2800', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'l2',color:'#ff2800', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'g2',color:'#ff2800', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'l3',color:'#912800', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'g3',color:'#882800', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'l4',color:'#442800', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'g4',color:'#3f2800', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'l5',color:'#1f2800', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'g5',color:'#1d2800', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'l6',color:'#0e2873', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'g6',color:'#0e2873', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'l7',color:'#0728b9', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'g7',color:'#0628c3', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'l8',color:'#0628c3', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'g8',color:'#0628c3', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'N_R',color:'#0028ff', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'N_L',color:'#0028ff', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'N_M',color:'#0028ff', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'N_N',color:'#0028ff', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'N_O',color:'#0028ff', bc: '#0000FF', bw: '0' } }
,{ data: { id: 'N_G',color:'#0028ff', bc: '#0000FF', bw: '0' } }

],
edges: [
{ data: { id: 'R---l1', style: 'solid', opacity : '0.7', weight:'2', source: 'R', target: 'l1' , color: '#000000' } }
,{ data: { id: 'l1---g1', style: 'solid', opacity : '0.7', weight:'2', source: 'l1', target: 'g1' , color: '#000000' } }
,{ data: { id: 'l1---l2', style: 'solid', opacity : '0.7', weight:'2', source: 'l1', target: 'l2' , color: '#000000' } }
,{ data: { id: 'l2---g2', style: 'solid', opacity : '0.7', weight:'2', source: 'l2', target: 'g2' , color: '#000000' } }
,{ data: { id: 'l2---l3', style: 'solid', opacity : '0.7', weight:'2', source: 'l2', target: 'l3' , color: '#000000' } }
,{ data: { id: 'l3---g3', style: 'solid', opacity : '0.7', weight:'2', source: 'l3', target: 'g3' , color: '#000000' } }
,{ data: { id: 'l3---l4', style: 'solid', opacity : '0.7', weight:'2', source: 'l3', target: 'l4' , color: '#000000' } }
,{ data: { id: 'l4---g4', style: 'solid', opacity : '0.7', weight:'2', source: 'l4', target: 'g4' , color: '#000000' } }
,{ data: { id: 'l4---l5', style: 'solid', opacity : '0.7', weight:'2', source: 'l4', target: 'l5' , color: '#000000' } }
,{ data: { id: 'l5---g5', style: 'solid', opacity : '0.7', weight:'2', source: 'l5', target: 'g5' , color: '#000000' } }
,{ data: { id: 'l5---l6', style: 'solid', opacity : '0.7', weight:'2', source: 'l5', target: 'l6' , color: '#000000' } }
,{ data: { id: 'l6---g6', style: 'solid', opacity : '0.7', weight:'2', source: 'l6', target: 'g6' , color: '#000000' } }
,{ data: { id: 'l6---l7', style: 'solid', opacity : '0.7', weight:'2', source: 'l6', target: 'l7' , color: '#000000' } }
,{ data: { id: 'l7---g7', style: 'solid', opacity : '0.7', weight:'2', source: 'l7', target: 'g7' , color: '#000000' } }
,{ data: { id: 'l7---l8', style: 'solid', opacity : '0.7', weight:'2', source: 'l7', target: 'l8' , color: '#000000' } }
,{ data: { id: 'l8---g8', style: 'solid', opacity : '0.7', weight:'2', source: 'l8', target: 'g8' , color: '#000000' } }
,{ data: { id: 'N_R---N_L', style: 'solid', opacity : '0.7', weight:'2', source: 'N_R', target: 'N_L' , color: '#000000' } }
,{ data: { id: 'N_L---N_M', style: 'solid', opacity : '0.7', weight:'2', source: 'N_L', target: 'N_M' , color: '#000000' } }
,{ data: { id: 'N_M---N_N', style: 'solid', opacity : '0.7', weight:'2', source: 'N_M', target: 'N_N' , color: '#000000' } }
,{ data: { id: 'N_N---N_O', style: 'solid', opacity : '0.7', weight:'2', source: 'N_N', target: 'N_O' , color: '#000000' } }
,{ data: { id: 'N_O---N_G', style: 'solid', opacity : '0.7', weight:'2', source: 'N_O', target: 'N_G' , color: '#000000' } }
,{ data: { id: 'N_O---N_L', style: 'solid', opacity : '0.7', weight:'2', source: 'N_O', target: 'N_L' , color: '#000000' } }

]
};
transitate(temp,mygraph9);
document.getElementById('webpanel').innerHTML = stri;
init();
}
function init() {
var $ = go.GraphObject.make;  // for conciseness in defining templates
myDiagram = $(go.Diagram, "myDiagramDiv",  // create a Diagram for the DIV HTML element
   {
                    initialContentAlignment: go.Spot.Center,  // center the content
         "undoManager.isEnabled": true,  // enable undo & redo
         layout: $(go.TreeLayout, { nodeSpacing: 1, comparer: go.LayoutVertex.smartComparer })
                  });
myDiagram.nodeTemplate =
  $(go.Node, "Auto",  // the Shape will go around the TextBlock
      $(go.Shape, "RoundedRectangle", { strokeWidth: 0},
// Shape.fill is bound to Node.data.color
new go.Binding("fill", "color")),
$(go.TextBlock,
{ margin: 8 },  // some room around the text
new go.Binding("text", "key"))
);
myDiagram.model = new go.GraphLinksModel(
[
{ key: "N_G", color: "lightblue" },
{ key: "N_R", color: "lightblue" },
{ key: "N_M", color: "lightblue" },
{ key: "N_L", color: "lightblue" },
{ key: "N_O", color: "lightblue" },
{ key: "N_N", color: "lightblue" },
],
[
{ from: "N_O", to: "N_G" },
{ from: "N_L", to: "N_M" },
{ from: "N_O", to: "N_L" },
{ from: "N_N", to: "N_O" },
 ]);
}