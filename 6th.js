var chd=require('readline-sync')
var a=[121,34]
var b=[12,4]
var c=[21,3]

var emp=[a,b,c]




console.log('elements are ')


for(i=0;i<emp.length;i++)
{
    for(j=0;j<emp[i].length;j++)
    {
        process.stdout.write('\t' +emp[i][j])
    }
    console.log()
}