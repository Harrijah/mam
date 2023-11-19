<?php

namespace App\Controllers;

class Contact extends BaseController

{
    public function contact ()
    {
        $data = [
            'pagetitle' => 'Contact'
        ];

        return view('./template-parts/header', $data)
        .view('./template-parts/navbar')
        .view('./template-parts/form')
        .view('./template-parts/footer');

    }




}

