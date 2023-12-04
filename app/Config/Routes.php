<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
// $routes->get('/', 'Home::index');
$routes->get('/', 'Accueil::accueil');
$routes->get('/contact', 'Contact::contact');
$routes->get('/aboutus', 'Aboutus::aboutus');
// $routes->post('/sendcontact', 'Contact::sendcontact');
$routes->match(['get', 'post'], '/sendcontact', 'Contact::sendcontact');
$routes->match(['get', 'post'], '/sendform', 'Contact::sendform');
