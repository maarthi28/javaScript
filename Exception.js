//try-throw-catch
try {
    throw 'myException'; 
  }
  catch (e) {
    
    console.log(e); 
  }

//nested try without inner catch and with finally
  try {
    try {
      throw new Error('oops');
    }
    finally {
      console.log('finally');
    }
  }
  catch (ex) {
    console.error('outer', ex.message);
  }

//nested try with inner catch and finally 
  try {
    try {
      throw new Error('oops');
    }
    catch (ex) {
      console.error('inner', ex.message);
    }
    finally {
      console.log('finally');
    }
  }
  catch (ex) {
    console.error('outer', ex.message);
  }


//executing both inner and outer catch
  try {
    try {
      throw new Error('oops');
    }
    catch (ex) {
      console.error('inner', ex.message);
      throw ex;
    }
    finally {
      console.log('finally');
    }
  }
  catch (ex) {
    console.error('outer', ex.message);
  }

//using iify
  (function() {
    try {
      try {
        throw new Error('oops');
      }
      catch (ex) {
        console.error('inner', ex.message);
        throw ex;
      }
      finally {
        console.log('finally');
        return;
      }
    }
    catch (ex) {
      console.error('outer', ex.message);
    }
  })();

  

var count = 0;
function print(){
    console.log("Hello");
}
function countUp() {
try {
   let c= print();
return count;
} finally {
count++;

}
}
countUp()
console.log(countUp())

function catchit() {
    try {
    throwit();
    } catch(e) {
    console.log(e.stack); 
    }
    }
    function throwit() {
    throw new Error('');
    }
catchit()