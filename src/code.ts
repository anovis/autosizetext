//This plugin resizes text to fit in its textbox

// show form
figma.showUI(__html__, { width: 400, height: 290 });

figma.ui.onmessage = msg => {
  if (msg.type === 'page') {
    const nodes: SceneNode[] = figma.currentPage.findAll(node => node.type === "TEXT")
    nodes.forEach((node =>{
      if (node.type === 'TEXT'){
        loadFont(node.fontName).then(
            ()=>resizeText(node)
          )
      }
    }))
  }
  if (msg.type === 'selection'){
    const nodes = figma.currentPage.selection
    nodes.forEach((node =>{
      if (node.type === 'TEXT'){
        loadFont(node.fontName).then(
            ()=>resizeText(node)
          )
      }
    }))
  }
  if (msg.type === 'text')
  {
    const tIds = msg.textIds.split(',')
    const nodes: SceneNode[] = figma.currentPage.findAll(node => node.type === "TEXT" && tIds.includes(node.name))
    nodes.forEach((node =>{
      if (node.type === 'TEXT'){
        loadFont(node.fontName).then(
            ()=>resizeText(node)
          )
      }
    }))
  }


  figma.closePlugin()
}



async function loadFont(fontName){
  await figma.loadFontAsync(fontName)
}



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
