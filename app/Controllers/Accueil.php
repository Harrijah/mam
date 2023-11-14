<?php

namespace App\Controllers;

class Accueil extends BaseController

{
    public function accueil ()
    {
        $data = [
            'pagetitle' => 'Accueil',
        ];


        return view('./template-parts/header', $data)
        .view('./template-parts/navbar')
        .view('./template-parts/mainimage')
        .view('./template-parts/footer');
    }
}


