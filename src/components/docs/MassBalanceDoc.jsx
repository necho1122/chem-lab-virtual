/* eslint-disable react/no-unescaped-entities */
import '../../assets/styles/MassBalanceDocs.css';
function MassBalanceDoc() {
	return (
		<div className='mass-balance-documentation'>
			<h1>Documentación de Usuario: Calculadora de Balance de Masas</h1>

			<h2>Índice</h2>
			<ul className='index content'>
				<li>
					<a href='#introduccion'>Introducción</a>
				</li>
				<li>
					<a href='#requisitos-previos'>Requisitos Previos</a>
				</li>
				<li>
					<a href='#navegacion-en-la-aplicacion'>Navegación en la Aplicación</a>
				</li>
				<li>
					<a href='#usar-la-calculadora-de-balance-de-masas'>
						Usar la Calculadora de Balance de Masas
					</a>
					<ul className='index'>
						<li>
							<a href='#caso-1-entrada-acumulado'>
								Caso 1: Entrada + Acumulado
							</a>
						</li>
						<li>
							<a href='#caso-2-entrada-salida'>Caso 2: Entrada - Salida</a>
						</li>
						<li>
							<a href='#caso-3-acumulado-salida'>Caso 3: Acumulado + Salida</a>
						</li>
						<li>
							<a href='#caso-4-solo-entrada-o-salida'>
								Caso 4: Solo Entrada o Salida
							</a>
						</li>
					</ul>
				</li>
				<li>
					<a href='#estilos-y-diseno'>Estilos y Diseño</a>
				</li>
				<li>
					<a href='#soporte-tecnico'>Soporte Técnico</a>
				</li>
			</ul>

			<h2 id='introduccion'>Introducción</h2>
			<p>
				La calculadora de balance de masas es una herramienta desarrollada en
				React para realizar cálculos de balance de masas en procesos
				industriales. Permite a los usuarios realizar cálculos precisos en
				función de diferentes casos, incluyendo la posibilidad de manejar
				fracciones másicas de cada flujo.
			</p>

			<h2 id='requisitos-previos'>Requisitos Previos</h2>
			<ul>
				<li>Navegador web actualizado (Chrome, Firefox, Safari, Edge).</li>
				<li>
					Conexión a internet para acceder a la aplicación si está alojada en
					línea.
				</li>
			</ul>

			<h2 id='navegacion-en-la-aplicacion'>Navegación en la Aplicación</h2>
			<p>
				Al abrir la aplicación, se encontrará con una interfaz sencilla y fácil
				de usar. En la parte superior, encontrará un menú de navegación para
				seleccionar el tipo de cálculo de balance de masas que desea realizar.
			</p>

			<h2 id='usar-la-calculadora-de-balance-de-masas'>
				Usar la Calculadora de Balance de Masas
			</h2>

			<h3 id='caso-1-entrada-acumulado'>Caso 1: Entrada + Acumulado</h3>
			<ol>
				<li>
					<strong>Seleccionar el Caso:</strong> En el menú desplegable,
					seleccione "Entrada + Acumulado".
				</li>
				<li>
					<strong>Agregar Flujos de Entrada:</strong> Haga clic en "Agregar
					Flujo de Entrada" para añadir un nuevo flujo. Ingrese el valor del
					flujo y sus fracciones másicas (por ejemplo, agua, proteína, lactosa,
					etc.).
				</li>
				<li>
					<strong>Ingresar Acumulado:</strong> Ingrese el valor del acumulado.
				</li>
				<li>
					<strong>Calcular el Resultado:</strong> Haga clic en el botón
					"Calcular". El resultado se mostrará en la parte inferior de la
					sección.
				</li>
			</ol>

			<h3 id='caso-2-entrada-salida'>Caso 2: Entrada - Salida</h3>
			<ol>
				<li>
					<strong>Seleccionar el Caso:</strong> En el menú desplegable,
					seleccione "Entrada - Salida".
				</li>
				<li>
					<strong>Agregar Flujos de Entrada:</strong> Haga clic en "Agregar
					Flujo de Entrada" para añadir un nuevo flujo. Ingrese el valor del
					flujo y sus fracciones másicas.
				</li>
				<li>
					<strong>Agregar Flujos de Salida:</strong> Haga clic en "Agregar Flujo
					de Salida" para añadir un nuevo flujo. Ingrese el valor del flujo y
					sus fracciones másicas.
				</li>
				<li>
					<strong>Calcular el Resultado:</strong> Haga clic en el botón
					"Calcular". El resultado se mostrará en la parte inferior de la
					sección.
				</li>
			</ol>

			<h3 id='caso-3-acumulado-salida'>Caso 3: Acumulado + Salida</h3>
			<ol>
				<li>
					<strong>Seleccionar el Caso:</strong> En el menú desplegable,
					seleccione "Acumulado + Salida".
				</li>
				<li>
					<strong>Ingresar Acumulado:</strong> Ingrese el valor del acumulado.
				</li>
				<li>
					<strong>Agregar Flujos de Salida:</strong> Haga clic en "Agregar Flujo
					de Salida" para añadir un nuevo flujo. Ingrese el valor del flujo y
					sus fracciones másicas.
				</li>
				<li>
					<strong>Calcular el Resultado:</strong> Haga clic en el botón
					"Calcular". El resultado se mostrará en la parte inferior de la
					sección.
				</li>
			</ol>

			<h3 id='caso-4-solo-entrada-o-salida'>Caso 4: Solo Entrada o Salida</h3>
			<ol>
				<li>
					<strong>Seleccionar el Caso:</strong> En el menú desplegable,
					seleccione "Solo Entrada o Salida".
				</li>
				<li>
					<strong>Ingresar Flujo:</strong> Ingrese el valor del flujo (ya sea de
					entrada o de salida).
				</li>
				<li>
					<strong>Calcular el Resultado:</strong> Haga clic en el botón
					"Calcular". El resultado se mostrará en la parte inferior de la
					sección.
				</li>
			</ol>

			<h2 id='estilos-y-diseno'>Estilos y Diseño</h2>
			<p>
				La aplicación cuenta con un diseño moderno y limpio. Los colores
				principales son tonos de azul para los encabezados y botones, y un fondo
				blanco para las áreas de trabajo, lo que facilita la lectura y la
				interacción con los formularios.
			</p>
			<pre>
				<code>
					{`/* Ejemplo de Estilos CSS */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f9;
  margin: 0;
  padding: 0;
  color: #333;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  font-size: 2rem;
  color: #5a67d8;
  margin-bottom: 20px;
}

select, input[type="text"], input[type="number"], button {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ddd;
}

button {
  background-color: #5a67d8;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #434190;
}`}
				</code>
			</pre>

			<h2 id='soporte-tecnico'>Soporte Técnico</h2>
			<p>
				Para obtener asistencia técnica, puede ponerse en contacto con el equipo
				de soporte a través de los siguientes canales:
			</p>
			<ul>
				<li>
					<strong>Correo Electrónico:</strong> necho.web.dev@gmail.com
				</li>
				<li>
					<strong>Teléfono:</strong> +55 (54) 9 8115-6815
				</li>
				<li>
					<strong>Foro de la Comunidad:</strong>{' '}
					<a href='https://community.balanceapp.com'>Foro de Balance App</a>
				</li>
			</ul>
		</div>
	);
}

export default MassBalanceDoc;
