document.addEventListener('DOMContentLoaded', () => {
    const activePage = document.body.getAttribute('data-page');
    renderNavbar(activePage);
    renderFooter();
});

function renderNavbar(activeId) {
    const navContainer = document.getElementById('nav-container');
    if (!navContainer) return;

    // Premium Floating Glassmorphism Navbar
    const navHtml = `
    <div class="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-6xl">
        <nav class="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full px-8 py-3 shadow-2xl flex justify-between items-center transition-all duration-500 hover:bg-white/15">
            <div class="flex items-center gap-8">
                <div class="text-xl font-headline font-black tracking-widest text-primary uppercase">
                    <a href="index.html" class="hover:opacity-80 transition-opacity">NGHỆ AN</a>
                </div>
                <div class="hidden lg:flex gap-8 items-center font-body text-[13px] font-semibold uppercase tracking-tighter">
                    ${siteData.navigation.map(item => `
                        <a class="relative group transition-colors duration-300 ${item.id === activeId ? 'text-primary' : 'text-on-surface/60 hover:text-primary'}" 
                           href="${item.url}">
                            ${item.label}
                            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${item.id === activeId ? 'w-full' : ''}"></span>
                        </a>
                    `).join('')}
                </div>
            </div>
            <div class="flex items-center gap-4">
                <a href="https://www.youtube.com/watch?v=RS-6bREYwHs&list=RDRS-6bREYwHs&start_radio=1" target="_blank" class="w-10 h-10 flex items-center justify-center rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all duration-300" title="Nghe Dân ca Ví Giặm">
                    <span class="material-symbols-outlined text-[20px]">music_note</span>
                </a>
                <button id="search-toggle" class="w-10 h-10 flex items-center justify-center rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all duration-300">
                    <span class="material-symbols-outlined text-[20px]">search</span>
                </button>
                <button id="menu-toggle" class="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-primary/5 text-primary">
                    <span class="material-symbols-outlined">menu</span>
                </button>
            </div>
        </nav>
    </div>

    <!-- Search Overlay -->
    <div id="search-overlay" class="fixed inset-0 z-[110] bg-background/95 backdrop-blur-3xl flex items-center justify-center opacity-0 pointer-events-none transition-all duration-500">
        <button id="search-close" class="absolute top-10 right-10 text-primary hover:rotate-90 transition-transform duration-300">
            <span class="material-symbols-outlined text-4xl">close</span>
        </button>
        <div class="w-full max-w-2xl px-8">
            <div class="relative">
                <input type="text" placeholder="Tìm kiếm di sản, địa danh..." 
                       class="w-full bg-transparent border-b-2 border-primary/20 py-4 text-3xl font-headline focus:outline-none focus:border-primary transition-colors text-primary placeholder:text-primary/30">
                <span class="absolute right-0 top-1/2 -translate-y-1/2 material-symbols-outlined text-primary text-3xl">search</span>
            </div>
            <div class="mt-8 flex flex-wrap gap-3">
                <span class="text-xs font-bold uppercase tracking-widest text-on-surface/40 w-full mb-2">Gợi ý tìm kiếm:</span>
                <button class="px-4 py-2 rounded-full bg-primary/5 text-primary text-xs font-bold hover:bg-primary hover:text-white transition-all">Nam Đàn</button>
                <button class="px-4 py-2 rounded-full bg-primary/5 text-primary text-xs font-bold hover:bg-primary hover:text-white transition-all">Cửa Lò</button>
                <button class="px-4 py-2 rounded-full bg-primary/5 text-primary text-xs font-bold hover:bg-primary hover:text-white transition-all">Ví Giặm</button>
                <button class="px-4 py-2 rounded-full bg-primary/5 text-primary text-xs font-bold hover:bg-primary hover:text-white transition-all">Pù Mát</button>
            </div>
        </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div id="mobile-menu" class="fixed inset-0 z-[105] bg-primary transform translate-x-full transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)]">
        <div class="h-full flex flex-col justify-center px-12 py-24">
            <div class="space-y-8">
                ${siteData.navigation.map((item, index) => `
                    <div class="overflow-hidden">
                        <a href="${item.url}" class="mobile-nav-link block text-4xl font-headline font-bold text-white/40 hover:text-white transition-colors duration-300 transform translate-y-full" data-index="${index}">
                            ${item.label}
                        </a>
                    </div>
                `).join('')}
            </div>
            
            <div class="mt-20 pt-10 border-t border-white/10 opacity-0 transform translate-y-10" id="mobile-menu-footer">
                <p class="text-white/60 font-body text-sm mb-4 italic">"${siteData.slogan}"</p>
                <div class="flex gap-4">
                    <a href="${siteData.footer.socials.facebook}" target="_blank" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors">
                        <span class="material-symbols-outlined text-sm">public</span>
                    </a>
                </div>
            </div>
        </div>
        <button id="menu-close" class="absolute top-10 right-10 text-white hover:rotate-90 transition-transform duration-300">
            <span class="material-symbols-outlined text-4xl">close</span>
        </button>
    </div>
    
    <!-- Page Transition Overlay -->
    <div class="page-transition-overlay" id="page-overlay"></div>
    `;
    navContainer.innerHTML = navHtml;

    // Toggle Logic
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    const menuFooter = document.getElementById('mobile-menu-footer');

    const searchToggle = document.getElementById('search-toggle');
    const searchClose = document.getElementById('search-close');
    const searchOverlay = document.getElementById('search-overlay');

    // Menu Open
    menuToggle?.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-full');
        gsap.to(mobileLinks, {
            y: 0,
            color: (i, el) => el.getAttribute('href').includes(activeId) ? '#ffffff' : 'rgba(255,255,255,0.4)',
            stagger: 0.1,
            delay: 0.4,
            duration: 0.8,
            ease: "power4.out"
        });
        gsap.to(menuFooter, {
            y: 0,
            opacity: 1,
            delay: 0.8,
            duration: 0.6
        });
    });

    // Menu Close
    menuClose?.addEventListener('click', () => {
        gsap.to(mobileLinks, {
            y: '100%',
            duration: 0.4,
            ease: "power4.in"
        });
        gsap.to(menuFooter, {
            y: 20,
            opacity: 0,
            duration: 0.3
        });
        setTimeout(() => {
            mobileMenu.classList.add('translate-x-full');
        }, 400);
    });

    // Search Toggle
    searchToggle?.addEventListener('click', () => {
        searchOverlay.classList.remove('opacity-0', 'pointer-events-none');
        gsap.fromTo(searchOverlay.querySelector('div'), 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
        );
    });

    searchClose?.addEventListener('click', () => {
        gsap.to(searchOverlay.querySelector('div'), {
            y: 30,
            opacity: 0,
            duration: 0.4,
            onComplete: () => {
                searchOverlay.classList.add('opacity-0', 'pointer-events-none');
            }
        });
    });
}

function renderFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (!footerContainer) return;

    const footerHtml = `
    <footer class="w-full bg-stone-950 text-white mt-32 py-24 px-8">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
            <div class="md:col-span-5 space-y-8">
                <div class="text-3xl font-headline font-bold tracking-widest uppercase text-primary">${siteData.name}</div>
                <p class="text-stone-400 font-body text-sm leading-relaxed max-w-sm">
                    ${siteData.footer.description}
                </p>
                <div class="flex gap-4">
                    <a href="${siteData.footer.socials.facebook}" target="_blank" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer group">
                        <span class="material-symbols-outlined text-sm">public</span>
                    </a>
                    <a href="${siteData.footer.socials.youtube}" target="_blank" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer group">
                        <span class="material-symbols-outlined text-sm">play_circle</span>
                    </a>
                </div>
            </div>
            <div class="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
                <div class="space-y-6">
                    <h5 class="text-primary font-bold text-xs uppercase tracking-widest">Khám phá</h5>
                    <ul class="space-y-4 font-body text-xs text-stone-400">
                        ${siteData.footer.links.slice(0, 3).map(link => `
                            <li><a class="hover:text-white transition-colors" href="${link.url}">${link.label}</a></li>
                        `).join('')}
                    </ul>
                </div>
                <div class="space-y-6">
                    <h5 class="text-primary font-bold text-xs uppercase tracking-widest">Thông tin</h5>
                    <ul class="space-y-4 font-body text-xs text-stone-400">
                        ${siteData.footer.links.slice(3).map(link => `
                            <li><a class="hover:text-white transition-colors" href="${link.url}">${link.label}</a></li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        </div>
        <div class="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-[10px] uppercase font-bold tracking-widest text-stone-500">
                ${siteData.footer.copyright}
            </p>
            <div class="text-[10px] uppercase font-bold tracking-widest text-stone-500">
                Design by Chronicle Heritage
            </div>
        </div>
    </footer>`;
    footerContainer.innerHTML = footerHtml;
}
