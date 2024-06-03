<template >
    <!---Reporting section form start-->
    <div class="container">
        <div class="reporting-wrapper section" id="reporting">
            <h3>Part I. Reporting Company Information</h3>
        </div>
        <ol>
        <li>
            <div class="row">
                <div class="col-xl-4 col-md-4 col-sm-4">
                    <label for="css">Request to receive FinCEN Identifier (FinCEN ID)</label>
                </div>
                <div class="col-xl-7 col-md-6 col-sm-8">
                    <input type="radio" name="fav_language" v-model="formData.FinCEN_Identifier" value="true">
                    <span v-if="formErrors.FinCEN_Identifier" class="error">{{ formErrors.FinCEN_Identifier }}</span>
                </div>
            </div>
        </li>
        <li>
            <div class="row">
                <div class="col-xl-4 col-md-4 col-sm-4">
                    <label for="css">Foreign pooled investment vehicle</label>
                </div>
                <div class="col-xl-7 col-md-6 col-sm-8">
                    <input type="radio" name="fav_language" v-model="formData.Foreign_Pooled" value="true">
                    <span v-if="formErrors.Foreign_Pooled" class="error">{{ formErrors.Foreign_Pooled }}</span>
                </div>
            </div>
        </li>
        <hr>
        <h6>Full legal name and alternate name(s):</h6>
        <li>
            <div class="row">
                <div class="col-xl-4 col-md-4 col-sm-4">
                    <label for="css">Reporting Company legal name</label>
                </div>
                <div class="col-xl-7 col-md-6 col-sm-8">
                    <input class="form-input" type="text" v-model="formData.Reporting_Company" name="Reporting_Company"
                        placeholder="Reporting Company legal name">
                    <span v-if="formErrors.Reporting_Company" class="error">{{ formErrors.Reporting_Company }}</span>
                </div>
            </div>
        </li>
        <li>
            <div class="row">
                <div class="col-xl-4 col-md-4 col-sm-4">
                    <label for="css">Alternate name (e.g. trade name, DBA)</label>
                </div>
                <div class="col-xl-7 col-md-6 col-sm-8">
                    <input class="form-input" type="text" v-model="input.Alternate_name" name="Alternate_name"
                        placeholder="Alternate name" v-for="(input, k) in inputs" :key="k">
                    <span v-if="formErrors.Alternate_name" class="error">{{ formErrors.Alternate_name }}</span>
                </div>
                <div class="col-xl-1 col-md-2 col-sm-2 d-flex">
                    <button @click.prevent="addInput()" class="add-btn">+</button>
                    <!-- <button v-if="k === 0" disabled class="remove-btn">-</button>-->
                    <button @click.prevent="remove(k)" class="remove-btn">-</button>
                </div>
            </div>
        </li>
        <hr>
        <h6>Form of identification:</h6>
        <li>
            <div class="row">
                <div class="col-md-4">
                    <label for="css">Tax Identification type</label>
                </div>
                <div class="col-md-7">
                    <select class="form-select" v-model="formData.Tax_Identification" id="inputGroupSelect01">
                        <option disabled>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <span v-if="formErrors.Tax_Identification" class="error">{{ formErrors.Tax_Identification }}</span>
                </div>
            </div>
        </li>
        <li>
            <div class="row">
                <div class="col-md-4">
                    <label for="css">Tax Identification number</label>
                </div>
                <div class="col-md-7">
                    <input type="number" placeholder="Tax Identification number" class="form-input" name="fav_language" v-model="formData.Identification" value="true">
                    <span v-if="formErrors.Identification" class="error">{{ formErrors.Identification }}</span>

                </div>
            </div>
        </li>
        <li>
            <div class="row">
                <div class="col-md-4">
                    <label for="css">Country/Jurisdiction <span class="sml">(if foreign tax ID
                            only)</span></label>
                </div>
                <div class="col-md-7">
                    <select class="form-select" v-model="formData.foreign_tax" id="inputGroupSelect01">
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
                            <label for="css">Country/Jurisdiction of formation</label>
                        </div>
                        <div class="col-md-7">
                            <select class="form-select" v-model="formData.formation" id="inputGroupSelect01">
                                <option disabled>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <span v-if="formErrors.formation" class="error">{{ formErrors.formation }}</span>
                        </div>
                    </div>
                </li>
                <h6>Domestic Reporting Company:</h6>
                <li>
                    <div class="row">
                        <div class="col-md-4">
                            <label for="css">State of formation</label>
                        </div>
                        <div class="col-md-7">
                            <select class="form-select" v-model="formData.State_of_formation" id="inputGroupSelect01">
                                <option disabled>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <span v-if="formErrors.State_of_formation" class="error">{{ formErrors.State_of_formation
                            }}</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="row">
                        <div class="col-md-4">
                            <label for="css">Tribal jurisdiction of formation</label>
                        </div>
                        <div class="col-md-7">
                            <select class="form-select" v-model="formData.Tribal_jurisdiction" id="inputGroupSelect01">
                                <option disabled>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <span v-if="formErrors.Tribal_jurisdiction" class="error">{{ formErrors.Tribal_jurisdiction
                            }}</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="row">
                        <div class="col-md-4">
                            <label for="css">Name of the other Tribe</label>
                        </div>
                        <div class="col-md-7">
                            <input class="form-input" v-model="formData.other_Tribe" type="text"
                                placeholder="Name of the other Tribe">
                            <span v-if="formErrors.other_Tribe" class="error">{{ formErrors.other_Tribe }}</span>
                        </div>
                    </div>
                </li>
                <h6>Foreign Reporting Company:</h6>
                <li>
                    <div class="row">
                        <div class="col-md-4">
                            <label for="css">State of first registration</label>
                        </div>
                        <div class="col-md-7">
                            <select class="form-select" v-model="formData.registration" id="inputGroupSelect01">
                                <option disabled>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <span v-if="formErrors.registration" class="error">{{ formErrors.registration }}</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="row">
                        <div class="col-md-4">
                            <label for="css">Tribal jurisdiction of first registration</label>
                        </div>
                        <div class="col-md-7">
                            <select class="form-select" v-model="formData.Tribal_first_jurisdiction" id="inputGroupSelect01">
                                <option disabled>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <span v-if="formErrors.Tribal_first_jurisdiction" class="error">{{ formErrors.Tribal_first_jurisdiction
                            }}</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="row">
                        <div class="col-md-4">
                            <label for="css">Name of the other Tribe</label>
                        </div>
                        <div class="col-md-7">
                            <input class="form-input" type="text" v-model="formData.Name_other_Tribe"
                                placeholder="Name of the other Tribe">
                            <span v-if="formErrors.Name_other_Tribe" class="error">{{ formErrors.Name_other_Tribe }}</span>
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
                    <label for="css">Address (number, street, and apt. or suite no.)</label>
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
                    <label for="css">City</label>
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
                    <label for="css">U.S. or U.S. Territory</label>
                </div>
                <div class="col-md-7">
                    <select class="form-select" v-model="formData.Territory" id="inputGroupSelect01">
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
                    <label for="css">State</label>
                </div>
                <div class="col-md-7">
                    <select class="form-select" v-model="formData.State" id="inputGroupSelect01">
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
                    <label for="css">ZIP Code</label>
                </div>
                <div class="col-md-7">
                    <input class="form-input" type="text" v-model="formData.ZIP_Code" placeholder="ZIP Code">
                    <span v-if="formErrors.ZIP_Code" class="error">{{ formErrors.ZIP_Code }}</span>
                </div>
            </div>
        </li>
        <li>
            <div class="row">
                <div class="col-md-4">
                    <label for="css">Existing Reporting Company </label>
                </div>
                <div class="col-md-7 select-rdo">
                    <input type="radio" v-model="formData.Exit_reporting_company" value="true">
                    <span v-if="formErrors.Exit_reporting_company" class="error">{{ formErrors.Exit_reporting_company
                    }}</span>
                    <span class="sml">(check if Reporting Company was created or registered before January
                        1, 2024)</span>
                </div>
            </div>
        </li>
        <li>
            <div class="row">
                <div class="col-md-12">
                    <label for="css">(This item is reserved for future use)</label>
                </div>
            </div>
        </li>
    </ol>
    </div>

    <!---Reporting section from end-->
</template>
<script>
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import '../assets/css/main.css'
import '../assets/images/Financial-logo.png'
export default {
    name: 'ReportingBoir',

    data() {
        return {
            inputs: [{
                Alternate_name: '',
            }],
            k: 0, // Add this line
            formData: {
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
                Tribal_first_jurisdiction:'',
                registration: '',
                other_Tribe: '',

            },
            responseXml: null,
            formErrors: {
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
                Tribal_first_jurisdiction:'',
                registration: '',
                other_Tribe: '',
            }
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
                Tribal_first_jurisdiction:'',
                registration: '',
                other_Tribe: '',
            };

            if (!this.formData.FinCEN_Identifier.trim()) {
                this.formErrors.FinCEN_Identifier = 'FinCEN is required';
                isValid = false;
            }
            if (!this.formData.Tribal_first_jurisdiction.trim()) {
                this.formErrors.Tribal_first_jurisdiction = 'Tribal first jurisdiction is required';
                isValid = false;
            }
            if (!this.formData.Foreign_Pooled.trim()) {
                this.formErrors.Foreign_Pooled = 'Foreign is required';
                isValid = false;
            }
            if (!this.formData.Reporting_Company.trim()) {
                this.formErrors.Reporting_Company = 'Reporting is required';
                isValid = false;
            }
            if (!this.formData.Alternate_name.trim()) {
                this.formErrors.Alternate_name = 'Alternate name is required';
                isValid = false;
            }
            if (!this.formData.Tax_Identification.trim()) {
                this.formErrors.Tax_Identification = 'Jurisdiction Type is required';
                isValid = false;
            }
            if (!this.formData.foreign_tax.trim()) {
                this.formErrors.foreign_tax = 'Foreign Tax is required';
                isValid = false;
            }
            if (!this.formData.formation.trim()) {
                this.formErrors.formation = 'Formation is required';
                isValid = false;
            }
            if (!this.formData.State_of_formation.trim()) {
                this.formErrors.State_of_formation = 'State Formation is required';
                isValid = false;
            }
            if (!this.formData.Exit_reporting_company.trim()) {
                this.formErrors.Exit_reporting_company = 'Exit Report Company is required';
                isValid = false;
            }
            if (!this.formData.ZIP_Code.trim()) {
                this.formErrors.ZIP_Code = 'Zip Code is required';
                isValid = false;
            }
            if (!this.formData.State.trim()) {
                this.formErrors.State = 'State is required';
                isValid = false;
            }
            if (!this.formData.Territory.trim()) {
                this.formErrors.Territory = 'Territory is required';
                isValid = false;
            }
            if (!this.formData.City.trim()) {
                this.formErrors.City = 'City is required';
                isValid = false;
            }
            if (!this.formData.Address.trim()) {
                this.formErrors.Address = 'Address is required';
                isValid = false;
            }
            if (!this.formData.Name_other_Tribe.trim()) {
                this.formErrors.Name_other_Tribe = 'Name other Tribe is required';
                isValid = false;
            }
            if (!this.formData.Tribal_jurisdiction.trim()) {
                this.formErrors.Tribal_jurisdiction = 'Tribal jurisdiction is required';
                isValid = false;
            }
            if (!this.formData.registration.trim()) {
                this.formErrors.registration = 'Registration is required';
                isValid = false;
            }
            if (!this.formData.other_Tribe.trim()) {
                this.formErrors.other_Tribe = 'Other Tribe is required';
                isValid = false;
            }
            return isValid;
        },
        reportForm() {
            if (!this.validateForm()) {
                return;
            }
            const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
          <root>
            <BoirFormList>
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
			  <Territory>${this.formData.Territory}</Territory>
			  <City>${this.formData.City}</City>
			  <Address>${this.formData.Address}</Address>
              <NameOtherTribe>${this.formData.Name_other_Tribe}</NameOtherTribe>
			  <TribalJurisdiction>${this.formData.Tribal_jurisdiction}</TribalJurisdiction>
              <TribalFirstJurisdiction>${this.formData.Tribal_first_jurisdiction}</TribalFirstJurisdiction>
			  <Registration>${this.formData.registration}</Registration>
			  <OtherTribe>${this.formData.other_Tribe}</OtherTribe>		  
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
                this.formData.FinCEN_Identifier = '',
                    this.formData.Foreign_Pooled = ''
                this.formData.Reporting_Company = '',
                    this.formData.Alternate_name = '',
                    this.formData.Tax_Identification = '',
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
                    this.formData.Tribal_first_jurisdiction='',
                    this.formData.registration = '',
                    this.formData.other_Tribe = '',
                    this.responseXml = response.data;
            }).catch(error => {
                console.error('Error fetching data:', error.message);
            });

        }
    }
}
</script>