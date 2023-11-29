<div class="menu" id="menu">
    <nav>
        <div class="logo">
            <a href=""><img src="<?php echo base_url('./images/logo.png'); ?>" alt="logo"></a>
        </div>
        <ul>
            <li><a href="<?php echo base_url('/') ?>" class="<?php echo ($maclasse == '') ? 'highlight' : ''; ?>">Accueil</a></li>
            <li><a href="<?php echo base_url('/aboutus') ?>" class="<?php echo ($maclasse == 'aboutus') ? 'highlight' : ''; ?>">A propos de nous</a></li>
            <li><a href="<?php echo base_url('/contact') ?>" class="<?php echo ($maclasse == 'contact') ? 'highlight' : ''; ?>">Contact</a></li>
        </ul>
    </nav>
</div>