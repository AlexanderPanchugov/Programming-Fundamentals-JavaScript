function formatGrade(grade) {

    let gradeAnotation = '';

    if (grade < 3) {
        grade = 2;
        gradeAnotation = 'Fail';
    } else if (grade < 3.50) {
        gradeAnotation = 'Poor';
    } else if (grade < 4.50) {
        gradeAnotation = 'Good';
    } else if (grade < 5.50) {
        gradeAnotation = 'Very good';
    } else {
        gradeAnotation = 'Excellent';
    }
    if (grade < 3){
        console.log(`${gradeAnotation} (${grade})`);
    } else {
    console.log(`${gradeAnotation} (${grade.toFixed(2)})`)
    }
}

formatGrade(2.99)