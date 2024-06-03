const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
<fc2:EFilingSubmissionXML xmlns:fc2="www.fincen.gov/base" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="www.fincen.gov/base https://www.fincen.gov/sites/default/files/schema/base/BOIRSchema.xsd" SeqNum="1">
    <fc2:SubmitterElectronicAddressText>${this.formData.email}</fc2:SubmitterElectronicAddressText>
    <fc2:SubmitterEntityIndivdualLastName>${this.formData.lastName}</fc2:SubmitterEntityIndivdualLastName>
    <fc2:SubmitterIndivdualFirstName>${this.formData.firstName}</fc2:SubmitterIndivdualFirstName>

    <fc2:Activity SeqNum="${activitySeqNum}">
        <fc2:ApprovalOfficialSignatureDateText> Item 2. Date prepared(Must be 8 numeric characters in the format:) </fc2:ApprovalOfficialSignatureDateText>
        <fc2:EFilingPriorReportingCompanyIdentification-NumberText> Item 1f. Reporting Company 
                  tax identification number </fc2:EFilingPriorReportingCompanyIdentification-NumberText>
        <fc2:EFilingPriorReportingCompanyIdentification-TypeCode>Item 1g. Reporting Company 
                  tax identification type </fc2:EFilingPriorReportingCompanyIdentification-TypeCode>
        <fc2:EFilingPriorReportingCompanyIssuerCountryCo-deText>Item 1h. Reporting Company 
                 country/jurisdiction (if foreign tax ID only,  ISO-3166 country)</fc2:EFilingPriorReportingCompanyIssuerCountryCo-deText>
        <fc2:EFilingPriorReportingCompanyName>Item 1e. Reporting Company legal name</fc2:EFilingPriorReportingCompanyName/>
        <fc2:FilingDateText> XML Schema Requirement </fc2:FilingDateText>
    <fc2:ActivityAssociation SeqNum="${activityAssociationSeqNum}">
        <fc2:CorrectsAmendsPriorReportIndicator>Item 1b. Correct prior report</fc2:CorrectsAmendsPriorReportIndicator/>
        <fc2:InitialReportIndicator>Item 1a. Initial report</fc2:InitialReportIndicator>
        <fc2:ReportingCompanyBecameExemptIndicator>Item 1d. Newly exempt entity</fc2:ReportingCompanyBecameExemptIndicator>
        <fc2:UpdatePriorReportIndicator>Item 1c. Update prior report</fc2:UpdatePriorReportIndicator>
    </fc2:ActivityAssociation>
    <fc2:Party SeqNum="${partySeqNum}">
        <fc2:ActivityPartyTypeCode>XML Schema Requirement</fc2:ActivityPartyTypeCode>
        <fc2:ExistingReportingCompanyIndicator>tem 16. Existing Reporting Company</fc2:ExistingReportingCompanyIndicator>
        <fc2:FirstRegistrationLocalTribalCodeText>tem 10f. Tribal jurisdiction of first registration</fc2:FirstRegistrationLocalTribalCodeText>
        <fc2:FirstRegistrationStateCodeText>Item 10e. State of first registration (or U.S. Territory of first registration)</fc2:FirstRegistrationStateCodeText>
        <fc2:FormationCountryCodeText>tem 10a. Country/Jurisdiction of formation (U.S., U.S. Territory, or foreign country)</fc2:FormationCountryCodeText>
        <fc2:FormationLocalTribalCodeText>Item 10c. Tribal jurisdiction of formation</fc2:FormationLocalTribalCodeText>
        <fc2:FormationStateCodeText>tem 10b. State of formation (or U.S. Territory of formation)</fc2:FormationStateCodeText>
        <fc2:OtherFirstRegistrationLocalTribalText>tem 10g. Name of the other Tribe (of first registration)</fc2:OtherFirstRegistrationLocalTribalText/>
        <fc2:OtherFormationLocalTribalText>tem 10d. Name of the other Tribe (of formation)</fc2:OtherFormationLocalTribalText>
        <fc2:RequestFinCENIDIndicator>Item 3. Request to receive FinCEN Identifier (FinCEN ID)</fc2:RequestFinCENIDIndicator>
            <fc2:PartyName>
                <fc2:PartyNameTypeCode>XML Schema Requirement</fc2:PartyNameTypeCode>
                <fc2:RawPartyFullName/>tem 5. Reporting Company legal name
            </fc2:PartyName>
            <fc2:Address>
                <fc2:RawCityText/>Item 12. City
                <fc2:RawCountryCodeText/>Item 13. U.S. or U.S. Territory
                <fc2:RawStateCodeText/>Item 14. State
                <fc2:RawStreetAddress1Text/>Item 11. Address (number, street, and apt. or suite no.)
                <fc2:RawZIPCode/>Item 15. ZIP Code
            </fc2:Address>
            <fc2:PartyIdentification>
                <fc2:OtherIssuerCountryText/> tem 9. Country/Jurisdiction (if foreign tax ID only)
                <fc2:PartyIdentificationNumberText/>tem 8. Tax identification number
                <fc2:PartyIdentificationTypeCode/>Item 7. Tax identification type
            </fc2:PartyIdentification>
            <fc2:OrganizationClassificationTypeSubtype>
                <fc2:OrganizationTypeID/>Item 4. Foreign pooled investment vehicle
            </fc2:OrganizationClassificationTypeSubtype>
    </fc2:Party>
    <fc2:Party>
        <fc2:ActivityPartyTypeCode/>XML Schema Requirement
        <fc2:FinCENID/>Item 18. FinCEN ID
        <fc2:IndividualBirthDateText/>Item 23. Date of birth
         <fc2:PartyName>
            <fc2:PartyNameTypeCode/> XML Schema Requirement
            <fc2:RawEntityIndividualLastName/>  Item 19. Individual's last name
            <fc2:RawIndividualFirstName/> Item 20. First name
            <fc2:RawIndividualMiddleName/> Item 21. Middle name
            <fc2:RawIndividualNameSuffixText/> Item 22. Suffix
         </fc2:PartyName>
         <fc2:Address>
            <fc2:BusinessAddressIndicator/>Item 24a. Business address 
            <fc2:RawCityText/> Item 26. City
            <fc2:RawCountryCodeText/> Item 27. Country/Jurisdiction
            <fc2:RawStateCodeText/> Item 28. State
            <fc2:RawStreetAddress1Text/> Item 25. Address (number, street, and apt. or suite no.)
            <fc2:RawZIPCode/> Item 29. ZIP/Foreign postal code
            <fc2:ResidentialAddressIndicator/> Item 24b. Residential address 
         </fc2:Address>
         <fc2:PartyIdentification>
            <fc2:IssuerLocalTribalCodeText/> Item 32c. Identification document issuing jurisdiction: Local/Tribal
            <fc2:OriginalAttachmentFileName/>tem 33. Identifying document image
            <fc2:OtherIssuerCountryText/> Item 32a. Identification document issuing jurisdiction: Country/Jurisdiction
            <fc2:OtherIssuerLocalTribalText/> Item 32d. Identification document issuing jurisdiction: Other local/Tribal description
            <fc2:OtherIssuerStateText/> Item 32b. Identification document issuing jurisdiction: State
            <fc2:PartyIdentificationNumberText/> Item 31. Identification document number
            <fc2:PartyIdentificationTypeCode/> Item 30. Identification document type
         </fc2:PartyIdentification>
    </fc2:Party>
    <fc2:Party>
        <fc2:ActivityPartyTypeCode/> XML Schema Requirement
        <fc2:BirthDateUnknownIndicator/> Reserved by FinCEN for future consideration
        <fc2:ExemptIndicator/> Item 37. Exempt entity
        <fc2:FinCENID/> Item 36. FinCEN ID
        <fc2:IndividualBirthDateText/> Item 42. Date of birth
        <fc2:ParentOrLegalGuardianForMinorChildIndicator/> Item 35. Parent/Guardian information instead of minor child
         <fc2:PartyName>
            <fc2:EntityLastNameUnknownIndicator/> Reserved by FinCEN for future consideration
            <fc2:FirstNameUnknownIndicator/> Reserved by FinCEN for future consideration
            <fc2:PartyNameTypeCode/> XML Schema requirements
            <fc2:RawEntityIndividualLastName/> Item 38. Individual's last name or entity's legal name
            <fc2:RawIndividualFirstName/> Item 39. First name
            <fc2:RawIndividualMiddleName/> Item 40. Middle name
            <fc2:RawIndividualNameSuffixText/> Item 41. Suffix
         </fc2:PartyName>
         <fc2:Address>
            <fc2:CityUnknownIndicator/>Reserved by FinCEN for future consideration
            <fc2:CountryCodeUnknownIndicator/> Reserved by FinCEN for future consideration
            <fc2:RawCityText/> Item 44. City
            <fc2:RawCountryCodeText/> Item 45. Country/Jurisdiction
            <fc2:RawStateCodeText/> Item 46. State
            <fc2:RawStreetAddress1Text/> Item 43. Address (number, street, and apt. or suite no.)
            <fc2:RawZIPCode/> Item 47. ZIP/Foreign postal code
            <fc2:StateCodeUnknownIndicator/> Reserved by FinCEN for future consideration
            <fc2:StreetAddressUnknownIndicator/> Reserved by FinCEN for future consideration
            <fc2:ZIPCodeUnknownIndicator/> Reserved by FinCEN for future consideration  
         </fc2:Address>
         <fc2:PartyIdentification>
            <fc2:IssuerCountryUnknownIndicator/> Reserved by FinCEN for future consideration
            <fc2:IssuerLocalTribalCodeText/> Item 50c. Identification document issuing jurisdiction: 
            <fc2:IssuerStateUnknownIndicator/> Reserved by FinCEN for future consideration
            <fc2:IssuerTribalUnknownIndicator/> Reserved by FinCEN for future consideration
            <fc2:OriginalAttachmentFileName/> Item 51. Identifying document image 
            <fc2:OriginalAttachmentFileNameUnknownIndicator/> Reserved by FinCEN for future consideration
            <fc2:OtherIssuerCountryText/> Item 50a. Identification document issuing jurisdiction:Country/Jurisdiction
            <fc2:OtherIssuerLocalTribalText/> Item 50d. Identification document issuing jurisdiction: Other local/Tribal description
            <fc2:OtherIssuerStateText/> Item 50b. Identification document issuing jurisdiction: State
            <fc2:PartyIdentificationNumberText/> Item 49. Identification document number
            <fc2:PartyIdentificationNumberTextUnknownIndicator/> Reserved by FinCEN for future consideration
            <fc2:PartyIdentificationTypeCode/> Item 48. Identification document type
            <fc2:PartyIdentificationTypeCodeUnknownIndicator/> Reserved by FinCEN for future consideration
        </fc2:PartyIdentification>
    <fc2:Party>
    </fc2:Activity>
  </fc2:EFilingSubmissionXML>

