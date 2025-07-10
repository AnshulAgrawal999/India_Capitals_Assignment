
const cities = [
  "Amaravati" , "Itanagar" , "Dispur" , "Patna" , "Raipur" , "Panaji" , "Gandhinagar", 
  "Chandigarh" , "Shimla" , "Ranchi" , "Bengaluru" , "Thiruvananthapuram" , "Bhopal", 
  "Mumbai" , "Imphal" , "Shillong" , "Aizawl" , "Kohima" , "Bhubaneswar" , "Jaipur", 
  "Gangtok" , "Chennai" , "Hyderabad" , "Agartala" , "Lucknow" , "Dehradun" , "Kolkata", 
  "Srinagar"
] ;

const n = cities.length ;

const distances = Array.from( { length: n } , () => new Array( n ).fill( 0 ) ) ;

// Number of cities = 27 + 26 + 24 + 23 + 22 + 21 + 20 + 19 + 18 + 17 + 16 + 15 + 14 + 13 + 12 + 11 + 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 28*27/2 = 378

// Approx road distances ( in km ) 

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
distances[7][15] = 1400; distances[15][7] = 1400; // Chandigarh - Shillong
distances[7][16] = 1700; distances[16][7] = 1700; // Chandigarh - Aizawl
distances[7][17] = 1800; distances[17][7] = 1800; // Chandigarh - Kohima
distances[7][18] = 700; distances[18][7] = 700; // Chandigarh - Bhubaneswar
distances[7][19] = 800; distances[19][7] = 800; // Chandigarh - Jaipur
distances[7][20] = 1400; distances[20][7] = 1400; // Chandigarh - Gangtok
distances[7][21] = 600; distances[21][7] = 600; // Chandigarh - Chennai
distances[7][22] = 400; distances[22][7] = 400; // Chandigarh - Hyderabad
distances[7][23] = 1500; distances[23][7] = 1500; // Chandigarh - Agartala
distances[7][24] = 700; distances[24][7] = 700; // Chandigarh - Lucknow
distances[7][25] = 1000; distances[25][7] = 1000; // Chandigarh - Dehradun
distances[7][26] = 900; distances[26][7] = 900; // Chandigarh - Kolkata
distances[7][27] = 1500; distances[27][7] = 1500; // Chandigarh - Srinagar
distances[8][9] = 700;  distances[9][8] = 700;  // Shimla - Ranchi
distances[8][10] = 500; distances[10][8] = 500; // Shimla - Bengaluru
distances[8][11] = 800; distances[11][8] = 800; // Shimla - Thiruvananthapuram
distances[8][12] = 600; distances[12][8] = 600; // Shimla - Bhopal
distances[8][13] = 300; distances[13][8] = 300; // Shimla - Mumbai
distances[8][14] = 1600; distances[14][8] = 1600; // Shimla - Imphal
distances[8][15] = 1500; distances[15][8] = 1500; // Shimla - Shillong
distances[8][16] = 1800; distances[16][8] = 1800; // Shimla - Aizawl
distances[8][17] = 1900; distances[17][8] = 1900; // Shimla - Kohima
distances[8][18] = 800; distances[18][8] = 800; // Shimla - Bhubaneswar
distances[8][19] = 900; distances[19][8] =  900; // Shimla - Jaipur
distances[8][20] = 1500; distances[20][8] = 1500; // Shimla - Gangtok
distances[8][21] = 500; distances[21][8] = 500; // Shimla - Chennai
distances[8][22] = 300; distances[22][8] = 300; // Shimla - Hyderabad
distances[8][23] = 1600; distances[23][8] = 1600; // Shimla - Agartala
distances[8][24] = 600; distances[24][8] = 600; // Shimla - Lucknow
distances[8][25] = 900; distances[25][8] = 900; // Shimla - Dehradun
distances[8][26] = 800; distances[26][8] = 800; // Shimla - Kolkata
distances[8][27] = 1600; distances[27][8] = 1600; // Shimla - Srinagar
distances[9][10] = 1000; distances[10][9] = 1000; // Ranchi - Bengaluru
distances[9][11] = 1300; distances[11][9] = 1300; // Ranchi - Thiruvananthapuram
distances[9][12] = 1100; distances[12][9] = 1100; // Ranchi - Bhopal
distances[9][13] = 800; distances[13][9] = 800; // Ranchi - Mumbai
distances[9][14] = 1700; distances[14][9] = 1700; // Ranchi - Imphal
distances[9][15] = 1600; distances[15][9] = 1600; // Ranchi - Shillong
distances[9][16] = 1900; distances[16][9] = 1900; // Ranchi - Aizawl
distances[9][17] = 2000; distances[17][9] = 2000; // Ranchi - Kohima
distances[9][18] = 1100; distances[18][9] = 1100; // Ranchi - Bhubaneswar
distances[9][19] = 1200; distances[19][9] = 1200; // Ranchi - Jaipur
distances[9][20] = 1800; distances[20][9] = 1800; // Ranchi - Gangtok
distances[9][21] = 1000; distances[21][9] = 1000; // Ranchi - Chennai
distances[9][22] = 800; distances[22][9] = 800; // Ranchi - Hyderabad
distances[9][23] = 1700; distances[23][9] = 1700; // Ranchi - Agartala
distances[9][24] = 1100; distances[24][9] = 1100; // Ranchi - Lucknow
distances[9][25] = 1400; distances[25][9] = 1400; // Ranchi - Dehradun
distances[9][26] = 1300; distances[26][9] = 1300; // Ranchi - Kolkata
distances[9][27] = 1700; distances[27][9] = 1700; // Ranchi - Srinagar
distances[10][11] = 800; distances[11][10] = 800; // Bengaluru - Thiruvananthapuram
distances[10][12] = 600; distances[12][10] = 600; // Bengaluru - Bhopal
distances[10][13] = 300; distances[13][10] = 300; // Bengaluru - Mumbai
distances[10][14] = 1200; distances[14][10] = 1200; // Bengaluru - Imphal
distances[10][15] = 1100; distances[15][10] = 1100; // Bengaluru - Shillong
distances[10][16] = 1400; distances[16][10] = 1400; // Bengaluru - Aizawl
distances[10][17] = 1500; distances[17][10] = 1500; // Bengaluru - Kohima
distances[10][18] = 600; distances[18][10] = 600; // Bengaluru - Bhubaneswar
distances[10][19] = 700; distances[19][10] = 700; // Bengaluru - Jaipur
distances[10][20] = 1300; distances[20][10] = 1300; // Bengaluru - Gangtok
distances[10][21] = 500; distances[21][10] = 500; // Bengaluru - Chennai
distances[10][22] = 300; distances[22][10] = 300; // Bengaluru - Hyderabad
distances[10][23] = 1200; distances[23][10] = 1200; // Bengaluru - Agartala
distances[10][24] = 600; distances[24][10] =  600; // Bengaluru - Lucknow
distances[10][25] = 900; distances[25][10] = 900; // Bengaluru - Dehradun
distances[10][26] = 800; distances[26][10] = 800; // Bengaluru - Kolkata
distances[10][27] = 1200; distances[27][10] = 1200; // Bengaluru - Srinagar
distances[11][12] = 700; distances[12][11] = 700; // Thiruvananthapuram - Bhopal
distances[11][13] = 400; distances[13][11] = 400; // Thiruvananthapuram - Mumbai
distances[11][14] = 1500; distances[14][11] = 1500; // Thiruvananthapuram - Imphal
distances[11][15] = 1400; distances[15][11] = 1400; // Thiruvananthapuram - Shillong
distances[11][16] = 1700; distances[16][11] = 1700; // Thiruvananthapuram - Aizawl
distances[11][17] = 1800; distances[17][11] = 1800; // Thiruvananthapuram - Kohima
distances[11][18] = 700; distances[18][11] = 700; // Thiruvananthapuram - Bhubaneswar
distances[11][19] = 800; distances[19][11] = 800; // Thiruvananthapuram - Jaipur
distances[11][20] = 1400; distances[20][11] = 1400; // Thiruvananthapuram - Gangtok
distances[11][21] = 600; distances[21][11] = 600; // Thiruvananthapuram - Chennai
distances[11][22] = 400; distances[22][11] = 400; // Thiruvananthapuram - Hyderabad
distances[11][23] = 1500; distances[23][11] = 1500; // Thiruvananthapuram - Agartala
distances[11][24] = 700; distances[24][11] = 700; // Thiruvananthapuram - Lucknow
distances[11][25] = 1000; distances[25][11] = 1000; // Thiruvananthapuram - Dehradun
distances[11][26] = 900; distances[26][11] = 900; // Thiruvananthapuram - Kolkata
distances[11][27] = 1500; distances[27][11] = 1500; // Thiruvananthapuram - Srinagar
distances[12][13] = 300; distances[13][12] = 300; // Bhopal - Mumbai
distances[12][14] = 1200; distances[14][12] = 1200; // Bhopal - Imphal
distances[12][15] = 1100; distances[15][12] = 1100; // Bhopal - Shillong
distances[12][16] = 1400; distances[16][12] = 1400; // Bhopal - Aizawl
distances[12][17] = 1500; distances[17][12] = 1500; // Bhopal - Kohima
distances[12][18] = 600; distances[18][12] = 600; // Bhopal - Bhubaneswar
distances[12][19] = 700; distances[19][12] = 700; // Bhopal - Jaipur
distances[12][20] = 1300; distances[20][12] = 1300; // Bhopal - Gangtok
distances[12][21] = 500; distances[21][12] = 500; // Bhopal - Chennai
distances[12][22] = 300; distances[22][12] = 300; // Bhopal - Hyderabad
distances[12][23] = 1200; distances[23][12] = 1200; // Bhopal - Agartala
distances[12][24] = 600; distances[24][12] = 600; // Bhopal - Lucknow
distances[12][25] = 900; distances[25][12] = 900; // Bhopal - Dehradun
distances[12][26] = 800; distances[26][12] = 800; // Bhopal - Kolkata
distances[12][27] = 1200; distances[27][12] = 1200; // Bhopal - Srinagar
distances[13][14] = 1500; distances[14][13] = 1500; // Mumbai - Imphal
distances[13][15] = 1400; distances[15][13] = 1400; // Mumbai - Shillong
distances[13][16] = 1700; distances[16][13] = 1700; // Mumbai - Aizawl
distances[13][17] = 1800; distances[17][13] = 1800; // Mumbai - Kohima
distances[13][18] = 900; distances[18][13] = 900; // Mumbai - Bhubaneswar
distances[13][19] = 1000; distances[19][13] = 1000; // Mumbai - Jaipur
distances[13][20] = 1600; distances[20][13] = 1600; // Mumbai - Gangtok
distances[13][21] = 800; distances[21][13] = 800; // Mumbai - Chennai
distances[13][22] = 600; distances[22][13] = 600; // Mumbai - Hyderabad
distances[13][23] = 1500; distances[23][13] = 1500; // Mumbai - Agartala
distances[13][24] = 700; distances[24][13] = 700; // Mumbai - Lucknow
distances[13][25] = 1000; distances[25][13] = 1000; // Mumbai - Dehradun
distances[13][26] = 900; distances[26][13] = 900; // Mumbai - Kolkata
distances[13][27] = 1500; distances[27][13] = 1500; // Mumbai - Srinagar
distances[14][15] = 500;  distances[15][14] = 500;  // Imphal - Shillong
distances[14][16] = 800;  distances[16][14] = 800;  // Imphal - Aizawl
distances[14][17] = 900;  distances[17][14] = 900;  // Imphal - Kohima
distances[14][18] = 1200; distances[18][14] = 1200; // Imphal - Bhubaneswar
distances[14][19] = 1300; distances[19][14] = 1300; // Imphal - Jaipur
distances[14][20] = 1900; distances[20][14] = 1900; // Imphal - Gangtok
distances[14][21] = 1100; distances[21][14] = 1100; // Imphal - Chennai
distances[14][22] = 900; distances[22][14] = 900; // Imphal - Hyderabad
distances[14][23] = 500;  distances[23][14] = 500;  // Imphal - Agartala
distances[14][24] = 1300; distances[24][14] = 1300; // Imphal - Lucknow
distances[14][25] = 1600; distances[25][14] = 1600; // Imphal - Dehradun
distances[14][26] = 1500; distances[26][14] = 1500; // Imphal - Kolkata
distances[14][27] = 2000; distances[27][14] = 2000; // Imphal - Srinagar
distances[15][16] = 300;  distances[16][15] = 300;  // Shillong - Aizawl
distances[15][17] = 400;  distances[17][15] = 400;  // Shillong - Kohima
distances[15][18] = 1300; distances[18][15] = 1300; // Shillong - Bhubaneswar
distances[15][19] = 1400; distances[19][15] = 1400; // Shillong - Jaipur
distances[15][20] = 2000; distances[20][15] = 2000; // Shillong - Gangtok
distances[15][21] = 1200; distances[21][15] = 1200; // Shillong - Chennai
distances[15][22] = 1000; distances[22][15] = 1000; // Shillong - Hyderabad
distances[15][23] = 600;  distances[23][15] = 600;  // Shillong - Agartala
distances[15][24] = 1400; distances[24][15] = 1400; // Shillong - Lucknow
distances[15][25] = 1700; distances[25][15] = 1700; // Shillong - Dehradun
distances[15][26] = 1600; distances[26][15] = 1600; // Shillong - Kolkata
distances[15][27] = 2100; distances[27][15] = 2100; // Shillong - Srinagar
distances[16][17] = 500;  distances[17][16] = 500;  // Aizawl - Kohima
distances[16][18] = 1600; distances[18][16] = 1600; // Aizawl - Bhubaneswar
distances[16][19] = 1700; distances[19][16] = 1700; // Aizawl - Jaipur
distances[16][20] = 2200; distances[20][16] = 2200; // Aizawl - Gangtok
distances[16][21] = 1400; distances[21][16] = 1400; // Aizawl - Chennai
distances[16][22] = 1200; distances[22][16] = 1200; // Aizawl - Hyderabad
distances[16][23] = 700;  distances[23][16] = 700;  // Aizawl - Agartala
distances[16][24] = 1500; distances[24][16] = 1500; // Aizawl - Lucknow
distances[16][25] = 1800; distances[25][16] = 1800; // Aizawl - Dehradun
distances[16][26] = 1700; distances[26][16] = 1700; // Aizawl - Kolkata
distances[16][27] = 2200; distances[27][16] = 2200; // Aizawl - Srinagar
distances[17][18] = 1700; distances[18][17] = 1700; // Kohima - Bhubaneswar
distances[17][19] = 1800; distances[19][17] = 1800; // Kohima - Jaipur
distances[17][20] = 2300; distances[20][17] = 2300; // Kohima - Gangtok
distances[17][21] = 1500; distances[21][17] = 1500; // Kohima - Chennai
distances[17][22] = 1300; distances[22][17] = 1300; // Kohima - Hyderabad
distances[17][23] = 800;  distances[23][17] = 800;  // Kohima - Agartala
distances[17][24] = 1600; distances[24][17] = 1600; // Kohima - Lucknow
distances[17][25] = 1900; distances[25][17] = 1900; // Kohima - Dehradun
distances[17][26] = 1800; distances[26][17] = 1800; // Kohima - Kolkata
distances[17][27] = 2300; distances[27][17] = 2300; // Kohima - Srinagar
distances[18][19] = 1400; distances[19][18] = 1400; // Bhubaneswar - Jaipur
distances[18][20] = 2000; distances[20][18] = 2000; // Bhubaneswar - Gangtok
distances[18][21] = 1200; distances[21][18] = 1200; // Bhubaneswar - Chennai
distances[18][22] = 1000; distances[22][18] = 1000; // Bhubaneswar - Hyderabad
distances[18][23] = 500;  distances[23][18] = 500;  // Bhubaneswar - Agartala
distances[18][24] = 1300; distances[24][18] = 1300; // Bhubaneswar - Lucknow
distances[18][25] = 1600; distances[25][18] = 1600; // Bhubaneswar - Dehradun
distances[18][26] = 1500; distances[26][18] = 1500; // Bhubaneswar - Kolkata
distances[18][27] = 2000; distances[27][18] = 2000; // Bhubaneswar - Srinagar
distances[19][20] = 1600; distances[20][19] = 1600; // Jaipur - Gangtok
distances[19][21] = 1000; distances[21][19] = 1000; // Jaipur - Chennai
distances[19][22] = 800;  distances[22][19] = 800;  // Jaipur - Hyderabad
distances[19][23] = 1500; distances[23][19] = 1500; // Jaipur - Agartala
distances[19][24] = 700;  distances[24][19] = 700;  // Jaipur - Lucknow
distances[19][25] = 1000; distances[25][19] = 1000; // Jaipur - Dehradun
distances[19][26] = 900;  distances[26][19] = 900;  // Jaipur - Kolkata
distances[19][27] = 1500; distances[27][19] = 1500; // Jaipur - Srinagar
distances[20][21] = 1800; distances[21][20] = 1800; // Gangtok - Chennai
distances[20][22] = 1600; distances[22][20] = 1600; // Gangtok - Hyderabad
distances[20][23] = 2200; distances[23][20] = 2200; // Gangtok - Agartala
distances[20][24] = 1600; distances[24][20] = 1600; // Gangtok - Lucknow
distances[20][25] = 1900; distances[25][20] = 1900; // Gangtok - Dehradun
distances[20][26] = 1800; distances[26][20] = 1800; // Gangtok - Kolkata
distances[20][27] = 2300; distances[27][20] = 2300; // Gangtok - Srinagar
distances[21][22] = 500;  distances[22][21] = 500;  // Chennai - Hyderabad
distances[21][23] = 1800; distances[23][21] = 1800; // Chennai - Agartala
distances[21][24] = 1200; distances[24][21] = 1200; // Chennai - Lucknow
distances[21][25] = 1500; distances[25][21] = 1500; // Chennai - Dehradun
distances[21][26] = 1400; distances[26][21] = 1400; // Chennai - Kolkata
distances[21][27] = 1900; distances[27][21] = 1900; // Chennai - Srinagar
distances[22][23] = 1700; distances[23][22] = 1700; // Hyderabad - Agartala
distances[22][24] = 1100; distances[24][22] = 1100; // Hyderabad - Lucknow
distances[22][25] = 1400; distances[25][22] = 1400; // Hyderabad - Dehradun
distances[22][26] = 1300; distances[26][22] = 1300; // Hyderabad - Kolkata
distances[22][27] = 1800; distances[27][22] = 1800; // Hyderabad - Srinagar
distances[23][24] = 1300; distances[24][23] = 1300; // Agartala - Lucknow
distances[23][25] = 1600; distances[25][23] = 1600; // Agartala - Dehradun
distances[23][26] = 1500; distances[26][23] = 1500; // Agartala - Kolkata
distances[23][27] = 2000; distances[27][23] = 2000; // Agartala - Srinagar
distances[24][25] = 900;  distances[25][24] = 900;  // Lucknow - Dehradun
distances[24][26] = 800;  distances[26][24] = 800;  // Lucknow - Kolkata
distances[24][27] = 1400; distances[27][24] = 1400; // Lucknow - Srinagar
distances[25][26] = 700;  distances[26][25] = 700;  // Dehradun - Kolkata
distances[25][27] = 1500; distances[27][25] = 1500; // Dehradun - Srinagar
distances[26][27] = 1600; distances[27][26] = 1600; // Kolkata - Srinagar



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

// Tour map: Amaravati -> Dispur -> Itanagar -> Patna -> Raipur -> Mumbai -> Shimla -> 
// Chandigarh -> Hyderabad -> Bengaluru -> Chennai -> Bhopal -> Bhubaneswar -> Agartala -> 
// Imphal -> Shillong -> Aizawl -> Kohima -> Lucknow -> Thiruvananthapuram -> Jaipur -> 
// Gandhinagar -> Panaji -> Ranchi -> Kolkata -> Dehradun -> Srinagar -> Gangtok ->
// Amaravati

// Total Distance:  20000 km
