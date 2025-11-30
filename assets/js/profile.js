function toggleProfileMenu() {
    const menu = document.getElementById('profile-dropdown');
    const chevron = document.getElementById('profile-chevron');
    
    const isHidden = menu.classList.contains('hidden');

    if (isHidden) {
        // OPEN
        menu.classList.remove('hidden');
        setTimeout(() => {
            menu.classList.remove('opacity-0', 'scale-95');
            menu.classList.add('opacity-100', 'scale-100');
        }, 10);
        chevron.classList.add('rotate-180');
    } else {
        // CLOSE
        closeProfileMenu();
    }
}

function closeProfileMenu() {
    const menu = document.getElementById('profile-dropdown');
    const chevron = document.getElementById('profile-chevron');
    
    menu.classList.remove('opacity-100', 'scale-100');
    menu.classList.add('opacity-0', 'scale-95');
    chevron.classList.remove('rotate-180');
    
    setTimeout(() => {
        menu.classList.add('hidden');
    }, 200); 
}

window.addEventListener('click', function(e) {
    const menu = document.getElementById('profile-dropdown');
    const btn = document.getElementById('profile-btn');
    
    if (!menu.contains(e.target) && !btn.contains(e.target) && !menu.classList.contains('hidden')) {
        closeProfileMenu();
    }
});