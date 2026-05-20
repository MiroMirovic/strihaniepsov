// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking on a link
        const menuLinks = document.querySelectorAll('.nav-menu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                body.style.overflow = '';
            }
        });
    }

    // Gallery Lightbox - SUPER SIMPLE VERSION THAT WORKS!
    console.log('Gallery script loaded!'); // Debug
    
    const galleryItems = document.querySelectorAll('.gallery-item');
    console.log('Found gallery items:', galleryItems.length); // Debug
    
    // Create modal if it doesn't exist
    let modal = document.getElementById('galleryModal');
    if (!modal) {
        console.log('Creating modal...'); // Debug
        modal = document.createElement('div');
        modal.id = 'galleryModal';
        modal.className = 'gallery-modal';
        modal.innerHTML = `
            <button class="modal-close" aria-label="Zavrieť">&times;</button>
            <div class="modal-content">
                <img id="modalImage" src="" alt="Náhľad">
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    const modalImage = document.getElementById('modalImage');
    const modalClose = modal.querySelector('.modal-close');
    
    // Click on gallery item - OPEN LIGHTBOX
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Gallery item clicked!', index); // Debug
            const imageUrl = this.dataset.image || this.querySelector('img').src;
            console.log('Image URL:', imageUrl); // Debug
            modalImage.src = imageUrl;
            modal.classList.add('active');
            modal.style.display = 'flex';
            body.style.overflow = 'hidden';
        });
    });
    
    // Click on X button - CLOSE
    if (modalClose) {
        modalClose.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('Close button clicked'); // Debug
            modal.classList.remove('active');
            modal.style.display = 'none';
            body.style.overflow = '';
        });
    }
    
    // Click outside image - CLOSE
    modal.addEventListener('click', function(e) {
        if (e.target === this || e.target.classList.contains('modal-content')) {
            console.log('Outside click'); // Debug
            this.classList.remove('active');
            this.style.display = 'none';
            body.style.overflow = '';
        }
    });
    
    // Press ESC key - CLOSE
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            console.log('ESC pressed'); // Debug
            modal.classList.remove('active');
            modal.style.display = 'none';
            body.style.overflow = '';
        }
    });

    // Smooth scroll behavior for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(targetId);
            
            if (target) {
                const navHeight = document.querySelector('.main-nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll animation to navigation
    let lastScroll = 0;
    const nav = document.querySelector('.main-nav');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            nav.style.transform = 'translateY(0)';
        } else if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down
            nav.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            nav.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
});
