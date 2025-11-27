
// File upload display
document.getElementById('fileInput').addEventListener('change', function() {
    const fileName = this.files[0] ? this.files[0].name : 'No file chosen';
    document.getElementById('fileName').textContent = fileName;
});
// Tag suggestions
document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', () => {
        const input = document.getElementById('tagsInput');
        const current = input.value.trim();
        const tagText = tag.textContent;
        input.value = current ? `${current}, ${tagText}` : tagText;
        // Visual feedback
        tag.style.background = '#00c4b4';
        tag.style.color = 'white';
        setTimeout(() => {
            tag.style.background = '#e3f2fd';
            tag.style.color = '#1976d2';
        }, 400);
    });
});
// Submit form
document.getElementById('submitForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Resource submitted for review!');
    this.reset();
    document.getElementById('fileName').textContent = 'No file chosen';
});
// Admin actions
document.querySelectorAll('.approve').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.textContent = 'Approved';
        btn.style.background = '#28a745';
        btn.disabled = true;
    });
});
document.querySelectorAll('.reject').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.textContent = 'Rejected';
        btn.style.background = '#dc3545';
        btn.disabled = true;
    });
});
document.querySelectorAll('.preview').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Preview: Opening resource...');
    });
});