<template >
	
	<!-- start header -->
	<HeaderBoir />
	<!-- end header -->
	<!---Dashboard section-section-start-->
	<div class="container mb-3">
		<div class="submission-wrapper section" id="home">
			<h4>Report Preparation & Submission Instructions:</h4>
			<div class="submission-box">
				<div class="instruction-report d-flex">
					<div class="bt-box">
						<button type="button" class="disabled" @click="showModal">Instruction</button>
						<ModalBoir v-show="isModalVisible" @click="closeModal" />
					</div>
					<div class="instructions-box">
						<p><span>1.</span>Complete the report in its entirety with all required information. Click
							Instructions for help.</p>
					</div>
				</div>
				<div class="instruction-report d-flex">
					<div class="bt-box">
						<button type="button" class="disabled" @click="showModal">Validate</button>
						<ModalBoir v-show="isModalVisible" @click="closeModal" />
					</div>
					<div class="instructions-box">
						<p><span>2.</span>Click Validate to ensure all entered data is properly formatted and that all
							required fields are completed.</p>
					</div>
				</div>
				<div class="instruction-report d-flex">
					<div class="bt-box">
						<button type="button" class="disabled" @click="showModal">Finalize</button>
						<ModalBoir v-show="isModalVisible" @click="closeModal" />
					</div>
					<div class="instructions-box">
						<p><span>3.</span>Click Finalize to lock the entries in the report and prepare it for submission.
							Click Edit Report to unlock and re-edit.</p>
					</div>
				</div>
				<div class="instruction-report d-flex">
					<div class="bt-box">
						<button type="button" class="disabled" @click="showModal">Save</button>
						<ModalBoir v-show="isModalVisible" @click="closeModal" />
					</div>
					<div class="instructions-box">
						<p><span>4.</span>Click Save to retain a local copy of the report (this can be done at any time
							during report preparation).</p>
					</div>
				</div>
				<div class="instruction-report d-flex">
					<div class="bt-box">
						<button type="button" class="disabled" @click="showModal">Print</button>
						<ModalBoir v-show="isModalVisible" @click="closeModal" />
					</div>
					<div class="instructions-box">
						<p><span>5.</span>(Optional) Click Print to print a hard copy of your completed report.</p>
					</div>
				</div>
				<div class="instruction-report d-flex">
					<div class="bt-box">
						<button class="disabled" @click="showModal">Ready to File</button>
						<ModalBoir v-show="isModalVisible" @click="closeModal" />
					</div>
					<div class="instructions-box">
						<p><span>6.</span>Select Ready to File (activated after the report is finalized and saved locally)
							to begin the submission process.</p>
					</div>
				</div>
			</div>
		</div>
		<form @submit.prevent="submitForm" class="form-control">
			<div class="filling-form">
				<div class="filling-info-wrapper">
					<h3>Filling Information</h3>
				</div>
				<hr>
				<div class="filling-form-que">
					<ol>
						<li>
							<label><span class="red">*</span><strong>Type of filing:</strong></label>							
							<div style="margin-left: 15px; margin-top: 8px;">							
								<ol class="filing-list-inner" type="a">
									<li>
										<div class="row">
											<div class="col-md-4">
												<label for="html">Initial report</label>
											</div>
											<div class="col-md-8">
												<input type="radio" v-model="formData.Initial_report" name="reportType"
													:value="true">												

											</div>
										</div>
									</li>
									<li>
										<div class="row">
											<div class="col-md-4">
												<label>Correct prior report</label>
											</div>
											<div class="col-md-8">
												<input type="radio" :value="true" name="reportType"
													v-model="formData.Correct_prior_report">
											
											</div>
										</div>
									</li>
									<li>
										<div class="row">
											<div class="col-md-4">
												<label>Update prior report</label>
											</div>
											<div class="col-md-8">
												<input type="radio" :value="true" name="reportType"
													v-model="formData.Update_prior_report">
											
											</div>
										</div>
									</li>
									<li>
										<div class="row">
											<div class="col-md-4">
												<label>Newly exempt entity</label>
											</div>
											<div class="col-md-8">
												<input type="radio" :value="true" id="css" name="reportType"
													v-model="formData.Newly_exempt_entity">
											
											</div>
										</div>
									</li>
									<span class="Report-note" style="margin-bottom: 7px !important;"><em>Reporting Company
											information associated with most recent report, if any:</em></span>
									<li>
										<div class="row">
											<div class="col-md-4">
												<label>Legal name</label>
											</div>
											<div class="col-md-8">
												<input class="form-input" type="text" placeholder="Legal name"
													v-model="formData.Legal_name">
												<span v-if="formErrors.Legal_name" class="error">{{ formErrors.Legal_name
												}}</span>
											</div>
										</div>
									</li>
									<li>
										<div class="row">
											<div class="col-md-4">
												<label>Tax Identification type</label>
											</div>
											<div class="col-md-8">
												<select class="form-select" v-model="formData.Tax_Identification_type"
													id="Tax_Identification_type">
													<option disabled>Choose...</option>
													<option value="EIN">EIN</option>
													<option value="TINN">TINN</option>
													<option value="FOREGIN">FOREGIN</option>
												</select>
												<span v-if="formErrors.Tax_Identification_type" class="error">{{
													formErrors.Tax_Identification_type }}</span>
											</div>
										</div>
									</li>
									<li>
										<div class="row">
											<div class="col-md-4">
												<label>Tax Identification number</label>
											</div>
											<div class="col-md-8">
												<input class="form-input" type="number"
													v-model="formData.Tax_Identification_number"
													placeholder="Tax Identification number">
												<span v-if="formErrors.Tax_Identification_number" class="error">{{
													formErrors.Tax_Identification_number }}</span>
											</div>
										</div>
									</li>
									<li>
										<div class="row">
											<div class="col-md-4">
												<label>Country/Jurisdiction (if foreign tax ID </label>
											</div>
											<div class="col-md-8">
												<select class="form-select" v-model="formData.Jurisdiction_tax_id"
													id="Jurisdiction_tax_id">
													<option disabled>Choose...</option>
													<option value="FRANCE">FRANCE</option>
													<option value="CANADA">CANADA</option>
													<option value="AMERICA">AMERICA</option>
												</select>
												<span v-if="formErrors.Jurisdiction_tax_id" class="error">{{
													formErrors.Jurisdiction_tax_id }}</span>
											</div>
										</div>
									</li>
								</ol>
							</div>
						</li>
						<li>
							<div class="row">
								<div class="col-md-4">
									<label><strong>Date prepared <span>(auto-filled when form is
												finalized).</span></strong></label>
								</div>
								<div class="col-md-8" style="padding-left: 22px;">
									<input class="form-input" type="date" v-model="formData.date">
									<span v-if="formErrors.date" class="error">{{ formErrors.date }}</span>
								</div>
								<div class="com-md-12">
									<div class="act-notice-box">
										<h4>PRIVACY ACT AND PAPERWORK REDUCTION ACT NOTICE </h4>
										<p>This notice is given under the Privacy Act of 1974 (Privacy Act) and the
											Paperwork Reduction Act of 1995 (Paperwork Reduction Act). The Privacy Act and
											Paperwork Reduction Act require that FinCEN inform persons of the following when
											requesting and collecting information in connection with this collection of
											information. This collection of information is authorized under 31 U.S.C. 5336
											and 31 C.F.R. 1010.380. The principal purpose of this collection of information
											is to generate a database of information that is highly useful in facilitating
											national security, intelligence, and law enforcement activities, as well as
											compliance with anti-money laundering, countering the financing of terrorism,
											and customer due diligence requirements under applicable law. Pursuant to 31
											U.S.C. 5336 and 31 C.F.R. 1010.380, reporting companies and certain other
											persons must provide specified information. The provision of that information is
											mandatory and failure to provide that information may result in criminal and
											civil penalties. The provision of information for the purpose of requesting a
											FinCEN Identifier is voluntary; however, failure to provide such information may
											result in the denial of such a request. Generally, the information within this
											collection of information may be shared as a “routine use” with other government
											agencies and financial institutions that meet certain criteria under applicable
											law. The complete list of routine uses of the information is set forth in the
											relevant Privacy Act system of record notice available at
											https://www.federalregister.gov/documents/2023/09/13/2023-19814/privacy-act-of-1974-system-of-records.
											According to the Paperwork Reduction Act of 1995, no persons are required to
											respond to a collection of information unless it displays a valid OMB control
											number. The valid OMB control number for this information collection is
											1506-0076. It expires on November 30, 2026. The estimated average burden
											associated with this collection of information from reporting companies is 90 to
											650 minutes per respondent for reporting companies with simple or complex
											beneficial ownership structures, respectively. The estimated average burden
											associated with reporting companies updating information previously provided is
											40 to 170 minutes per respondent for reporting companies with simple or complex
											beneficial ownership structures, respectively. The estimated average burden
											associated with this collection of information from individuals applying for
											FinCEN identifiers is 20 minutes per applicant. The estimated average burden
											associated with individuals who have obtained FinCEN identifiers updating
											information previously provided is 10 minutes per individual. Comments regarding
											the accuracy of this burden estimate, and suggestions for reducing the burden
											should be directed to the Financial Crimes Enforcement Network, P. O. Box 39,
											Vienna, VA 22183, Attn: Policy Division.</p>
									</div>
								</div>
							</div>
						</li>
						<div class="reporting-wrapper section" id="reporting">
							<h3>Part I. Reporting Company Information</h3>
						</div>
						<li>
							<div class="row">
								<div class="col-xl-4 col-md-4 col-sm-4">
									<label>Request to receive FinCEN Identifier (FinCEN ID)</label>
								</div>
								<div class="col-xl-7 col-md-6 col-sm-8 select-rdo">
									<input type="checkbox" name="fincen" v-model="formData.FinCEN_Identifier"
										value="true">
									<span v-if="formErrors.FinCEN_Identifier" class="error">{{ formErrors.FinCEN_Identifier
									}}</span>
								</div>
							</div>
						</li>
						<li>
							<div class="row">
								<div class="col-xl-4 col-md-4 col-sm-4">
									<label>Foreign pooled investment vehicle</label>
								</div>
								<div class="col-xl-7 col-md-6 col-sm-8 select-rdo">
									<input type="checkbox" name="foreign" v-model="formData.Foreign_Pooled" value="true">
									<span v-if="formErrors.Foreign_Pooled" class="error">{{ formErrors.Foreign_Pooled
									}}</span>
								</div>
							</div>
						</li>
						<hr>
						<h6>Full legal name and alternate name(s):</h6>
						<li>
							<div class="row">
								<div class="col-xl-4 col-md-4 col-sm-4">
									<label>Reporting Company legal name</label>
								</div>
								<div class="col-xl-7 col-md-6 col-sm-8">
									<input class="form-input" type="text" v-model="formData.Reporting_Company"
										name="Reporting_Company" placeholder="Reporting Company legal name">
									<span v-if="formErrors.Reporting_Company" class="error">{{ formErrors.Reporting_Company
									}}</span>
								</div>
							</div>
						</li>
						<li>
							<div class="row" v-for="(alter, n) in alters" :key="n">
								<div class="col-xl-4 col-md-4 col-sm-4">
									<label>Alternate name (e.g. trade name, DBA)</label>
								</div>
								<div class="col-xl-7 col-md-6 col-sm-8">
									<input class="form-input" type="text" v-model="alter.Alternate_name" name="Alternate_name" placeholder="Alternate name">
									<!-- <span v-if="formErrors.Alternate_name" class="error">{{ formErrors.Alternate_name }}</span> -->
								</div>
								<div class="col-xl-1 col-md-2 col-sm-2">
									<div class="btn-wrapper d-flex">
										<button @click.prevent="addAlter()" class="add-btn">+</button>
										<button @click.prevent="removeAlter(n)" class="remove-btn" :disabled="n === 0">-</button>
									</div>
								</div>
							</div>
						</li>


						<hr>
						<h6>Form of identification:</h6>
						<li>
							<div class="row">
								<div class="col-md-4">
									<label>Tax Identification type</label>
								</div>
								<div class="col-md-7">
									<select class="form-select" v-model="formData.Tax_Identification"
										id="Tax_Identification">
										<option disabled>Choose...</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
									<span v-if="formErrors.Tax_Identification" class="error">{{
										formErrors.Tax_Identification }}</span>
								</div>
							</div>
						</li>
						<li>
							<div class="row">
								<div class="col-md-4">
									<label>Tax Identification number</label>
								</div>
								<div class="col-md-7">
									<input type="number" placeholder="Tax Identification number" class="form-input"
										name="fav_language" v-model="formData.Identification" value="true">
									<span v-if="formErrors.Identification" class="error">{{ formErrors.Identification
									}}</span>

								</div>
							</div>
						</li>
						<li>
							<div class="row">
								<div class="col-md-4">
									<label>Country/Jurisdiction <span class="sml">(if foreign tax ID
											only)</span></label>
								</div>
								<div class="col-md-7">
									<select class="form-select" v-model="formData.foreign_tax" id="foreign_tax">
										<option disabled>Choose...</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
									<span v-if="formErrors.foreign_tax" class="error">{{ formErrors.foreign_tax }}</span>
								</div>
							</div>
						</li>
						<hr>
						<h6>Jurisdiction of formation or first registration:</h6>
						<li>
							<ol type="a" style="margin-left: 20px!important">
								<li>
									<div class="row">
										<div class="col-md-4">
											<label>Country/Jurisdiction of formation</label>
										</div>
										<div class="col-md-7">
											<select class="form-select" v-model="formData.formation" id="formation">
												<option disabled>Choose...</option>
												<option value="1">One</option>
												<option value="2">Two</option>
												<option value="3">Three</option>
											</select>
											<span v-if="formErrors.formation" class="error">{{ formErrors.formation
											}}</span>
										</div>
									</div>
								</li>
								<h6>Domestic Reporting Company:</h6>
								<li>
									<div class="row">
										<div class="col-md-4">
											<label>State of formation</label>
										</div>
										<div class="col-md-7">
											<select class="form-select" v-model="formData.State_of_formation"
												id="State_of_formation">
												<option disabled>Choose...</option>
												<option value="1">One</option>
												<option value="2">Two</option>
												<option value="3">Three</option>
											</select>
											<span v-if="formErrors.State_of_formation" class="error">{{
												formErrors.State_of_formation
											}}</span>
										</div>
									</div>
								</li>
								<li>
									<div class="row">
										<div class="col-md-4">
											<label>Tribal jurisdiction of formation</label>
										</div>
										<div class="col-md-7">
											<select class="form-select" v-model="formData.Tribal_jurisdiction"
												id="Tribal_jurisdiction">
												<option disabled>Choose...</option>
												<option value="1">One</option>
												<option value="2">Two</option>
												<option value="3">Three</option>
											</select>
											<span v-if="formErrors.Tribal_jurisdiction" class="error">{{
												formErrors.Tribal_jurisdiction
											}}</span>
										</div>
									</div>
								</li>
								<li>
									<div class="row">
										<div class="col-md-4">
											<label>Name of the other Tribe</label>
										</div>
										<div class="col-md-7">
											<input class="form-input" v-model="formData.other_Tribe" type="text"
												placeholder="Name of the other Tribe">
											<span v-if="formErrors.other_Tribe" class="error">{{ formErrors.other_Tribe
											}}</span>
										</div>
									</div>
								</li>
								<h6>Foreign Reporting Company:</h6>
								<li>
									<div class="row">
										<div class="col-md-4">
											<label>State of first registration</label>
										</div>
										<div class="col-md-7">
											<select class="form-select" v-model="formData.registration" id="registration">
												<option disabled>Choose...</option>
												<option value="1">One</option>
												<option value="2">Two</option>
												<option value="3">Three</option>
											</select>
											<span v-if="formErrors.registration" class="error">{{ formErrors.registration
											}}</span>
										</div>
									</div>
								</li>
								<li>
									<div class="row">
										<div class="col-md-4">
											<label>Tribal jurisdiction of first registration</label>
										</div>
										<div class="col-md-7">
											<select class="form-select" v-model="formData.Tribal_first_jurisdiction"
												id="Tribal_first_jurisdiction">
												<option disabled>Choose...</option>
												<option value="1">One</option>
												<option value="2">Two</option>
												<option value="3">Three</option>
											</select>
											<span v-if="formErrors.Tribal_first_jurisdiction" class="error">{{
												formErrors.Tribal_first_jurisdiction
											}}</span>
										</div>
									</div>
								</li>
								<li>
									<div class="row">
										<div class="col-md-4">
											<label>Name of the other Tribe</label>
										</div>
										<div class="col-md-7">
											<input class="form-input" type="text" v-model="formData.Name_other_Tribe"
												placeholder="Name of the other Tribe">
											<span v-if="formErrors.Name_other_Tribe" class="error">{{
												formErrors.Name_other_Tribe }}</span>
										</div>
									</div>
								</li>
							</ol>
						</li>
						<hr>
						<h6>Current U.S. Address:</h6>
						<li>
							<div class="row">
								<div class="col-md-4">
									<label>Address (number, street, and apt. or suite no.)</label>
								</div>
								<div class="col-md-7">
									<input class="form-input" v-model="formData.Address" type="text"
										placeholder="Address (number, street, and apt. or suite no.)">
									<span v-if="formErrors.Address" class="error">{{ formErrors.Address }}</span>
								</div>
							</div>
						</li>
						<li>
							<div class="row">
								<div class="col-md-4">
									<label>City</label>
								</div>
								<div class="col-md-7">
									<input class="form-input" v-model="formData.City" type="text" placeholder="City">
									<span v-if="formErrors.City" class="error">{{ formErrors.City }}</span>
								</div>
							</div>
						</li>
						<li>
							<div class="row">
								<div class="col-md-4">
									<label>U.S. or U.S. Territory</label>
								</div>
								<div class="col-md-7">
									<select class="form-select" v-model="formData.Territory" id="Territory">
										<option disabled>Choose...</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
									<span v-if="formErrors.Territory" class="error">{{ formErrors.Territory }}</span>
								</div>
							</div>
						</li>
						<li>
							<div class="row">
								<div class="col-md-4">
									<label>State</label>
								</div>
								<div class="col-md-7">
									<select class="form-select" v-model="formData.State" id="State">
										<option disabled>Choose...</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
									<span v-if="formErrors.State" class="error">{{ formErrors.State }}</span>
								</div>
							</div>
						</li>
						<li>
							<div class="row">
								<div class="col-md-4">
									<label>ZIP Code</label>
								</div>
								<div class="col-md-7">
									<input class="form-input" type="text" v-model="formData.ZIP_Code"
										placeholder="ZIP Code">
									<span v-if="formErrors.ZIP_Code" class="error">{{ formErrors.ZIP_Code }}</span>
								</div>
							</div>
						</li>
						<li>
							<div class="row">
								<div class="col-md-4">
									<label>Existing Reporting Company </label>
								</div>
								<div class="col-md-7 select-rdo">
									<input type="checkbox" name="exit_report" v-model="formData.Exit_reporting_company" value="true">
									
									<span class="sml mx-2">(check if Reporting Company was created or registered before
										January
										1, 2024)</span>
								</div>
							</div>
						</li>
						<li>
							<div class="row">
								<div class="col-md-12">
									<label>(This item is reserved for future use)</label>
								</div>
							</div>
						</li>

						<div class="container" v-for="(input, a) in applicant" :key="a">
							<div class="applicant-wrapper section" id="applicant">
								<h3>Part II. Company Applicant Information</h3>
								<div class="add-p1">
									<button @click.prevent="addApplicant()" class="add-btn">+</button>
									<!-- <button v-if="a === 0" disabled class="remove-btn">-</button> -->
									<button v-if="a === 0" disabled class="remove-btn">-</button>
									<button v-else @click.prevent="removeApplicant(a)" class="remove-btn">-</button>
								</div>
							</div>
							<h6>Company Applicant FinCEN ID:</h6>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label><strong>FinCEN ID</strong></label>
									</div>
									<div class="col-md-7">
										<input class="form-input" type="text" v-model="formData.FinCEN_ID"
											placeholder="FinCEN ID">
										<span v-if="formErrors.FinCEN_ID" class="error">{{ formErrors.FinCEN_ID }}</span>
									</div>
								</div>
							</li>
							<hr>
							<h6>Full legal name and date of birth:</h6>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label><span class="red">*</span>Individual's last name</label>
									</div>
									<div class="col-md-7">
										<input class="form-input" type="text" v-model="formData.Individual_last_name"
											placeholder="Individual's last name">
										<span v-if="formErrors.Individual_last_name" class="error">{{
											formErrors.Individual_last_name }}</span>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label><span class="red">*</span>First name</label>
									</div>
									<div class="col-md-7">
										<input class="form-input" type="text" v-model="formData.First_name"
											placeholder="First name">
										<span v-if="formErrors.First_name" class="error">{{ formErrors.First_name }}</span>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label>Middle name</label>
									</div>
									<div class="col-md-7">
										<input class="form-input" type="text" v-model="formData.Middle_name"
											placeholder="Middle name">
										<span v-if="formErrors.Middle_name" class="error">{{ formErrors.Middle_name
										}}</span>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label>Suffix</label>
									</div>
									<div class="col-md-7">
										<input class="form-input" type="text" v-model="formData.Suffix"
											placeholder="Suffix">
										<span v-if="formErrors.Suffix" class="error">{{ formErrors.Suffix }}</span>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label>Date of birth</label>
									</div>
									<div class="col-md-7">
										<input class="form-input" type="date" v-model="formData.Date">
										<span v-if="formErrors.Date" class="error">{{ formErrors.Date }}</span>
									</div>
								</div>
							</li>
							<hr>
							<h6>Current address:</h6>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label><span class="red">*</span>Address type</label>
									</div>
									<div class="col-md-7 d-flex">
										<div class="current-radio-btn">
											<label><span>a.</span>Business address</label>
											<input class="mx-2" type="radio" name="business" :value="true" v-model="formData.Business_beneficial">
											
										</div>
										<div class="current-radio-btn">
											<label><span>b.</span>Residential address</label>
											<input class="mx-2" type="radio"  name="business" :value="true" v-model="formData.Residential_applicant">
										
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label><span class="red">*</span>Address (number, street,and apt. or suite
											no.)</label>
									</div>
									<div class="col-md-7">
										<input class="form-input" type="text" v-model="formData.Address_number"
											placeholder="Address (number, street,and apt. or suite no.)">
										<span v-if="formErrors.Address_number" class="error">{{ formErrors.Address_number
										}}</span>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label><span class="red">*</span>City</label>
									</div>
									<div class="col-md-7">
										<input class="form-input" type="text" v-model="formData.City_applicant"
											placeholder="City">
										<span v-if="formErrors.City_applicant" class="error">{{ formErrors.City_applicant
										}}</span>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label><span class="red">*</span>Country/Jurisdiction</label>
									</div>
									<div class="col-md-7">
										<select class="form-select" v-model="formData.Country" id="Country">
											<option disabled>Choose...</option>
											<option value="1">One</option>
											<option value="2">Two</option>
											<option value="3">Three</option>
										</select>
										<span v-if="formErrors.Country" class="error">{{ formErrors.Country }}</span>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label><span class="red">*</span>State</label>
									</div>
									<div class="col-md-7">
										<select class="form-select" v-model="formData.State_applicant" id="State_applicant">
											<option disabled>Choose...</option>
											<option value="1">One</option>
											<option value="2">Two</option>
											<option value="3">Three</option>
										</select>
										<span v-if="formErrors.State_applicant" class="error">{{ formErrors.State_applicant
										}}</span>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label><span class="red">*</span>ZIP/Foreign postal code</label>
									</div>
									<div class="col-md-7">
										<input class="form-input" type="text" v-model="formData.Foreign_postal"
											placeholder="ZIP/Foreign postal code">
										<span v-if="formErrors.Foreign_postal" class="error">{{ formErrors.Foreign_postal
										}}</span>
									</div>
								</div>
							</li>
							<hr>
							<h6>Form of identification and issuing jurisdiction:</h6>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label><span class="red">*</span>Identifying document type</label>
									</div>
									<div class="col-md-7">
										<select class="form-select" v-model="formData.Identififying_document"
											id="Identififying_document">
											<option disabled>Choose...</option>
											<option value="1">One</option>
											<option value="2">Two</option>
											<option value="3">Three</option>
										</select>
										<span v-if="formErrors.Identififying_document" class="error">{{
											formErrors.Identififying_document }}</span>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label><span class="red">*</span>Identifying document number</label>
									</div>
									<div class="col-md-7">
										<input class="form-input" type="text" v-model="formData.Identififying_number"
											placeholder="Identifying document number">
										<span v-if="formErrors.Identififying_number" class="error">{{
											formErrors.Identififying_number }}</span>
									</div>
								</div>
							</li>
							<li>
								<label><span class="red">*</span>Identifying document issuing jurisdiction:</label>
								<ol type="a" style="margin-left: 0px!important">
									<li>
										<div class="row">
											<div class="col-md-4">
												<label>Country/Jurisdiction</label>
											</div>
											<div class="col-md-7">
												<select class="form-select" v-model="formData.Country_jurisdiction"
													id="Country_jurisdiction">
													<option disabled>Choose...</option>
													<option value="1">One</option>
													<option value="2">Two</option>
													<option value="3">Three</option>
												</select>
												<span v-if="formErrors.Country_jurisdiction" class="error">{{
													formErrors.Country_jurisdiction }}</span>
											</div>
										</div>
									</li>
									<li>
										<div class="row">
											<div class="col-md-4">
												<label>State</label>
											</div>
											<div class="col-md-7">
												<select class="form-select" v-model="formData.State_app" id="State_app">
													<option disabled>Choose...</option>
													<option value="1">One</option>
													<option value="2">Two</option>
													<option value="3">Three</option>
												</select>
												<span v-if="formErrors.State_app" class="error">{{ formErrors.State_app
												}}</span>
											</div>
										</div>
									</li>
									<li>
										<div class="row">
											<div class="col-md-4">
												<label>Local/Tribal</label>
											</div>
											<div class="col-md-7">
												<input class="form-input" type="text" v-model="formData.local"
													placeholder="Local/Tribal">
												<span v-if="formErrors.local" class="error">{{ formErrors.local }}</span>
											</div>
										</div>
									</li>
									<li>
										<div class="row">
											<div class="col-md-4">
												<label>Other local/Tribal description</label>
											</div>
											<div class="col-md-7">
												<input class="form-input" type="text" v-model="formData.tribal_desc"
													placeholder="Other local/Tribal description">
												<span v-if="formErrors.tribal_desc" class="error">{{ formErrors.tribal_desc
												}}</span>
											</div>
										</div>
									</li>
								</ol>
							</li>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label><span class="red">*</span>Identifying document image</label>
									</div>
									<div class="col-md-7">
										<input class="file btn btn-primary" type="file" @change="attachFileApplicant">										
											<button type="button" class="file btn btn-primary mx-1" @click="removeAttachmentapplicant">Remove Attachment</button>
											<input class="f-input form-input" v-model="attachedFileNameApplicant" readonly>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label style="white-space: nowrap;">(This item is reserved for future use)</label>
									</div>
								</div>
							</li>
						</div>

						<div class="container" v-for="(input, b) in beneficial" :key="b">
							<div class="applicant-wrapper section" id="beneficial">
								<h3>Part III. Beneficial Owner Information</h3>
								<div class="add-p1">
									<button @click.prevent="addBeneficial()" class="add-btn">+</button>
									<!-- <button v-if="b === 0" disabled class="remove-btn">-</button> -->
									<button v-if="b === 0" disabled class="remove-btn">-</button>
									<button v-else @click.prevent="removeBeneficial(b)" class="remove-btn">-</button>
								</div>
							</div>
							<hr>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label>Parent/Guardian information instead of minor child</label>
									</div>
									<div class="col-md-7 select-rdo">
										<input class="" type="checkbox" name="minor" v-model="formData.minor_child">

										<span style="margin-left: 10px;"> (check if the Beneficial Owner is a minor child
											and the parent/guardian
											information is provided instead)</span>
										<span v-if="formErrors.minor_child" class="error">{{ formErrors.minor_child
										}}</span>
									</div>
								</div>
							</li>
							<hr>
							<h6>Beneficial Owner FinCEN ID:</h6>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label>FinCEN ID</label>
									</div>
									<div class="col-md-7">
										<input class="form-input" v-model="formData.Beneficial_fincenID" type="text"
											placeholder="FinCEN ID">
										<span v-if="formErrors.Beneficial_fincenID" class="error">{{
											formErrors.Beneficial_fincenID }}</span>
									</div>
								</div>
							</li>
							<hr>
							<h6>Exempt entity:</h6>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label>Exempt entity:</label>
									</div>
									<div class="col-md-7 select-rdo">
										<input class="" type="checkbox" name="entity" v-model="formData.entity_beneficial">										
									</div>
								</div>
							</li>
							<hr>
							<h6>Full legal name and date of birth:</h6>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label><span class="red">*</span>Individual's last name or entity's legal
											name.</label>
									</div>
									<div class="col-md-7">
										<input class="form-input" type="text" v-model="formData.entity_legal"
											placeholder="Individual's last name or entity's legal name.">
										<span v-if="formErrors.entity_legal" class="error">{{ formErrors.entity_legal
										}}</span>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label><span class="red">*</span>First name</label>
									</div>
									<div class="col-md-7">
										<input class="form-input" type="text" v-model="formData.Beneficial_first_name"
											placeholder="First name">
										<span v-if="formErrors.Beneficial_first_name" class="error">{{
											formErrors.Beneficial_first_name }}</span>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label>Middle name</label>
									</div>
									<div class="col-md-7">
										<input class="form-input" type="text" v-model="formData.Beneficial_Middle_name"
											placeholder="Middle name">
										<span v-if="formErrors.Beneficial_Middle_name" class="error">{{
											formErrors.Beneficial_Middle_name }}</span>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label>Suffix</label>
									</div>
									<div class="col-md-7">
										<input class="form-input" v-model="formData.Beneficial_suffix" type="text"
											placeholder="Suffix">
										<span v-if="formErrors.Beneficial_suffix" class="error">{{
											formErrors.Beneficial_suffix }}</span>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label>Date of birth</label>
									</div>
									<div class="col-md-7">
										<input class="form-input" type="date" v-model="formData.Beneficial_date">
										<span v-if="formErrors.Beneficial_date" class="error">{{ formErrors.Beneficial_date
										}}</span>
									</div>
								</div>
							</li>
							<hr>
							<h6>Residential address:</h6>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label><span class="red">*</span>Address (number, street, and apt. or
											suite
											no.)</label>
									</div>
									<div class="col-md-7">
										<input class="form-input" v-model="formData.Beneficial_Address"
											placeholder="Address (number, street, and apt. or suite no.)" type="text">
										<span v-if="formErrors.Beneficial_Address" class="error">{{
											formErrors.Beneficial_Address }}</span>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label><span class="red">*</span>City</label>
									</div>
									<div class="col-md-7">
										<input class="form-input" v-model="formData.Beneficial_city" type="text"
											placeholder="City">
										<span v-if="formErrors.Beneficial_city" class="error">{{ formErrors.Beneficial_city
										}}</span>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label><span class="red">*</span>Country/Jurisdiction</label>
									</div>
									<div class="col-md-7">
										<select class="form-select" v-model="formData.Beneficial_country_resi"
											id="Beneficial_country_resi">
											<option disabled>Choose...</option>
											<option value="1">One</option>
											<option value="2">Two</option>
											<option value="3">Three</option>
										</select>
										<span v-if="formErrors.Beneficial_country_resi" class="error">{{
											formErrors.Beneficial_country_resi }}</span>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label><span class="red">*</span>State</label>
									</div>
									<div class="col-md-7">
										<select class="form-select" v-model="formData.Beneficial_state_resi"
											id="Beneficial_state_resi">
											<option disabled>Choose...</option>
											<option value="1">One</option>
											<option value="2">Two</option>
											<option value="3">Three</option>
										</select>
										<span v-if="formErrors.Beneficial_state_resi" class="error">{{
											formErrors.Beneficial_state_resi }}</span>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label><span class="red">*</span>ZIP/Foreign postal code</label>
									</div>
									<div class="col-md-7">
										<input class="form-input" v-model="formData.Beneficial_zipcode" type="text"
											placeholder="ZIP/Foreign postal code">
										<span v-if="formErrors.Beneficial_zipcode" class="error">{{
											formErrors.Beneficial_zipcode }}</span>
									</div>
								</div>
							</li>
							<hr>
							<h6>Form of identification and issuing jurisdiction:</h6>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label><span class="red">*</span>Identifying document type</label>
									</div>
									<div class="col-md-7">
										<select class="form-select" v-model="formData.Beneficial_document_type"
											id="Beneficial_document_type">
											<option disabled>Choose...</option>
											<option value="1">One</option>
											<option value="2">Two</option>
											<option value="3">Three</option>
										</select>
										<span v-if="formErrors.Beneficial_document_type" class="error">{{
											formErrors.Beneficial_document_type }}</span>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label><span class="red">*</span>Identifying document number</label>
									</div>
									<div class="col-md-7">
										<input class="form-input" type="text" v-model="formData.Beneficial_document_number"
											placeholder="Identifying document number">
										<span v-if="formErrors.Beneficial_document_number" class="error">{{
											formErrors.Beneficial_document_number }}</span>
									</div>
								</div>
							</li>
							<li>
								<label><span class="red">*</span>Identifying document issuing jurisdiction:</label>
								<ol type="a" style="margin-left: 0px!important">
									<li>
										<div class="row">
											<div class="col-md-4">
												<label>Country/Jurisdiction</label>
											</div>
											<div class="col-md-7">
												<input class="form-input" type="text" v-model="formData.Beneficial_country"
													placeholder="Country/Jurisdiction">
												<span v-if="formErrors.Beneficial_country" class="error">{{
													formErrors.Beneficial_country }}</span>
											</div>
										</div>
									</li>
									<li>
										<div class="row">
											<div class="col-md-4">
												<label>State</label>
											</div>
											<div class="col-md-7">
												<input class="form-input" v-model="formData.Beneficial_state" type="text"
													placeholder="State">
												<span v-if="formErrors.Beneficial_state" class="error">{{
													formErrors.Beneficial_state }}</span>
											</div>
										</div>
									</li>
									<li>
										<div class="row">
											<div class="col-md-4">
												<label>Local/Tribal</label>
											</div>
											<div class="col-md-7">
												<input class="form-input" v-model="formData.Beneficial_Local" type="text"
													placeholder="Local/Tribal">
												<span v-if="formErrors.Beneficial_Local" class="error">{{
													formErrors.Beneficial_Local }}</span>
											</div>
										</div>
									</li>
									<li>
										<div class="row">
											<div class="col-md-4">
												<label>Other local/Tribal description</label>
											</div>
											<div class="col-md-7">
												<input class="form-input" type="text"
													v-model="formData.Beneficial_Other_local"
													placeholder="Other local/Tribal description">
												<span v-if="formErrors.Beneficial_Other_local" class="error">{{
													formErrors.Beneficial_Other_local }}</span>
											</div>
										</div>
									</li>
								</ol>
							</li>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label><span class="red">*</span>Identifying document image</label>
									</div>
									<div class="col-md-7">										
											<input class="file btn btn-primary" type="file" @change="attachFile">										
											<button type="button" class="file btn btn-primary mx-1" @click="removeAttachment">Remove Attachment</button>
											<input class="f-input form-input" v-model="attachedFileName" readonly>
										</div>
								</div>
							</li>
						</div>

						<!-- <ReportingBoir ref="reporting"  id="reporting" class="section" />						
							<ApplicantBoir ref="applicant"  id="applicant" class="section" />
							<BeneficialBoir ref="beneficial" id="beneficial" class="section" /> -->
					</ol>
				</div>
			</div>
			<div class="bt-box">
				<button type="submit">Submit</button>
			</div>
		</form>

	</div>
	<div v-if="responseXml" class="container">
		<div class="form-control">
			<div class="filling-info-wrapper" v-if="responseXml">
				<h3 class="header-upper">Response XML:</h3>
				<hr>
				<pre>{{ responseXml }}</pre>
			</div>
		</div>

	</div>

	<!---Dashboard-section-end-->
	<!-- start footer -->
	<FooterBoir />
	<!-- end footer -->

</template>

<script>
/* eslint-disable */
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import '../assets/css/main.css'
import '../assets/images/Financial-logo.png'
// import XMLFormatter from './XMLFormatter.vue';
import ModalBoir from '../components/ModalBoir.vue';
// import ReportingBoir from './ReportingBoir.vue'
import HeaderBoir from './HeaderBoir.vue';
import FooterBoir from './FooterBoir.vue'
// import ApplicantBoir from './ApplicantBoir.vue'
// import BeneficialBoir from './BenificialBoir.vue'
export default {
	name: 'DashboardBoir',
	components: {
		HeaderBoir,
		FooterBoir,
		// ReportingBoir,
		// ApplicantBoir,
		// BeneficialBoir,
		ModalBoir,
		// XMLFormatter,
	},
	data() {
		return {
			alters: [{
            Alternate_name: '',
        }],
			beneficial: [{
				name: '',
			}],
			applicant: [{
				name: '',
			}],
			n: 0,
			a: 0,
			b: 0,
			attachedFile: null,
			attachedFileName: "",
			attachedFileNameApplicant:"",
			isModalVisible: false,
			formData: {
				attachedFile: null,
				attachedFileName: "",
				attachedFileNameApplicant:"",
				Initial_report: false,
				date: '',
				Jurisdiction_tax_id: '',
				Tax_Identification_number: '',
				Tax_Identification_type: '',
				Legal_name: '',
				Newly_exempt_entity: false,
				Update_prior_report: false,
				Correct_prior_report: false,
				FinCEN_Identifier: '',
				Foreign_Pooled: '',
				Reporting_Company: '',
				Alternate_name: '',
				Tax_Identification: '',
				Identification: '',
				foreign_tax: '',
				formation: '',
				State_of_formation: '',
				Exit_reporting_company: '',
				ZIP_Code: '',
				State: '',
				Territory: '',
				City: '',
				Address: '',
				Name_other_Tribe: '',
				Tribal_jurisdiction: '',
				Tribal_first_jurisdiction: '',
				registration: '',
				other_Tribe: '',
				tribal_desc: '',
				local: '',
				entity:'',
				State_app: '',
				Country_jurisdiction: '',
				Identififying_number: '',
				Identififying_document: '',
				Foreign_postal: '',
				State_applicant: '',
				Country: '',
				City_applicant: '',
				Address_number: '',
				Residential_applicant: false,
				Business_beneficial: false,
				Date: '',
				Suffix: '',
				Middle_name: '',
				First_name: '',
				Individual_last_name: '',
				FinCEN_ID: '',
				minor_child:'',
				Beneficial_fincenID:'',
				entity_beneficial:'',
				entity_legal:'',				
				Beneficial_first_name:'',
				Beneficial_Middle_name:'',
				Beneficial_suffix:'',
				Beneficial_date:'',
				Beneficial_Address:'',
				Beneficial_city:'',
				Beneficial_country_resi:'',
				Beneficial_state_resi:'',
				Beneficial_zipcode:'',
				Beneficial_document_type:'',
				Beneficial_document_number:'',
				Beneficial_country:'',
				Beneficial_state:'',
				Beneficial_Local:'',
				Beneficial_Other_local:'',

			},
			responseXml: null,
			formErrors: {
				attachedFile: null,
				Initial_report: false,
				Newly_exempt_entity: false,
				Update_prior_report: false,
				Correct_prior_report: false,
				attachedFileName: "",
				attachedFileNameApplicant:"",
				date: '',
				Jurisdiction_tax_id: '',
				Tax_Identification_number: '',
				Tax_Identification_type: '',
				Legal_name: '',
				FinCEN_Identifier: '',
				Foreign_Pooled: '',
				Reporting_Company: '',			
				Tax_Identification: '',
				Identification: '',
				foreign_tax: '',
				formation: '',
				State_of_formation: '',
			
				ZIP_Code: '',
				State: '',
				entity:'',
				Territory: '',
				City: '',
				Address: '',
				Name_other_Tribe: '',
				Tribal_jurisdiction: '',
				Tribal_first_jurisdiction: '',
				registration: '',
				other_Tribe: '',
				tribal_desc: '',
				local: '',
				State_app: '',
				Country_jurisdiction: '',
				Identififying_number: '',
				Identififying_document: '',
				Foreign_postal: '',
				State_applicant: '',
				Country: '',
				City_applicant: '',
				Address_number: '',
		
			
				Date: '',
				Suffix: '',
				Middle_name: '',
				First_name: '',
				Individual_last_name: '',
				FinCEN_ID: '',
				Beneficial_fincenID:'',

				entity_legal:'',
				Beneficial_first_name:'',
				Beneficial_Middle_name:'',
				Beneficial_suffix:'',
				Beneficial_date:'',
				Beneficial_Address:'',
				Beneficial_city:'',
				Beneficial_country_resi:'',
				Beneficial_state_resi:'',
				Beneficial_zipcode:'',
				Beneficial_document_type:'',
				Beneficial_document_number:'',
				Beneficial_country:'',
				Beneficial_state:'',
				Beneficial_Local:'',
				Beneficial_Other_local:'',

			}
		};
	},
	methods: {
    addAlter() {
        this.alters.push({
            Alternate_name: '',
        });
    },
    removeAlter(index) {
        this.alters.splice(index, 1);
    },


		addBeneficial() {
			this.beneficial.push({
				name: '',
			})
		},
		removeBeneficial(beneficial) {
			this.beneficial.splice(beneficial, 1)
		},
		addApplicant() {
			this.applicant.push({
				name: '',
			})
		},
		removeApplicant(applicant) {
			this.applicant.splice(applicant, 1)
		},
		validateForm() {
			let isValid = true;
			this.formErrors = {
				attachedFile: null,
				attachedFileName: "",
				attachedFileNameApplicant:"",
				FinCEN_Identifier: '',
				Foreign_Pooled: '',
				Reporting_Company: '',
			
				Tax_Identification: '',
				Identification: '',
				foreign_tax: '',
				formation: '',
				State_of_formation: '',
		
				ZIP_Code: '',
				State: '',
				Territory: '',
				City: '',
				entity:'',
				Address: '',
				Name_other_Tribe: '',
				Tribal_jurisdiction: '',
				Tribal_first_jurisdiction: '',
				registration: '',
				other_Tribe: '',
				tribal_desc: '',
				local: '',
				State_app: '',
				Country_jurisdiction: '',
				Identififying_number: '',
				Identififying_document: '',
				Foreign_postal: '',
				State_applicant: '',
				Country: '',
				City_applicant: '',
				Address_number: '',
			
			
				Date: '',
				Suffix: '',
				Middle_name: '',
				First_name: '',
				Individual_last_name: '',
				FinCEN_ID: '',
				Beneficial_fincenID:'',

				entity_legal:'',
				Beneficial_first_name:'',
				Beneficial_Middle_name:'',
				Beneficial_suffix:'',
				Beneficial_date:'',
				Beneficial_Address:'',
				Beneficial_city:'',
				Beneficial_country_resi:'',
				Beneficial_state_resi:'',
				Beneficial_zipcode:'',
				Beneficial_document_type:'',
				Beneficial_document_number:'',
				Beneficial_country:'',
				Beneficial_state:'',
				Beneficial_Local:'',
				Beneficial_Other_local:'',

				date: '', Jurisdiction_tax_id: '', Tax_Identification_number: '', Tax_Identification_type: '', Legal_name: '',
			};
			
			if (!this.formData.date) {
				this.formErrors.date = 'Date is required';
				isValid = false;
			}
			if (!this.formData.Jurisdiction_tax_id) {
				this.formErrors.Jurisdiction_tax_id = 'Jurisdiction tax id is required';
				isValid = false;
			}
			if (!this.formData.Tax_Identification_number) {
				this.formErrors.Tax_Identification_number = 'Tax Identification number is required';
				isValid = false;
			}
			if (!this.formData.Tax_Identification_type) {
				this.formErrors.Tax_Identification_type = 'Tax Identification type is required';
				isValid = false;
			}
			if (!this.formData.Legal_name) {
				this.formErrors.Legal_name = 'Legal name is required';
				isValid = false;
			}			
			if (!this.formData.FinCEN_Identifier) {
			    this.formErrors.FinCEN_Identifier = 'FinCEN is required';
			    isValid = false;
			}
			if (!this.formData.Tribal_first_jurisdiction) {
				this.formErrors.Tribal_first_jurisdiction = 'Tribal first jurisdiction is required';
				isValid = false;
			}
			if (!this.formData.Foreign_Pooled) {
			    this.formErrors.Foreign_Pooled = 'Foreign is required';
			    isValid = false;
			}
			if (!this.formData.Reporting_Company) {
				this.formErrors.Reporting_Company = 'Reporting is required';
				isValid = false;
			}
			if (!this.formData.Tax_Identification) {
				this.formErrors.Tax_Identification = 'Jurisdiction Type is required';
				isValid = false;
			}
			if (!this.formData.foreign_tax) {
				this.formErrors.foreign_tax = 'Foreign Tax is required';
				isValid = false;
			}
			if (!this.formData.formation) {
				this.formErrors.formation = 'Formation is required';
				isValid = false;
			}
			if (!this.formData.State_of_formation) {
				this.formErrors.State_of_formation = 'State Formation is required';
				isValid = false;
			}

			if (!this.formData.ZIP_Code) {
				this.formErrors.ZIP_Code = 'Zip Code is required';
				isValid = false;
			}
			if (!this.formData.State) {
				this.formErrors.State = 'State is required';
				isValid = false;
			}
			if (!this.formData.Territory) {
				this.formErrors.Territory = 'Territory is required';
				isValid = false;
			}
			if (!this.formData.City) {
				this.formErrors.City = 'City is required';
				isValid = false;
			}
			if (!this.formData.entity) {
				this.formErrors.entity = 'City is required';
				isValid = false;
			}
			if (!this.formData.Address) {
				this.formErrors.Address = 'Address is required';
				isValid = false;
			}
			if (!this.formData.Name_other_Tribe) {
				this.formErrors.Name_other_Tribe = 'Name other Tribe is required';
				isValid = false;
			}
			if (!this.formData.Tribal_jurisdiction) {
				this.formErrors.Tribal_jurisdiction = 'Tribal jurisdiction is required';
				isValid = false;
			}
			if (!this.formData.registration) {
				this.formErrors.registration = 'Registration is required';
				isValid = false;
			}
			if (!this.formData.other_Tribe) {
				this.formErrors.other_Tribe = 'Other Tribe is required';
				isValid = false;
			}
			if (!this.formData.tribal_desc) {
				this.formErrors.tribal_desc = 'tribal desc is required';
				isValid = false;
			}
			if (!this.formData.local) {
				this.formErrors.local = 'local is required';
				isValid = false;
			}
			if (!this.formData.State_app) {
				this.formErrors.State_app = 'State app is required';
				isValid = false;
			}
			if (!this.formData.Country_jurisdiction) {
				this.formErrors.Country_jurisdiction = 'Country jurisdiction is required';
				isValid = false;
			}
			if (!this.formData.Identififying_number) {
				this.formErrors.Identififying_number = 'Identififying number is required';
				isValid = false;
			}
			if (!this.formData.Identififying_document) {
				this.formErrors.Identififying_document = 'Identififying document is required';
				isValid = false;
			}
			if (!this.formData.Foreign_postal) {
				this.formErrors.Foreign_postal = 'Foreign postal is required';
				isValid = false;
			}
			if (!this.formData.State_applicant) {
				this.formErrors.State_applicant = 'State applicant is required';
				isValid = false;
			}
			if (!this.formData.Country) {
				this.formErrors.Country = 'Country applicant is required';
				isValid = false;
			}
			if (!this.formData.City_applicant) {
				this.formErrors.City_applicant = 'City applicant is required';
				isValid = false;
			}
			if (!this.formData.Address_number) {
				this.formErrors.Address_number = 'Address number is required';
				isValid = false;
			}
			if (!this.formData.Date) {
				this.formErrors.Date = 'Date is required';
				isValid = false;
			}
			if (!this.formData.Suffix) {
				this.formErrors.Suffix = 'Suffix is required';
				isValid = false;
			}
			if (!this.formData.FinCEN_ID) {
				this.formErrors.FinCEN_ID = 'FinCEN ID is required';
				isValid = false;
			}
			if (!this.formData.Individual_last_name) {
				this.formErrors.Individual_last_name = 'Individual last name is required';
				isValid = false;
			}
			if (!this.formData.First_name) {
				this.formErrors.First_name = 'First name is required';
				isValid = false;
			}
			if (!this.formData.Middle_name) {
				this.formErrors.Middle_name = 'Middle name is required';
				isValid = false;
			}
			if (!this.formData.Beneficial_fincenID) {
				this.formErrors.Beneficial_fincenID = 'Beneficial fincenID is required';
				isValid = false;
			}
			if (!this.formData.entity_legal) {
				this.formErrors.entity_legal = 'entity legal is required';
				isValid = false;
			}
			if (!this.formData.Beneficial_first_name) {
				this.formErrors.Beneficial_Middle_name = "Beneficial first name is required";
				isValid = false;
			}
			if (!this.formData.Beneficial_Middle_name) {
				this.formErrors.Beneficial_Middle_name = 'Beneficial Middle name is required';
				isValid = false;
			}
			if (!this.formData.Beneficial_suffix) {
				this.formErrors.Beneficial_suffix = 'Beneficial suffix is required';
				isValid = false;
			}
			if (!this.formData.Beneficial_date) {
				this.formErrors.Beneficial_date = 'Beneficial date is required';
				isValid = false;
			}
			if (!this.formData.Beneficial_Address) {
				this.formErrors.Beneficial_Address = 'Beneficial Address is required';
				isValid = false;
			}
			if (!this.formData.Beneficial_city) {
				this.formErrors.Beneficial_city = 'Beneficial city is required';
				isValid = false;
			}
			if (!this.formData.Beneficial_country_resi) {
				this.formErrors.Beneficial_country_resi = 'Beneficial country is required';
				isValid = false;
			}
			if (!this.formData.Beneficial_state_resi) {
				this.formErrors.Beneficial_state_resi = 'Beneficial state is required';
				isValid = false;
			}
			if (!this.formData.Beneficial_zipcode) {
				this.formErrors.Beneficial_zipcode = 'Beneficial zipcode is required';
				isValid = false;
			}
			if (!this.formData.Beneficial_document_type) {
				this.formErrors.Beneficial_document_type = 'Beneficial document type is required';
				isValid = false;
			}
			if (!this.formData.Beneficial_document_number) {
				this.formErrors.Beneficial_document_number = 'Beneficial document number is required';
				isValid = false;
			}
			if (!this.formData.Beneficial_country) {
				this.formErrors.Beneficial_country = 'Beneficial country is required';
				isValid = false;
			}
			if (!this.formData.Beneficial_state) {
				this.formErrors.Beneficial_state = 'Beneficial state is required';
				isValid = false;
			}
			if (!this.formData.Beneficial_Local) {
				this.formErrors.Beneficial_Local = 'Beneficial local is required';
				isValid = false;
			}
			if (!this.formData.Beneficial_Other_local) {
				this.formErrors.Beneficial_Other_local = 'Beneficial other local is required';
				isValid = false;
			}

			return isValid;
		},
		showModal() {
			this.isModalVisible = true;
		},
		closeModal() {
			this.isModalVisible = false;
		},
		attachFile(e) {
			this.attachedFile = e.target.files[0];
			this.attachedFileName = this.attachedFile ? this.attachedFile.name : "";
		},
		removeAttachment() {
			this.attachedFile = null;
			this.attachedFileName = "";
			const fileInput = this.$refs.fileInput;
			if (fileInput) {
				fileInput.value = "";
			}
		},
		attachFileApplicant(e) {
			this.attachedFile = e.target.files[0];
			this.attachedFileNameApplicant = this.attachedFile ? this.attachedFile.name : "";
		},
		removeAttachmentapplicant() {
			this.attachedFile = null;
			this.attachedFileNameApplicant = "";
			const fileInput = this.$refs.fileInput;
			if (fileInput) {
				fileInput.value = "";
			}
		},
		submitForm() {
			if (!this.validateForm()) {
				return;
			}

			const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
          <root>
			<BoirFormList>
				<UpdatePriorReport>${this.formData.Update_prior_report}</UpdatePriorReport>
				<CorrectPriorReport>${this.formData.Correct_prior_report}</CorrectPriorReport>
				<InitialReport>${this.formData.Initial_report}</InitialReport>
				<NewlyExemptEntity>${this.formData.Newly_exempt_entity}</NewlyExemptEntity>
				<date>${this.formData.date}</date>
				<JurisdictionTaxId>${this.formData.Jurisdiction_tax_id}</JurisdictionTaxId>
				<TaxIdentificationNumber>${this.formData.Tax_Identification_number}</TaxIdentificationNumber>
				<TaxIdentificationType>${this.formData.Tax_Identification_type}</TaxIdentificationType>
				<LegalName>${this.formData.Legal_name}</LegalName>
				<FinCENIdentifier>${this.formData.FinCEN_Identifier}</FinCENIdentifier>
				<ForeignPooled>${this.formData.Foreign_Pooled}</ForeignPooled>
				<ReportingCompany>${this.formData.Reporting_Company}</ReportingCompany>
				<AlternateName>${this.formData.Alternate_name}</AlternateName>
				<TaxIdentificationType>${this.formData.Tax_Identification}</TaxIdentificationType>
				<ForeignTax>${this.formData.foreign_tax}</ForeignTax>
				<Formation>${this.formData.formation}</Formation>
				<StateOfFormation>${this.formData.State_of_formation}</StateOfFormation>
				<ExitReportingCompany>${this.formData.Exit_reporting_company}</ExitReportingCompany>
				<ZIPCode>${this.formData.ZIP_Code}</ZIPCode>
				<State>${this.formData.State}</State>
				<Identification>${this.formData.Identification}</Identification
				<Territory>${this.formData.Territory}</Territory>
				<City>${this.formData.City}</City>
				<Address>${this.formData.Address}</Address>
				<NameOtherTribe>${this.formData.Name_other_Tribe}</NameOtherTribe>
				<TribalJurisdiction>${this.formData.Tribal_jurisdiction}</TribalJurisdiction>
				<TribalFirstJurisdiction>${this.formData.Tribal_first_jurisdiction}</TribalFirstJurisdiction>
				<Registration>${this.formData.registration}</Registration>
				<OtherTribe>${this.formData.other_Tribe}</OtherTribe>
				<tribalDesc>${this.formData.tribal_desc}</tribalDesc>
              <local>${this.formData.local}</local>
              <StateApp>${this.formData.State_app}</StateApp>
              <CountryJurisdiction>${this.formData.Country_jurisdiction}</CountryJurisdiction>
			  <IdentififyingNumber>${this.formData.Identififying_number}</IdentififyingNumber>
              <IdentififyingDocument>${this.formData.Identififying_document}</IdentififyingDocument>
              <ForeignPostal>${this.formData.Foreign_postal}</ForeignPostal>
              <StateApplicant>${this.formData.State_applicant}</StateApplicant>
			  <Country>${this.formData.Country}</Country>
			  <CityApplicant>${this.formData.City_applicant}</CityApplicant>
			  <AddressNumber>${this.formData.Address_number}</AddressNumber>
			  <Residential>${this.formData.Residential}</Residential>
			  <Business>${this.formData.Business_beneficial}</Business>
			  <Date>${this.formData.Date}</Date>
              <Suffix>${this.formData.Suffix}</Suffix>
			  <ResidentialApplicant>${this.formData.Residential_applicant}</ResidentialApplicant>
			  <MiddleName>${this.formData.Middle_name}</MiddleName>
			  <FirstName>${this.formData.First_name}</FirstName>
			  <IndividualLastName>${this.formData.Individual_last_name}</IndividualLastName>
              <FinCEN>${this.formData.FinCEN_ID}</FinCEN>
		       <minorchild>${this.formData.minor_child}</minorchild>
               <BeneficialFincenID>${this.formData.Beneficial_fincenID}</BeneficialFincenID>
               <Entity>${this.formData.entity_beneficial}</Entity>
               <BeneficialOtherLocal>${this.formData.Beneficial_Other_local}</BeneficialOtherLocal>
		 	   <BeneficialLocal>${this.formData.Beneficial_Local}</BeneficialLocal>
               <BeneficialState>${this.formData.Beneficial_state}</BeneficialState>
               <BeneficialCountry>${this.formData.Beneficial_country}</BeneficialCountry>
		 	   <BeneficialStateResi>${this.formData.Beneficial_state_resi}</BeneficialStateResi>
               <BeneficialCountryResi>${this.formData.Beneficial_country_resi}</BeneficialCountryResi>
               <BeneficialDocumentNumber>${this.formData.Beneficial_document_number}</BeneficialDocumentNumber>
				<BeneficialDocumentType>${this.formData.Beneficial_document_type}</BeneficialDocumentType>
				<BeneficialZipcode>${this.formData.Beneficial_zipcode}</BeneficialZipcode>
				<EntityLegal>${this.formData.entity_legal}</EntityLegal>
				<BeneficialFirstName>${this.formData.Beneficial_first_name}</BeneficialFirstName>
				<BeneficialMiddleName>${this.formData.Beneficial_Middle_name}</BeneficialMiddleName>
				<BeneficialSuffix>${this.formData.Beneficial_suffix}</BeneficialSuffix>
               <BeneficialDate>${this.formData.Beneficial_date}</BeneficialDate>
		 	  <BeneficialAddress>${this.formData.Beneficial_Address}</BeneficialAddress>
		 	  <BeneficialCity>${this.formData.Beneficial_city}</BeneficialCity>
</BoirFormList>
          </root>`;

			// Create a mock adapter for axios
			const mock = new MockAdapter(axios);

			// Mock POST request to the dummy API endpoint
			mock.onPost('https://example.com/api/endpoint').reply(200, xmlData);

			// Simulate the actual HTTP request
			axios.post('https://example.com/api/endpoint', xmlData, {
				headers: { 'Content-Type': 'application/xml' }

			}).then(response => {
				this.formData.Correct_prior_report = ''
				this.formData.Update_prior_report = '',
					this.formData.date = ''
				this.formData.Initial_report = '',
					this.formData.Tax_Identification_number = ''
				this.formData.Jurisdiction_tax_id = '',
					this.formData.Legal_name = ''
				this.formData.Tax_Identification_type = '',
					this.formData.Newly_exempt_entity = '',
					this.formData.FinCEN_Identifier = '',
					this.formData.Foreign_Pooled = ''
				this.formData.Reporting_Company = '',
					this.formData.Alternate_name = '',
					this.formData.Tax_Identification = '',
					this.formData.Identification = '',
					this.formData.foreign_tax = '',
					this.formData.formation = '',
					this.formData.State_of_formation = '',
					this.formData.Exit_reporting_company = '',
					this.formData.ZIP_Code = '',
					this.formData.State = '',
					this.formData.Territory = '',
					this.formData.City = '',
					this.formData.Address = '',
					this.formData.Name_other_Tribe = '',
					this.formData.Tribal_jurisdiction = '',
					this.formData.Tribal_first_jurisdiction = '',
					this.formData.registration = '',
					this.formData.other_Tribe = '',
					this.formData.tribal_desc = '',
					this.formData.local = '',
					this.formData.State_app = '',
					this.formData.Country_jurisdiction = '',
					this.formData.Identififying_number = '',
					this.formData.Identififying_document = '',
					this.formData.Foreign_postal = '',
					this.formData.State_applicant = '',
					this.formData.Country = '',
					this.formData.City_applicant = '',
					this.formData.Address_number = '',
					this.formData.Residential = '',
					this.formData.Business_beneficial = '',
					this.formData.Date = '',
					this.formData.Suffix = '',
					this.formData.Middle_name = '',
					this.formData.First_name = '',
					this.formData.Individual_last_name = '',
					this.formData.FinCEN_ID = '',
					this.formData.entity ='',
					this.formData.minor_child ='',
					this.formData.Beneficial_fincenID ='',
					this.formData.entity_beneficial ='',
					this.formData.entity_legal ='',
					this.formData.Beneficial_first_name ='',
					this.formData.Beneficial_Middle_name ='',
					this.formData.Beneficial_suffix ='',
					this.formdata.Beneficial_date='',
					this.formdata.Beneficial_Address='',
					this.formdata.Beneficial_city='',
					this.formdata.Beneficial_country_resi='',
					this.formdata.Beneficial_state_resi='',
					this.formdata.Beneficial_zipcode='',
					this.formData.Beneficial_document_type='',
					this.formData.Beneficial_document_number='',
					this.formData.Beneficial_country='',
					this.formData.Beneficial_state='',
					this.formData.Beneficial_Local='',
					this.formData.Beneficial_Other_local='',
					this.formData.Residential_applicant ='',
					this.responseXml = response.data;
				console.log('Reporting Data:', this.responseXml);

			}).catch(error => {
				console.error('Error fetching data:', error.message);
			});


		}
	},
}
</script>