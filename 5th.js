var chd=require('readline-sync')

var emp=[]

var i,j,r,c
r=chd.questionInt('decide rows')
c=chd.questionInt('decide columns')

for(i=0;i<r;i++)
{
    emp[i]=new Array()                         //initialize array
}

console.log('now enter array elements')
for(i=0;i<r;i++)
{
    for (j=0;j<c;j++)
    {
        emp[i][j]=chd.questionInt()
    }
}


console.log('elements are ')


for(i=0;i<emp.length;i++)
{
    for(j=0;j<emp[i].length;j++)
    {
        process.stdout.write('\t' +emp[i][j])
    }
    console.log()
}