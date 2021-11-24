const { Router } = require('express');
const { getPeople, createPerson, getPersonById, deletePerson, updatePerson } = require('../controllers/indexController');
const router =  Router(); 

router.get('/people/all', getPeople );
router.get('/people/:id', getPersonById);  
router.post('/people/new', createPerson);
router.delete('/people/:id', deletePerson);
router.put('/people/:id', updatePerson);

module.exports = router; 