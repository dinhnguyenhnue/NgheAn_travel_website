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
                    <a href="index.html" class="hover:opacity-80 transition-opacity">NGHE AN</a>
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
                <button class="w-10 h-10 flex items-center justify-center rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all duration-300">
                    <span class="material-symbols-outlined text-[20px]">search</span>
                </button>
                <button id="menu-toggle" class="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-primary/5 text-primary">
                    <span class="material-symbols-outlined">menu</span>
                </button>
            </div>
        </nav>
    </div>
    
    <!-- Page Transition Overlay -->
    <div class="page-transition-overlay" id="page-overlay"></div>
    `;
    navContainer.innerHTML = navHtml;
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
                    <div class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                        <span class="material-symbols-outlined text-sm">public</span>
                    </div>
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
