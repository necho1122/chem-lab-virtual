import '../assets/styles/Contact.css';

const Contact = () => {
	return (
		<>
			<div className='contact-container'>
				<h2 className='contact-title'>Información de contacto</h2>
				<div className='contact-info'>
					<p>
						<strong>Email:</strong> example@example.com
					</p>
					<p>
						<strong>Phone:</strong> +1234567890
					</p>
					<p>
						<strong>Website:</strong>{' '}
						<a href='https://www.ejemplo.com'>www.ejemplo.com</a>
					</p>
					<div className='social-media'>
						<p>
							<strong>Social Media:</strong>
						</p>
						<ul>
							<li>
								<a
									href='https://www.facebook.com/ejemplo'
									target='_blank'
									rel='noopener noreferrer'
								>
									Facebook
								</a>
							</li>
							<li>
								<a
									href='https://www.twitter.com/ejemplo'
									target='_blank'
									rel='noopener noreferrer'
								>
									Twitter
								</a>
							</li>
							<li>
								<a
									href='https://www.instagram.com/ejemplo'
									target='_blank'
									rel='noopener noreferrer'
								>
									Instagram
								</a>
							</li>
						</ul>
					</div>
				</div>

				<h2 className='contact-title'>Formulario de contacto</h2>
				<form className='contact-form'>
					<div className='field'>
						<label htmlFor='name'>Name:</label>
						<input
							type='text'
							id='name'
						/>
					</div>
					<div className='field'>
						<label htmlFor='email'>Email:</label>
						<input
							type='email'
							id='email'
						/>
					</div>
					<div className='field'>
						<label htmlFor='message'>Message:</label>
						<textarea
							id='message'
							rows='4'
						/>
					</div>
					<button
						type='button'
						className='send-button'
					>
						Send
					</button>
				</form>
			</div>
		</>
	);
};

export default Contact;
