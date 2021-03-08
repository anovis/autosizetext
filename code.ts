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
  const _width = node.width
  const _height = node.height
  const _textAutoResize = node.textAutoResize
  node.textAutoResize = "WIDTH_AND_HEIGHT"
  var _currentWidth = node.width
  var _currentHeight = node.height

  if (_currentWidth > _width || _currentHeight > _height){
    shrinkText(node, _width, _height)
  }
  else{
    growText(node, _width, _height)
  }
  node.textAutoResize = _textAutoResize
}

function shrinkText(node: TextNode, desiredWidth: number, desiredHeight: number){
  var currentWidth = node.width
  var currentHeight = node.height

  while (currentWidth > desiredWidth || desiredHeight > currentHeight){
    if (typeof(node.fontSize) === "number"){
      node.fontSize -= 1
    }
    else{
      // non standard font sizes
      break
    }
    currentWidth = node.width
  }
}

function growText(node: TextNode, desiredWidth: number, desiredHeight: number){
  var currentWidth = node.width
  var currentHeight = node.height

  while (currentWidth < desiredWidth && currentHeight < desiredHeight){
    if (typeof(node.fontSize) === "number"){
      node.fontSize += 1
    }
    else{
      // non standard font sizes
      break
    }
    currentWidth = node.width
  }
}

figma.closePlugin();
