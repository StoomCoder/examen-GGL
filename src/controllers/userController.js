const controller = {};
//Controlador para listar elementos y ejecutar el query
controller.list = (req,res)=>{
    req.getConnection((err,conn) => {
        conn.query('SELECT a.id, a.nombre, a.apellido_paterno, pc.total, spc.servicio, count(pc.total) FROM clientes a, contratos_clientes cc, pagos_cliente pc, servicios_principales_cliente spc WHERE a.id=cc.cliente_id AND cc.id=pc.contrato_id AND pc.servicio_id=spc.id group by pc.total;'
        , (err, users)=>{
            //
            if(err){
                res.json(err);
            }
            res.render('users',{
                data: users   
            });
        });
    });
};

//Controlador para imprimir los elementos
controller.print = (req,res)=>{
    res.send('print');
};


module.exports = controller;