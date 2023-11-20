<?php
    namespace App\Controllers;

    Class Aboutus extends BaseController
    {
        public function aboutus ()
        {
            $data = [
                'pagetitle' => 'A propos de Tiazaza',
            ];

            return view('./template-parts/header', $data)
            .view('./template-parts/navbar')
            .view('./template-parts/aboutus')
            .view('./template-parts/footer');
        }
    }