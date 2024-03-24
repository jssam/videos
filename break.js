//in loop
for(let i = 0;i<6;i++){
    console.log("i am here 1");
    break;
    console.log("i am here 2");
}

// nested loop
for(let i = 0;i<6;i++){
    console.log("i am here 1");
    for(let j =0;j<6;j++){
        if(j<=5){
            break;
        }
    }
    console.log("i am here 2");
}

//to break from infine loop
while (i < 20) {
    if (i == 3)
        break;
    else
        printf("%d ", i);
    i++;
}