<?php

namespace App\Controllers;

class Contact extends BaseController

{
    public function contact ()
    {
        $uri = service('uri');
        $lien = $uri->getSegment(1);
        $data = [
            'pagetitle' => 'Contact',
            'maclasse' => $lien,
        ];

        return view('./template-parts/header', $data)
        .view('./template-parts/navbar')
        .view('./template-parts/form')
        .view('./template-parts/footer');

    }




}

