<?php

namespace App\Controllers;

use App\Models\Mail;

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
    public function sendcontact()
    
        {
            $uri = service('uri');
            $lien = $uri->getSegment(1);
            $validation = \Config\Services::validation();
            $email = \Config\Services::email();
            
            $model = model(Mail::class);
            $data = [
                'pagetitle' => 'Contact',
                'maclasse' => $lien,
            ];
            $data += $model->mailcontact();
            helper('form');


            if($this->request->getMethod() == 'post'){
                $rules = [
                    'nom' => 'required',
                    'prenom' => 'required',
                    'email' => 'required',
                    'telephone' => 'required',
                    'message' => 'required',
                ];

                $errors = [
                    'nom' => [
                        'required' => 'Veuillez renseigner votre nom.'
                    ],
                    'prenom' => [
                        'required' => 'Veuillez renseigner votre prenom.'
                    ],
                    'email' => [
                        'required' => 'Veuillez remplir par votre adresse e-mail.'
                    ],
                    'telephone' => [
                        'required' => 'Veuillez remplir par un numéro de téléphone valide.'
                    ],
                    'message' => [
                        'required' => 'Vous avez oublié d\'écrire votre message.'
                    ]
                ];
            }

            if(! $this->validate($rules, $errors)){
                $nom = $this->request->getPost('nom');
                $prenom = $this->request->getPost('prenom');
                $email = $this->request->getPost('email');
                $telephone = $this->request->getPost('telephone');
                $message = $this->request->getPost('message');
                $data = [
                    'validation' =>  $this->validator,
                    'errors' => $this->validator->getErrors(),
                    'nom' => $nom,           
                    'prenom' => $prenom,           
                    'email' => $email,           
                    'telephone' => $telephone,           
                    'message' => $message,      
                    'pagetitle' => 'Contact'     
                ];

            } else {
                $email->setFrom('noreply@test.axel.mg', 'Site web Tiazaza');
                $email->setTo('andrianarivohari@gmail.com');
                $email->setBCC('contact@axel.mg');
                $email->setSubject('Nouveau message de '. $data['nom']);
                $email->setMessage(
                    $data['message'] . 
                    'Message de '. $data['nom'] .' ' . $data['nom'] .  
                    'Téléphone : '. $data['telephone']
                );
                $email->send();
                $data['nom'] = "";
                $data['prenom'] = "";
                $data['email'] = "";
                $data['telephone'] = "";
                $data['message'] = "";
            }
            return view('./template-parts/header', $data)
            .view('./template-parts/navbar')
            .view('./template-parts/form')
            .view('./template-parts/footer');
            // return redirect()->to('/');

        }
        public function sendform()
            {
                $uri = service('uri');
                $lien = $uri->getSegment(1);
                $validation = \Config\Services::validation();
                $email = \Config\Services::email();
                
                $model = model(Mail::class);
                $data = [
                    'pagetitle' => 'Accueil',
                    'maclasse' => $lien,
                ];
                $data += $model->mailinfo();
                helper('form');
    
    
                if($this->request->getMethod() == 'post'){
                    $rules = [
                        'nom' => 'required',
                        'age' => 'required',
                        'unite' => 'required',
                        'datedebut' => 'required',
                        'heuresemaine' => 'required',
                        'nomdemere' => 'required',
                        'teldemere' => 'required',
                        'profdemere' => 'required',

                    ];
    
                    $errors = [
                        'nom' => [
                            'required' => 'Veuillez remplir ce champ.'
                        ],
                        'age' => [
                            'required' => 'Veuillez remplir ce champ.'
                        ],
                        'unite' => [
                            'required' => 'Veuillez remplir ce champ.'
                        ],
                        'datedebut' => [
                            'required' => 'Veuillez remplir ce champ.'
                        ],
                        'heuresemaine' => [
                            'required' => 'Veuillez remplir ce champ.'
                        ],
                        'nomdemere' => [
                            'required' => 'Veuillez remplir ce champ.'
                        ],
                        'teldemere' => [
                            'required' => 'Veuillez remplir ce champ.'
                        ],
                        'profdemere' => [
                            'required' => 'Veuillez remplir ce champ.'
                        ]
                    ];
                }
    
                if (! $this->validate($rules, $errors)) {
                    $data = [
                        'validation' =>  $this->validator,
                        'errors' => $this->validator->getErrors(),
                        'pagetitle' => $lien,
                        'maclasse' => $lien,                    
                    ];
                } else {
                    $email->setFrom('noreply@test.axel.mg', 'Site web Tiazaza');
                    $email->setTo('andrianarivohari@gmail.com');
                    $email->setBCC('contact@axel.mg');
                    $email->setSubject('Nouvelle inscription');
                    $email->setMessage(
                    "A propos de l'enfant :

                        Nom de l'enfant : " . $data['nom'] ." 
                        Age : " . $data['age'] ." " . $data['unite'] ."
                        Date Prévue d'Accouchement (si l'enfant n'est pas encore né) : " . $data['dateaccouchement'] ." 

                        Planning prévisionnel (à titre informatif) :

                        Date de début d'accueil souhaitée : " . $data['datedebut'] ." 
                        Nombre d'heures d'accueil prévues par semaine : " . $data['heuresemaine'] ."  heures/semaine.
                        Lundi : de " . $data['lundiarr'] ." à " . $data['lundidep'] ." 
                        Mardi : de " . $data['mardiarr'] ."  à " . $data['mardidep'] ." 
                        Mercredi : de " . $data['mercrediarr'] ." à " . $data['mercredidep'] ." 
                        Jeudi : à " . $data['jeudiarr'] ." à " . $data['jeudidep'] ." 
                        Vendredi : de " . $data['vendrediarr'] ." à " . $data['vendredidep'] ." 


                        Coordonnées des parents :
                        Père : 
                        Nom : " . $data['nomdupere'] ." 
                        Tél : " . $data['teldupere'] ." 
                        Email : " . $data['maildupere'] ." 
                        Profession :" . $data['profdupere'] ." 

                        Mère :
                        Nom : " . $data['nomdemere'] ." 
                        Tél : " . $data['teldemere'] ." 
                        Email : " . $data['maildemere'] ." 
                        Profession : " . $data['profdemere']
                        
                    );
                    $email->send();
                    // var_dump($data);
                    return redirect()->to('/');
                }

    
            }



}

