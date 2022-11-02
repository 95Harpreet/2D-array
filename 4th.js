var emp=[[],[]]
emp[0][0]=23
emp[0][1]=44
emp[1][0]=34
emp[1][1]=54

console.log('elements are ')
var i,j
for(i=0;i<emp.length;i++)
{
    for(j=0;j<emp[i].length;j++)
    {
        process.stdout.write('\t' +emp[i][j])
    }
    console.log()
}