<?php
    namespace App\Models;
    
    use CodeIgniter\Model;

    class Mail extends Model
    {
        protected $allowedFields = ['nom', 'age', 'email', 'telephone', 'message', 'unite', 'dateaccouchement', 'datedebut', 'heuresemaine', 'lundiarr', 'lundidep', 'mardiarr', 'mardidep', 'mercrediarr', 'mercredidep', 'jeudiarr', 'jeudidep', 'vendrediarr', 'vendredidep', 'nomdupere', 'teldupere', 'maildupere', 'profdupere', 'nomdemere', 'teldemere', 'maildemere', 'profdemere'];

        public function mailinfo()
        {
            $data = [
                'nom' => ($_POST['nom']),
                'age' => ($_POST['age']),
                'unite' => ($_POST['unite']),
                'dateaccouchement' => ($_POST['dateaccouchement']),
                'datedebut' => ($_POST['datedebut']),
                'heuresemaine' => ($_POST['heuresemaine']),
                'lundiarr' => ($_POST['lundiarr']),
                'lundidep' => ($_POST['lundidep']),
                'mardiarr' => ($_POST['mardiarr']),
                'mardidep' => ($_POST['mardidep']),
                'mercrediarr' => ($_POST['mercrediarr']),
                'mercredidep' => ($_POST['mercredidep']),
                'jeudiarr' => ($_POST['jeudiarr']),
                'jeudidep' => ($_POST['jeudidep']),
                'vendrediarr' => ($_POST['vendrediarr']),
                'vendredidep' => ($_POST['vendredidep']),
                'nomdupere' => ($_POST['nomdupere']),
                'teldupere' => ($_POST['teldupere']),
                'maildupere' => ($_POST['maildupere']),
                'profdupere' => ($_POST['profdupere']),
                'nomdemere' => ($_POST['nomdemere']),
                'teldemere' => ($_POST['teldemere']),
                'maildemere' => ($_POST['maildemere']),
                'profdemere' => ($_POST['profdemere']),
            ];
            return $data;
        }

        public function mailcontact()
        {
            $data = [
                'nom' => ($_POST['nom']),
                'prenom' => ($_POST['prenom']),
                'email' => ($_POST['email']),
                'telephone' => ($_POST['telephone']),
                'message' => ($_POST['message'])
            ];
            return $data;
        }



















    }