import React from 'react';

import config from '../../config';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
const IndexPage = () => (
	<Layout>
		<Sidebar />
		<div className="container-fluid">
			<section className="resume-section p-3  d-flex align-items-center" id="about">
				<div className="w-100">
					<h1 className="mb-0">
						{config.firstName}
						<span className="text-primary">{config.lastName}</span>
					</h1>

					<p className="lead">{config.description}</p>

					<div className="social-icons mt-5">
						{config.socialLinks.map((social) => {
							const { icon, url } = social;
							return (
								<a key={url} href={url} target="_blank">
									<i className={`fab ${icon}`} />
								</a>
							);
						})}
					</div>

					<ul className="subheading mt-5">
						<li>
							<i className="fa fa-map-marker" /> &nbsp;{' '}
							<a href={config.location} target="_blank">
								{' '}
								{config.address}{' '}
							</a>{' '}
						</li>
						<li>
							<i className="fa fa-mobile"> </i> &nbsp; <a href={`tel:${config.phone}`}>{config.phone}</a>{' '}
						</li>
						<li>
							<i className="fa fa-envelope" /> &nbsp;
							<a href={`mailto:${config.email}`}>{config.email}</a>
						</li>
					</ul>
				</div>
			</section>

			<hr className="m-0" />

			<section className="resume-section p-3  d-flex justify-content-center" id="experience">
				<div className="w-100">
					<h2 className="mb-5">
						<i className="fa fa-briefcase" /> Experience
					</h2>

					{config.jobs.map((job) => {
						const { company, url, occupation, description, fromTO, responsibilities, projects } = job;
						return (
							<div
								key={url}
								className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
							>
								<div className="resume-content">
									<h3 className="mb-0">{occupation}</h3>
									<div className="subheading mb-3">
										<a href={url} target="_blank">
											@{company}
										</a>
									</div>
									<h5>Responsibilities</h5>
									<ul>
										{responsibilities.map((responsibility) => {
											return <li>{responsibility}</li>;
										})}
									</ul>
{projects.length ?
									<><h5>Projects</h5>
									<ul className="projects">
										{projects.map((project) => {
											return (
												<li>
												<a href={project.url} target="_blank">
                                                <p>{project.name}</p>
													</a>

                                                    <ul className="technologies">
										{project.technologies.map((tech) => {
											return (
												<li>
														{tech}
												</li>
											);
										})}
									</ul>

												</li>
											);
										})}
									</ul></>
                                   : '' }
									<p>{description}</p>
								</div>
								<div className="resume-date text-md-right">
									<span className="text-primary">{fromTO}</span>
								</div>
							</div>
						);
					})}
				</div>
			</section>

			<hr className="m-0" />

			<section className="resume-section p-3  d-flex align-items-center" id="skills">
				<div className="w-100">
					<h2 className="mb-5">
						<i className="fa fa-code" /> Skills
					</h2>

					<div className="subheading mb-3">Programming Languages &amp; Tools</div>
					<ul className="list-inline dev-icons">
						{config.skills.map((skill) => {
							return (
								<li key={Math.random()} className="list-inline-item">
									<i className={'fab fa-' + skill} />
								</li>
							);
						})}
					</ul>
				</div>
			</section>

			<hr className="m-0" />

			<section className="resume-section p-3  d-flex align-items-center" id="awards">
				<div className="w-100">
					<h2 className="mb-5">
						<i className="fa fa-trophy" /> Awards &amp; Certifications
					</h2>
					<ul className="fa-ul mb-0">
						{config.certifications.map((certification) => {
							const { place, url, title, issued, description } = certification;
							return (
								<li key={Math.random()}>
									<i className="fa-li fa fa-star text-warning" />
									<a href={url} target="_blank">
										{title}
									</a>{' '}
									| {place}
									<p>{description}</p>
									<div className="text-md-right">
										<span className="text-primary">{issued}</span>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</section>

			<hr className="m-0" />

			<section className="resume-section p-3  d-flex align-items-center" id="volunteering">
				<div className="w-100">
					<h2 className="mb-5">
						<i className="fa fa-smile" /> Volunteering
					</h2>
					<ul>
						{config.volunteerActivities.map((activity) => {
							return (
								<li key={Math.random()}>
									<a href={activity.url} target="_blank">
										{activity.title}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</section>

			<hr className="m-0" />

			<section className="resume-section p-3  d-flex align-items-center" id="interests">
				<div className="w-100">
					<h2 className="mb-5">
						<i className="fa fa-heart" /> Interests
					</h2>
					<p>Apart from being a web developer, I enjoy</p>
					<ul>
						{config.interests.map((interest) => {
							return <li key={Math.random()}>{interest}</li>;
						})}
					</ul>
				</div>
			</section>
			<hr className="m-0" />
			<section className="resume-section p-3  d-flex align-items-center" id="education">
				<div className="w-100">
					<h2 className="mb-5">
						<i className="fa fa-graduation-cap" /> Education
					</h2>

					{config.education.map((education) => {
						const { place, url, title, fromTO } = education;
						return (
							<div
								key={url}
								className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
							>
								<div className="resume-content">
									<h3 className="mb-0">{place}</h3>
									<div className="subheading mb-3">
										<a href={url} target="_blank">
											{title}
										</a>
									</div>
								</div>
								<div className="resume-date text-md-right">
									<span className="text-primary">{fromTO}</span>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</div>
	</Layout>
);

export default IndexPage;
