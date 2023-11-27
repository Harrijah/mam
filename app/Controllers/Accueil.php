<?php

namespace App\Controllers;

class Accueil extends BaseController

{
    public function accueil ()
    {
        $uri = service('uri');
        $lien = $uri->getSegment(1);
        $data = [
            'pagetitle' => 'Accueil',
            'maclasse' => $lien,
        ];


        return view('./template-parts/header', $data)
        .view('./template-parts/navbar')
        .view('./template-parts/mainimage')
        .view('./template-parts/bannerhome')
        .view('./template-parts/footer');
    }
}


