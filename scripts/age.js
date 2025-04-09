const birthYear = 2007; // Replace with your birth year
const birthMonth = 11; // December (0-based index, so 11 = December)
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