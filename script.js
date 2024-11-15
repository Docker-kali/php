let files = [];

function renderFileList() {
    const fileList = document.getElementById('file-list');
    fileList.innerHTML = '';
    files.forEach((file, index) => {
        const fileItem = document.createElement('li');
        fileItem.className = 'file-item';
        
        // File Name
        const fileName = document.createElement('span');
        fileName.className = 'file-name';
        fileName.textContent = file.name;
        fileName.onclick = () => renameFile(index);
        
        // Actions (Rename, Delete)
        const actions = document.createElement('div');
        actions.className = 'actions';
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Hapus';
        deleteBtn.onclick = () => deleteFile(index);
        
        actions.appendChild(deleteBtn);
        
        // Append all to list
        fileItem.appendChild(fileName);
        fileItem.appendChild(actions);
        fileList.appendChild(fileItem);
    });
}

function createFolder() {
    const folderName = prompt('Masukkan nama folder:');
    if (folderName) {
        files.push({ name: folderName, type: 'folder' });
        renderFileList();
    }
}

function createFile() {
    const fileName = prompt('Masukkan nama file:');
    if (fileName) {
        files.push({ name: fileName, type: 'file' });
        renderFileList();
    }
}

function deleteFile(index) {
    const confirmDelete = confirm(`Apakah Anda yakin ingin menghapus "${files[index].name}"?`);
    if (confirmDelete) {
        files.splice(index, 1);
        renderFileList();
    }
}

function renameFile(index) {
    const newName = prompt('Masukkan nama baru:', files[index].name);
    if (newName) {
        files[index].name = newName;
        renderFileList();
    }
}

function deleteSelected() {
    files = files.filter(file => !file.selected);
    renderFileList();
}

// Inisialisasi
renderFileList();
