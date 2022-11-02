var emp=[[12,34,4,556,55,87],[12,55,12,34,56],[12,56,87]]
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