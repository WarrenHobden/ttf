        (function () {
            var pages = {
                home: document.getElementById('page-home'),
                drug: document.getElementById('page-drug'),
                emergency: document.getElementById('page-emergency'),
                unavailable: document.getElementById('page-unavailable')
            };
            var protoBtns = document.querySelectorAll('.proto-btn');

            function showPage(name) {
                if (!pages[name]) name = 'home';
                Object.keys(pages).forEach(function (key) {
                    pages[key].classList.toggle('active', key === name);
                });
                protoBtns.forEach(function (b) {
                    var on = b.dataset.page === name;
                    b.classList.toggle('active', on);
                    if (on) { b.setAttribute('aria-current', 'page'); }
                    else { b.removeAttribute('aria-current'); }
                });
                // Close any open mobile menus on navigation
                document.querySelectorAll('.frank-mobile-nav.open').forEach(function (m) { m.classList.remove('open'); });
                document.querySelectorAll('.frank-menu-toggle').forEach(function (t) { t.setAttribute('aria-expanded', 'false'); });
                window.scrollTo({ top: 0, behavior: 'auto' });
            }

            // Prototype bar
            protoBtns.forEach(function (btn) {
                btn.addEventListener('click', function () {
                    var name = btn.dataset.page;
                    showPage(name);
                    history.replaceState(null, '', '#' + name);
                });
            });

            // In-page navigation links (logo, emergency links, breadcrumb, footer)
            document.querySelectorAll('[data-nav]').forEach(function (link) {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    var name = link.dataset.nav;
                    showPage(name);
                    history.replaceState(null, '', '#' + name);
                });
            });

            // Mobile menu toggles
            document.querySelectorAll('.frank-menu-toggle').forEach(function (toggle) {
                toggle.addEventListener('click', function () {
                    var panel = document.getElementById(toggle.getAttribute('aria-controls'));
                    if (!panel) return;
                    var open = panel.classList.toggle('open');
                    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
                });
            });

            // Scenario card disclosures (one open at a time, within the emergency page)
            document.querySelectorAll('.scenario-header').forEach(function (header) {
                header.addEventListener('click', function () {
                    var card = header.closest('.scenario-card');
                    var isOpen = card.classList.contains('open');
                    document.querySelectorAll('.scenario-card').forEach(function (c) {
                        c.classList.remove('open');
                        c.querySelector('.scenario-header').setAttribute('aria-expanded', 'false');
                    });
                    if (!isOpen) {
                        card.classList.add('open');
                        header.setAttribute('aria-expanded', 'true');
                    }
                });
            });

            // Drug page: accordions (independent toggles)
            document.querySelectorAll('.accordion-trigger').forEach(function (btn) {
                btn.addEventListener('click', function () {
                    var acc = btn.closest('.accordion');
                    var open = acc.classList.toggle('open');
                    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
                });
            });

            // Drug page: jump links open any targeted accordion, then scroll
            document.querySelectorAll('.jump-nav a[href^="#"]').forEach(function (link) {
                link.addEventListener('click', function (e) {
                    var target = document.getElementById(link.getAttribute('href').slice(1));
                    if (!target) return;
                    e.preventDefault();
                    if (target.classList.contains('accordion') && !target.classList.contains('open')) {
                        target.classList.add('open');
                        target.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'true');
                    }
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                });
            });

            // Honour an initial hash (e.g. shared #emergency link)
            var initial = (location.hash || '').replace('#', '');
            if (initial && pages[initial]) { showPage(initial); }
        })();
