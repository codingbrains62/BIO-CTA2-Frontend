<template >
    <!----start benificial-->

    <div class="container" v-for="(input, index) in inputs" :key="index">
        <div class="applicant-wrapper section" id="beneficial">
            <h3>Part III. Beneficial Owner Information</h3>
            <div class="add-p1">
                <button @click.prevent="addInput()" class="add-btn">+</button>
                    <!-- <button v-if="index === 0" disabled class="remove-btn">-</button> -->
                    <button v-if="index === 0" style="display: none;" class="remove-btn">-</button>
                    <button v-else @click.prevent="remove(index)" class="remove-btn">-</button>
            </div>
        </div>
        <hr>
        <ol>
        <li>
            <div class="row">
                <div class="col-md-4">
                    <label>Parent/Guardian information instead of minor child</label>
                </div>
                <div class="col-md-7">
                    <input class="" type="radio" v-model="formData.minor_child" value="Add Attachment">
                    <span v-if="formErrors.minor_child" class="error">{{ formErrors.minor_child }}</span>
                    <span>(check if the Beneficial Owner is a minor child and the parent/guardian
                        information is provided instead)</span>
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
                    <input class="form-input" v-model="formData.Beneficial_fincenID" type="text" placeholder="FinCEN ID">
                    <span v-if="formErrors.Beneficial_fincenID" class="error">{{ formErrors.Beneficial_fincenID }}</span>
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
                <div class="col-md-7">
                    <input class="" type="radio" v-model="formData.entity" value="exempt_entity">
                    <span v-if="formErrors.entity" class="error">{{ formErrors.entity }}</span>
                </div>
            </div>
        </li>
        <hr>
        <h6>Full legal name and date of birth:</h6>
        <li>
            <div class="row">
                <div class="col-md-4">
                    <label for="css"><span class="red">*</span>Individual's last name or entity's legal
                        name.</label>
                </div>
                <div class="col-md-7">
                    <input class="form-input" type="text"  v-model="formData.entity_legal" placeholder="Individual's last name or entity's legal name.">
                    <span v-if="formErrors.entity_legal" class="error">{{ formErrors.entity_legal }}</span>
                </div>
            </div>
        </li>
        <li>
            <div class="row">
                <div class="col-md-4">
                    <label for="css"><span class="red">*</span>First name</label>
                </div>
                <div class="col-md-7">
                    <input class="form-input" type="text" v-model="formData.Beneficial_first_name" placeholder="First name">
                    <span v-if="formErrors.Beneficial_first_name" class="error">{{ formErrors.Beneficial_first_name }}</span>
                </div>
            </div>
        </li>
        <li>
            <div class="row">
                <div class="col-md-4">
                    <label for="css">Middle name</label>
                </div>
                <div class="col-md-7">
                    <input class="form-input" type="text" v-model="formData.Beneficial_Middle_name" placeholder="Middle name">
                    <span v-if="formErrors.Beneficial_Middle_name" class="error">{{ formErrors.Beneficial_Middle_name }}</span>
                </div>
            </div>
        </li>
        <li>
            <div class="row">
                <div class="col-md-4">
                    <label for="css">Suffix</label>
                </div>
                <div class="col-md-7">
                    <input class="form-input" v-model="formData.Beneficial_suffix" type="text" placeholder="Suffix">
                    <span v-if="formErrors.Beneficial_suffix" class="error">{{ formErrors.Beneficial_suffix }}</span>
                </div>
            </div>
        </li>
        <li>
            <div class="row">
                <div class="col-md-4">
                    <label for="css">Date of birth</label>
                </div>
                <div class="col-md-7">
                    <input class="form-input" type="date" v-model="formData.Beneficial_date" >
                    <span v-if="formErrors.Beneficial_date" class="error">{{ formErrors.Beneficial_date }}</span>
                </div>
            </div>
        </li>
        <hr>
        <h6>Residential address:</h6>
        <li>
            <div class="row">
                <div class="col-md-4">
                    <label for="css"><span class="red">*</span>Address (number, street, and apt. or suite
                        no.)</label>
                </div>
                <div class="col-md-7">
                    <input class="form-input" v-model="formData.Beneficial_Address" placeholder="Address (number, street, and apt. or suite no.)" type="text">
                    <span v-if="formErrors.Beneficial_Address" class="error">{{ formErrors.Beneficial_Address }}</span>
                </div>
            </div>
        </li>
        <li>
            <div class="row">
                <div class="col-md-4">
                    <label for="css"><span class="red">*</span>City</label>
                </div>
                <div class="col-md-7">
                    <input class="form-input" v-model="formData.Beneficial_city" type="text" placeholder="City">
                    <span v-if="formErrors.Beneficial_city" class="error">{{ formErrors.Beneficial_city }}</span>
                </div>
            </div>
        </li>
        <li>
            <div class="row">
                <div class="col-md-4">
                    <label for="css"><span class="red">*</span>Country/Jurisdiction</label>
                </div>
                <div class="col-md-7">
                    <select class="form-select" v-model="formData.Beneficial_country" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <span v-if="formErrors.Beneficial_country" class="error">{{ formErrors.Beneficial_country }}</span>
                </div>
            </div>
        </li>
        <li>
            <div class="row">
                <div class="col-md-4">
                    <label for="css"><span class="red">*</span>State</label>
                </div>
                <div class="col-md-7">
                    <select class="form-select" v-model="formData.Beneficial_state" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <span v-if="formErrors.Beneficial_state" class="error">{{ formErrors.Beneficial_state }}</span>
                </div>
            </div>
        </li>
        <li>
            <div class="row">
                <div class="col-md-4">
                    <label for="css"><span class="red">*</span>ZIP/Foreign postal code</label>
                </div>
                <div class="col-md-7">
                    <input class="form-input" v-model="formData.Beneficial_zipcode" type="text" placeholder="ZIP/Foreign postal code">
                    <span v-if="formErrors.Beneficial_zipcode" class="error">{{ formErrors.Beneficial_zipcode }}</span>
                </div>
            </div>
        </li>
        <hr>
        <h6>Form of identification and issuing jurisdiction:</h6>
        <li>
            <div class="row">
                <div class="col-md-4">
                    <label for="css"><span class="red">*</span>Identifying document type</label>
                </div>
                <div class="col-md-7">
                    <select class="form-select" v-model="formData.Beneficial_document_type" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <span v-if="formErrors.Beneficial_document_type" class="error">{{ formErrors.Beneficial_document_type }}</span>
                </div>
            </div>
        </li>
        <li>
            <div class="row">
                <div class="col-md-4">
                    <label for="css"><span class="red">*</span>Identifying document number</label>
                </div>
                <div class="col-md-7">
                    <input class="form-input" type="text" v-model="formData.Beneficial_document_number" placeholder="Identifying document number">
                    <span v-if="formErrors.Beneficial_document_number" class="error">{{ formErrors.Beneficial_document_number }}</span>
                </div>
            </div>
        </li>
        <li>
            <label><span class="red">*</span>Identifying document issuing jurisdiction:</label>
            <ol type="a" style="margin-left: 20px!important;">
                <li>
                    <div class="row">
                        <div class="col-md-4">
                            <label for="css">Country/Jurisdiction</label>
                        </div>
                        <div class="col-md-7">
                            <input class="form-input" type="text" v-model="formData.Beneficial_country" placeholder="Country/Jurisdiction">
                            <span v-if="formErrors.Beneficial_country" class="error">{{ formErrors.Beneficial_country }}</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="row">
                        <div class="col-md-4">
                            <label for="css">State</label>
                        </div>
                        <div class="col-md-7">
                            <input class="form-input" v-model="formData.Beneficial_state" type="text" placeholder="State">
                            <span v-if="formErrors.Beneficial_state" class="error">{{ formErrors.Beneficial_state }}</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="row">
                        <div class="col-md-4">
                            <label for="css">Local/Tribal</label>
                        </div>
                        <div class="col-md-7">
                            <input class="form-input" v-model="formData.Beneficial_Local" type="text" placeholder="Local/Tribal">
                            <span v-if="formErrors.Beneficial_Local" class="error">{{ formErrors.Beneficial_Local }}</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="row">
                        <div class="col-md-4">
                            <label for="css">Other local/Tribal description</label>
                        </div>
                        <div class="col-md-7">
                            <input class="form-input" type="text" v-model="formData.Beneficial_Other_local" placeholder="Other local/Tribal description">
                            <span v-if="formErrors.Beneficial_Other_local" class="error">{{ formErrors.Beneficial_Other_local }}</span>
                        </div>
                    </div>
                </li>
            </ol>
        </li>
        <li>
            <div class="row">
                <div class="col-md-4">
                    <label for="css"><span class="red">*</span>Identifying document image</label>
                </div>
                <div class="col-md-7">
                    <input class="file btn btn-primary" type="file" value="Add Attachment">
                    <button class="file btn btn-primary mx-1">Remove Attachment</button>
                    <input class="f-input form-input">
                </div>
            </div>
        </li>
    </ol>
    </div>
    <div class="bt-box">
				<button type="submit">Submit</button>
			</div>

    <!---end beneficial-->
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
        minor_child: '',
        Beneficial_fincenID: '',
        entity: '',
        Beneficial_Other_local: '',
        Beneficial_Local: '',
        Beneficial_state: '',
        Beneficial_country: '',
        Beneficial_document_number: '',
        Beneficial_document_type: '',
        Beneficial_zipcode: '',
        entity_legal: '',
        Beneficial_first_name: '',
        Beneficial_Middle_name: '',
        Beneficial_suffix: '',
        Beneficial_date: '',
        Beneficial_Address: '',
        Beneficial_city: '',
       

      },
      responseXml: null,
      formErrors: {
        minor_child: '',
        Beneficial_fincenID: '',
        entity: '',
        Beneficial_Other_local: '',
        Beneficial_Local: '',
        Beneficial_state: '',
        Beneficial_country: '',
        Beneficial_document_number: '',
        Beneficial_document_type: '',
        Beneficial_zipcode: '',
        entity_legal: '',
        Beneficial_first_name: '',
        Beneficial_Middle_name: '',
        Beneficial_suffix: '',
        Beneficial_date: '',
        Beneficial_Address: '',
        Beneficial_city: '',

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
        minor_child: '',
        Beneficial_fincenID: '',
        entity: '',
        Beneficial_Other_local: '',
        Beneficial_Local: '',
        Beneficial_state: '',
        Beneficial_country: '',
        Beneficial_document_number: '',
        Beneficial_document_type: '',
        Beneficial_zipcode: '',
        entity_legal: '',
        Beneficial_first_name: '',
        Beneficial_Middle_name: '',
        Beneficial_suffix: '',
        Beneficial_date: '',
        Beneficial_Address: '',
        Beneficial_city: '',
      };
      if (!this.formData.minor_child.trim()) {
        this.formErrors.minor_child = 'minor child is required';
        isValid = false;
      }
      if (!this.formData.Beneficial_fincenID.trim()) {
        this.formErrors.Beneficial_fincenID = 'Beneficial fincenID is required';
        isValid = false;
      }
      if (!this.formData.entity.trim()) {
        this.formErrors.entity = 'entity is required';
        isValid = false;
      }
      if (!this.formData.Beneficial_Other_local.trim()) {
        this.formErrors.Beneficial_Other_local = 'Beneficial Other local is required';
        isValid = false;
      }
      if (!this.formData.Beneficial_Local.trim()) {
        this.formErrors.Beneficial_Local = 'Beneficial Local is required';
        isValid = false;
      }
      if (!this.formData.Beneficial_state.trim()) {
        this.formErrors.Beneficial_state = 'Beneficial state is required';
        isValid = false;
      }
      if (!this.formData.Beneficial_document_number.trim()) {
        this.formErrors.Beneficial_document_number = 'Beneficial document number is required';
        isValid = false;
      }
      if (!this.formData.Beneficial_document_type.trim()) {
        this.formErrors.Beneficial_document_type = 'Beneficial document type is required';
        isValid = false;
      }
      if (!this.formData.Beneficial_country.trim()) {
        this.formErrors.Beneficial_country = 'Beneficial country is required';
        isValid = false;
      }
      if (!this.formData.Beneficial_zipcode.trim()) {
        this.formErrors.Beneficial_zipcode = 'Beneficial zipcode is required';
        isValid = false;
      }
      if (!this.formData.entity_legal.trim()) {
        this.formErrors.entity_legal = 'entity legal is required';
        isValid = false;
      }
      if (!this.formData.Residential.trim()) {
        this.formErrors.Residential = 'Residential is required';
        isValid = false;
      }
      if (!this.formData.Beneficial_first_name.trim()) {
        this.formErrors.Beneficial_first_name = 'Beneficial first name is required';
        isValid = false;
      }
      if (!this.formData.Beneficial_Middle_name.trim()) {
        this.formErrors.Beneficial_Middle_name = 'Beneficial Middle name is required';
        isValid = false;
      }
      if (!this.formData.Beneficial_suffix.trim()) {
        this.formErrors.Beneficial_suffix = 'Beneficial suffix is required';
        isValid = false;
      }
      if (!this.formData.Beneficial_date.trim()) {
        this.formErrors.Beneficial_date = 'Beneficial date is required';
        isValid = false;
      }
      if (!this.formData.Beneficial_Address.trim()) {
        this.formErrors.Beneficial_Address = 'Beneficial Address is required';
        isValid = false;
      }
      if (!this.formData.Beneficial_city.trim()) {
        this.formErrors.Beneficial_city = 'Beneficial city is required';
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
            <BoirFormList>
              <minorchild>${this.formData.minor_child}</minorchild>
              <BeneficialFincenID>${this.formData.Beneficial_fincenID}</BeneficialFincenID>
              <entity>${this.formData.entity}</entity>
              <BeneficialOtherLocal>${this.formData.Beneficial_Other_local}</BeneficialOtherLocal>
			  <BeneficialLocal>${this.formData.Beneficial_Local}</BeneficialLocal>
              <BeneficialState>${this.formData.Beneficial_state}</BeneficialState>
              <BeneficialCountry>${this.formData.Beneficial_country}</BeneficialCountry>
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
        this.formData.minor_child= '',
        this.formData.Beneficial_fincenID= '',
        this.formData.entity= '',
        this.formData.Beneficial_Other_local= '',
        this.formData.Beneficial_Local= '',
        this.formData.Beneficial_state= '',
        this.formData.Beneficial_country= '',
        this.formData.Beneficial_document_number= '',
        this.formData.Beneficial_document_type= '',
        this.formData.Beneficial_zipcode= '',
        this.formData.entity_legal= '',
        this.formData.Beneficial_first_name= '',
        this.formData.Beneficial_Middle_name= '',
        this.formData.Beneficial_suffix= '',
        this.formData.Beneficial_date= '',
        this.formData.Beneficial_Address= '',
        this.formData.Beneficial_city= '',
          this.responseXml = response.data;
      }).catch(error => {
        console.error('Error fetching data:', error.message);
      });

    }
},
}
</script>