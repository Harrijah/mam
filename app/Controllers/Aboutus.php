<?php
    namespace App\Controllers;

    Class Aboutus extends BaseController
    {
        public function aboutus ()
        {
            $uri = service('uri');
            $lien = $uri->getSegment(1);
            $data = [
                'pagetitle' => 'A propos de Tiazaza',
                'maclasse' => $lien,
            ];

            return view('./template-parts/header', $data)
            .view('./template-parts/navbar')
            .view('./template-parts/aboutus')
            .view('./template-parts/footer');
        }
    }