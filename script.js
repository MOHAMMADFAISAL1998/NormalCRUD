class ListBinding{
            
    constructor(element){
        this.listElement=element;
        this.textList=[];
    }
    
    static createElement(text){
        const li=document.createElement("li");
        li.textContent=text;
        return li;
    }

    //Update Value from List.

    update(){
        while(this.listElement.firstChild){
            this.listElement.removeChild(this.listElement.firstChild)
        }
        for(const text of this.textList){
            this.listElement.appendChild(ListBinding.createElement(text))
        }
    }

    //ADD Value in the List.

    add(text){
        this.textList.push(text);
        this.update();
    }

    //REMOVE Value in the List.

    remove(index){
        this.textList.splice(index,1);
        this.update();
    }
}
const mylist=document.getElementById("mylist");
list=new ListBinding(mylist);
list.update();


//button Hit

function scriptcall(n){
    txtvalue=document.getElementById("txt1").value;
    if(n==1){
        this.list.add(txtvalue);
    }else if(n==2){
        this.list.update();
    }else if(n==3){
        this.list.remove(parseInt(txtvalue));
    }
}