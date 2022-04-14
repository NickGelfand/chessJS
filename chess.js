let chessBord = document.createElement('table');
chessBord.className = "styleChess";
for(let i = 0;i<8;i++)
{
    let tr = document.createElement('tr');
    for(let j=0;j<8;j++)
    {
        if((j+i)%2==0)
        {
            let td = document.createElement('td');
            td.className = "white";
            console.log("white");
            tr.appendChild(td);
        }
        else{
            let td = document.createElement('td');
            td.className = "black";
            console.log("black")
            tr.appendChild(td);
        }
    }
    
    chessBord.appendChild(tr);
    console.log("\n");
}

document.body.appendChild(chessBord);
