import { Component , OnChanges, OnInit} from '@angular/core'; 
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'app';
  folder  = [];
  expanded : boolean = false;
  selectedFolder = {};
  folder_name = ''; 
  pathName = ''

  
  selectedFolderMethod(event){
  	console.error("event", event);
  }

  toggle(f){
        f.expanded = !f.expanded;
        this.selectedFolder = f;     
  }

   getRandomNumber(){
   		return Math.floor((Math.random() * 1000) + 1);
   }

   addFolder(){
  	 this.findPropPathAndAppend(this.folder, this.selectedFolder["id"])
   }

  getFolder(){
  	return  [{
  			type : 'd',
  			name: '/root',
  			expanded : false,
  			id : 1,
  			children : []
  	}];
  }
  

	findPropPathAndAppend(folder, id) {
		if(folder.length > 0){
			folder.forEach((_val, idx)=>{ 
				if(_val.id == id){ 
					_val.expanded =  true; 
		        	let _temp = {
				  			type : 'd',
				  			name: this.folder_name,
				  			expanded : false,
				  			id : this.getRandomNumber(),
				  			children : []
					  }
		        	_val.children.push(_temp);
					return null; 
				}else if(_val.children.length >0) { 
					this.pathName += '/' + _val["name"]; 
		            this.findPropPathAndAppend(_val.children, id);
		        }
			})
		}
	    return null;     
	};

 	ngOnInit() {
	    this.folder = this.getFolder(); 
	};


}
