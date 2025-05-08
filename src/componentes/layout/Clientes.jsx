import './Clientes.css';

const Clientes = () => {
	return (
		<>
			<section className="clientes">
				<div className="encabezado">
					<h3 className="titulo">Mis experiencias</h3>
					<p className="subtitulo">Estas marcas han confiado en mis servicios</p>
				</div>
				<div className="logos">
					<img src="./assets/logos/fundacion-calma.png" className="logo" alt="Logo de Recharge" />
					<img src="./assets/logos/soniem.jpeg" className="logo" alt="Logo de Volume" />
				</div>
			</section>
		</>
	);
};

export default Clientes;
