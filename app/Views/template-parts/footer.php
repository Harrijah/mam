
    <div class="modal" id="mymodal">
        <div class="modal-content">
            <!-- <span class="close span-right" id="close">&times;</span> -->
            <div class="modal-header">
                <div class="entete">
                    <h3>Fiche de pré-inscription - MAM Tiazaza</h3>
                </div> 
            </div>
            <div class="modal-body">
                <div class="bodycontainer">
                    <div class="homeform">
                        <form  method="post" action="<?php echo base_url('/sendform'); ?>" id="myform">
                            <span style="text-decoration:underline;">A propos de l'enfant : </span><br><br>
                            <!-- // Nom -->
                            <span>Nom de l'enfant : </span> *
                            <input type="text" name="nom" id="childname" class=""><br>
                            <div id="childnameerror" class=""></div>

                            <!-- // Age -->
                            <span>Age : </span>*
                            <input type="number" name="age" id="select">
                                <?php //if(isset($validation) && $validation->getError('age')): ?>
                                    <!-- <div class="alert alert-danger"><?php // echo $validation->getError('age'); ?></div> -->
                                <?php //endif; ?>

                            <!-- // unite -->
                            <select name="unite" id="">
                                <option value="mois">mois</option>
                                <option value="an">an</option>
                            </select><br>
                            <div id="childageerror" class=""></div>

                            <!-- // Date accouchement -->
                            <span>Date Prévue d'Accouchement (si l'enfant n'est pas encore né) : </span>
                            <input type="date" name="dateaccouchement" id="topinput02"><br><br>


                            <span style="text-decoration:underline;">Planning prévisionnel (à titre informatif) : </span><br><br>

                            
                            <!-- // date debut accueil -->
                            <span>Date de début d'accueil souhaitée : </span>* 
                            <input type="date" name="datedebut" id="datedebutacc" class=""> <br>
                            <div id="datedebuterror" class=""></div>

                            <!-- // Heure par semaine -->
                            <span>Nombre d'heures d'accueil prévues par semaine : </span>*
                            <input type="number" name="heuresemaine" id="heureparsemaine" placeholder="" class="topinput"> 
                            <span>heures/semaine.</span><br>
                            <div id="heuresemaineerror" class=""></div>

                          

                            <div class="mygrid">
                                
                                <span class="monjour">Jour</span>
                                <span class="monarrivee">Heure d'arrivée</span>
                                <span class="mondepart">Heure de départ</span>
                                                            
                                <span class="lundi">Lundi</span><br>
                                <span class="mardi">Mardi</span><br>
                                <span class="mercredi">Mercredi</span><br>
                                <span class="jeudi">Jeudi</span><br>
                                <span class="vendredi">Vendredi</span><br>
                            
                                <!-- // Lundi -->
                                <span class="hideme01">de </span><input type="time" name="lundiarr" id="lundiarrivee">
                                <span class="hideme02">à </span><input type="time" name="lundidep" id="lundidepart">

                                <!-- // Mardi -->
                                <span class="hideme03">de </span><input type="time" name="mardiarr" id="mardiarrivee">
                                <span class="hideme04">à </span><input type="time" name="mardidep" id="mardidepart">

                                <!-- // Mercredi -->
                                <span class="hideme05">de </span><input type="time" name="mercrediarr" id="mercrediarrivee">
                                <span class="hideme06">à </span><input type="time" name="mercredidep" id="mercredidepart">

                                <!-- // Jeudi -->
                                <span class="hideme07">de </span><input type="time" name="jeudiarr" id="jeudiarrivee">
                                <span class="hideme08">à </span><input type="time" name="jeudidep" id="jeudidepart">

                                <!-- // Vendredi -->
                                <span class="hideme09">de </span><input type="time" name="vendrediarr" id="vendrediarrivee">
                                <span class="hideme10">à </span><input type="time" name="vendredidep" id="vendredidepart">

                                <span class="vide01"></span>
                                <span class="vide02"></span>
                                <span class="vide03"></span>
                                <span class="vide04"></span>
                                <span class="vide05"></span>
                                
                            </div>

                            <br><br>

                            <span style="text-decoration:underline;">Coordonnées des parents : </span><br>
                            <span style="display:block; margin-top: 20px; text-decoration:underline; font-weight:bold;">Père</span>

                            <div class="myfather">  

                                <span class="dadname">Nom : </span>
                                <span class="dadtel">Tél : </span>
                                <span class="dadmail">Email : </span>
                                <span class="dadprof">Profession : </span>

                                <!-- // Father  -->
                                <input type="text" name="nomdupere" id="nomdupere">
                                    <?php if(isset($validation) && $validation->getError('nomdupere')): ?>
                                        <div class="alert alert-danger"><?= $validation->getError('nomdupere') ?></div>
                                    <?php endif; ?>
                                <input type="text" name="teldupere" id="teldupere">
                                    <?php if(isset($validation) && $validation->getError('teldupere')): ?>
                                        <div class="alert alert-danger"><?= $validation->getError('teldupere') ?></div>
                                    <?php endif; ?>
                                <input type="text" name="maildupere" id="maildupere">
                                    <?php if(isset($validation) && $validation->getError('maildupere')): ?>
                                        <div class="alert alert-danger"><?= $validation->getError('maildupere') ?></div>
                                    <?php endif; ?>
                                <input type="text" name="profdupere" id="profdupere">
                                    <?php if(isset($validation) && $validation->getError('profdupere')): ?>
                                        <div class="alert alert-danger"><?= $validation->getError('profdupere') ?></div>
                                    <?php endif; ?>
                            </div>

                            <span style="display:block; margin-top: 20px; text-decoration:underline; font-weight:bold;">Mère</span>
                            <div class="mymother">
                                <span class="momname">Nom : </span>
                                <span class="momtel">Tél : </span>
                                <span class="mommail">Email : </span>
                                <span class="momprof">Profession : </span>

                                <!-- // Mother -->
                                <input type="text" name="nomdemere" id="nomdemere">
                                    <div id="nomdemereerror" class=""></div>

                                <input type="text" name="teldemere" id="teldemere">
                                    <div id="teldemereerror" class=""></div>

                                <input type="text" name="maildemere" id="maildemere">
                                    <div id="maildemereerror" class=""></div>

                                <input type="text" name="profdemere" id="profdemere">
                                    <div id="profdemereerror" class=""></div>

                                
                            </div>

                           
                        
                            <!-- <input type="submit" value="Envoyer" id="validateform"> -->
                            <button type="submit" id="validateform">Envoyer</button>
                            <!-- <a href="javascript:void(0)" id="validateform">Envoyer</a> -->
                        </form>
                    </div>
                </div>

            </div>
            <div class="modal-footer">
                <button id="closeme">Fermer</button>
            </div>
        </div>
    </div>


    <div class="mamfooter">
        <div class="footercontainer">
            <!-- <div class="footcol01" id="footcol01"> -->
                <div class="mapform"> 
                    <h3>Nous trouver</h3>
                    <div class="googlemap">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1928.1352188142384!2d1.512325115358315!3d43.607819944187135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebd677a6fc3e7%3A0x1c996cc1c0ab0553!2s101%20Av.%20des%20Mourlingues%2C%2031130%20Balma%2C%20France!5e0!3m2!1sfr!2smg!4v1700145910337!5m2!1sfr!2smg" width="600" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>   
                </div>
            <!-- </div> -->

            <div class="footcol02">
                <h3>Liens utiles</h3>
                <ul>
                    <li><a href="<?php echo base_url('/aboutus'); ?>">A propos de Tiazaza</a></li>
                    <!-- <li><a href="">Créer un compte</a></li> -->
                    <li><a href="javascript:void(0)" id="preadmission">Formulaire de pré-admission</a></li>
                    <li><a href="<?php echo base_url('/contact'); ?>">Nous contacter</a></li>
                    <li><a href="https://www.facebook.com/mamtiazaza/"><i class="fab fa-facebook display-1 fontawe"></i></a></li>
                </ul>
            </div>
            <div class="footcol03">
                <h3>Nos coordonnées</h3>
                <ul>
                    <li><b>Adresse</b> : 101 Avenue des Mourlingues 31130 Balma</li>
                    <li><b>Horaires</b> : 
                        <ul>
                            <li>Lundi - Vendredi : 7h30 - 19h00</li>
                            <li>Fermé le week-end et les jours fériés</li>
                        </ul>
                    </li>
                    <li><b>Mail</b> : mamtiazaza[at]gmail.com</li>
                    <li><b>Téléphone</b> : 07 81 25 56 40 / 06 15 56 46 61 / 07 70 80 33 10</li>
                </ul>

            </div>

        </div>
    </div>

    
    <script type="text/javascript" src="<?php echo base_url('./style/js/all.min.js'); ?>"></script>
    <script type="text/javascript" src="<?php echo base_url('./style/js/all.js'); ?>"></script>
    <script type="text/javascript" src="<?php echo base_url('./style/js/jquery.min.js'); ?>"></script>
    <script type="text/javascript" src="<?php echo base_url('./style/js/jquery.js'); ?>"></script>
    <script type="text/javascript" src="<?php echo base_url('./style/js/bootstrap.min.js'); ?>"></script>
    <script type="text/javascript" src="<?php echo base_url('./js/main.js'); ?>"></script>
    <script type="text/javascript" src="<?php echo base_url('./js/secondary.js') ?>"></script>
    <script type="text/javascript" src="<?php echo base_url('./js/modal.js') ?>"></script>

</body>
</html>