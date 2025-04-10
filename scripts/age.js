const birthYear = 2007;
const birthMonth = 11;
const birthDay = 26;

function calculateAge() {
    const today = new Date();
    const birthDate = new Date(birthYear, birthMonth, birthDay);
    let age = today.getFullYear() - birthDate.getFullYear();
    const isBeforeBirthday = today.getMonth() < birthMonth || 
                             (today.getMonth() === birthMonth && today.getDate() < birthDay);
    if (isBeforeBirthday) {
        age--;
    }
    document.getElementById('age').textContent = age;
}

calculateAge();