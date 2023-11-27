<div class="menu" id="menu">
    <div class="adress">
        <span>
            &nbsp;<i class="fas fa-map-marker-alt" style=""></i>&nbsp; 101, Avenue des Mourlingues 31130 Balma &nbsp; &nbsp;
        </span>
        <span>
            <i class="fa fa-phone" style="rotate:90deg;"></i>&nbsp; 07 81 25 56 40&nbsp;&nbsp;
        </span>
    </div>
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