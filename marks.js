let students = [];


function showAddForm() {
  document.getElementById('addForm').style.display = 'block';
}

function hideAddForm() {
  document.getElementById('addForm').style.display = 'none';
}

function addStudent() {
  const name = document.getElementById('studentName').value;
  const studentClass = document.getElementById('studentClass').value;

  if (name && studentClass) {
    const student = { id: Date.now(), name, class: studentClass };
    students.push(student);
    displayStudents();
    hideAddForm();
  } else {
    alert('Please enter both name and class');
  }
}

function displayStudents() {
  const studentsList = document.getElementById('studentsList');
  studentsList.innerHTML = '';

  students.forEach(student => {
    const studentDiv = document.createElement('div');
    studentDiv.innerHTML = `<strong>${student.name}</strong> - Class: ${student.class} 
                            <button onclick="editStudent(${student.id})">Edit</button>
                            <button onclick="deleteStudent(${student.id})">Delete</button>`;
    studentsList.appendChild(studentDiv);
  });
}

function editStudent(studentId) {
  const student = students.find(s => s.id === studentId);
  if (student) {
    const newName = prompt('Enter new name:', student.name);
    if (newName !== null) {
      student.name = newName;
      displayStudents();
    }
  }
}

function deleteStudent(studentId) {
  const confirmDelete = confirm('Are you sure you want to delete this student?');
  if (confirmDelete) {
    students = students.filter(student => student.id !== studentId);
    displayStudents();
  }
}

displayStudents();



let teachers = [];

function showAddForm1() {
  document.getElementById('addForm').style.display = 'block';
}

function hideAddForm1() {
  document.getElementById('addForm').style.display = 'none';
}

function addTeacher() {
  const name = document.getElementById('teacherName').value;
  const teacherClass = document.getElementById('teacherClass').value;

  if (name && teacherClass) {
    const teacher = { id: Date.now(), name, class: teacherClass };
    teachers.push(teacher);
    displayTeachers();
    hideAddForm();
  } else {
    alert('Please enter both name and class');
  }
}

function displayTeachers() {
  const teachersList = document.getElementById('teachersList');
  teachersList.innerHTML = '';

  teachers.forEach(teacher => {
    const teacherDiv = document.createElement('div');
    teacherDiv.innerHTML = `<strong>${teacher.name}</strong> - Class: ${teacher.class} 
                            <button onclick="editTeacher(${teacher.id})">Edit</button>
                            <button onclick="deleteTeacher(${teacher.id})">Delete</button>`;
    teachersList.appendChild(teacherDiv);
  });
}

function editTeacher(teacherId) {
  const teacher = teachers.find(t => t.id === teacherID);
  if (teacher) {
    const newName = prompt('Enter new name:', teacher.name);
    if (newName !== null) {
      teacher.name = newName;
      displayTeachers();
    }
  }
}

function deleteTeacher(teacherID) {
  const confirmDelete = confirm('Are you sure you want to delete this teacher?');
  if (confirmDelete) {
    teachers = teachers.filter(teacher => teacher.id !== teacherID);
    displayTeachers();
  }
}

displayTeachers();



