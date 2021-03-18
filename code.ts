//This plugin resizes text to fit in its textbox

const nodes: SceneNode[] = figma.currentPage.findAll(node => node.type === "TEXT")


async function loadFont(fontName){
  await figma.loadFontAsync(fontName)
}

nodes.forEach((node =>{
  if (node.type === 'TEXT'){
    loadFont(node.fontName).then(
        ()=>resizeText(node)
      )
  }
}))

function resizeText(node: TextNode){
  const _height = node.height
  node.textAutoResize = "HEIGHT"
  var _currentHeight = node.height
  if (_currentHeight > _height){
    shrinkText(node, _height)
  }
  else{
    growText(node, _height)
  }
  node.textAutoResize = "NONE"
  node.resize(node.width, _height)
}

function shrinkText(node: TextNode,  desiredHeight: number){
  var currentHeight = node.height

  while (currentHeight > desiredHeight){
    if (typeof(node.fontSize) === "number"){
      node.fontSize -= 1
    }
    currentHeight = node.height

  }
}

function growText(node: TextNode, desiredHeight: number){
  var currentHeight = node.height

  while (currentHeight < desiredHeight){
    if (typeof(node.fontSize) === "number"){
      node.fontSize += 1
    }
    currentHeight = node.height
  }
  // fontsize is now one size bigger than limit
  if (typeof(node.fontSize) === "number"){
    node.fontSize -= 1
  }
}

figma.closePlugin();
