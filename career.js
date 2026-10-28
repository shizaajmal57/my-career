// --- Theme Toggle Functionality ---
const themeToggleBtn = document.getElementById('themeToggleBtn');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});

// --- Search Filter Functionality ---
const searchInput = document.getElementById('searchInput');
const jobCards = document.querySelectorAll('.job-card');
const jobsCount = document.getElementById('jobsCount');

searchInput.addEventListener('keyup', (e) => {
    const query = e.target.value.toLowerCase().trim();
    let visibleCount = 0;

    jobCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query)) {
            card.style.display = 'flex';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    jobsCount.textContent = `Showing ${visibleCount} Job${visibleCount !== 1 ? 's' : ''}`;
});

// --- Apply Modal Handlers ---
const applyModal = document.getElementById('applyModal');
const modalJobTitle = document.getElementById('modalJobTitle');
const applicationForm = document.getElementById('applicationForm');

function openApplyModal(title) {
    modalJobTitle.textContent = `Apply for: ${title}`;
    applyModal.classList.add('active');
}

function closeApplyModal() {
    applyModal.classList.remove('active');
    applicationForm.reset();
}

// Close modal on outside backdrop click
applyModal.addEventListener('click', (e) => {
    if (e.target === applyModal) {
        closeApplyModal();
    }
});

// --- Form Submission & Toast ---
function handleFormSubmit(e) {
    e.preventDefault();
    closeApplyModal();
    showToast();
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}