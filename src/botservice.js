module.exports = {
    isQuestion: (chatContent,callback)=>{
    let isQuestion=false;
    if(chatContent.length > 0) {
      let aboutPattren = new RegExp('can','i');
      let aadhaarDetails = new RegExp('Aadhaar|details','i');

      if(aboutPattren.test(chatContent))
      {
        isQuestion=true;
      }else if(aadhaarDetails.test(chatContent))
      {
        isQuestion=true;
      }
    } else {
      return isQuestion;
    }
    return isQuestion;
  }
}
