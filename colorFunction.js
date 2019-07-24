function colorConverter(value,value2=0,value3=0){
    if (value2>0&&value3>0||typeof(value)==="number"){
        stringValue="#";
        for (num of Array(value,value2,value3)){
            stringValue+=num.toString(16).length===1?`0${num.toString(16)}`:num.toString(16);
        }
        return stringValue;
}
    else if (typeof(value)==="string"){
        let red=0,green=0,blue=0;
        if(value.length===4){
            red=parseInt(value.substr(1,1)+value.substr(1,1),16);
            green=parseInt(value.substr(2,1)+value.substr(2,1),16);
            blue=parseInt(value.substr(3,1)+value.substr(3,1),16);
        } else if (value.length===7){
            red=parseInt(value.substr(1,1)+value.substr(2,1),16);
            green=parseInt(value.substr(3,1)+value.substr(4,1),16);
            blue=parseInt(value.substr(5,1)+value.substr(6,1),16);
        }
        return `rgb(${red},${green},${blue})`;
    }
}
