<template>
  <!---start company applicant-->

  <div class="container" v-for="(input, index) in inputs" :key="index">
    <div class="applicant-wrapper section" id="applicant">
      <h3>dsfdsPart II. Company Applicant Information</h3>
      <div class="add-p1">
        <button @click.prevent="addInput()" class="add-btn">+</button>
        <!-- <button v-if="index === 0" disabled class="remove-btn">-</button> -->
        <button v-if="index === 0" style="display: none;" class="remove-btn">-</button>
        <button v-else @click.prevent="remove(index)" class="remove-btn">-</button>
      </div>
    </div>
    <h6>Company Applicant FinCEN ID:</h6>
    <ol>
    <li>
      <div class="row">
        <div class="col-md-4">
          <label for="css"><strong>FinCEN ID</strong></label>
        </div>
        <div class="col-md-7">
          <input class="form-input" type="text" v-model="formData.FinCEN_ID" placeholder="FinCEN ID">
          <span v-if="formErrors.FinCEN_ID" class="error">{{ formErrors.FinCEN_ID }}</span>
        </div>
      </div>
    </li>
    <hr>
    <h6>Full legal name and date of birth:</h6>
    <li>
      <div class="row">
        <div class="col-md-4">
          <label for="css"><span class="red">*</span>Individual's last name</label>
        </div>
        <div class="col-md-7">
          <input class="form-input" type="text" v-model="formData.Individual_last_name"
            placeholder="Individual's last name">
          <span v-if="formErrors.Individual_last_name" class="error">{{ formErrors.Individual_last_name }}</span>
        </div>
      </div>
    </li>
    <li>
      <div class="row">
        <div class="col-md-4">
          <label for="css"><span class="red">*</span>First name</label>
        </div>
        <div class="col-md-7">
          <input class="form-input" type="text" v-model="formData.First_name" placeholder="First name">
          <span v-if="formErrors.First_name" class="error">{{ formErrors.First_name }}</span>
        </div>
      </div>
    </li>
    <li>
      <div class="row">
        <div class="col-md-4">
          <label for="css">Middle name</label>
        </div>
        <div class="col-md-7">
          <input class="form-input" type="text" v-model="formData.Middle_name" placeholder="Middle name">
          <span v-if="formErrors.Middle_name" class="error">{{ formErrors.Middle_name }}</span>
        </div>
      </div>
    </li>
    <li>
      <div class="row">
        <div class="col-md-4">
          <label for="css">Suffix</label>
        </div>
        <div class="col-md-7">
          <input class="form-input" type="text" v-model="formData.Suffix" placeholder="Suffix">
          <span v-if="formErrors.Suffix" class="error">{{ formErrors.Suffix }}</span>
        </div>
      </div>
    </li>
    <li>
      <div class="row">
        <div class="col-md-4">
          <label for="css">Date of birth</label>
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
          <label for="css"><span class="red">*</span>Address type</label>
        </div>
        <div class="col-md-7">
          <div class="current-radio-btn">
            <label><span>a.</span>Business address</label>
            <input class="mx-1" name="cur_add" type="radio" v-model="formData.Business">
            <span v-if="formErrors.Business" class="error">{{ formErrors.Business }}</span>
          </div>
          <div class="current-radio-btn">
            <label><span>b.</span>Residential address</label>
            <input class="mx-1" name="cur_add" type="radio" v-model="formData.Residential">
            <span v-if="formErrors.Residential" class="error">{{ formErrors.Residential }}</span>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="row">
        <div class="col-md-4">
          <label for="css"><span class="red">*</span>Address (number, street,and apt. or suite
            no.)</label>
        </div>
        <div class="col-md-7">
          <input class="form-input" type="text" v-model="formData.Address_number"
            placeholder="Address (number, street,and apt. or suite no.)">
          <span v-if="formErrors.Address_number" class="error">{{ formErrors.Address_number }}</span>
        </div>
      </div>
    </li>
    <li>
      <div class="row">
        <div class="col-md-4">
          <label for="css"><span class="red">*</span>City</label>
        </div>
        <div class="col-md-7">
          <input class="form-input" type="text" v-model="formData.City_applicant" placeholder="City">
          <span v-if="formErrors.City_applicant" class="error">{{ formErrors.City_applicant }}</span>
        </div>
      </div>
    </li>
    <li>
      <div class="row">
        <div class="col-md-4">
          <label for="css"><span class="red">*</span>Country/Jurisdiction</label>
        </div>
        <div class="col-md-7">
          <select class="form-select" v-model="formData.Country" id="inputGroupSelect01">
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
          <label for="css"><span class="red">*</span>State</label>
        </div>
        <div class="col-md-7">
          <select class="form-select" v-model="formData.State_applicant" id="inputGroupSelect01">
            <option disabled>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <span v-if="formErrors.State_applicant" class="error">{{ formErrors.State_applicant }}</span>
        </div>
      </div>
    </li>
    <li>
      <div class="row">
        <div class="col-md-4">
          <label for="css"><span class="red">*</span>ZIP/Foreign postal code</label>
        </div>
        <div class="col-md-7">
          <input class="form-input" type="text" v-model="Foreign_postal" placeholder="ZIP/Foreign postal code">
          <span v-if="formErrors.Foreign_postal" class="error">{{ formErrors.Foreign_postal }}</span>
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
          <select class="form-select" v-model="formData.Identififying_document" id="inputGroupSelect01">
            <option disabled>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <span v-if="formErrors.Identififying_document" class="error">{{ formErrors.Identififying_document }}</span>
        </div>
      </div>
    </li>
    <li>
      <div class="row">
        <div class="col-md-4">
          <label for="css"><span class="red">*</span>Identifying document number</label>
        </div>
        <div class="col-md-7">
          <input class="form-input" type="text" v-model="Identififying_number" placeholder="Identifying document number">
          <span v-if="formErrors.Identififying_number" class="error">{{ formErrors.Identififying_number }}</span>
        </div>
      </div>
    </li>
    <li>
      <label><span class="red">*</span>Identifying document issuing jurisdiction:</label>
      <ol type="a" style="margin-left: 20px!important">
        <li>
          <div class="row">
            <div class="col-md-4">
              <label for="css">Country/Jurisdiction</label>
            </div>
            <div class="col-md-7">
              <select class="form-select" v-model="formData.Country_jurisdiction" id="inputGroupSelect01">
                <option disabled>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <span v-if="formErrors.Country_jurisdiction" class="error">{{ formErrors.Country_jurisdiction }}</span>
            </div>
          </div>
        </li>
        <li>
          <div class="row">
            <div class="col-md-4">
              <label for="css">State</label>
            </div>
            <div class="col-md-7">
              <select class="form-select" v-model="formData.State_app" id="inputGroupSelect01">
                <option disabled>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <span v-if="formErrors.State_app" class="error">{{ formErrors.State_app }}</span>
            </div>
          </div>
        </li>
        <li>
          <div class="row">
            <div class="col-md-4">
              <label for="css">Local/Tribal</label>
            </div>
            <div class="col-md-7">
              <input class="form-input" type="text" v-model="formData.local" placeholder="Local/Tribal">
              <span v-if="formErrors.local" class="error">{{ formErrors.local }}</span>
            </div>
          </div>
        </li>
        <li>
          <div class="row">
            <div class="col-md-4">
              <label for="css">Other local/Tribal description</label>
            </div>
            <div class="col-md-7">
              <input class="form-input" type="text" v-model="formData.tribal_desc"
                placeholder="Other local/Tribal description">
              <span v-if="formErrors.tribal_desc" class="error">{{ formErrors.tribal_desc }}</span>
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
          <!-- <span v-if="formErrors.tribal_desc" class="error">{{formErrors.tribal_desc }}</span> -->
          <button class="remove-file btn btn-primary mx-1">Remove Attachment</button>
          <input class="f-input">
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
  </ol>
  </div>

  <!----end Company applicant-->
</template>
  
<script>
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import '../assets/css/main.css'
import '../assets/images/Financial-logo.png'
export default {
  name: 'ApplicantForm',
  data() {
    return {
      inputs: [{
        name: '',
      }],
      k: 0, // Add this line
      formData: {
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
        Residential: '',
        Business: '',
        Date: '',
        Suffix: '',
        Middle_name: '',
        First_name: '',
        Individual_last_name: '',
        FinCEN_ID: '',

      },
      responseXml: null,
      formErrors: {
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
        Residential: '',
        Business: '',
        Date: '',
        Suffix: '',
        Middle_name: '',
        First_name: '',
        Individual_last_name: '',
        FinCEN_ID: '',

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
        Residential: '',
        Business: '',
        Date: '',
        Suffix: '',
        Middle_name: '',
        First_name: '',
        Individual_last_name: '',
        FinCEN_ID: '',
      };

      if (!this.formData.tribal_desc.trim()) {
        this.formErrors.tribal_desc = 'tribal desc is required';
        isValid = false;
      }
      if (!this.formData.local.trim()) {
        this.formErrors.local = 'local is required';
        isValid = false;
      }
      if (!this.formData.State_app.trim()) {
        this.formErrors.State_app = 'State app is required';
        isValid = false;
      }
      if (!this.formData.Country_jurisdiction.trim()) {
        this.formErrors.Country_jurisdiction = 'Country jurisdiction is required';
        isValid = false;
      }
      if (!this.formData.Identififying_number.trim()) {
        this.formErrors.Identififying_number = 'Identififying number is required';
        isValid = false;
      }
      if (!this.formData.Identififying_document.trim()) {
        this.formErrors.Identififying_document = 'Identififying document is required';
        isValid = false;
      }
      if (!this.formData.Foreign_postal.trim()) {
        this.formErrors.Foreign_postal = 'Foreign postal is required';
        isValid = false;
      }
      if (!this.formData.State_applicant.trim()) {
        this.formErrors.State_applicant = 'State applicant is required';
        isValid = false;
      }
      if (!this.formData.Country.trim()) {
        this.formErrors.Country = 'Country is required';
        isValid = false;
      }
      if (!this.formData.City_applicant.trim()) {
        this.formErrors.City_applicant = 'City applicant is required';
        isValid = false;
      }
      if (!this.formData.Address_number.trim()) {
        this.formErrors.Address_number = 'Address number is required';
        isValid = false;
      }
      if (!this.formData.Residential.trim()) {
        this.formErrors.Residential = 'Residential is required';
        isValid = false;
      }
      if (!this.formData.Business.trim()) {
        this.formErrors.Business = 'Business is required';
        isValid = false;
      }
      if (!this.formData.Date.trim()) {
        this.formErrors.Date = 'Date is required';
        isValid = false;
      }
      if (!this.formData.Suffix.trim()) {
        this.formErrors.Suffix = 'Suffix is required';
        isValid = false;
      }
      if (!this.formData.FinCEN_ID.trim()) {
        this.formErrors.FinCEN_ID = 'FinCEN ID is required';
        isValid = false;
      }
      if (!this.formData.Individual_last_name.trim()) {
        this.formErrors.Individual_last_name = 'Individual last name is required';
        isValid = false;
      }
      if (!this.formData.First_name.trim()) {
        this.formErrors.First_name = 'First name is required';
        isValid = false;
      }
      if (!this.formData.Middle_name.trim()) {
        this.formErrors.Middle_name = 'Middle name is required';
        isValid = false;
      }
      return isValid;
    },
    ApplicantForm() {
      if (!this.validateForm()) {
        return;
      }
      const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
          <root>
            <BoirFormList>
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
			  <Business>${this.formData.Business}</Business>
			  <Date>${this.formData.Date}</Date>
              <Suffix>${this.formData.Suffix}</Suffix>
			  <MiddleName>${this.formData.Middle_name}</MiddleName>
			  <FirstName>${this.formData.First_name}</FirstName>
			  <IndividualLastName>${this.formData.Individual_last_name}</IndividualLastName>
        <FinCEN>${this.formData.FinCEN_ID}</FinCEN>
			  	  
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
          this.formData.Business = '',
          this.formData.Date = '',
          this.formData.Suffix = '',
          this.formData.Middle_name = '',
          this.formData.First_name = '',
          this.formData.Individual_last_name = '',
          this.formData.FinCEN_ID = '',
          this.responseXml = response.data;
      }).catch(error => {
        console.error('Error fetching data:', error.message);
      });

    }
  }
};
</script>
  
  
  