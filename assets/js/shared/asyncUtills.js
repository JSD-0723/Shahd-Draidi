export const debounce=function(delay,cb){
    let timer;
    return(...args)=>{
        clearTimeout(timer);
        timer=setTimeout(()=>{
            cb(...args);
        },delay);
    }

}
export const uniqueRequest= function(cb){
    let requestIdentifier;
    return async(...args)=>{
        let reqId=args[0];
        requestIdentifier=reqId;
        let result= await cb(...args);
        if(requestIdentifier===reqId){
            return result;
        }
        else throw `race condition error${reqId}`;
    }
}