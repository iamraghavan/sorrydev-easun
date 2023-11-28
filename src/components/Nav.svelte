<script>


import _ from 'lodash'; // Import lodash

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/' },
  { label: 'Products', href: '/' },
  { label: 'Manufacturing', href: '/' },
  { label: 'Services', href: '/' },
  { label: 'Contact us', href: '/' },
];







      let currentYear = new Date().getFullYear();
  let copyright = `Copyright Ⓒ 2021 - ${currentYear} Easun  Engineering`;
</script>
  <div class="header sticky-bar">
    <div class="container">
      <div class="main-header">
        <div class="header-left">
          <div class="header-logo"><a class="d-flex" href="index.html"><img alt="Agon" src="assets/imgs/template/logo.svg"></a></div>
          <div class="header-nav">
            <nav class="nav-main-menu d-none d-xl-block">
              <ul class="main-menu">
                {#each menuItems as { label, href }}
                <li class="has-children"><a href={href}>{label}</a></li>
              {/each}
              </ul>
            </nav>
            <div class="burger-icon burger-icon-white"><span class="burger-icon-top"></span><span class="burger-icon-mid"></span><span class="burger-icon-bottom"></span></div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  
  <div class="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
    <div class="mobile-header-wrapper-inner">
      <div class="mobile-header-content-area">
        <div class="perfect-scroll">
          <div class="mobile-menu-wrap mobile-header-border">
            <nav>
              <ul class="mobile-menu font-heading">
                {#each menuItems as { label, href }}
                <li class="has-children"><a href={href}>{label}</a></li>
              {/each}
              </ul>
            </nav>
          </div>
          <div class="site-copyright color-gray-400">{copyright} <br>Designed by<a href="https://bumblebees.co.in/">&nbsp; Bumble Bees IT Solutions</a></div>
        </div>
      </div>
    </div>
  </div>
  