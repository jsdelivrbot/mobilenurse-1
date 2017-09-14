import moment from 'moment';

 export function isValidDOB (dob) {
  //  let pattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
   let dateRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
   return dateRegex.test(dob);
 }

 export function isValidPhoneNumber (ph) {
   let pattern1 =/^([0-9]{3})+[-]+([0-9]{3})+[-]+([0-9]{4})$/;
   let pattern2 =/^[(]+([0-9]{3})+[)\s]+([0-9]{3})+[-]+([0-9]{4})$/;
   return (pattern1.test(ph) || pattern2.test(ph));
 }

 export function isValidedPhoneNumber(ph) {
    let pattern2 =/^[(]+([0-9]{3})+[)\s]+([0-9]{3})+[-]+([0-9]{4})$/;
    return (pattern2.test(ph));
 }

 export function isValidState(state){
  let pattern =/^([a-zA-Z]{2})$/;
   let error = false;
   if(!state){
     error = 'Please enter state abbreviation';
   } else if (!pattern.test(state)) {
     error = 'Please enter state abbreviation';
   }
   return error;
 }

 export function isValidZip(zip) {
   let pattern =/^([0-9]{5})$/;
    let error = false;
    if(!zip){
      error = 'Enter ZIP Code';
    } else if (!pattern.test(zip)) {
      error = 'Invalid ZIP Code';
    }
    return error;
 }

 export function isValidExamDate(examDate) {
   let diff = moment(new Date(examDate)).diff(moment(new Date()), 'days');
   let error = false;
   if(!examDate){
     error = 'Select Exam Date';
   } else if (diff < 1) {
     error = '1​ ​day​ ​lead​ ​time​ required';
   }
   return error;
 }

 export function formatPhoneNumberToInsert(ph){
   return parseInt(ph.slice(1, 4)+ph.slice(6, 9)+ph.slice(10, ph.length));
 }

 export function convertAmtToPlainNumber(amt){
   amt = amt.split(',')
   let newVal = '';
   _.map(amt,(num)=>{
     newVal += num;
   })
   return newVal;
 }
