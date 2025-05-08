import './Contacto.css';

import { useState } from 'react';

const Contacto = () => {
	const [nombre, setNombre] = useState('');
	const [correo, setCorreo] = useState('');
	const [mensaje, setMensaje] = useState('');
	const [error, setError] = useState(null);

	const regEx = {
		nombre: /^[a-zA-Z\s-]{2,}$/,
		correo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
		mensaje: /^.{1,}$/,
	};

	const handleInput = (e, input) => {
		if (input === 'nombre') {
			setNombre(e.target.value);
		}
		if (input === 'correo') {
			setCorreo(e.target.value);
		}
		if (input === 'mensaje') {
			setMensaje(e.target.value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const nombreValido = regEx.nombre.test(nombre);
		const correoValido = regEx.correo.test(correo);
		const mensajeValido = regEx.mensaje.test(mensaje);

		if (!nombreValido) {
			setError('Por favor ingresa un nombre valido');
			return;
		}

		if (!correoValido) {
			setError('Por favor ingresa un correo valido');
			return;
		}

		if (!mensajeValido) {
			setError('Por favor ingresa un mensaje valido');
			return;
		}

		if (nombreValido && correoValido && mensajeValido) {
			setError(null);

			e.target.submit();
		}
	};

	return (
		<>
			<section className="contacto" id="contacto">
				<div className="encabezado">
					<h3 className="titulo">Hagamos tu idea una realidad</h3>
					<p className="subtitulo">Escríbeme y construyamos el negocio de tus sueños.</p>
				</div>
				<form
					action="https://formspree.io/f/xqaawyop"
					method="post"
					className="formulario"
					onSubmit={handleSubmit}
				>
					<div className="grupo-formulario">
						<label htmlFor="nombre">Nombre</label>
						<input
							type="text"
							name="nombre"
							id="nombre"
							placeholder="John Doe"
							value={nombre}
							onChange={(e) => handleInput(e, 'nombre')}
						/>
					</div>
					<div className="grupo-formulario">
						<label htmlFor="correo">Correo</label>
						<input
							type="text"
							name="correo"
							id="correo"
							placeholder="john@correo.com"
							value={correo}
							onChange={(e) => handleInput(e, 'correo')}
						/>
					</div>
					<div className="grupo-formulario mensaje">
						<label htmlFor="mensaje">Mensaje</label>
						<textarea
							type="text"
							name="mensaje"
							id="mensaje"
							placeholder="Escribe tu mensaje"
							value={mensaje}
							onChange={(e) => handleInput(e, 'mensaje')}
						></textarea>
					</div>
					{error && (
						<div className="grupo-formulario error">
							<p>{error}</p>
						</div>
					)}
					<div className="grupo-formulario enviar">
						<div>
							<button type="submit" className="boton">
								Mandar mensaje
								<div className="icono">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										viewBox="0 0 16 16"
									>
										<path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
									</svg>
								</div>
							</button>
						</div>
					</div>
				</form>
			</section>
		</>
	);
};

export default Contacto;
