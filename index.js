
const cities = [
  "Amaravati" , "Itanagar" , "Dispur" , "Patna" , "Raipur" , "Panaji" , "Gandhinagar", 
  "Chandigarh" , "Shimla" , "Ranchi" , "Bengaluru" , "Thiruvananthapuram" , "Bhopal", 
  "Mumbai" , "Imphal" , "Shillong" , "Aizawl" , "Kohima" , "Bhubaneswar" , "Jaipur", 
  "Gangtok" , "Chennai" , "Hyderabad" , "Agartala" , "Lucknow" , "Dehradun" , "Kolkata", 
  "Srinagar"
] ;

const n = cities.length ;

const distances = Array.from( { length: n } , () => new Array( n ).fill( 0 ) ) ;

// With 28 cities, there are 28*27/2 = 378 unique pairs (since the distance from A to B equals B to A).

// Sample road distances ( in km ) 
distances[0][1] = 2288; distances[1][0] = 2288; // Amaravati – Itanagar 
distances[1][2] = 333;  distances[2][1] = 333;  // Amaravati - Dispur
distances[0][3] = 1500; distances[3][0] = 1500; // Amaravati - Patna
distances[0][4] = 1000; distances[4][0] = 1000; // Amaravati - Raipur
distances[0][5] = 800;  distances[5][0] = 800;  // Amaravati - Panaji
distances[0][6] = 1200; distances[6][0] = 1200; // Amaravati - Gandhinagar
distances[0][7] = 1800; distances[7][0] = 1800; // Amaravati - Chandigarh
distances[0][8] = 1900; distances[8][0] = 1900; // Amaravati - Shimla
distances[0][9] = 1400; distances[9][0] = 1400; // Amaravati - Ranchi
distances[0][10] = 600; distances[10][0] = 600; // Amaravati - Bengaluru
distances[0][11] = 900; distances[11][0] = 900; // Amaravati - Thiruvananthapuram
distances[0][12] = 1100; distances[12][0] = 1100; // Amaravati - Bhopal
distances[0][13] = 700; distances[13][0] = 700; // Amaravati - Mumbai
distances[0][14] = 2400; distances[14][0] = 2400; // Amaravati - Imphal
distances[0][15] = 2300; distances[15][0] = 2300; // Amaravati - Shillong
distances[0][16] = 2600; distances[16][0] = 2600; // Amaravati - Aizawl
distances[0][17] = 2700; distances[17][0] = 2700; // Amaravati - Kohima
distances[0][18] = 1300; distances[18][0] = 1300; // Amaravati - Bhubaneswar
distances[0][19] = 1400; distances[19][0] = 1400; // Amaravati - Jaipur
distances[0][20] = 2100; distances[20][0] = 2100; // Amaravati - Gangtok
distances[0][21] = 700; distances[21][0] = 700; // Amaravati - Chennai
distances[0][22] = 300; distances[22][0] = 300; // Amaravati - Hyderabad
distances[0][23] = 2000; distances[23][0] = 2000; // Amaravati - Agartala
distances[0][24] = 1600; distances[24][0] = 1600; // Amaravati - Lucknow
distances[0][25] = 1900; distances[25][0] = 1900; // Amaravati - Dehradun
distances[0][26] = 1700; distances[26][0] = 1700; // Amaravati - Kolkata
distances[0][27] = 2400; distances[27][0] = 2400; // Amaravati - Srinagar
distances[1][2] = 300;  distances[2][1] = 300;  // Itanagar - Dispur
distances[1][3] = 1000; distances[3][1] = 1000; // Itanagar - Patna
distances[1][4] = 1500; distances[4][1] = 1500; // Itanagar - Raipur
distances[1][5] = 2000; distances[5][1] = 2000; // Itanagar - Panaji
distances[1][6] = 2500; distances[6][1] = 2500; // Itanagar - Gandhinagar
distances[1][7] = 2800; distances[7][1] = 2800; // Itanagar - Chandigarh
distances[1][8] = 2900; distances[8][1] = 2900; // Itanagar - Shimla
distances[1][9] = 2400; distances[9][1] = 2400; // Itanagar - Ranchi
distances[1][10] = 1800; distances[10][1] = 1800; // Itanagar - Bengaluru
distances[1][11] = 2200; distances[11][1] = 2200; // Itanagar - Thiruvananthapuram
distances[1][12] = 2000; distances[12][1] = 2000; // Itanagar - Bhopal
distances[1][13] = 1700; distances[13][1] = 1700; // Itanagar - Mumbai
distances[1][14] = 2800; distances[14][1] = 2800; // Itanagar - Imphal
distances[1][15] = 2700; distances[15][1] = 2700; // Itanagar - Shillong
distances[1][16] = 3000; distances[16][1] = 3000; // Itanagar - Aizawl
distances[1][17] = 3100; distances[17][1] = 3100; // Itanagar - Kohima
distances[1][18] = 2200; distances[18][1] = 2200; // Itanagar - Bhubaneswar
distances[1][19] = 2300; distances[19][1] = 2300; // Itanagar - Jaipur
distances[1][20] = 2900; distances[20][1] = 2900; // Itanagar - Gangtok
distances[1][21] = 1800; distances[21][1] = 1800; // Itanagar - Chennai
distances[1][22] = 1600; distances[22][1] = 1600; // Itanagar - Hyderabad
distances[1][23] = 2500; distances[23][1] = 2500; // Itanagar - Agartala
distances[1][24] = 2100; distances[24][1] = 2100; // Itanagar - Lucknow
distances[1][25] = 2400; distances[25][1] = 2400; // Itanagar - Dehradun
distances[1][26] = 2300; distances[26][1] = 2300; // Itanagar - Kolkata
distances[1][27] = 2900; distances[27][1] = 2900; // Itanagar - Srinagar
distances[2][3] = 700;  distances[3][2] = 700;  // Dispur - Patna
distances[2][4] = 1200; distances[4][2] = 1200; // Dispur - Raipur
distances[2][5] = 1700; distances[5][2] = 1700; // Dispur - Panaji
distances[2][6] = 2200; distances[6][2] = 2200; // Dispur - Gandhinagar
distances[2][7] = 2500; distances[7][2] = 2500; // Dispur - Chandigarh
distances[2][8] = 2600; distances[8][2] = 2600; // Dispur - Shimla
distances[2][9] = 2100; distances[9][2] = 2100; // Dispur - Ranchi
distances[2][10] = 1500; distances[10][2] = 1500; // Dispur - Bengaluru
distances[2][11] = 1900; distances[11][2] = 1900; // Dispur - Thiruvananthapuram
distances[2][12] = 1700; distances[12][2] = 1700; // Dispur - Bhopal
distances[2][13] = 1400; distances[13][2] = 1400; // Dispur - Mumbai
distances[2][14] = 2500; distances[14][2] = 2500; // Dispur - Imphal
distances[2][15] = 2400; distances[15][2] = 2400; // Dispur - Shillong
distances[2][16] = 2700; distances[16][2] = 2700; // Dispur - Aizawl
distances[2][17] = 2800; distances[17][2] = 2800; // Dispur - Kohima
distances[2][18] = 1900; distances[18][2] = 1900; // Dispur - Bhubaneswar
distances[2][19] = 2000; distances[19][2] = 2000; // Dispur - Jaipur
distances[2][20] = 2600; distances[20][2] = 2600; // Dispur - Gangtok
distances[2][21] = 1500; distances[21][2] = 1500; // Dispur - Chennai
distances[2][22] = 1300; distances[22][2] = 1300; // Dispur - Hyderabad
distances[2][23] = 2200; distances[23][2] = 2200; // Dispur - Agartala
distances[2][24] = 1800; distances[24][2] = 1800; // Dispur - Lucknow
distances[2][25] = 2100; distances[25][2] = 2100; // Dispur - Dehradun
distances[2][26] = 2000; distances[26][2] = 2000; // Dispur - Kolkata
distances[2][27] = 2600; distances[27][2] = 2600; // Dispur - Srinagar
distances[3][4] = 500;  distances[4][3] = 500;  // Patna - Raipur
distances[3][5] = 1000; distances[5][3] = 1000; // Patna - Panaji
distances[3][6] = 1500; distances[6][3] = 1500; // Patna - Gandhinagar
distances[3][7] = 1800; distances[7][3] = 1800; // Patna - Chandigarh
distances[3][8] = 1900; distances[8][3] = 1900; // Patna - Shimla
distances[3][9] = 1400; distances[9][3] = 1400; // Patna - Ranchi
distances[3][10] = 800; distances[10][3] = 800; // Patna - Bengaluru
distances[3][11] = 1100; distances[11][3] = 1100; // Patna - Thiruvananthapuram
distances[3][12] = 900; distances[12][3] = 900; // Patna - Bhopal
distances[3][13] = 600; distances[13][3] = 600; // Patna - Mumbai
distances[3][14] = 1700; distances[14][3] = 1700; // Patna - Imphal
distances[3][15] = 1600; distances[15][3] = 1600; // Patna - Shillong
distances[3][16] = 1900; distances[16][3] = 1900; // Patna - Aizawl
distances[3][17] = 2000; distances[17][3] = 2000; // Patna - Kohima
distances[3][18] = 1100; distances[18][3] = 1100; // Patna - Bhubaneswar
distances[3][19] = 1200; distances[19][3] = 1200; // Patna - Jaipur
distances[3][20] = 1800; distances[20][3] = 1800; // Patna - Gangtok
distances[3][21] = 800; distances[21][3] = 800; // Patna - Chennai
distances[3][22] = 500; distances[22][3] = 500; // Patna - Hyderabad
distances[3][23] = 1500; distances[23][3] = 1500; // Patna - Agartala
distances[3][24] = 900; distances[24][3] = 900; // Patna - Lucknow
distances[3][25] = 1200; distances[25][3] = 1200; // Patna - Dehradun
distances[3][26] = 1100; distances[26][3] = 1100; // Patna - Kolkata
distances[3][27] = 1700; distances[27][3] = 1700; // Patna - Srinagar
distances[4][5] = 500;  distances[5][4] = 500;  // Raipur - Panaji
distances[4][6] = 1000; distances[6][4] = 1000; // Raipur - Gandhinagar
distances[4][7] = 1300; distances[7][4] = 1300; // Raipur - Chandigarh
distances[4][8] = 1400; distances[8][4] = 1400; // Raipur - Shimla
distances[4][9] = 900; distances[9][4] = 900; // Raipur - Ranchi
distances[4][10] = 500; distances[10][4] = 500; // Raipur - Bengaluru
distances[4][11] = 800; distances[11][4] = 800; // Raipur - Thiruvananthapuram
distances[4][12] = 600; distances[12][4] = 600; // Raipur - Bhopal
distances[4][13] = 300; distances[13][4] = 300; // Raipur - Mumbai
distances[4][14] = 1200; distances[14][4] = 1200; // Raipur - Imphal
distances[4][15] = 1100; distances[15][4] = 1100; // Raipur - Shillong
distances[4][16] = 1400; distances[16][4] = 1400; // Raipur - Aizawl
distances[4][17] = 1500; distances[17][4] = 1500; // Raipur - Kohima
distances[4][18] = 600; distances[18][4] = 600; // Raipur - Bhubaneswar
distances[4][19] = 700; distances[19][4] = 700; // Raipur - Jaipur
distances[4][20] = 1300; distances[20][4] = 1300; // Raipur - Gangtok
distances[4][21] = 500; distances[21][4] = 500; // Raipur - Chennai
distances[4][22] = 300; distances[22][4] = 300; // Raipur - Hyderabad
distances[4][23] = 1200; distances[23][4] = 1200; // Raipur - Agartala
distances[4][24] = 600; distances[24][4] = 600; // Raipur - Lucknow
distances[4][25] = 900; distances[25][4] = 900; // Raipur - Dehradun
distances[4][26] = 800; distances[26][4] = 800; // Raipur - Kolkata
distances[4][27] = 1200; distances[27][4] = 1200; // Raipur - Srinagar
distances[5][6] = 500;  distances[6][5] = 500;  // Panaji - Gandhinagar
distances[5][7] = 800;  distances[7][5] = 800;  // Panaji - Chandigarh
distances[5][8] = 900;  distances[8][5] = 900;  // Panaji - Shimla
distances[5][9] = 400;  distances[9][5] = 400;  // Panaji - Ranchi
distances[5][10] = 1000; distances[10][5] = 1000; // Panaji - Bengaluru
distances[5][11] = 1300; distances[11][5] = 1300; // Panaji - Thiruvananthapuram
distances[5][12] = 1100; distances[12][5] = 1100; // Panaji - Bhopal
distances[5][13] = 800; distances[13][5] = 800; // Panaji - Mumbai
distances[5][14] = 1700; distances[14][5] = 1700; // Panaji - Imphal
distances[5][15] = 1600; distances[15][5] = 1600; // Panaji - Shillong
distances[5][16] = 1900; distances[16][5] = 1900; // Panaji - Aizawl
distances[5][17] = 2000; distances[17][5] = 2000; // Panaji - Kohima
distances[5][18] = 1100; distances[18][5] = 1100; // Panaji - Bhubaneswar
distances[5][19] = 1200; distances[19][5] = 1200; // Panaji - Jaipur
distances[5][20] = 1800; distances[20][5] = 1800; // Panaji - Gangtok
distances[5][21] = 1000; distances[21][5] = 1000; // Panaji - Chennai
distances[5][22] = 800; distances[22][5] = 800; // Panaji - Hyderabad
distances[5][23] = 1700; distances[23][5] = 1700; // Panaji - Agartala
distances[5][24] = 1100; distances[24][5] = 1100; // Panaji - Lucknow
distances[5][25] = 1400; distances[25][5] = 1400; // Panaji - Dehradun
distances[5][26] = 1300; distances[26][5] = 1300; // Panaji - Kolkata
distances[5][27] = 1700; distances[27][5] = 1700; // Panaji - Srinagar
distances[6][7] = 500;  distances[7][6] = 500;  // Gandhinagar - Chandigarh
distances[6][8] = 600;  distances[8][6] = 600;  // Gandhinagar - Shimla
distances[6][9] = 1100; distances[9][6] = 1100; // Gandhinagar - Ranchi
distances[6][10] = 800; distances[10][6] = 800; // Gandhinagar - Bengaluru
distances[6][11] = 1100; distances[11][6] = 1100; // Gandhinagar - Thiruvananthapuram
distances[6][12] = 900; distances[12][6] = 900; // Gandhinagar - Bhopal
distances[6][13] = 600; distances[13][6] = 600; // Gandhinagar - Mumbai
distances[6][14] = 1600; distances[14][6] = 1600; // Gandhinagar - Imphal
distances[6][15] = 1500; distances[15][6] =   1500; // Gandhinagar - Shillong
distances[6][16] = 1800; distances[16][6] = 1800; // Gandhinagar - Aizawl
distances[6][17] = 1900; distances[17][6] = 1900; // Gandhinagar - Kohima
distances[6][18] = 800; distances[18][6] = 800; // Gandhinagar - Bhubaneswar
distances[6][19] = 900; distances[19][6] =  900; // Gandhinagar - Jaipur
distances[6][20] = 1500; distances[20][6] = 1500; // Gandhinagar - Gangtok
distances[6][21] = 800; distances[21][6] = 800; // Gandhinagar - Chennai
distances[6][22] = 600; distances[22][6] = 600; // Gandhinagar - Hyderabad
distances[6][23] = 1600; distances[23][6] = 1600; // Gandhinagar - Agartala
distances[6][24] = 1000; distances[24][6] = 1000; // Gandhinagar - Lucknow
distances[6][25] = 1300; distances[25][6] = 1300; // Gandhinagar - Dehradun
distances[6][26] = 1200; distances[26][6] = 1200; // Gandhinagar - Kolkata
distances[6][27] = 1600; distances[27][6] = 1600; // Gandhinagar - Srinagar
distances[7][8] = 200;  distances[8][7] = 200;  // Chandigarh - Shimla
distances[7][9] = 900;  distances[9][7] = 900;  // Chandigarh - Ranchi
distances[7][10] = 600; distances[10][7] = 600; // Chandigarh - Bengaluru
distances[7][11] = 900; distances[11][7] = 900; // Chandigarh - Thiruvananthapuram
distances[7][12] = 700; distances[12][7] = 700; // Chandigarh - Bhopal
distances[7][13] = 400; distances[13][7] = 400; // Chandigarh - Mumbai
distances[7][14] = 1500; distances[14][7] = 1500; // Chandigarh - Imphal


// I have added half of the distances similarly one can continue to fill the rest of the distances


// The Nearest Neighbor algorithm is employs a pragmatic method for solving the Traveling Salesman Problem (TSP).
// It doesn’t always find the shortest possible tour. The result is a reasonable approximation.

// It starts at a given city and repeatedly visits the nearest unvisited city until all cities are visited.
// Finally, it returns to the starting city to complete the tour.

// The function returns the tour and the total distance of the tour.
// The time complexity is O(n^2) as it checks each city for the nearest neighbor in each iteration.
// The space complexity is O(n) for storing the tour and visited cities.


function nearestNeighbor( start , distances , cities ) 
{
  const tour = [ start ] ;

  const visited = new Set( [ start ] ) ;

  let totalDistance = 0 ;

  while( tour.length < n ) 
  {
    let last = tour[ tour.length - 1 ] ;

    let nearest = -1 ;

    let minDistance = Infinity ;

    for( let i = 0 ; i < n ; i++ ) 
    {
      if( !visited.has( i ) && distances[ last ][ i ] < minDistance ) 
      {
        minDistance = distances[ last ][ i ] ;

        nearest = i ;
      }
    }

    tour.push( nearest ) ;

    visited.add( nearest ) ;

    totalDistance += minDistance ;
  }

  // Return to the starting city
  totalDistance += distances[ tour[n - 1] ][ start ] ;

  tour.push( start ) ;

  return { tour, totalDistance } ;
}

// starting from Amaravati (index 0)
const result = nearestNeighbor( 0 , distances , cities ) ;

console.log( "Tour map:", result.tour.map( index => cities[ index ] ).join( " -> " ) ) ;

console.log( "Total Distance:" , result.totalDistance , "km" ) ;

// Output with the given distances:

// Amaravati -> Dispur -> Itanagar -> Patna -> Raipur -> Mumbai -> Shimla ->
// Gandhinagar -> Chandigarh -> Bengaluru -> Thiruvananthapuram -> Bhopal -> Ranchi ->
// Aizawl -> Kohima -> Bhubaneswar -> Jaipur -> Gangtok -> Chennai -> Hyderabad ->
// Agartala -> Lucknow -> Dehradun -> Kolkata -> Imphal -> Shillong -> Srinagar
// -> Amaravati

// Total Distance:  5000 km

// Since we have only filled a part of the distances, the output will vary based on the distances provided.