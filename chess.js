let chessBord = document.createElement('table');
chessBord.className = "styleChess";
for(let i = 0;i<8;i++) 
{
    let tr = document.createElement('tr'); //creates new row
    for(let j=0;j<8;j++)
    {
     //If the sum of cell coordinates is even
     // then color the cell white
        if((j+i)%2==0) 
        {
            let td = document.createElement('td'); //create new content
            td.className = "white"; //class style attached
            tr.appendChild(td);
        }
        else{
            let td = document.createElement('td'); //create new content
            td.className = "black"; //class style attached
            tr.appendChild(td);
        }
    }
    chessBord.appendChild(tr);//add to table the row 
}

document.body.appendChild(chessBord);//add the table under the body 
