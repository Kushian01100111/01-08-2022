function rotateLikeAVortex(matrix) {
  let matrixN = matrix.length
  
  
  for(let x = 0; x < matrixN / 2; x++){
    let count = 0;
    for(let y = x; y < matrixN - x - 1; y++){
      let tem = matrix[x][y]
      
      matrix[x][y] = matrix[y][matrixN - 1 - x]
      
      matrix[y][matrixN- 1 - x] = matrix[matrixN - 1 - x][matrixN - 1 - y]
      
      matrix[matrixN - 1 - x][matrixN - 1 - y] = matrix[matrixN - y - 1][x]
      
      matrix[matrixN - y - 1][x] = tem
      if(x > 0 &&  y === matrixN - x - 2 ){
        y = x - 1
        count++
        if(count === x + 1){
          y = matrixN - x - 1 
        }
      }
    }
  }
  
  return matrix;
}

 // console.log (rotateLikeAVortex([ [ 5, 3, 5, 7, 8, 6, 1 ],
                      [ 5, 8, 6, 7, 8, 7, 4 ],
                      [ 1, 2, 5, 7, 8, 4, 3 ],
                      [ 3, 1, 5, 7, 8, 2, 2 ],
                      [ 3, 1, 5, 7, 8, 2, 2 ],
                      [ 5, 8, 6, 7, 8, 7, 4 ],
//                      [ 1, 2, 5, 7, 8, 4, 3 ] ]))


  console.log (rotateLikeAVortex([ [ 5, 3, 6, 1 ],
                                  [ 5, 8, 7, 4 ],
                                  [ 1, 2, 4, 3 ],
                                  [ 3, 1, 2, 2 ] ]))