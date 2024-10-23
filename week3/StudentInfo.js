const dateofBirth = "24/08/2005";

const getStudentName = () => "Komronbek";

const getCampusName = () => "UEL Doclands";

//exporting functions & variable outside the module
exports.getName = getStudentName;
exports.Location = getCampusName;
exports.dob = dateofBirth;
// How to export function with parameters
exports.Studentgrade = (marks) => {
  if (marks > 50 && marks < 70) return "B grade";
  else return "A grade)";
};
