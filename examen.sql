SELECT a.id, a.nombre, a.apellido_paterno, pc.total, spc.servicio, sap.nombre, count(pc.total) AS 'Total calculado', count(pc.pago_resto_dias) As 'pago total'
FROM clientes a, contratos_clientes cc, pagos_cliente pc, servicios_principales_cliente spc, servicios_adicionales_cliente sap
WHERE a.id=cc.cliente_id 
AND cc.id=pc.contrato_id 
AND pc.servicio_id=spc.id
group by pc.total;