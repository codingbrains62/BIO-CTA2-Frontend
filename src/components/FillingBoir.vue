<template>
    <div class="container mb-3 main-contant-box">
		<div class="submission-wrapper section">
			<h4>Report Preparation & Submission Instructions:</h4>
			<div class="submission-box">
				<div class="instruction-report d-flex">
					<div class="bt-box">
						<button v-on:click="showModal('instruction')" type="button">Instruction</button>
						<ModalBoir v-if="isModalVisible && modalType ==='instruction'" @click="closeModal" />
						
					</div>
					<div class="instructions-box" >
						<p><span>1.</span>Complete the report in its entirety with all required information. Click
							Instructions for help.</p>
					</div>
				</div>
				<div class="instruction-report d-flex">
					<div class="bt-box">
						<button type="button" @click="showModal">Validate</button>
						<ModalBoir v-if="isModalVisible" @click="closeModal" />
					</div>
					<div class="instructions-box">
						<p><span>2.</span>Click Validate to ensure all entered data is properly formatted and that all
							required fields are completed.</p>
					</div>
				</div>
				<div class="instruction-report d-flex">
					<div class="bt-box">
						<button type="button" @click="showModal">Finalize</button>
						<ModalBoir v-if="isModalVisible" @click="closeModal" />
					</div>
					<div class="instructions-box">
						<p><span>3.</span>Click Finalize to lock the entries in the report and prepare it for submission.
							Click Edit Report to unlock and re-edit.</p>
					</div>
				</div>
				<div class="instruction-report d-flex">
					<div class="bt-box">
						<button type="button" @click="showModal">Save</button>
						<ModalBoir v-if="isModalVisible" @click="closeModal" />
					</div>
					<div class="instructions-box">
						<p><span>4.</span>Click Save to retain a local copy of the report (this can be done at any time
							during report preparation).</p>
					</div>
				</div>
				<div class="instruction-report d-flex">
					<div class="bt-box">
						<button type="button" @click="showModal">Print</button>
						<ModalBoir v-if="isModalVisible" @click="closeModal" />
					</div>
					<div class="instructions-box">
						<p><span>5.</span>(Optional) Click Print to print a hard copy of your completed report.</p>
					</div>
				</div>
				<div class="instruction-report d-flex">
					<div class="bt-box">
						<button type="button" @click="showModal">Ready to File</button>
						<ModalBoir v-if="isModalVisible" @click="closeModal"  />
					</div>
					<div class="instructions-box">
						<p><span>6.</span>Select Ready to File (activated after the report is finalized and saved locally)
							to begin the submission process.</p>
					</div>
				</div>
			</div>
		</div>
		<form @submit.prevent="submitForm" class="form-control">
			<div class="filling-form" id="home">
				<div class="filling-info-wrapper">
					<div class="row">
						<div class="col-md-6">
							<h3>Filling Information</h3>
						</div>
						<div class=" col-md-6 bt-box text-end">
						<i @click.prevent="scrollToElement" class="fa-solid fa-arrow-up"></i>
					</div>
					</div>					
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
												<input type="radio" class="radio-start" v-model="formData.Initial_report" name="reportType"
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
												<input type="radio" class="radio-start" :value="true" name="reportType"
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
												<input type="radio" class="radio-start" :value="true" name="reportType"
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
												<input type="radio" class="radio-start" :value="true" id="css" name="reportType"
													v-model="formData.Newly_exempt_entity">

											</div>``
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
													<option value="license">State issued driver's license</option>
													<option value="id">State/Local/tribe-issued ID</option>
													<option value="passport">U.S Passport</option>
													<option value="foregin">Foreign Passport</option>
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
									<input class="form-input" type="date" v-model="formData.date"  @input="updateDate">
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
                        </ol>
                        </div>
                        </div>
                        </form>
                        </div>
                        
</template>
<script>
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import '../assets/css/main.css'
import '../assets/images/Financial-logo.png'
export default {
    name: 'BenificialBoir',
    data() {
        return {
            inputs: [{
             name: '',
               }],
            k: 0, // Add this line
      formData: {
        Initial_report: false,
				Newly_exempt_entity: false,
				Update_prior_report: false,
				Correct_prior_report: false,
				Legal_name: '',
				Tax_Identification_number: '',
				Tax_Identification_type: '',
				Jurisdiction_tax_id: '',
				date: '',
       

      },
      responseXml: null,
      formErrors: {
        Initial_report: false,
				Newly_exempt_entity: false,
				Update_prior_report: false,
				Correct_prior_report: false,
				Legal_name: '',
				Tax_Identification_number: '',
				Tax_Identification_type: '',
				Jurisdiction_tax_id: '',
				date: '',

      },

        };
    },
    methods: {
        
        addInput() {
            this.inputs.push({
                name: '',
            })
            console.log(this.inputs)
        },
        remove(index) {
            this.inputs.splice(index, 1)
        },

        validateForm() {
      let isValid = true;
      this.formErrors = {
        Initial_report: false,
				Newly_exempt_entity: false,
				Update_prior_report: false,
				Correct_prior_report: false,
				Legal_name: '',
				Tax_Identification_number: '',
				Tax_Identification_type: '',
				Jurisdiction_tax_id: '',
				date: '',
      };
      if (!this.formData.Legal_name) {
				this.formErrors.Legal_name = 'Legal name is required';
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
			if (!this.formData.Jurisdiction_tax_id) {
				this.formErrors.Jurisdiction_tax_id = 'Jurisdiction tax id is required';
				isValid = false;
			}
			if (!this.formData.date) {
				this.formErrors.date = 'Date is required';
				isValid = false;
			}
      return isValid;
    },
    beneficialForm() {
      if (!this.validateForm()) {
        return;
      }
      const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
          <root>
            <Dashboard>
						<InitialReport>${this.formData.Initial_report}</InitialReport>
						<UpdatePriorReport>${this.formData.Update_prior_report}</UpdatePriorReport>
						<CorrectPriorReport>${this.formData.Correct_prior_report}</CorrectPriorReport>			
						<NewlyExemptEntity>${this.formData.Newly_exempt_entity}</NewlyExemptEntity>
						<LegalName>${this.formData.Legal_name}</LegalName>
						<TaxIdentificationType>${this.formData.Tax_Identification_type}</TaxIdentificationType>
						<TaxIdentificationNumber>${this.formData.Tax_Identification_number}</TaxIdentificationNumber>
						<JurisdictionTaxId>${this.formData.Jurisdiction_tax_id}</JurisdictionTaxId>
						<Date>${this.formData.date}</Date>
				</Dashboard>
          </root>`;
      // Create a mock adapter for axios
      const mock = new MockAdapter(axios);
      // Mock POST request to the dummy API endpoint
      mock.onPost('https://example.com/api/endpoint').reply(200, xmlData);
      // Simulate the actual HTTP request
      axios.post('https://example.com/api/endpoint', xmlData, {
        headers: { 'Content-Type': 'application/xml' }
      }).then(response => {
        this.formData.Newly_exempt_entity = "",
					this.formData.Update_prior_report = "",
					this.formData.Correct_prior_report = "",
					this.formData.Legal_name = '',
					this.formData.Tax_Identification_number = '',
					this.formData.Tax_Identification_type = '',
					this.formData.Jurisdiction_tax_id = '',
					this.formData.date = '',
          this.responseXml = response.data;
      }).catch(error => {
        console.error('Error fetching data:', error.message);
      });

    }
},
}
</script>