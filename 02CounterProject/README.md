## interview question

you have AddValue() in your counter project given below
``` javascript
function AddValue() {
    if(count==20) return;
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
  }
  // if we write multiple setCount(count+1) then what happen
  // are there increment 4 on one click 
  // Ans:No

  
``` 
- beacause Fibre send batch of updation in UI 
- these all do the same job and they send in one packeges so that one cvalue increment at once 
- setCount is a function which accept a callback value  which is previous value 
- if we want to increment  4 on one click then we have to write it as 
```javascript
function AddValue() {
    if(count==20) return;
    setCount((prevCount)=>prevCount+1) // now when this call and accept prevCount then next accept prevCount when this patch send by fibre 
    setCount((prevCount)=>prevCount+1)
    setCount((prevCount)=>prevCount+1)
    setCount((prevCount)=>prevCount+1)
  }
```  