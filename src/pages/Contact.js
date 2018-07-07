import React from 'react'
import Link from 'gatsby-link'

const Contact = () => (
	<div id="l-contact">
		<form class="form-horizontal">
			<div class="form-group">
				<div class="col-3 col-sm-12">
					<label class="form-label" for="contact-form">Name</label>
				</div>
				<div class="col-9 col-sm-12">
					<input class="form-input" type="text" id="input-example-1"/>
				</div>
			</div>
			<div class="form-group">
				<div class="col-3 col-sm-12">
					<label class="form-label" for="contact-form">Email</label>
				</div>
				<div class="col-9 col-sm-12">
					<input class="form-input" type="text" id="input-example-1"/>
				</div>
			</div>
			<div class="form-group">
				<div class="col-3 col-sm-12">
					<label class="form-label" for="contact-form">Message</label>
				</div>
				<div class="col-9 col-sm-12">
					<textarea class="form-input" type="text" id="input-example-1"/>
				</div>
			</div>
			<button class="btn btn-primary input-group-btn">Send</button>
		</form>
	</div>
);

export default Contact;
