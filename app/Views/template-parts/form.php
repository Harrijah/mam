<section id="contactback">
    <div class="formcontainer">
        <div class="formtext">
            <h1>Contactez-nous</h1>
            <p>Bienvenue à la MAM Tiazaza, votre maison d'assistants maternels dédiée à offrir à votre enfant un environnement chaleureux et sécurisé. Nous serons ravis de répondre à vos questions et de discuter de la manière dont nous pouvons répondre aux besoins uniques de votre enfant. Notre objectif principal est de favoriser le développement global des enfants, en encourageant leur croissance physique, émotionnelle, sociale et cognitive à travers des activités éducatives adaptées à leur âge.</p><br>
            <p>Rejoignez notre communauté dévouée d'assistantes maternelles agréées, où votre enfant trouvera un environnement chaleureux, sûr et stimulant pour grandir et s'épanouir. Notre engagement envers le bien-être de chaque enfant est notre priorité absolue. Nous sommes impatients de vous accueillir dans notre communauté chaleureuse et attentionnée. Découvrez la tranquillité d'esprit que nous pouvons vous offrir en rejoignant notre famille de parents et d'enfants.</p><br>
            <p>Pour plus d'informations, vous pouvez nous contacter aux coordonnées suivantes :</p>
            <ul>
                <li>Adresse : 101 Avenue des Mourlingues 31130 Balma</li>
                <li>Horaires : Lundi - Vendredi : 7h30 - 19h00 (Fermé le week-end et les jours fériés)</li>
                <li>Email : mamtiazaza[at]gmail.com</li>
                <li>Téléphone : 07 81 25 56 40</li>
            </ul>
        </div>
        <div class="formform">

            <form action="<?php echo base_url('/sendcontact'); ?>" method="post"  enctype="form-data">
                <label for="nom">Votre nom</label>
                <input type="text" name="nom" id="nom"  value="<?php if(isset($nom)) echo ($nom) ?>">
                <?php if(isset($validation) && $validation->getError('nom')): ?>
                    <div class="alert alert-danger"><?= $validation->getError('nom') ?></div>
                <?php endif; ?>
                
                <label for="prenom">Votre prénom</label>
                <input type="text" name="prenom" id="prenom" value="<?php if(isset($prenom)) echo ($prenom) ?>">
                <?php if(isset($errors['prenom'])) echo '<div class="alert alert-danger">' . $errors['prenom'] . '</div>'; ?>
                
                <label for="email">Votre email</label>
                <input type="email" name="email" id="email" value="<?php if(isset($email)) echo ($email) ?>">
                <?php if(isset($errors['email'])) echo '<div class="alert alert-danger">' . $errors['email'] . '</div>'; ?>
                
                <label for="telephone">Votre téléphone</label>
                <input type="text" name="telephone" id="telephone" value="<?php if(isset($telephone)) echo ($telephone) ?>">
                <?php if(isset($errors['telephone'])) echo '<div class="alert alert-danger">' . $errors['telephone'] . '</div>'; ?>
                
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Votre message, ici"></textarea>
                <?php if(isset($errors['message'])) echo '<div class="alert alert-danger">' . $errors['message'] . '</div>'; ?>
                
                <button type="submit">Envoyer</button>

                
            </form>
        </div>

    </div>

</section>