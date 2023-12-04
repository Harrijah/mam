<div class="menu" id="menu">
    <nav>
        <div class="logo">
            <a href="<?php echo base_url('/') ?>"><img src="<?php echo base_url('./images/logo.png'); ?>" alt="logo"></a>
        </div>
        <ul>
            <li><a href="<?php echo base_url('/') ?>" class="<?php if(isset($maclasse)) echo ($maclasse == '') ? 'highlight' : ''; ?>">Accueil</a></li>
            <li><a href="<?php echo base_url('/aboutus') ?>" class="<?php if(isset($maclasse)) echo ($maclasse == 'aboutus') ? 'highlight' : ''; ?>">A propos de nous</a></li>
            <li><a href="<?php echo base_url('/contact') ?>" class="<?php if(isset($maclasse)) echo ($maclasse == 'contact') ? 'highlight' : ''; ?>">Contact</a></li>
        </ul>
        <div id="mobilemenu">
            <li><a href="<?php echo base_url('/') ?>" class="<?php if(isset($maclasse)) echo ($maclasse == '') ? 'highlight' : ''; ?>">Accueil</a></li>
            <li><a href="<?php echo base_url('/aboutus') ?>" class="<?php if(isset($maclasse)) echo ($maclasse == 'aboutus') ? 'highlight' : ''; ?>">A propos de nous</a></li>
            <li><a href="<?php echo base_url('/contact') ?>" class="<?php if(isset($maclasse)) echo ($maclasse == 'contact') ? 'highlight' : ''; ?>">Contact</a></li>
        </div>
    </nav>
</div>