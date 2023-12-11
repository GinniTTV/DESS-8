const cssFiles = ["./style/estilos.css", "./style/estilos-urbano.css", "./style/estilos-futuro.css"]
let activeFile = 0;
const links = document.getElementsByTagName("link")
function onClick() {
    activeFile++
    if (activeFile > 2) {
        activeFile = 0
    }
    links[0].href = cssFiles[activeFile]
    console.log(links[0].href)
}