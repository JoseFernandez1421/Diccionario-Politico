var express = require('express') //llamamos a Express
var app = express()               

var port = process.env.PORT || 8080  // establecemos nuestro puerto




var mysql = require('mysql');

// Agregue las credenciales para acceder a su base de datos
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : 'politipediadb'
});

// conectarse a mysql
connection.connect(function(err) {
    // en caso de error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
});

// Realizar una consulta
/*let sql0 = 'SELECT * from fundadores ';

connection.query(sql0, function(err, rows, fields) {
    if(err){
        console.log("An error ocurred performing the query.", err);
        return;
    }

    console.log("Consulta ejecutada con éxito:", rows);
});

// Cerrar la conexión
connection.end(function(){
    // La conexión se ha cerrado
});*/


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    next();
  });



//API 1
app.get('/api/politicos/:nombre', (req, res) => {


    let nombre = req.params.nombre;

    console.log(nombre)

    let sql = `select dni, nombre from politicos where nombre like '%${nombre}%' `
    console.log(sql)

    let query = connection.query(sql, (err,results)=>{

        if(err){
            throw err
        }
        console.log(results)
        
        res.json({results})
    })
    

})

//API 2
app.get('/api/politico/:dni', (req, res) => {

    let dni = req.params.dni;

    console.log(dni)
    
    let sql = `select dni, nombre, lugar_nacimiento, lugar_domicilio, fecha_nacimiento, biografia from politicos where dni = '${dni}' `
    console.log(sql)

    let query = connection.query(sql, (err,results)=>{

        if(err){
            throw err
        }
        
        //console.log(results[0])
        //let base64data = Buffer.from(results[0].foto.data).toString('base64')
        //console.log(base64data)
        res.json({ results })
    })
})


//API 3
app.get('/api/notas_periodisticas/:dni', (req, res) => {

    let dni = req.params.dni;

    console.log(dni)
    
    let sql = `select a.codigo_nota, a.dni, b.resumen, b.link from politicos_notas_periodisticas a, notas_periodisticas b where a.codigo_nota = b.codigo_nota and a.dni = '${dni}' `
    console.log(sql)

    let query = connection.query(sql, (err,results)=>{

        if(err){
            throw err
        }
        res.json({ results })
    })
})

//API 4
app.get('/api/cargos_publicos/:dni', (req, res) => {

    let dni = req.params.dni;

    console.log(dni)
    
    let sql = `select a.dni, c.nombre institucion, b.nombre cargo, a.fecha_inicio, a.fecha_fin, a.razon_cese `
    sql += `from politicos_cargos_ocupados a, instituciones b, cargos_publicos c `
    sql += `where a.codigo_institucion = b.codigo_institucion and a.codigo_cargo_ocupado = c.codigo_cargo_ocupado and a.dni = '${dni}' `
    console.log(sql)

    let query = connection.query(sql, (err,results)=>{

        if(err){
            throw err
        }

        res.json({ results })
    })
})



//API 5
app.get('/api/militancias/:dni', (req, res) => {

    let dni = req.params.dni;

    console.log(dni)
    
    let sql = `select a.dni, b.nombre partido, c.nombre cargo, a.fecha_inicio, a.fecha_fin from militantes a, `
    sql += `partidos_politicos b, partido_cargos c `
    sql += `where a.codigo_partido = b.codigo_partido and a.codigo_cargo = c.codigo_cargo and a.dni = '${dni}' `
    console.log(sql)

    let query = connection.query(sql, (err,results)=>{

        if(err){
            throw err
        }
        res.json({ results })
    })
})


//API 6
app.post('/api/notas_periodisticas/new', function(req, res) {
    
    let body = ''
    req.on('data', chunk => {
       body += chunk.toString() 
    })
    req.on('end', ()=> {
        let obj = JSON.parse(body)
        console.log(obj.dni)


        let sql = `insert into notas_periodisticas (link,resumen,recorte) values ( `
        sql += `'${obj.link}', `
        sql += `'${obj.resumen}', `
        sql += `'${obj.recorte}' )`
        console.log(sql)

        let query = connection.query(sql, (err,results)=>{

            if(err){
                throw err
            }
            console.log(results)


            let sql = `insert into politicos_notas_periodisticas (codigo_nota,dni) values ( `
            sql += `'${results.insertId}', `
            sql += `'${obj.dni}' )`
            console.log(sql)


            let query = connection.query(sql, (err,results)=>{

                if(err){
                    throw err
                }
                console.log(results)

            
                res.json({results})
            })
        })
    })
})



//API 7
app.delete('/api/notas_periodisticas/delete/:codigo_nota/:dni', function(req, res) {

    let codigo_nota = req.params.codigo_nota;
    let dni = req.params.dni;

    console.log(dni)
    
    let sql = `delete from politicos_notas_periodisticas where dni='${dni}' and codigo_nota=${codigo_nota} `

    console.log(sql)

    let query = connection.query(sql, (err,results)=>{

        if(err){
            throw err
        }
        res.json({ results })
    })

})

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)