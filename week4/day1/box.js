function printBox(x, y){
    xEdge = "-"
    yEdge = "|"
    space = " "
    console.log(xEdge.repeat(x))
    console.log(yEdge, space.repeat(y-4), yEdge)
    console.log(xEdge.repeat(x))
}

printBox(16, 16)