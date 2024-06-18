<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template>
	<!-- start header -->
	<HeaderBoir />
	<!-- end header -->
	<!---Dashboard section-section-start-->
	<div class="container mb-3 main-contant-box">
		<div class="submission-wrapper section">
			<div class="accordion accordion-flush" id="accordionFlushExample">
				<div class="accordion-item">
					<h2 class="accordion-header" id="flush-headingOne">
						<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
							data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
							<h4 class="mb-0">
								<i class="fa-solid fa-bullhorn"></i> Report Preparation &
								Submission Instructions
							</h4>
						</button>
					</h2>
					<div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
						data-bs-parent="#accordionFlushExample">
						<div class="accordion-body">
							<div class="submission-box">
								<div class="instruction-report d-flex">
									<div class="bt-box">
										<button v-on:click="showModal('instruction')" type="button">
											Instruction
										</button>
										<ModalBoir v-if="isModalVisible && modalType === 'instruction'"
											@click="closeModal" />
									</div>
									<div class="instructions-box">
										<p>
											<span>1.</span>Complete the report in its entirety with
											all required information. Click Instructions for help.
										</p>
									</div>
								</div>
								<div class="instruction-report d-flex">
									<div class="bt-box">
										<button type="button" @click="showModal">Validate</button>
										<ModalBoir v-if="isModalVisible" @click="closeModal" />
									</div>
									<div class="instructions-box">
										<p>
											<span>2.</span>Click Validate to ensure all entered data
											is properly formatted and that all required fields are
											completed.
										</p>
									</div>
								</div>
								<div class="instruction-report d-flex">
									<div class="bt-box">
										<button type="button" @click="showModal">Finalize</button>
										<ModalBoir v-if="isModalVisible" @click="closeModal" />
									</div>
									<div class="instructions-box">
										<p>
											<span>3.</span>Click Finalize to lock the entries in the
											report and prepare it for submission. Click Edit Report to
											unlock and re-edit.
										</p>
									</div>
								</div>
								<div class="instruction-report d-flex">
									<div class="bt-box">
										<button type="button" @click="showModal">Save</button>
										<ModalBoir v-if="isModalVisible" @click="closeModal" />
									</div>
									<div class="instructions-box">
										<p>
											<span>4.</span>Click Save to retain a local copy of the
											report (this can be done at any time during report
											preparation).
										</p>
									</div>
								</div>
								<div class="instruction-report d-flex">
									<div class="bt-box">
										<button type="button" @click="showModal">Print</button>
										<ModalBoir v-if="isModalVisible" @click="closeModal" />
									</div>
									<div class="instructions-box">
										<p>
											<span>5.</span>(Optional) Click Print to print a hard copy
											of your completed report.
										</p>
									</div>
								</div>
								<div class="instruction-report d-flex">
									<div class="bt-box">
										<button type="button" @click="showModal">
											Ready to File
										</button>
										<ModalBoir v-if="isModalVisible" @click="closeModal" />
									</div>
									<div class="instructions-box">
										<p>
											<span>6.</span>Select Ready to File (activated after the
											report is finalized and saved locally) to begin the
											submission process.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="form-wrapper">
			<form @submit.prevent="submitForm" class="form-control">
				<div class="filling-form" id="home">
					<div class="filling-info-wrapper">
						<div class="row">
							<div class="col-md-6">
								<h3>Filling Information</h3>
							</div>
							<div class="col-md-6 bt-box text-end">
								<span class="top-arrow"><i @click.prevent="scrollToElement"
										class="fa-solid fa-arrow-up"></i></span>
							</div>
						</div>
					</div>
					<hr />
					<div class="filling-form-que">
						<ol>
							<li>
								<label><span class="red">*</span><strong>Type of filing:</strong></label>
								<div style="margin-left: 15px; margin-top: 8px">
									<ol class="filing-list-inner" type="a">
										<li>
											<div class="row">
												<div class="col-md-4">
													<label for="html">Initial report</label>
												</div>
												<div class="col-md-8">
													<input type="radio" class="radio-start"
														v-model="formData.Initial_report" name="reportType"
														:value="true" @change="handleRadioChange('Initial_report')" />
												</div>
											</div>
										</li>
										<li>
											<div class="row">
												<div class="col-md-4">
													<label>Correct prior report</label>
												</div>
												<div class="col-md-8">
													<input type="radio" class="radio-start" :value="true"
														name="reportType" v-model="formData.Correct_prior_report"
														@change="handleRadioChange('Correct_prior_report')" />
												</div>
											</div>
										</li>
										<li>
											<div class="row">
												<div class="col-md-4">
													<label>Update prior report</label>
												</div>
												<div class="col-md-8">
													<input type="radio" class="radio-start" :value="true"
														name="reportType" v-model="formData.Update_prior_report"
														@change="handleRadioChange('Update_prior_report')" />
												</div>
											</div>
										</li>
										<li>
											<div class="row">
												<div class="col-md-4">
													<label>Newly exempt entity</label>
												</div>
												<div class="col-md-8">
													<input type="radio" class="radio-start" :value="true" id="css"
														name="reportType" v-model="formData.Newly_exempt_entity"
														@change="handleRadioChange('Newly_exempt_entity')" />
												</div>
											</div>
										</li>
										<span class="Report-note" style="margin-bottom: 7px !important"><em>Reporting
												Company information associated with most
												recent report, if any:</em></span>
										<li>
											<div class="row">
												<div class="col-md-4">
													<label>Legal name</label>
												</div>
												<div class="col-md-8">
													<input class="form-input" type="text" placeholder="Legal name"
														v-model="formData.Legal_name" />
													<span v-if="formErrors.Legal_name" class="error">{{
											formErrors.Legal_name
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
													<select class="form-select"
														v-model="formData.Tax_Identification_type"
														id="Tax_Identification_type">
														<option disabled>Choose...</option>
														<option value="EIN_2">EIN</option>
														<option value="TINN_1">TINN</option>
														<option value="FOREGIN_7">FOREGIN</option>
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
													<input class="form-input" type="text"
														v-model="formData.Tax_Identification_number"
														placeholder="Tax Identification number" inputmode="numeric"
														pattern="[0-9]*"
														oninput="this.value = this.value.replace(/[^0-9]/g, '')" />
													<span v-if="formErrors.Tax_Identification_number" class="error">{{
											formErrors.Tax_Identification_number }}</span>
												</div>
											</div>
										</li>
										<li>
											<div class="row">
												<div class="col-md-4">
													<label>Country/Jurisdiction (if foreign tax ID
													</label>
												</div>
												<div class="col-md-8">
													<select class="form-select" v-model="formData.Jurisdiction_tax_id"
														id="Jurisdiction_tax_id">
														<option disabled>Choose...</option>
														<option v-for="option in jurisdictionCountry"
															:key="option.value" :value="option.value">
															{{ option.label }}
														</option>
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
										<label><strong>Date prepared
												<span>(auto-filled when form is finalized).</span></strong></label>
									</div>
									<div class="col-md-8" style="padding-left: 22px">
										<input class="form-input" type="date" v-model="formData.date"
											@input="updateDate" />
										<span v-if="formErrors.date" class="error">{{
											formErrors.date
										}}</span>
									</div>
									<div class="com-md-12">
										<div class="act-notice-box">
											<h4>PRIVACY ACT AND PAPERWORK REDUCTION ACT NOTICE</h4>
											<p>
												This notice is given under the Privacy Act of 1974
												(Privacy Act) and the Paperwork Reduction Act of 1995
												(Paperwork Reduction Act). The Privacy Act and Paperwork
												Reduction Act require that FinCEN inform persons of the
												following when requesting and collecting information in
												connection with this collection of information. This
												collection of information is authorized under 31 U.S.C.
												5336 and 31 C.F.R. 1010.380. The principal purpose of
												this collection of information is to generate a database
												of information that is highly useful in facilitating
												national security, intelligence, and law enforcement
												activities, as well as compliance with anti-money
												laundering, countering the financing of terrorism, and
												customer due diligence requirements under applicable
												law. Pursuant to 31 U.S.C. 5336 and 31 C.F.R. 1010.380,
												reporting companies and certain other persons must
												provide specified information. The provision of that
												information is mandatory and failure to provide that
												information may result in criminal and civil penalties.
												The provision of information for the purpose of
												requesting a FinCEN Identifier is voluntary; however,
												failure to provide such information may result in the
												denial of such a request. Generally, the information
												within this collection of information may be shared as a
												“routine use” with other government agencies and
												financial institutions that meet certain criteria under
												applicable law. The complete list of routine uses of the
												information is set forth in the relevant Privacy Act
												system of record notice available at
												https://www.federalregister.gov/documents/2023/09/13/2023-19814/privacy-act-of-1974-system-of-records.
												According to the Paperwork Reduction Act of 1995, no
												persons are required to respond to a collection of
												information unless it displays a valid OMB control
												number. The valid OMB control number for this
												information collection is 1506-0076. It expires on
												November 30, 2026. The estimated average burden
												associated with this collection of information from
												reporting companies is 90 to 650 minutes per respondent
												for reporting companies with simple or complex
												beneficial ownership structures, respectively. The
												estimated average burden associated with reporting
												companies updating information previously provided is 40
												to 170 minutes per respondent for reporting companies
												with simple or complex beneficial ownership structures,
												respectively. The estimated average burden associated
												with this collection of information from individuals
												applying for FinCEN identifiers is 20 minutes per
												applicant. The estimated average burden associated with
												individuals who have obtained FinCEN identifiers
												updating information previously provided is 10 minutes
												per individual. Comments regarding the accuracy of this
												burden estimate, and suggestions for reducing the burden
												should be directed to the Financial Crimes Enforcement
												Network, P. O. Box 39, Vienna, VA 22183, Attn: Policy
												Division.
											</p>
										</div>
									</div>
								</div>
							</li>
							<!-- <div v-for="(button, a) in applicant" :key="a">
							  <div class="row ">
								  <div class="col-md-6 bt-box">
									  <button  @click.prevent="previous()" v-if="a === 0" disabled>Previous</button>
								  </div>
								  <div class="col-md-6 bt-box text-end">
									  <button  @click.prevent="next()">Next</button>
								  </div>
							  </div>
						  </div> -->
							<div class="reporting-wrapper section" id="reporting">
								<div class="row">
									<div class="col-md-6">
										<h3>Part I. Reporting Company Information</h3>
									</div>
									<div class="col-md-6 bt-box text-end">
										<span class="top-arrow"><i @click.prevent="scrollToElement"
												class="fa-solid fa-arrow-up"></i></span>
									</div>
								</div>
							</div>
							<li>
								<div class="row">
									<div class="col-xl-4 col-md-4 col-sm-4">
										<label>Request to receive FinCEN Identifier (FinCEN ID)</label>
									</div>
									<div class="col-xl-7 col-md-6 col-sm-8 select-rdo">
										<input type="checkbox" name="fincen" v-model="formData.FinCEN_Identifier"
											value="true" />
										<span v-if="formErrors.FinCEN_Identifier" class="error">{{
											formErrors.FinCEN_Identifier
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
										<input type="checkbox" name="foreign" v-model="formData.Foreign_Pooled"
											value="true" />
										<span v-if="formErrors.Foreign_Pooled" class="error">{{
											formErrors.Foreign_Pooled
										}}</span>
									</div>
								</div>
							</li>
							<hr />
							<h6>Full legal name and alternate name(s):</h6>
							<li>
								<div class="row">
									<div class="col-xl-4 col-md-4 col-sm-4">
										<label>Reporting Company legal name</label>
									</div>
									<div class="col-xl-7 col-md-6 col-sm-8">
										<input class="form-input" type="text" v-model="formData.Reporting_Company"
											name="Reporting_Company" placeholder="Reporting Company legal name" />
										<span v-if="formErrors.Reporting_Company" class="error">{{
											formErrors.Reporting_Company
										}}</span>
									</div>
								</div>
							</li>
							<li>
								<div class="row" v-for="(alter, n) in alters" :key="n">
									<div class="col-xl-4 col-md-4 col-sm-4">
										<label>Alternate name (e.g. trade name, DBA) #{{ n + 1 }}</label>
									</div>
									<div class="col-xl-7 col-md-6 col-sm-8">
										<input class="form-input" type="text" v-model="alter.Alternate_name"
											name="'Alternate_name_' + n'" placeholder="Alternate name" />
										<!-- <span v-if="formErrors.Alternate_name" class="error">{{ formErrors.Alternate_name }}</span> -->
										<span v-if="formErrors['Alternate_name_' + n]" class="error">{{
											formErrors["Alternate_name_" + n] }}</span>
									</div>
									<div class="col-xl-1 col-md-2 col-sm-2">
										<div class="btn-wrapper d-flex">
											<button @click.prevent="addAlter()" class="add-btn">+</button>
											<button @click.prevent="removeAlter(n)" class="remove-btn"
												:disabled="n === 0">-</button>
										</div>
									</div>
								</div>
							</li>
							<hr />
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
											<option value="EIN">EIN</option>
											<option value="TINN">TINN</option>
											<option value="FOREGIN">Foreign</option>
										</select>
										<span v-if="formErrors.Tax_Identification" class="error">{{
											formErrors.Tax_Identification
										}}</span>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label>Tax Identification number</label>
									</div>
									<div class="col-md-7">
										<input type="text" placeholder="Tax Identification number" class="form-input"
											name="fav_language" v-model="formData.Identification" value="true"
											inputmode="numeric" pattern="[0-9]*"
											oninput="this.value = this.value.replace(/[^0-9]/g, '')" />
										<span v-if="formErrors.Identification" class="error">{{
											formErrors.Identification
										}}</span>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label>Country/Jurisdiction
											<span class="sml">(if foreign tax ID only)</span></label>
									</div>
									<div class="col-md-7">
										<select class="form-select" v-model="formData.foreign_tax" id="foreign_tax">
											<option disabled>Choose...</option>
											<option v-for="option in jurisdictionCountry" :key="option.value"
												:value="option.value">
												{{ option.label }}
											</option>
										</select>
										<span v-if="formErrors.foreign_tax" class="error">{{
											formErrors.foreign_tax
										}}</span>
									</div>
								</div>
							</li>
							<hr />
							<h6>Jurisdiction of formation or first registration:</h6>
							<li>
								<ol type="a" style="margin-left: 20px !important">
									<li>
										<div class="row">
											<div class="col-md-4">
												<label>Country/Jurisdiction of formation</label>
											</div>
											<div class="col-md-7">
												<select class="form-select" v-model="formData.formation" id="formation">
													<option disabled>Choose...</option>
													<option v-for="option in jurisdictionCountry" :key="option.value"
														:value="option.value">
														{{ option.label }}
													</option>
												</select>
												<span v-if="formErrors.formation" class="error">{{
											formErrors.formation
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
													<option v-for="option in states" :key="option.value"
														:value="option.value">
														{{ option.label }}
													</option>
												</select>
												<span v-if="formErrors.State_of_formation" class="error">{{
											formErrors.State_of_formation }}</span>
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
											formErrors.Tribal_jurisdiction }}</span>
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
													placeholder="Name of the other Tribe" />
												<span v-if="formErrors.other_Tribe" class="error">{{
											formErrors.other_Tribe
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
												<select class="form-select" v-model="formData.registration"
													id="registration">
													<option disabled>Choose...</option>
													<option v-for="option in states" :key="option.value"
														:value="option.value">
														{{ option.label }}
													</option>
												</select>
												<span v-if="formErrors.registration" class="error">{{
											formErrors.registration
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
											formErrors.Tribal_first_jurisdiction }}</span>
											</div>
										</div>
									</li>
									<li>
										<div class="row">
											<div class="col-md-4">
												<label>Name of the other Tribe</label>
											</div>
											<div class="col-md-7">
												<input class="form-input" type="text"
													v-model="formData.Name_other_Tribe"
													placeholder="Name of the other Tribe" />
												<span v-if="formErrors.Name_other_Tribe" class="error">{{
											formErrors.Name_other_Tribe }}</span>
											</div>
										</div>
									</li>
								</ol>
							</li>
							<hr />
							<h6>Current U.S. Address:</h6>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label>Address (number, street, and apt. or suite no.)</label>
									</div>
									<div class="col-md-7">
										<input class="form-input" v-model="formData.Address" type="text"
											placeholder="Address (number, street, and apt. or suite no.)" />
										<span v-if="formErrors.Address" class="error">{{
											formErrors.Address
										}}</span>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label>City</label>
									</div>
									<div class="col-md-7">
										<input class="form-input" v-model="formData.City" type="text"
											placeholder="City" />
										<span v-if="formErrors.City" class="error">{{
											formErrors.City
										}}</span>
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
											<option v-for="option in uscountry" :key="option.value"
												:value="option.value">
												{{ option.label }}
											</option>
										</select>
										<span v-if="formErrors.Territory" class="error">{{
											formErrors.Territory
										}}</span>
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
											<option v-for="option in states" :key="option.value" :value="option.value">
												{{ option.label }}
											</option>
										</select>
										<span v-if="formErrors.State" class="error">{{
											formErrors.State
										}}</span>
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
											placeholder="ZIP Code" />
										<span v-if="formErrors.ZIP_Code" class="error">{{
											formErrors.ZIP_Code
										}}</span>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div class="col-md-4">
										<label>Existing Reporting Company </label>
									</div>
									<div class="col-md-7 select-rdo">
										<input type="checkbox" name="exit_report"
											v-model="formData.Exit_reporting_company" value="true" />

										<span class="sml mx-2">(check if Reporting Company was created or registered
											before January 1, 2024)</span>
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
									<!-- <div class="row">
						  <div class="col-md-12"> -->
									<h3>Part II. Company Applicant Information #{{ a + 1 }}</h3>
									<!-- </div> -->
									<!-- <div class=" col-md-2 bt-box text-end">
							  <i @click.prevent="scrollToElement" class="fa-solid fa-arrow-up"></i>
					  </div> -->
									<!-- </div>								 -->
									<div class="add-p1">
										<button @click.prevent="addApplicant()" class="add-btn">
											+
										</button>
										<!-- <button v-if="a === 0" disabled class="remove-btn">-</button> -->
										<button v-if="a === 0" disabled class="remove-btn dis">
											-
										</button>
										<button v-else @click.prevent="removeApplicant(a)" class="remove-btn">
											-
										</button>
										<span class="top-arrow"><i @click.prevent="scrollToElement"
												class="fa-solid fa-arrow-up"></i></span>
									</div>
								</div>
								<h6>Company Applicant FinCEN ID:</h6>
								<li>
									<div class="row">
										<div class="col-md-4">
											<label><strong>FinCEN ID</strong></label>
										</div>
										<div class="col-md-7">
											<input class="form-input" type="text" v-model="input.FinCEN_ID"
												placeholder="FinCEN ID" />
											<span v-if="formErrors.FinCEN_ID" class="error">{{
											formErrors.FinCEN_ID
										}}</span>
										</div>
									</div>
								</li>
								<hr />
								<h6>Full legal name and date of birth:</h6>
								<li>
									<div class="row">
										<div class="col-md-4">
											<label><span class="red">*</span>Individual's last name</label>
										</div>
										<div class="col-md-7">
											<input class="form-input" type="text" v-model="input.Individual_last_name"
												placeholder="Individual's last name" />
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
											<input class="form-input" type="text" v-model="input.First_name"
												placeholder="First name" />
											<span v-if="formErrors.First_name" class="error">{{
											formErrors.First_name
										}}</span>
										</div>
									</div>
								</li>
								<li>
									<div class="row">
										<div class="col-md-4">
											<label>Middle name</label>
										</div>
										<div class="col-md-7">
											<input class="form-input" type="text" v-model="input.Middle_name"
												placeholder="Middle name" />
											<span v-if="formErrors.Middle_name" class="error">{{
											formErrors.Middle_name
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
											<input class="form-input" type="text" v-model="input.Suffix"
												placeholder="Suffix" />
											<span v-if="formErrors.Suffix" class="error">{{
											formErrors.Suffix
										}}</span>
										</div>
									</div>
								</li>
								<li>
									<div class="row">
										<div class="col-md-4">
											<label>Date of birth</label>
										</div>
										<div class="col-md-7">
											<input class="form-input" type="date" v-model="input.Date" />
											<span v-if="formErrors.Date" class="error">{{
											formErrors.Date
										}}</span>
										</div>
									</div>
								</li>
								<hr />
								<h6>Current address:</h6>
								<li>
									<div class="row">
										<div class="col-md-4">
											<label><span class="red">*</span>Address type</label>
										</div>
										<div class="col-md-7 d-flex">
											<div class="current-radio-btn">
												<label><span>a.</span>Business address</label>
												<input class="radio-start mx-2" type="radio" name="business"
													:value="true" v-model="input.Business_beneficial" />
											</div>
											<div class="current-radio-btn">
												<label><span>b.</span>Residential address</label>
												<input class="radio-start mx-2" type="radio" name="business"
													:value="true" v-model="input.Residential_applicant" />
											</div>
										</div>
									</div>
								</li>
								<li>
									<div class="row">
										<div class="col-md-4">
											<label><span class="red">*</span>Address (number, street,and
												apt. or suite no.)</label>
										</div>
										<div class="col-md-7">
											<input class="form-input" type="text" v-model="input.Address_number"
												placeholder="Address (number, street,and apt. or suite no.)" />
											<span v-if="formErrors.Address_number" class="error">{{
											formErrors.Address_number
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
											<input class="form-input" type="text" v-model="input.City_applicant"
												placeholder="City" />
											<span v-if="formErrors.City_applicant" class="error">{{
											formErrors.City_applicant
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
											<select class="form-select" v-model="input.Country" id="Country">
												<option disabled>Choose...</option>
												<option v-for="option in jurisdictionCountry" :key="option.value"
													:value="option.value">
													{{ option.label }}
												</option>
											</select>
											<span v-if="formErrors.Country" class="error">{{
											formErrors.Country
										}}</span>
										</div>
									</div>
								</li>
								<li>
									<div class="row">
										<div class="col-md-4">
											<label><span class="red">*</span>State</label>
										</div>
										<div class="col-md-7">
											<select class="form-select" v-model="input.State_applicant"
												id="State_applicant">
												<option disabled>Choose...</option>
												<option v-for="option in states" :key="option.value"
													:value="option.value">
													{{ option.label }}
												</option>
											</select>
											<span v-if="formErrors.State_applicant" class="error">{{
											formErrors.State_applicant
										}}</span>
										</div>
									</div>
								</li>
								<li>
									<div class="row">
										<div class="col-md-4">
											<label><span class="red">*</span>ZIP/Foreign postal
												code</label>
										</div>
										<div class="col-md-7">
											<input class="form-input" type="text" v-model="input.Foreign_postal"
												placeholder="ZIP/Foreign postal code" />
											<span v-if="formErrors.Foreign_postal" class="error">{{
											formErrors.Foreign_postal
										}}</span>
										</div>
									</div>
								</li>
								<hr />
								<h6>Form of identification and issuing jurisdiction:</h6>
								<li>
									<div class="row">
										<div class="col-md-4">
											<label><span class="red">*</span>Identifying document
												type</label>
										</div>
										<div class="col-md-7">
											<select class="form-select" v-model="input.Identififying_document"
												id="Identififying_document">
												<option disabled>Choose...</option>
												<option v-for="option in document" :key="option.value"
													:value="option.value">
													{{ option.label }}
												</option>
											</select>
											<span v-if="formErrors.Identififying_document" class="error">{{
											formErrors.Identififying_document }}</span>
										</div>
									</div>
								</li>
								<li>
									<div class="row">
										<div class="col-md-4">
											<label><span class="red">*</span>Identifying document
												number</label>
										</div>
										<div class="col-md-7">
											<input class="form-input" type="text" v-model="input.Identififying_number"
												placeholder="Identifying document number" />
											<span v-if="formErrors.Identififying_number" class="error">{{
											formErrors.Identififying_number }}</span>
										</div>
									</div>
								</li>
								<li>
									<label><span class="red">*</span>Identifying document issuing
										jurisdiction:</label>
									<ol type="a" style="
                      margin-left: 0px !important;
                      margin-top: 15px !important;
                    ">
										<li>
											<div class="row">
												<div class="col-md-4">
													<label>Country/Jurisdiction</label>
												</div>
												<div class="col-md-7">
													<select class="form-select" v-model="input.Country_jurisdiction"
														id="Country">
														<option disabled>Choose...</option>
														<option v-for="option in jurisdictionCountry"
															:key="option.value" :value="option.value">
															{{ option.label }}
														</option>
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
													<select class="form-select" v-model="input.State_app"
														id="State_app">
														<option disabled>Choose...</option>
														<option v-for="option in states" :key="option.value"
															:value="option.value">
															{{ option.label }}
														</option>
													</select>
													<span v-if="formErrors.State_app" class="error">{{
											formErrors.State_app
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
													<select class="form-select" v-model="input.local"
														id="formData.Beneficial_Local">
														<option disabled>Choose...</option>
														<option v-for="option in tribes" :key="option.value"
															:value="option.value">
															{{ option.label }}
														</option>
													</select>
													<span v-if="formErrors.local" class="error">{{
											formErrors.local
										}}</span>
												</div>
											</div>
										</li>
										<li>
											<div class="row">
												<div class="col-md-4">
													<label>Other local/Tribal description</label>
												</div>
												<div class="col-md-7">
													<input class="form-input" type="text" v-model="input.tribal_desc"
														placeholder="Other local/Tribal description" />
													<span v-if="formErrors.tribal_desc" class="error">{{
											formErrors.tribal_desc
										}}</span>
												</div>
											</div>
										</li>
									</ol>
								</li>
								<li>
									<div :key="divKey" class="row">
										<div class="col-md-4">
											<label><span class="red">*</span>Identifying document image</label>
										</div>
										<div class="col-md-7">
											<input class="file btn btn-primary" type="file" ref="'fileInput' a"
												@change="attachFileApplicant($event, a)" />
											<button type="button" class="file btn btn-primary mx-1"
												@click="removeAttachmentapplicant(a)">Remove Attachment
											</button><br>
											<img v-if="input.attachedImageApplicant" :src="input.attachedImageApplicant"
												alt="Attached Image" style="max-width: 100px; margin-top: 10px;" />
											<!-- <input class="f-input form-input" v-if="attachedImageApplicant" v-model="attachedFileNameApplicant" readonly /> -->
											<div v-if="input.attachedFileNameApplicant" class="file-name"
												style="margin-top: 10px;">{{ input.attachedFileNameApplicant }}</div>
											<div v-if="input.fileError" class="text-danger">{{ input.fileError }}</div>
										</div>
									</div>
								</li>
								<li>
									<div class="row">
										<div class="col-md-4">
											<label style="white-space: nowrap">(This item is reserved for future
												use)</label>
										</div>
									</div>
								</li>
							</div>
							<div class="container" v-for="(input, b) in beneficial" :key="b">
								<div class="applicant-wrapper section" id="beneficial">
									<!-- <div class="row"> -->
									<!-- <div class="col-md-12"> -->
									<h3>Part III. Beneficial Owner Information #{{ b + 1 }}</h3>
									<!-- </div> -->
									<!-- <div class="bt-box text-end">
							  <i @click.prevent="scrollToElement" class="fa-solid fa-arrow-up"></i>	
					  </div> -->
									<!-- </div>								 -->
									<div class="add-p1">
										<button @click.prevent="addBeneficial()" class="add-btn">
											+
										</button>
										<!-- <button v-if="b === 0" disabled class="remove-btn">-</button> -->
										<button v-if="b === 0" disabled class="remove-btn dis">
											-
										</button>
										<button v-else @click.prevent="removeBeneficial(b)" class="remove-btn">
											-
										</button>
										<span class="top-arrow"><i @click.prevent="scrollToElement"
												class="fa-solid fa-arrow-up"></i></span>
									</div>
								</div>
								<hr />
								<li>
									<div class="row">
										<div class="col-md-4">
											<label>Parent/Guardian information instead of minor
												child</label>
										</div>
										<div class="col-md-7 select-rdo">
											<input class="" type="checkbox" name="minor"
												v-model="formData.minor_child" />

											<span style="margin-left: 10px">
												(check if the Beneficial Owner is a minor child and the
												parent/guardian information is provided instead)</span>
											<span v-if="formErrors.minor_child" class="error">{{
											formErrors.minor_child
										}}</span>
										</div>
									</div>
								</li>
								<hr />
								<h6>Beneficial Owner FinCEN ID:</h6>
								<li>
									<div class="row">
										<div class="col-md-4">
											<label>FinCEN ID</label>
										</div>
										<div class="col-md-7">
											<input class="form-input" v-model="formData.Beneficial_fincenID" type="text"
												placeholder="FinCEN ID" />
											<span v-if="formErrors.Beneficial_fincenID" class="error">{{
											formErrors.Beneficial_fincenID }}</span>
										</div>
									</div>
								</li>
								<hr />
								<h6>Exempt entity:</h6>
								<li>
									<div class="row">
										<div class="col-md-4">
											<label>Exempt entity:</label>
										</div>
										<div class="col-md-7 select-rdo">
											<input class="" type="checkbox" name="entity"
												v-model="formData.entity_beneficial" />
										</div>
									</div>
								</li>
								<hr />
								<h6>Full legal name and date of birth:</h6>
								<li>
									<div class="row">
										<div class="col-md-4">
											<label><span class="red">*</span>Individual's last name or
												entity's legal name.</label>
										</div>
										<div class="col-md-7">
											<input class="form-input" type="text" v-model="formData.entity_legal"
												placeholder="Individual's last name or entity's legal name." />
											<span v-if="formErrors.entity_legal" class="error">{{
											formErrors.entity_legal
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
											<input class="form-input" type="text"
												v-model="formData.Beneficial_first_name" placeholder="First name" />
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
											<input class="form-input" type="text"
												v-model="formData.Beneficial_Middle_name" placeholder="Middle name" />
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
												placeholder="Suffix" />
											<span v-if="formErrors.Beneficial_suffix" class="error">{{
											formErrors.Beneficial_suffix
										}}</span>
										</div>
									</div>
								</li>
								<li>
									<div class="row">
										<div class="col-md-4">
											<label>Date of birth</label>
										</div>
										<div class="col-md-7">
											<input class="form-input" type="date" v-model="formData.Beneficial_date" />
											<span v-if="formErrors.Beneficial_date" class="error">{{
											formErrors.Beneficial_date
										}}</span>
										</div>
									</div>
								</li>
								<hr />
								<h6>Residential address:</h6>
								<li>
									<div class="row">
										<div class="col-md-4">
											<label><span class="red">*</span>Address (number, street, and
												apt. or suite no.)</label>
										</div>
										<div class="col-md-7">
											<input class="form-input" v-model="formData.Beneficial_Address"
												placeholder="Address (number, street, and apt. or suite no.)"
												type="text" />
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
												placeholder="City" />
											<span v-if="formErrors.Beneficial_city" class="error">{{
											formErrors.Beneficial_city
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
												<option v-for="option in jurisdictionCountry" :key="option.value"
													:value="option.value">
													{{ option.label }}
												</option>
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
												<option v-for="option in states" :key="option.value"
													:value="option.value">
													{{ option.label }}
												</option>
											</select>
											<span v-if="formErrors.Beneficial_state_resi" class="error">{{
											formErrors.Beneficial_state_resi }}</span>
										</div>
									</div>
								</li>
								<li>
									<div class="row">
										<div class="col-md-4">
											<label><span class="red">*</span>ZIP/Foreign postal
												code</label>
										</div>
										<div class="col-md-7">
											<input class="form-input" v-model="formData.Beneficial_zipcode" type="text"
												placeholder="ZIP/Foreign postal code" />
											<span v-if="formErrors.Beneficial_zipcode" class="error">{{
											formErrors.Beneficial_zipcode }}</span>
										</div>
									</div>
								</li>
								<hr />
								<h6>Form of identification and issuing jurisdiction:</h6>
								<li>
									<div class="row">
										<div class="col-md-4">
											<label><span class="red">*</span>Identifying document
												type</label>
										</div>
										<div class="col-md-7">
											<select class="form-select" v-model="formData.Beneficial_document_type"
												id="Beneficial_document_type">
												<option disabled>Choose...</option>
												<option v-for="option in document" :key="option.value"
													:value="option.value">
													{{ option.label }}
												</option>
											</select>
											<span v-if="formErrors.Beneficial_document_type" class="error">{{
											formErrors.Beneficial_document_type }}</span>
										</div>
									</div>
								</li>
								<li>
									<div class="row">
										<div class="col-md-4">
											<label><span class="red">*</span>Identifying document
												number</label>
										</div>
										<div class="col-md-7">
											<input class="form-input" type="text"
												v-model="formData.Beneficial_document_number"
												placeholder="Identifying document number" />
											<span v-if="formErrors.Beneficial_document_number" class="error">{{
											formErrors.Beneficial_document_number }}</span>
										</div>
									</div>
								</li>
								<li>
									<label><span class="red">*</span>Identifying document issuing
										jurisdiction:</label>
									<ol type="a" style="
                      margin-left: 0px !important;
                      margin-top: 15px !important;
                    ">
										<li>
											<div class="row">
												<div class="col-md-4">
													<label>Country/Jurisdiction</label>
												</div>
												<div class="col-md-7">
													<select class="form-select" v-model="formData.Beneficial_country"
														id="formData.Beneficial_country">
														<option disabled>Choose...</option>
														<option v-for="option in jurisdictionCountry"
															:key="option.value" :value="option.value">
															{{ option.label }}
														</option>
													</select>
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
													<select class="form-select" v-model="formData.Beneficial_state"
														id="formData.Beneficial_state">
														<option disabled>Choose...</option>
														<option v-for="option in states" :key="option.value"
															:value="option.value">
															{{ option.label }}
														</option>
													</select>
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
													<select class="form-select" v-model="formData.Beneficial_Local"
														id="formData.Beneficial_Local">
														<option disabled>Choose...</option>
														<option v-for="option in tribes" :key="option.value"
															:value="option.value">
															{{ option.label }}
														</option>
													</select>
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
														placeholder="Other local/Tribal description" />
													<span v-if="formErrors.Beneficial_Other_local" class="error">{{
											formErrors.Beneficial_Other_local }}</span>
												</div>
											</div>
										</li>
									</ol>
								</li>
								<!-- <li>
									<div :key="divKey" class="row">
										<div class="col-md-4">
											<label><span class="red">*</span>Identifying document image</label>
										</div>
										<div class="col-md-7">
											<input class="file btn btn-primary" type="file" ref="fileInput" @change="attachFileApplicant" />
											<button type="button" class="file btn btn-primary mx-1" @click="removeAttachmentapplicant">Remove Attachment
											</button>
											<input class="f-input form-input" v-model="attachedFileNameApplicant" readonly />
											<img v-if="attachedImage" :src="attachedImage" alt="Attached Image" style="max-width: 100px;" />
											<div v-if="fileError" class="text-danger">{{ fileError }}</div>
										</div>
									</div>
								</li> -->
								<li>
									<div :key="divKey" class="row">
										<div class="col-md-4">
											<label><span class="red">*</span>Identifying document image</label>
										</div>
										<div class="col-md-7">
											<input class="file btn btn-primary" type="file" ref="fileInput2"
												@change="attachFile" />
											<button type="button" class="file btn btn-primary mx-1"
												@click="removeAttachment">Remove Attachment</button><br>
											<img v-if="attachedImage" :src="attachedImage" alt="Attached Image"
												style="max-width: 100px; margin-top: 10px;" />
											<!-- <input class="f-input form-input" v-if="attachedImage" v-model="attachedFileName" readonly /> -->
											<div v-if="attachedFileName" class="file-name" style="margin-top: 8px;">{{
											attachedFileName }}</div>
											<div v-if="fileError" class="text-danger">{{ fileError }}</div>
										</div>
									</div>
								</li>
							</div>
						</ol>
					</div>
				</div>
				<div class="bt-box">
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	</div>
	<div v-if="responseXml" class="container">
		<div class="form-control">
			<div class="filling-info-wrapper" v-if="responseXml">
				<h3 class="header-upper">Response XML:</h3>
				<hr />
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
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import "../assets/css/main.css";
import "../assets/images/Financial-logo.png";
// import XMLFormatter from './XMLFormatter.vue';
import ModalBoir from "../components/ModalBoir.vue";
import jurisdictionCountry from "../jurisdictionCountry.json";
import uscountry from "../uscountry.json";
import states from "../state.json";
import tribes from "../tribes.json";
import document from "../document.json";
// import ReportingBoir from './ReportingBoir.vue'
import HeaderBoir from "./HeaderBoir.vue";
import FooterBoir from "./FooterBoir.vue";
// import ApplicantBoir from './ApplicantBoir.vue'
// import BeneficialBoir from './BenificialBoir.vue'
export default {
	name: "DashboardBoir",
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
			attachedImageApplicant: null,
			attachedFileNameApplicant: '',
			attachedImage: null,
			attachedFileName: '',
			fileError: '',
			fileInput: null,
			divKey: 0,
			jurisdictionCountry: jurisdictionCountry,
			uscountry: uscountry,
			states: states,
			document: document,
			tribes: tribes,
			modalType: null,
			isModalVisible: false,

			alters: [
				{
					Alternate_name: "",
				},
			],

			beneficial: [
				{
					name: "",
				},
			],

			applicant: [
				{
					name: "",
				},
			],
			n: 0,
			a: 0,
			b: 0,
			attachedFile: null,
			attachedFileName: "",
			attachedFileNameApplicant: "",
			attachedFileName: "",
			formData: {
				Initial_report: false,
				Newly_exempt_entity: false,
				Update_prior_report: false,
				Correct_prior_report: false,
				Legal_name: "",
				Tax_Identification_number: "",
				Tax_Identification_type: "",
				Jurisdiction_tax_id: "",
				date: "",

				FinCEN_Identifier: "",
				Foreign_Pooled: "",
				Reporting_Company: "",
				Alternate_name: "",
				Tax_Identification: "",
				Identification: "",
				foreign_tax: "",
				formation: "",
				State_of_formation: "",
				Tribal_jurisdiction: "",
				other_Tribe: "",
				Tribal_first_jurisdiction: "",
				registration: "",
				Name_other_Tribe: "",
				Address: "",
				City: "",
				Territory: "",
				State: "",
				ZIP_Code: "",
				Exit_reporting_company: "",


				FinCEN_ID: "",
				Individual_last_name: "",
				First_name: "",
				Middle_name: "",
				Suffix: "",
				Date: "",
				Business_beneficial: false,
				Residential_applicant: false,
				Address_number: "",
				City_applicant: "",
				Country: "",
				State_applicant: "",
				Foreign_postal: "",
				Identififying_document: "",
				Identififying_number: "",
				Country_jurisdiction: "",
				State_app: "",
				local: "",
				tribal_desc: "",
				minor_child: "",
				Beneficial_fincenID: "",
				entity_beneficial: "",
				entity_legal: "",
				Beneficial_first_name: "",
				Beneficial_Middle_name: "",
				Beneficial_suffix: "",
				Beneficial_date: "",
				Beneficial_Address: "",
				Beneficial_city: "",
				Beneficial_country_resi: "",
				Beneficial_state_resi: "",
				Beneficial_zipcode: "",
				Beneficial_document_type: "",
				Beneficial_document_number: "",
				Beneficial_country: "",
				Beneficial_state: "",
				Beneficial_Local: "",
				Beneficial_Other_local: "",

				attachedFile: null,
				attachedFileName: "",
				attachedFileNameApplicant: "",
				attachedFileName: "",
			},
			responseXml: null,
			formErrors: {
				Initial_report: false,
				Newly_exempt_entity: false,
				Update_prior_report: false,
				Correct_prior_report: false,
				Legal_name: "",
				Tax_Identification_number: "",
				Tax_Identification_type: "",
				Jurisdiction_tax_id: "",
				date: "",

				FinCEN_Identifier: "",
				Foreign_Pooled: "",
				Reporting_Company: "",
				// Alternate_name: '',
				Tax_Identification: "",
				Identification: "",
				foreign_tax: "",
				formation: "",
				State_of_formation: "",
				Tribal_jurisdiction: "",
				other_Tribe: "",
				Tribal_first_jurisdiction: "",
				registration: "",
				Name_other_Tribe: "",
				Address: "",
				City: "",
				Territory: "",
				State: "",
				ZIP_Code: "",
				Exit_reporting_company: "",

				FinCEN_ID: "",
				Individual_last_name: "",
				First_name: "",
				Middle_name: "",
				Suffix: "",
				Date: "",
				// Business_beneficial: false,
				// Residential_applicant: false,
				Address_number: "",
				City_applicant: "",
				Country: "",
				State_applicant: "",
				Foreign_postal: "",
				Identififying_document: "",
				Identififying_number: "",
				Country_jurisdiction: "",
				State_app: "",
				local: "",
				tribal_desc: "",

				minor_child: "",
				Beneficial_fincenID: "",
				// entity_beneficial:'',
				entity_legal: "",
				Beneficial_first_name: "",
				Beneficial_Middle_name: "",
				Beneficial_suffix: "",
				Beneficial_date: "",
				Beneficial_Address: "",
				Beneficial_city: "",
				Beneficial_country_resi: "",
				Beneficial_state_resi: "",
				Beneficial_zipcode: "",
				Beneficial_document_type: "",
				Beneficial_document_number: "",
				Beneficial_country: "",
				Beneficial_state: "",
				Beneficial_Local: "",
				Beneficial_Other_local: "",
			},
		};
	},
	mounted() {
		// Set the initial date value to the current date
		this.updateDate();
	},
	methods: {
		attachFileApplicant(event, index) {
			const file = event.target.files[0];
			if (file) {
				// this.attachedFileNameApplicant = file.name;
				// this.strIDocImage = file.name;
				// this.strDocImageType = file.type;
				const reader = new FileReader();
				reader.onload = (e) => {
					// this.attachedImageApplicant = e.target.result;
					this.applicant[index].attachedImageApplicant = e.target.result;
          this.applicant[index].attachedFileNameApplicant = file.name;
          this.applicant[index].fileError = '';
				};
				reader.readAsDataURL(file);
			}
		},
		removeAttachmentapplicant() {
			this.applicant[index].attachedImageApplicant = null;
			this.applicant[index].attachedFileNameApplicant = '';
			this.applicant[index].fileError = '';
			const fileInput = this.$refs['fileInput' + index][0];
			if (fileInput) {
				fileInput.value = '';
			}
			},
			// this.attachedImageApplicant = null;
			// this.attachedFileNameApplicant = '';
			// Clear file input if needed
			// this.strIDocImage = '';
			// this.strDocImageType = '';

			// if (this.$refs.fileInput) {
			// 	this.$refs.fileInput.value = '';
			// }
			// this.divKey++;
		// },
		attachFile(event) {
			const file = event.target.files[0];
			if (file) {
				this.attachedFileName = file.name;
				this.strIDocImag = file.name;
				this.strDocImageTyp = file.type;
				const reader = new FileReader();
				reader.onload = (e) => {
					this.attachedImage = e.target.result;
				};
				reader.readAsDataURL(file);
			}
		},
		removeAttachment() {
			this.attachedImage = null;
			this.attachedFileName = '';
			// Clear file input if needed

			if (this.$refs.fileInput2) {
				this.$refs.fileInput2.value = '';
			}
			this.divKey++;
		},
		handleRadioChange(fieldName) {
			alert(`${fieldName} selected`);
		},
		scrollToElement() {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		},
		updateDate() {
			// Format the current date as 'YYYY-MM-DD'
			const currentDate = new Date().toISOString().split("T")[0];
			this.formData.date = currentDate;
		},
		addAlter() {
			this.alters.push({
				Alternate_name: "",
			});
		},
		removeAlter(index) {
			this.alters.splice(index, 1);
		},
		addBeneficial() {
			this.beneficial.push({
				name: "",
			});
		},
		removeBeneficial(beneficial) {
			this.beneficial.splice(beneficial, 1);
		},
		addApplicant() {
			// this.applicant.push({
			// 	name: "",
			// });
			if (this.applicant.length < 2) {
				this.applicant.push({ name: "" });
			} else {
				alert('You can add only 2 applicants.');
			}
		},
		removeApplicant(index) {
			// this.applicant.splice(applicant, 1);
			if (this.applicant.length > 1) {
				this.applicant.splice(index, 1);
			}
		},
		validateForm() {
			let isValid = true;
			this.fileError = '';
			this.formErrors = {
				Initial_report: false,
				Newly_exempt_entity: false,
				Update_prior_report: false,
				Correct_prior_report: false,
				Legal_name: "",
				Tax_Identification_number: "",
				Tax_Identification_type: "",
				Jurisdiction_tax_id: "",
				date: "",


				FinCEN_Identifier: "",
				Foreign_Pooled: "",
				Reporting_Company: "",
				// Alternate_name: '',
				Tax_Identification: "",
				Identification: "",
				foreign_tax: "",
				formation: "",
				State_of_formation: "",
				Tribal_jurisdiction: "",
				other_Tribe: "",
				Tribal_first_jurisdiction: "",
				registration: "",
				Name_other_Tribe: "",
				Address: "",
				City: "",
				Territory: "",
				State: "",
				ZIP_Code: "",
				Exit_reporting_company: "",

				FinCEN_ID: "",
				Individual_last_name: "",
				First_name: "",
				Middle_name: "",
				Suffix: "",
				Date: "",
				// Business_beneficial: false,
				// Residential_applicant: false,
				Address_number: "",
				City_applicant: "",
				Country: "",
				State_applicant: "",
				Foreign_postal: "",
				Identififying_document: "",
				Identififying_number: "",
				Country_jurisdiction: "",
				State_app: "",
				local: "",
				tribal_desc: "",

				minor_child: "",
				Beneficial_fincenID: "",
				// entity_beneficial:'',
				entity_legal: "",
				Beneficial_first_name: "",
				Beneficial_Middle_name: "",
				Beneficial_suffix: "",
				Beneficial_date: "",
				Beneficial_Address: "",
				Beneficial_city: "",
				Beneficial_country_resi: "",
				Beneficial_state_resi: "",
				Beneficial_zipcode: "",
				Beneficial_document_type: "",
				Beneficial_document_number: "",
				Beneficial_country: "",
				Beneficial_state: "",
				Beneficial_Local: "",
				Beneficial_Other_local: "",
			};
			this.alters.forEach((alter, index) => {
				if (!alter.Alternate_name) {
					this.formErrors,
						`Alternate_name_${index}`,
						"Alternate name is required.";
					isValid = false;
				}
			});
			if (!this.formData.Legal_name) {
				this.formErrors.Legal_name = "Legal name is required";
				isValid = false;
			}
			if (!this.formData.Tax_Identification_number) {
				this.formErrors.Tax_Identification_number =
					"Tax Identification number is required";
				isValid = false;
			}
			if (!this.formData.Tax_Identification_type) {
				this.formErrors.Tax_Identification_type =
					"Tax Identification type is required";
				isValid = false;
			}
			if (!this.formData.Jurisdiction_tax_id) {
				this.formErrors.Jurisdiction_tax_id = "Jurisdiction tax id is required";
				isValid = false;
			}
			if (!this.formData.date) {
				this.formErrors.date = "Date is required";
				isValid = false;
			}

			if (!this.formData.FinCEN_Identifier) {
				this.formErrors.FinCEN_Identifier = "FinCEN is required";
				isValid = false;
			}
			if (!this.formData.Foreign_Pooled) {
				this.formErrors.Foreign_Pooled = "Foreign is required";
				isValid = false;
			}
			if (!this.formData.Reporting_Company) {
				this.formErrors.Reporting_Company = "Reporting is required";
				isValid = false;
			}
			if (!this.formData.Tribal_first_jurisdiction) {
				this.formErrors.Tribal_first_jurisdiction =
					"Tribal first jurisdiction is required";
				isValid = false;
			}
			// if (!this.formData.Alternate_name) {
			// 	this.formErrors.Alternate_name = 'Alternate name is required';
			// 	isValid = false;
			// }
			if (!this.formData.Tax_Identification) {
				this.formErrors.Tax_Identification = "Jurisdiction Type is required";
				isValid = false;
			}
			if (!this.formData.Identification) {
				this.formErrors.Identification = "Identification is required";
				isValid = false;
			}
			if (!this.formData.foreign_tax) {
				this.formErrors.foreign_tax = "Foreign Tax is required";
				isValid = false;
			}
			if (!this.formData.formation) {
				this.formErrors.formation = "Formation is required";
				isValid = false;
			}
			if (!this.formData.State_of_formation) {
				this.formErrors.State_of_formation = "State Formation is required";
				isValid = false;
			}
			if (!this.formData.Tribal_jurisdiction) {
				this.formErrors.Tribal_jurisdiction = "Tribal jurisdiction is required";
				isValid = false;
			}
			if (!this.formData.other_Tribe) {
				this.formErrors.other_Tribe = "Other Tribe is required";
				isValid = false;
			}
			if (!this.formData.Tribal_first_jurisdiction) {
				this.formErrors.Tribal_first_jurisdiction =
					"Tribal first jurisdiction is required";
				isValid = false;
			}
			if (!this.formData.registration) {
				this.formErrors.registration = "Registration is required";
				isValid = false;
			}
			if (!this.formData.Name_other_Tribe) {
				this.formErrors.Name_other_Tribe = "Name other Tribe is required";
				isValid = false;
			}
			if (!this.formData.Address) {
				this.formErrors.Address = "Address is required";
				isValid = false;
			}
			if (!this.formData.City) {
				this.formErrors.City = "City is required";
				isValid = false;
			}
			if (!this.formData.Territory) {
				this.formErrors.Territory = "Territory is required";
				isValid = false;
			}
			if (!this.formData.State) {
				this.formErrors.State = "State is required";
				isValid = false;
			}
			if (!this.formData.ZIP_Code) {
				this.formErrors.ZIP_Code = "Zip Code is required";
				isValid = false;
			}
			if (!this.formData.Exit_reporting_company) {
				this.formErrors.Exit_reporting_company =
					"Exit reporting company is required";
				isValid = false;
			}

			if (!this.formData.FinCEN_ID) {
				this.formErrors.FinCEN_ID = "FinCEN ID is required";
				isValid = false;
			} else {
				// Clear error message if FinCEN_ID is filled
				this.formErrors.FinCEN_ID = "";
			}

			if (!this.formData.FinCEN_ID && !this.formData.Individual_last_name) {
				this.formErrors.Individual_last_name =
					"Individual last name is required";
				isValid = false;
			} else {
				// Clear error message if FinCEN_ID or Individual_last_name is filled
				this.formErrors.Individual_last_name = "";
			}

			if (!this.formData.FinCEN_ID && !this.formData.First_name) {
				this.formErrors.First_name = "First name is required";
				isValid = false;
			} else {
				// Clear error message if FinCEN_ID or First_name is filled
				this.formErrors.First_name = "";
			}

			if (!this.formData.FinCEN_ID && !this.formData.Middle_name) {
				this.formErrors.Middle_name = "Middle name is required";
				isValid = false;
			} else {
				this.formErrors.Middle_name = "";
			}
			if (!this.formData.FinCEN_ID && !this.formData.Suffix) {
				this.formErrors.Suffix = "Suffix is required";
				isValid = false;
			} else {
				this.formErrors.Suffix = "";
			}
			if (!this.formData.FinCEN_ID && !this.formData.Date) {
				this.formErrors.Date = "Date is required";
				isValid = false;
			} else {
				this.formErrors.Date = "";
			}
			if (!this.formData.FinCEN_ID && !this.formData.Business_beneficial) {
				this.formErrors.Business_beneficial = "Business beneficial is required";
				isValid = false;
			} else {
				this.formErrors.Business_beneficial = "";
			}
			// if (!this.formData.Residential_applicant) {
			// 	this.formErrors.Residential_applicant = 'Residential applicant is required';
			// 	isValid = false;
			// }
			// if (!this.formData.Address_number) {
			// 	this.formErrors.Address_number = 'Address number is required';
			// 	isValid = false;
			// }
			if (!this.formData.FinCEN_ID && !this.formData.City_applicant) {
				this.formErrors.City_applicant = "City applicant is required";
				isValid = false;
			} else {
				this.formErrors.Country = "";
			}
			if (!this.formData.FinCEN_ID && !this.formData.Country) {
				this.formErrors.Country = "Country applicant is required";
				isValid = false;
			} else {
				this.formErrors.Country = "";
			}
			if (!this.formData.FinCEN_ID && !this.formData.State_applicant) {
				this.formErrors.State_applicant = "State applicant is required";
				isValid = false;
			} else {
				this.formErrors.State_applicant = "";
			}
			if (!this.formData.FinCEN_ID && !this.formData.Foreign_postal) {
				this.formErrors.Foreign_postal = "Foreign postal is required";
				isValid = false;
			} else {
				this.formErrors.Foreign_postal = "";
			}
			if (!this.formData.FinCEN_ID && !this.formData.Identififying_document) {
				this.formErrors.Identififying_document =
					"Identififying document is required";
				isValid = false;
			} else {
				this.formErrors.Identififying_document = "";
			}
			if (!this.formData.FinCEN_ID && !this.formData.Identififying_number) {
				this.formErrors.Identififying_number =
					"Identififying number is required";
				isValid = false;
			} else {
				this.formErrors.Identififying_number = "";
			}
			if (!this.formData.FinCEN_ID && !this.formData.Country_jurisdiction) {
				this.formErrors.Country_jurisdiction =
					"Country jurisdiction is required";
				isValid = false;
			} else {
				this.formErrors.Country_jurisdiction = "";
			}
			if (!this.formData.FinCEN_ID && !this.formData.State_app) {
				this.formErrors.State_app = "State app is required";
				isValid = false;
			} else {
				this.formErrors.State_app = "";
			}
			if (!this.formData.FinCEN_ID && !this.formData.local) {
				this.formErrors.local = "local is required";
				isValid = false;
			} else {
				this.formErrors.local = "";
			}
			if (!this.formData.FinCEN_ID && !this.formData.tribal_desc) {
				this.formErrors.tribal_desc = "tribal desc is required";
				isValid = false;
			} else {
				this.formErrors.tribal_desc = "";
			}

			if (!this.attachedFileNameApplicant) {
				this.fileError = 'Please choose an image';
				isValid = false;
			} else {
				this.fileError = ''
			}

			// if (!this.formData.minor_child) {
			// 	this.formErrors.minor_child = 'minor child is required';
			// 	isValid = false;
			// }
			if (!this.formData.Beneficial_fincenID) {
				this.formErrors.Beneficial_fincenID =
					"Beneficial Fincen id is required";
				isValid = false;
			} else {
				this.formErrors.Beneficial_fincenID = "";
			}
			// if (!this.formData.entity_beneficial) {
			// 	this.formErrors.entity_beneficial = 'Entity Beneficial is required';
			// 	isValid = false;
			// }
			if (!this.formData.Beneficial_fincenID && !this.formData.entity_legal) {
				this.formErrors.entity_legal = "Entity Legal is required";
				isValid = false;
			} else {
				this.formErrors.entity_legal = "";
			}
			if (
				!this.formData.Beneficial_fincenID &&
				!this.formData.Beneficial_first_name
			) {
				this.formErrors.Beneficial_first_name =
					"Beneficial first name is required";
				isValid = false;
			} else {
				this.formErrors.Beneficial_first_name = "";
			}
			if (
				!this.formData.Beneficial_fincenID &&
				!this.formData.Beneficial_Middle_name
			) {
				this.formErrors.Beneficial_Middle_name =
					"Beneficial Middle name is required";
				isValid = false;
			} else {
				this.formErrors.Beneficial_Middle_name = "";
			}
			if (
				!this.formData.Beneficial_fincenID &&
				!this.formData.Beneficial_suffix
			) {
				this.formErrors.Beneficial_suffix = "Beneficial Suffix is required";
				isValid = false;
			} else {
				this.formErrors.Beneficial_suffix = "";
			}
			if (
				!this.formData.Beneficial_fincenID &&
				!this.formData.Beneficial_date
			) {
				this.formErrors.Beneficial_date = "Beneficial date is required";
				isValid = false;
			} else {
				this.formErrors.Beneficial_date = "";
			}
			if (
				!this.formData.Beneficial_fincenID &&
				!this.formData.Beneficial_Address
			) {
				this.formErrors.Beneficial_Address = "Beneficial Address is required";
				isValid = false;
			} else {
				this.formErrors.Beneficial_Address = "";
			}
			if (
				!this.formData.Beneficial_fincenID &&
				!this.formData.Beneficial_city
			) {
				this.formErrors.Beneficial_city = "Beneficial city is required";
				isValid = false;
			} else {
				this.formErrors.Beneficial_city = "";
			}
			if (
				!this.formData.Beneficial_fincenID &&
				!this.formData.Beneficial_country_resi
			) {
				this.formErrors.Beneficial_country_resi =
					"Beneficial country is required";
				isValid = false;
			} else {
				this.formErrors.Beneficial_country_resi = "";
			}
			if (
				!this.formData.Beneficial_fincenID &&
				!this.formData.Beneficial_state_resi
			) {
				this.formErrors.Beneficial_state_resi = "Beneficial state is required";
				isValid = false;
			} else {
				this.formErrors.Beneficial_state_resi = "";
			}
			if (
				!this.formData.Beneficial_fincenID &&
				!this.formData.Beneficial_zipcode
			) {
				this.formErrors.Beneficial_zipcode = "Beneficial zipcode is required";
				isValid = false;
			} else {
			}
			if (
				!this.formData.Beneficial_fincenID &&
				!this.formData.Beneficial_document_type
			) {
				this.formErrors.Beneficial_document_type =
					"Beneficial type is required";
				isValid = false;
			} else {
				this.formErrors.Beneficial_document_type = "";
			}
			if (
				!this.formData.Beneficial_fincenID &&
				!this.formData.Beneficial_document_number
			) {
				this.formErrors.Beneficial_document_number =
					"Beneficial document is required";
				isValid = false;
			} else {
				this.formErrors.Beneficial_document_number = "";
			}
			if (
				!this.formData.Beneficial_fincenID &&
				!this.formData.Beneficial_country
			) {
				this.formErrors.Beneficial_country = "Beneficial country is required";
				isValid = false;
			} else {
				this.formErrors.Beneficial_country = "";
			}
			if (
				!this.formData.Beneficial_fincenID &&
				!this.formData.Beneficial_state
			) {
				this.formErrors.Beneficial_state = "Beneficial state is required";
				isValid = false;
			} else {
				this.formErrors.Beneficial_state = "";
			}
			if (
				!this.formData.Beneficial_fincenID &&
				!this.formData.Beneficial_Local
			) {
				this.formErrors.Beneficial_Local = "Beneficial local is required";
				isValid = false;
			} else {
				this.formErrors.Beneficial_Local = "";
			}
			if (
				!this.formData.Beneficial_fincenID &&
				!this.formData.Beneficial_Other_local
			) {
				this.formErrors.Beneficial_Other_local =
					"Beneficial other local is required";
				isValid = false;
			} else {
				this.formErrors.Beneficial_Other_local = "";
			}
			return isValid;
		},
		showModal() {
			this.isModalVisible = true;
			console.log("open modal");
		},
		closeModal() {
			this.isModalVisible = false;
		},
		submitForm() {
			if (!this.validateForm()) {
				return;
			}

			// Define the data structures
			const CTAFiling = {
				bInitialReport: Boolean(this.formData?.Initial_report),
				bCorrectionReport: Boolean(this.formData?.Correct_prior_report),
				bUpdateReport: Boolean(this.formData?.Update_prior_report),
				bExempt: Boolean(this.formData?.Newly_exempt_entity)
			};

			const CurrentCompany = {
				strLegalName: this.formData?.Legal_name,
				strTaxIDType: this.formData?.Tax_Identification_type,
				strTaxIDNumber: this.formData?.Tax_Identification_number,
				strTaxIDJurisdiction: this.formData?.Jurisdiction_tax_id
			};

			const ReportingCompany = {
				bGetFinCENID: Boolean(this.formData?.FinCEN_Identifier),
				bFPIV: Boolean(this.formData?.Foreign_Pooled),
				strCompanyName: this.formData?.Reporting_Company,
				arrDBAs: this.formData?.arrDBAs || [],
				strTaxIDType: this.formData?.Tax_Identification,
				strTaxIDNumber: this.formData?.Identification,
				strTaxIDJurisdiction: this.formData?.foreign_tax,
				strCompanyCountry: this.formData?.formation,
				strCompanyState: this.formData?.State_of_formation,
				strCompanyTribe: this.formData?.Tribal_jurisdiction,
				strCompanyTribeOther: this.formData?.other_Tribe,
				strForeignState: this.formData?.State_of_formation,
				strForeignTribeJuris: this.formData?.Tribal_first_jurisdiction,
				strForeignOtherTribe: this.formData?.other_Tribe,
				strCompanyAddress: this.formData?.Address,
				strCompanyCity: this.formData?.City,
				strCompanyTerritory: this.formData?.Territory,
				strCompanyZipcode: this.formData?.ZIP_Code,
				bExistingReportingCompany: Boolean(this.formData?.Exit_reporting_company),
				bCreatedBeforeJan12024: Boolean(this.formData?.Created_before_Jan12024)
			};

			const CompanyApplicant = this.formData?.CompanyApplicant || [{
				strFinCENID: this.formData?.FinCEN_ID,
				strFirstName: this.formData?.First_name,
				strMiddleName: this.formData?.Middle_name,
				strLastName: this.formData?.Individual_last_name,
				strSuffix: this.formData?.Suffix,
				strDOB: this.formData?.Date,
				CurrentAddress: {
					bBussinessAddress: Boolean(this.formData?.Business_beneficial),
					bResidentialAddress: Boolean(this.formData?.Residential_applicant),
					strAddress: this.formData?.Address_number,
					strCity: this.formData?.City_applicant,
					strJurisdiction: this.formData?.Country_jurisdiction,
					strState: this.formData?.State_applicant,
					strZipcode: this.formData?.Foreign_postal
				},
				strIDDocType: this.formData?.Identififying_document,
				strIDDocNumber: this.formData?.Identififying_number,
				strIDDocJurisdiction: this.formData?.Country_jurisdiction,
				strIDDocState: this.formData?.State_app,
				strIDDocTribe: this.formData?.local,
				strIDDocTribeOther: this.formData?.tribal_desc,
				strIDocImage: this.strIDocImage,
				strDocImageType: this.strDocImageType
			}];

			const BOI = this.formData?.BOI || [{
				strFinCENID: this.formData?.Beneficial_fincenID,
				bExemptEntity: Boolean(this.formData?.entity_beneficial),
				strFirstName: this.formData?.Beneficial_first_name,
				strMiddleName: this.formData?.Beneficial_Middle_name,
				strLastNameOrgName: this.formData?.entity_legal,
				strSuffix: this.formData?.Beneficial_suffix,
				strDOB: this.formData?.Beneficial_date,
				CurrentAddress: {
					strAddress: this.formData?.Beneficial_Address,
					strCity: this.formData?.Beneficial_city,
					strJurisdiction: this.formData?.Beneficial_country_resi,
					strState: this.formData?.Beneficial_state_resi,
					strZipcode: this.formData?.Beneficial_zipcode
				},
				strIDDocType: this.formData?.Beneficial_document_type,
				strIDDocNumber: this.formData?.Beneficial_document_number,
				strIDDocJurisdiction: this.formData?.Beneficial_country,
				strIDDocState: this.formData?.Beneficial_state,
				strIDDocTribe: this.formData?.Beneficial_Local,
				strIDDocTribeOther: this.formData?.Beneficial_Other_local,
				strIDocImage: this.strIDocImag,
				strDocImageType: this.strDocImageTyp
			}];


			// Generate the XML data
			let alternateNamesXML = "";
			this.alters.forEach((alter) => {
				alternateNamesXML += `<fc2:AlternateName>${alter.Alternate_name}</fc2:AlternateName>\n`;
			});
			const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
<fc2:EFilingSubmissionXML xmlns:fc2="http://www.fincen.gov/base" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.fincen.gov/base https://www.fincen.gov/sites/default/files/schema/base/BOIRSchema.xsd" SeqNum="1">
    <fc2:SubmitterElectronicAddressText>codingbrains62@gmail.com</fc2:SubmitterElectronicAddressText>
    <fc2:SubmitterEntityIndivdualLastName>Testing</fc2:SubmitterEntityIndivdualLastName>
    <fc2:SubmitterIndivdualFirstName>CB</fc2:SubmitterIndivdualFirstName>
    <fc2:root>
        <fc2:BoirFormList>
            <fc2:Dashboard>
                <fc2:InitialReport>${this.formData.Initial_report}</fc2:InitialReport>
                <fc2:UpdatePriorReport>${this.formData.Update_prior_report}</fc2:UpdatePriorReport>
                <fc2:CorrectPriorReport>${this.formData.Correct_prior_report}</fc2:CorrectPriorReport>
                <fc2:NewlyExemptEntity>${this.formData.Newly_exempt_entity}</fc2:NewlyExemptEntity>
                <fc2:LegalName>${this.formData.Legal_name}</fc2:LegalName>
                <fc2:TaxIdentificationType>${this.formData.Tax_Identification_type}</fc2:TaxIdentificationType>
                <fc2:TaxIdentificationNumber>${this.formData.Tax_Identification_number}</fc2:TaxIdentificationNumber>
                <fc2:JurisdictionTaxId>${this.formData.Jurisdiction_tax_id}</fc2:JurisdictionTaxId>
                <fc2:Date>${this.formData.date}</fc2:Date>
            </fc2:Dashboard>
            <fc2:ReportCompany>
                <fc2:FinCENIdentifier>${this.formData.FinCEN_Identifier}</fc2:FinCENIdentifier>
                <fc2:ForeignPooled>${this.formData.Foreign_Pooled}</fc2:ForeignPooled>
                <fc2:ReportingCompany>${this.formData.Reporting_Company}</fc2:ReportingCompany>
                ${alternateNamesXML}
                <fc2:TaxIdentificationType>${this.formData.Tax_Identification}</fc2:TaxIdentificationType>
                <fc2:Identification>${this.formData.Identification}</fc2:Identification>
                <fc2:ForeignTax>${this.formData.foreign_tax}</fc2:ForeignTax>
                <fc2:Formation>${this.formData.formation}</fc2:Formation>
                <fc2:StateOfFormation>${this.formData.State_of_formation}</fc2:StateOfFormation>
                <fc2:TribalJurisdiction>${this.formData.Tribal_jurisdiction}</fc2:TribalJurisdiction>
                <fc2:OtherTribe>${this.formData.other_Tribe}</fc2:OtherTribe>
                <fc2:TribalFirstJurisdiction>${this.formData.Tribal_first_jurisdiction}</fc2:TribalFirstJurisdiction>
                <fc2:Registration>${this.formData.registration}</fc2:Registration>
                <fc2:NameOtherTribe>${this.formData.Name_other_Tribe}</fc2:NameOtherTribe>
                <fc2:Address>${this.formData.Address}</fc2:Address>
                <fc2:City>${this.formData.City}</fc2:City>
                <fc2:Territory>${this.formData.Territory}</fc2:Territory>
                <fc2:State>${this.formData.State}</fc2:State>
                <fc2:ZIPCode>${this.formData.ZIP_Code}</fc2:ZIPCode>
                <fc2:ExitReportingCompany>${this.formData.Exit_reporting_company}</fc2:ExitReportingCompany>
            </fc2:ReportCompany>
            <fc2:CompanyApplicant>
                <fc2:FinCEN>${this.formData.FinCEN_ID}</fc2:FinCEN>
                <fc2:IndividualLastName>${this.formData.Individual_last_name}</fc2:IndividualLastName>
                <fc2:FirstName>${this.formData.First_name}</fc2:FirstName>
                <fc2:MiddleName>${this.formData.Middle_name}</fc2:MiddleName>
                <fc2:Suffix>${this.formData.Suffix}</fc2:Suffix>
                <fc2:Date>${this.formData.Date}</fc2:Date>
                <fc2:Business>${this.formData.Business_beneficial}</fc2:Business>
                <fc2:ResidentialApplicant>${this.formData.Residential_applicant}</fc2:ResidentialApplicant>
                <fc2:AddressNumber>${this.formData.Address_number}</fc2:AddressNumber>
                <fc2:CityApplicant>${this.formData.City_applicant}</fc2:CityApplicant>
                <fc2:Country>${this.formData.Country}</fc2:Country>
                <fc2:StateApplicant>${this.formData.State_applicant}</fc2:StateApplicant>
                <fc2:ForeignPostal>${this.formData.Foreign_postal}</fc2:ForeignPostal>
                <fc2:IdentififyingDocument>${this.formData.Identififying_document}</fc2:IdentififyingDocument>
                <fc2:IdentififyingNumber>${this.formData.Identififying_number}</fc2:IdentififyingNumber>
                <fc2:CountryJurisdiction>${this.formData.Country_jurisdiction}</fc2:CountryJurisdiction>
                <fc2:StateApp>${this.formData.State_app}</fc2:StateApp>
                <fc2:Local>${this.formData.local}</fc2:Local>
				<fc2:TribalDesc>${this.formData.tribal_desc}</fc2:TribalDesc>
				<fc2:ImageAttachmentType>${this.strDocImageType}</fc2:ImageAttachmentType>
				<fc2:ImageAttachmentFileName>${this.strIDocImage}</fc2:ImageAttachmentFileName>
            </fc2:CompanyApplicant>
            <fc2:BeneficialOwner>
                <fc2:Minorchild>${this.formData.minor_child}</fc2:Minorchild>
                <fc2:BeneficialFincenID>${this.formData.Beneficial_fincenID}</fc2:BeneficialFincenID>
                <fc2:EntityBeneficial>${this.formData.entity_beneficial}</fc2:EntityBeneficial>
                <fc2:EntityLegal>${this.formData.entity_legal}</fc2:EntityLegal>
                <fc2:BeneficialFirstName>${this.formData.Beneficial_first_name}</fc2:BeneficialFirstName>
                <fc2:BeneficialMiddleName>${this.formData.Beneficial_Middle_name}</fc2:BeneficialMiddleName>
                <fc2:BeneficialSuffix>${this.formData.Beneficial_suffix}</fc2:BeneficialSuffix>
                <fc2:BeneficialDate>${this.formData.Beneficial_date}</fc2:BeneficialDate>
                <fc2:BeneficialAddress>${this.formData.Beneficial_Address}</fc2:BeneficialAddress>
                <fc2:BeneficialCity>${this.formData.Beneficial_city}</fc2:BeneficialCity>
                <fc2:BeneficialCountryResi>${this.formData.Beneficial_country_resi}</fc2:BeneficialCountryResi>
                <fc2:BeneficialStateResi>${this.formData.Beneficial_state_resi}</fc2:BeneficialStateResi>
                <fc2:BeneficialZipcode>${this.formData.Beneficial_zipcode}</fc2:BeneficialZipcode>
                <fc2:BeneficialDocumentType>${this.formData.Beneficial_document_type}</fc2:BeneficialDocumentType>
                <fc2:BeneficialDocumentNumber>${this.formData.Beneficial_document_number}</fc2:BeneficialDocumentNumber>
                <fc2:BeneficialCountry>${this.formData.Beneficial_country}</fc2:BeneficialCountry>
                <fc2:BeneficialState>${this.formData.Beneficial_state}</fc2:BeneficialState>
                <fc2:BeneficialLocal>${this.formData.Beneficial_Local}</fc2:BeneficialLocal>
                <fc2:BeneficialOtherLocal>${this.formData.Beneficial_Other_local}</fc2:BeneficialOtherLocal><
				<fc2:ImageAttachmentType>${this.strDocImageTyp}</fc2:ImageAttachmentType>
				<fc2:ImageAttachmentFileName>${this.strIDocImag}</fc2:ImageAttachmentFileName>
            </fc2:BeneficialOwner>
        </fc2:BoirFormList>
    </fc2:root>
</fc2:EFilingSubmissionXML>`;

			const combinedData = {
				CTAFiling,
				CurrentCompany,
				ReportingCompany,
				CompanyApplicant,
				BOI,
			};
			console.log(combinedData);
			//console.log(xmlData);
			const mock = new MockAdapter(axios);
			mock.onPost("https://example.com/api/endpoint").reply(200, xmlData);
			axios
				.post("https://example.com/api/endpoint", xmlData, {
					headers: { "Content-Type": "application/xml" },
				})
				.then((response) => {
					(this.formData.Initial_report = ""),
						(this.formData.Newly_exempt_entity = ""),
						(this.formData.Update_prior_report = ""),
						(this.formData.Correct_prior_report = ""),
						(this.formData.Legal_name = ""),
						(this.formData.Tax_Identification_number = ""),
						(this.formData.Tax_Identification_type = ""),
						(this.formData.Jurisdiction_tax_id = ""),
						(this.formData.date = ""),
						(this.formData.FinCEN_Identifier = ""),
						(this.formData.Foreign_Pooled = ""),
						(this.formData.Reporting_Company = ""),
						(this.formData.Alternate_name = ""),
						(this.formData.Tax_Identification = ""),
						(this.formData.Identification = ""),
						(this.formData.foreign_tax = ""),
						(this.formData.formation = ""),
						(this.formData.State_of_formation = ""),
						(this.formData.Tribal_jurisdiction = ""),
						(this.formData.other_Tribe = ""),
						(this.formData.Tribal_first_jurisdiction = ""),
						(this.formData.registration = ""),
						(this.formData.Name_other_Tribe = ""),
						(this.formData.Address = ""),
						(this.formData.City = ""),
						(this.formData.Territory = ""),
						(this.formData.State = ""),
						(this.formData.ZIP_Code = ""),
						(this.formData.Exit_reporting_company = ""),
						(this.formData.FinCEN_ID = ""),
						(this.formData.Individual_last_name = ""),
						(this.formData.First_name = ""),
						(this.formData.Middle_name = ""),
						(this.formData.Suffix = ""),
						(this.formData.Date = ""),
						(this.formData.Business_beneficial = false),
						(this.formData.Residential_applicant = false),
						(this.formData.Address_number = ""),
						(this.formData.City_applicant = ""),
						(this.formData.Country = ""),
						(this.formData.State_applicant = ""),
						(this.formData.Foreign_postal = ""),
						(this.formData.Identififying_document = ""),
						(this.formData.Identififying_number = ""),
						(this.formData.Country_jurisdiction = ""),
						(this.formData.State_app = ""),
						(this.formData.local = ""),
						(this.formData.tribal_desc = ""),
						(this.formData.minor_child = ""),
						(this.formData.Beneficial_fincenID = ""),
						(this.formData.entity_beneficial = ""),
						(this.formData.entity_legal = ""),
						(this.formData.Beneficial_first_name = ""),
						(this.formData.Beneficial_Middle_name = ""),
						(this.formData.Beneficial_suffix = ""),
						(this.formData.Beneficial_date = ""),
						(this.formData.Beneficial_Address = ""),
						(this.formData.Beneficial_city = ""),
						(this.formData.Beneficial_country_resi = ""),
						(this.formData.Beneficial_state_resi = ""),
						(this.formData.Beneficial_zipcode = ""),
						(this.formData.Beneficial_document_type = ""),
						(this.formData.Beneficial_document_number = ""),
						(this.formData.Beneficial_country = ""),
						(this.formData.Beneficial_state = ""),
						(this.formData.Beneficial_Local = ""),
						(this.formData.Beneficial_Other_local = ""),
						(this.responseXml = response.data);
					console.log("Reporting Data:", this.responseXml);
				})
				.catch((error) => {
					console.error("Error fetching data:", error.message);
				});
		},
	},
};
</script>
