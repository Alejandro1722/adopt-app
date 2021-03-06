const { Pool } = require('pg'); 

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Rodrigovas.95',
    database: 'adopt',
    port: '5432'
})

const getPeople = async( req, res ) => {
    const response = await pool.query(`SELECT * FROM "people"`);
    res.status(200).json(response.rows); 
}
const getPersonById = async( req, res ) => {
    const response = await pool.query(`SELECT * FROM "people" where id = ${ req.params.id }`);
    res.status(200).json(response.rows); 
}
const createPerson = async( req, res ) => {
    
    const { fullname, birthday, person, adopt } = req.body; 
    
    await pool.query( `INSERT INTO "people" (fullname, birthday, person, adopt )
    VALUES ('${ fullname }','${ birthday }','${ person }','${ adopt }')`);
     
    res.status(200).json({
        message: 'Person Added Successfully',
        body: {
            person: { fullname, birthday, person, adopt  }
        }
    }); 
}
const deletePerson = async( req, res ) => {
    await pool.query(`DELETE FROM "people" WHERE id = ${ req.params.id }`);
    res.status(200).json({
        ok: true,
        message: `Person ${ req.params.id } has been eliminated`,
    }); 
}
const updatePerson = async( req, res ) => {

    const id = req.params.id; 
    const { fullname, birthday, person, adopt } = req.body;

    const response = await pool.query(`UPDATE "people" 
    SET fullname='${ fullname }', birthday='${ birthday }', person='${ person }', adopt='${ adopt }'
    WHERE id = ${ id }`);

    console.log(response)
    res.status(200).json({
        message: `Person ${ id } has been updated`
    })
}

module.exports = {
    getPeople,
    getPersonById,
    createPerson,
    deletePerson,
    updatePerson
}