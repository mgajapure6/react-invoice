class StoreService {
    
    public get(key: string, isObject?: boolean){
        if(isObject){
            return JSON.parse(JSON.stringify(localStorage.getItem(key)));
        }else{
            return localStorage.getItem(key);
        }
        
    }
   
    public add(key: string, value: any, isObject?: boolean){
        if(isObject){
            localStorage.setItem(key, JSON.stringify(value));
        }else{
            localStorage.setItem(key, value);
        }
    }

    public remove(key: string){
        localStorage.removeItem(key);
    }
    

}

const singleton = new StoreService();
export default singleton;