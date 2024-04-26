windows.addEventListener('DOMContentLoaded',(event) => {
  getVistCount();
})

const functionApi = '';

const getVistCount = () => {
  let count = 30;
  fetch(functionApi).then(respone => {
    return respone.json();
  }); then(respone =>{
    console.log("Website called function API");
    count = respone.count;
    document.getElementById("counter").innerText = count;
  }).catch(function(error){
    console.log(error);
  });
  return count;
}