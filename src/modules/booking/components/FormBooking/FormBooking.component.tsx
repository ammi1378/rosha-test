import React from "react";
import { FormBookingProps } from "./FormBooking.props";
import BusBookingFormComponent from "../BusBookingForm/BusBookingForm.component";

const formBookingComponent = "formBookingComponent";

const FormBookingComponent: React.FC<FormBookingProps> = ({
  className,
  onSubmit,
  status,
  service,
  serviceName,
  serviceInfo,
}) => {
  debugger;
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    const formData = new FormData(e.currentTarget);
    const values = {} as any;
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
      values[pair[0]] = pair[1];
    }
    onSubmit(values);
  };
  return (
    <div className={`${formBookingComponent} ${className} woocommerce`}>
      <div className="woocommerce-info">
        <div className="rlr-page-title">
          <span className="rlr-page-title__icon">
            <i className="rlr-icon-font flaticon-right-arrows"></i>
          </span>
          <div>
            <h2 className="type-h3 rlr-page-title__title">application form</h2>
            <span className="rlr-page-title__desc">
              One more step left htmlFor your trip...
            </span>
          </div>
        </div>
      </div>

      <div className="woocommerce-notices-wrapper"></div>
      <form
        id="request-form"
        name="checkout"
        className="checkout woocommerce-checkout"
        noValidate
        onSubmit={(e) => submitForm(e)}
      >
        {serviceName === "bus" ? (
          <BusBookingFormComponent />
        ) : (
          <div className="col2-set" id="customer_details">
            <div className="col-1">
              <div className="woocommerce-billing-fields">
                <div className="woocommerce-billing-fields__field-wrapper">
                  <h6 className="checkout__section-title">
                    <span> Personal Information </span>
                  </h6>
                  <div className="checkout__personal-details">
                    <p
                      className="form-row form-row-first validate-required"
                      id="first_name_field"
                      data-priority="10"
                    >
                      <label htmlFor="first_name" className="">
                        First name
                      </label>
                      <span className="woocommerce-input-wrapper">
                        <input
                          type="text"
                          className="input-text"
                          name="first_name"
                          id="first_name"
                          placeholder="John"
                          autoComplete="given-name"
                        />
                      </span>
                    </p>
                    <p
                      className="form-row form-row-last validate-required"
                      id="last_name_field"
                      data-priority="20"
                    >
                      <label htmlFor="last_name" className="">
                        Last name
                      </label>
                      <span className="woocommerce-input-wrapper">
                        <input
                          type="text"
                          className="input-text"
                          name="last_name"
                          id="last_name"
                          placeholder="doe"
                          autoComplete="family-name"
                        />
                      </span>
                    </p>
                    <p
                      className="form-row form-row-wide validate-required validate-phone"
                      id="phone_field"
                      data-priority="100"
                    >
                      <label htmlFor="phone" className="">
                        Phone
                      </label>
                      <span className="woocommerce-input-wrapper">
                        <input
                          type="tel"
                          className="input-text"
                          name="phone"
                          id="phone"
                          placeholder="XXXXXXXXXX"
                          autoComplete="tel"
                        />
                      </span>
                    </p>
                    <p
                      className="form-row form-row-wide validate-required validate-email"
                      id="email_field"
                      data-priority="110"
                    >
                      <label htmlFor="email" className="">
                        Email
                      </label>
                      <span className="woocommerce-input-wrapper">
                        <input
                          type="email"
                          className="input-text"
                          name="email"
                          id="email"
                          placeholder="jd@emprise.tours"
                          autoComplete="email"
                        />
                      </span>
                    </p>
                    <div
                      className="form-row form-row-wide address-field update_totals_on_change validate-required"
                      id="country_field"
                      data-priority="40"
                    >
                      <label htmlFor="country"> Country </label>
                      <div className="woocommerce-input-wrapper">
                        <select
                          name="country"
                          id="country"
                          className="country_to_state country_select select2-hidden-accessible"
                          autoComplete="country"
                          data-placeholder="Select a country / region…"
                          data-label="Country / Region"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <option selected>Select country</option>
                          <option value="AF">Afghanistan</option>
                          <option value="AX">Åland Islands</option>
                          <option value="AL">Albania</option>
                          <option value="DZ">Algeria</option>
                          <option value="AS">American Samoa</option>
                          <option value="AD">Andorra</option>
                          <option value="AO">Angola</option>
                          <option value="AI">Anguilla</option>
                          <option value="AQ">Antarctica</option>
                          <option value="AG">Antigua and Barbuda</option>
                          <option value="AR">Argentina</option>
                          <option value="AM">Armenia</option>
                          <option value="AW">Aruba</option>
                          <option value="AU">Australia</option>
                          <option value="AT">Austria</option>
                          <option value="AZ">Azerbaijan</option>
                          <option value="BS">Bahamas</option>
                          <option value="BH">Bahrain</option>
                          <option value="BD">Bangladesh</option>
                          <option value="BB">Barbados</option>
                          <option value="BY">Belarus</option>
                          <option value="PW">Belau</option>
                          <option value="BE">Belgium</option>
                          <option value="BZ">Belize</option>
                          <option value="BJ">Benin</option>
                          <option value="BM">Bermuda</option>
                          <option value="BT">Bhutan</option>
                          <option value="BO">Bolivia</option>
                          <option value="BQ">
                            Bonaire, Saint Eustatius and Saba
                          </option>
                          <option value="BA">Bosnia and Herzegovina</option>
                          <option value="BW">Botswana</option>
                          <option value="BV">Bouvet Island</option>
                          <option value="BR">Brazil</option>
                          <option value="IO">
                            British Indian Ocean Territory
                          </option>
                          <option value="BN">Brunei</option>
                          <option value="BG">Bulgaria</option>
                          <option value="BF">Burkina Faso</option>
                          <option value="BI">Burundi</option>
                          <option value="KH">Cambodia</option>
                          <option value="CM">Cameroon</option>
                          <option value="CA">Canada</option>
                          <option value="CV">Cape Verde</option>
                          <option value="KY">Cayman Islands</option>
                          <option value="CF">Central African Republic</option>
                          <option value="TD">Chad</option>
                          <option value="CL">Chile</option>
                          <option value="CN">China</option>
                          <option value="CX">Christmas Island</option>
                          <option value="CC">Cocos (Keeling) Islands</option>
                          <option value="CO">Colombia</option>
                          <option value="KM">Comoros</option>
                          <option value="CG">Congo (Brazzaville)</option>
                          <option value="CD">Congo (Kinshasa)</option>
                          <option value="CK">Cook Islands</option>
                          <option value="CR">Costa Rica</option>
                          <option value="HR">Croatia</option>
                          <option value="CU">Cuba</option>
                          <option value="CW">Curaçao</option>
                          <option value="CY">Cyprus</option>
                          <option value="CZ">Czech Republic</option>
                          <option value="DK">Denmark</option>
                          <option value="DJ">Djibouti</option>
                          <option value="DM">Dominica</option>
                          <option value="DO">Dominican Republic</option>
                          <option value="EC">Ecuador</option>
                          <option value="EG">Egypt</option>
                          <option value="SV">El Salvador</option>
                          <option value="GQ">Equatorial Guinea</option>
                          <option value="ER">Eritrea</option>
                          <option value="EE">Estonia</option>
                          <option value="ET">Ethiopia</option>
                          <option value="FK">Falkland Islands</option>
                          <option value="FO">Faroe Islands</option>
                          <option value="FJ">Fiji</option>
                          <option value="FI">Finland</option>
                          <option value="FR">France</option>
                          <option value="GF">French Guiana</option>
                          <option value="PF">French Polynesia</option>
                          <option value="TF">
                            French Southern Territories
                          </option>
                          <option value="GA">Gabon</option>
                          <option value="GM">Gambia</option>
                          <option value="GE">Georgia</option>
                          <option value="DE">Germany</option>
                          <option value="GH">Ghana</option>
                          <option value="GI">Gibraltar</option>
                          <option value="GR">Greece</option>
                          <option value="GL">Greenland</option>
                          <option value="GD">Grenada</option>
                          <option value="GP">Guadeloupe</option>
                          <option value="GU">Guam</option>
                          <option value="GT">Guatemala</option>
                          <option value="GG">Guernsey</option>
                          <option value="GN">Guinea</option>
                          <option value="GW">Guinea-Bissau</option>
                          <option value="GY">Guyana</option>
                          <option value="HT">Haiti</option>
                          <option value="HM">
                            Heard Island and McDonald Islands
                          </option>
                          <option value="HN">Honduras</option>
                          <option value="HK">Hong Kong</option>
                          <option value="HU">Hungary</option>
                          <option value="IS">Iceland</option>
                          <option value="IN">India</option>
                          <option value="ID">Indonesia</option>
                          <option value="IR">Iran</option>
                          <option value="IQ">Iraq</option>
                          <option value="IE">Ireland</option>
                          <option value="IM">Isle of Man</option>
                          <option value="IL">Israel</option>
                          <option value="IT">Italy</option>
                          <option value="CI">Ivory Coast</option>
                          <option value="JM">Jamaica</option>
                          <option value="JP">Japan</option>
                          <option value="JE">Jersey</option>
                          <option value="JO">Jordan</option>
                          <option value="KZ">Kazakhstan</option>
                          <option value="KE">Kenya</option>
                          <option value="KI">Kiribati</option>
                          <option value="KW">Kuwait</option>
                          <option value="KG">Kyrgyzstan</option>
                          <option value="LA">Laos</option>
                          <option value="LV">Latvia</option>
                          <option value="LB">Lebanon</option>
                          <option value="LS">Lesotho</option>
                          <option value="LR">Liberia</option>
                          <option value="LY">Libya</option>
                          <option value="LI">Liechtenstein</option>
                          <option value="LT">Lithuania</option>
                          <option value="LU">Luxembourg</option>
                          <option value="MO">Macao</option>
                          <option value="MG">Madagascar</option>
                          <option value="MW">Malawi</option>
                          <option value="MY">Malaysia</option>
                          <option value="MV">Maldives</option>
                          <option value="ML">Mali</option>
                          <option value="MT">Malta</option>
                          <option value="MH">Marshall Islands</option>
                          <option value="MQ">Martinique</option>
                          <option value="MR">Mauritania</option>
                          <option value="MU">Mauritius</option>
                          <option value="YT">Mayotte</option>
                          <option value="MX">Mexico</option>
                          <option value="FM">Micronesia</option>
                          <option value="MD">Moldova</option>
                          <option value="MC">Monaco</option>
                          <option value="MN">Mongolia</option>
                          <option value="ME">Montenegro</option>
                          <option value="MS">Montserrat</option>
                          <option value="MA">Morocco</option>
                          <option value="MZ">Mozambique</option>
                          <option value="MM">Myanmar</option>
                          <option value="NA">Namibia</option>
                          <option value="NR">Nauru</option>
                          <option value="NP">Nepal</option>
                          <option value="NL">Netherlands</option>
                          <option value="NC">New Caledonia</option>
                          <option value="NZ">New Zealand</option>
                          <option value="NI">Nicaragua</option>
                          <option value="NE">Niger</option>
                          <option value="NG">Nigeria</option>
                          <option value="NU">Niue</option>
                          <option value="NF">Norfolk Island</option>
                          <option value="KP">North Korea</option>
                          <option value="MK">North Macedonia</option>
                          <option value="MP">Northern Mariana Islands</option>
                          <option value="NO">Norway</option>
                          <option value="OM">Oman</option>
                          <option value="PK">Pakistan</option>
                          <option value="PS">Palestinian Territory</option>
                          <option value="PA">Panama</option>
                          <option value="PG">Papua New Guinea</option>
                          <option value="PY">Paraguay</option>
                          <option value="PE">Peru</option>
                          <option value="PH">Philippines</option>
                          <option value="PN">Pitcairn</option>
                          <option value="PL">Poland</option>
                          <option value="PT">Portugal</option>
                          <option value="PR">Puerto Rico</option>
                          <option value="QA">Qatar</option>
                          <option value="RE">Reunion</option>
                          <option value="RO">Romania</option>
                          <option value="RU">Russia</option>
                          <option value="RW">Rwanda</option>
                          <option value="BL">Saint Barthélemy</option>
                          <option value="SH">Saint Helena</option>
                          <option value="KN">Saint Kitts and Nevis</option>
                          <option value="LC">Saint Lucia</option>
                          <option value="SX">Saint Martin (Dutch part)</option>
                          <option value="MF">Saint Martin (French part)</option>
                          <option value="PM">Saint Pierre and Miquelon</option>
                          <option value="VC">
                            Saint Vincent and the Grenadines
                          </option>
                          <option value="WS">Samoa</option>
                          <option value="SM">San Marino</option>
                          <option value="ST">São Tomé and Príncipe</option>
                          <option value="SA">Saudi Arabia</option>
                          <option value="SN">Senegal</option>
                          <option value="RS">Serbia</option>
                          <option value="SC">Seychelles</option>
                          <option value="SL">Sierra Leone</option>
                          <option value="SG">Singapore</option>
                          <option value="SK">Slovakia</option>
                          <option value="SI">Slovenia</option>
                          <option value="SB">Solomon Islands</option>
                          <option value="SO">Somalia</option>
                          <option value="ZA">South Africa</option>
                          <option value="GS">
                            South Georgia/Sandwich Islands
                          </option>
                          <option value="KR">South Korea</option>
                          <option value="SS">South Sudan</option>
                          <option value="ES">Spain</option>
                          <option value="LK">Sri Lanka</option>
                          <option value="SD">Sudan</option>
                          <option value="SR">Suriname</option>
                          <option value="SJ">Svalbard and Jan Mayen</option>
                          <option value="SZ">Swaziland</option>
                          <option value="SE">Sweden</option>
                          <option value="CH">Switzerland</option>
                          <option value="SY">Syria</option>
                          <option value="TW">Taiwan</option>
                          <option value="TJ">Tajikistan</option>
                          <option value="TZ">Tanzania</option>
                          <option value="TH">Thailand</option>
                          <option value="TL">Timor-Leste</option>
                          <option value="TG">Togo</option>
                          <option value="TK">Tokelau</option>
                          <option value="TO">Tonga</option>
                          <option value="TT">Trinidad and Tobago</option>
                          <option value="TN">Tunisia</option>
                          <option value="TR">Turkey</option>
                          <option value="TM">Turkmenistan</option>
                          <option value="TC">Turks and Caicos Islands</option>
                          <option value="TV">Tuvalu</option>
                          <option value="UG">Uganda</option>
                          <option value="UA">Ukraine</option>
                          <option value="AE">United Arab Emirates</option>
                          <option value="GB">United Kingdom (UK)</option>
                          <option value="US">United States (US)</option>
                          <option value="UM">
                            United States (US) Minor Outlying Islands
                          </option>
                          <option value="UY">Uruguay</option>
                          <option value="UZ">Uzbekistan</option>
                          <option value="VU">Vanuatu</option>
                          <option value="VA">Vatican</option>
                          <option value="VE">Venezuela</option>
                          <option value="VN">Vietnam</option>
                          <option value="VG">Virgin Islands (British)</option>
                          <option value="VI">Virgin Islands (US)</option>
                          <option value="WF">Wallis and Futuna</option>
                          <option value="EH">Western Sahara</option>
                          <option value="YE">Yemen</option>
                          <option value="ZM">Zambia</option>
                          <option value="ZW">Zimbabwe</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <h6 className="checkout__section-title">
                    <span> Order Information </span>
                  </h6>

                  <div className="checkout__delivery-details">
                    <p
                      className="form-row form-row-first validate-required"
                      id="billing_first_name_field"
                      data-priority="10"
                    >
                      <label htmlFor="billing_first_name" className="">
                        Name( Your first name as it appears in your passport ) *
                      </label>
                      <span className="woocommerce-input-wrapper">
                        <input
                          type="text"
                          className="input-text"
                          name="billing_first_name"
                          id="billing_first_name"
                          placeholder="John"
                          autoComplete="given-name"
                        />
                      </span>
                    </p>
                    <p
                      className="form-row form-row-last validate-required"
                      id="billing_family_name_field"
                      data-priority="20"
                    >
                      <label htmlFor="billing_family_name" className="">
                        FamilyName / Surname ( as it appears in your passport )
                        *
                      </label>
                      <span className="woocommerce-input-wrapper">
                        <input
                          type="text"
                          className="input-text"
                          name="billing_family_name"
                          id="billing_family_name"
                          placeholder="doe"
                          autoComplete="family-name"
                        />
                      </span>
                    </p>
                    <p
                      className="form-row form-row-last validate-required"
                      id="billing_father_name_field"
                      data-priority="20"
                    >
                      <label htmlFor="billing_father_name" className="">
                        Fothers Full Name*
                      </label>
                      <span className="woocommerce-input-wrapper">
                        <input
                          type="text"
                          className="input-text"
                          name="billing_father_name"
                          id="billing_father_name"
                          placeholder="doe"
                          autoComplete="family-name"
                        />
                      </span>
                    </p>
                    <p
                      className="form-row form-row-last validate-required"
                      id="billing_mother_name_field"
                      data-priority="20"
                    >
                      <label htmlFor="billing_mother_name" className="">
                        Mothers Maiden Name
                      </label>
                      <span className="woocommerce-input-wrapper">
                        <input
                          type="text"
                          className="input-text"
                          name="billing_mother_name"
                          id="billing_mother_name"
                          placeholder="doe"
                          autoComplete="family-name"
                        />
                      </span>
                    </p>
                    <p
                      className="form-row form-row-wide validate-required validate-phone"
                      id="billing_phone_field"
                      data-priority="100"
                    >
                      <label htmlFor="billing_phone" className="">
                        Telephone Or Mobile
                      </label>
                      <span className="woocommerce-input-wrapper">
                        <input
                          type="tel"
                          className="input-text"
                          name="billing_phone"
                          id="billing_phone"
                          placeholder="XXXXXXXXXX"
                          autoComplete="tel"
                        />
                      </span>
                    </p>
                    <p
                      className="form-row form-row-wide validate-required validate-email"
                      id="billing_email_field"
                      data-priority="110"
                    >
                      <label htmlFor="billing_email" className="">
                        Email
                      </label>
                      <span className="woocommerce-input-wrapper">
                        <input
                          type="email"
                          className="input-text"
                          name="billing_email"
                          id="billing_email"
                          placeholder="jd@emprise.tours"
                          autoComplete="email"
                        />
                      </span>
                    </p>
                    <p
                      className="form-row address-field street-address-1 validate-required form-row-wide"
                      id="billing_address_1_field"
                      data-priority="50"
                    >
                      <label htmlFor="billing_address_1" className="">
                        Home address
                      </label>
                      <span className="woocommerce-input-wrapper">
                        <input
                          type="text"
                          className="input-text"
                          name="billing_address_1"
                          id="billing_address_1"
                          placeholder="House number and street name"
                          autoComplete="address-line1"
                          data-placeholder="House number and street name"
                        />
                      </span>
                    </p>
                    <div
                      className="form-row form-row-wide address-field update_totals_on_change validate-required"
                      id="nationality_field"
                      data-priority="40"
                    >
                      <label htmlFor="nationality"> Nationality </label>
                      <div className="woocommerce-input-wrapper">
                        <select
                          name="nationality"
                          id="nationality"
                          className="country_to_state country_select select2-hidden-accessible"
                          autoComplete="country"
                          data-placeholder="Select a country / region…"
                          data-label="Country / Region"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <option selected>Select country</option>
                          <option value="AF">Afghanistan</option>
                          <option value="AX">Åland Islands</option>
                          <option value="AL">Albania</option>
                          <option value="DZ">Algeria</option>
                          <option value="AS">American Samoa</option>
                          <option value="AD">Andorra</option>
                          <option value="AO">Angola</option>
                          <option value="AI">Anguilla</option>
                          <option value="AQ">Antarctica</option>
                          <option value="AG">Antigua and Barbuda</option>
                          <option value="AR">Argentina</option>
                          <option value="AM">Armenia</option>
                          <option value="AW">Aruba</option>
                          <option value="AU">Australia</option>
                          <option value="AT">Austria</option>
                          <option value="AZ">Azerbaijan</option>
                          <option value="BS">Bahamas</option>
                          <option value="BH">Bahrain</option>
                          <option value="BD">Bangladesh</option>
                          <option value="BB">Barbados</option>
                          <option value="BY">Belarus</option>
                          <option value="PW">Belau</option>
                          <option value="BE">Belgium</option>
                          <option value="BZ">Belize</option>
                          <option value="BJ">Benin</option>
                          <option value="BM">Bermuda</option>
                          <option value="BT">Bhutan</option>
                          <option value="BO">Bolivia</option>
                          <option value="BQ">
                            Bonaire, Saint Eustatius and Saba
                          </option>
                          <option value="BA">Bosnia and Herzegovina</option>
                          <option value="BW">Botswana</option>
                          <option value="BV">Bouvet Island</option>
                          <option value="BR">Brazil</option>
                          <option value="IO">
                            British Indian Ocean Territory
                          </option>
                          <option value="BN">Brunei</option>
                          <option value="BG">Bulgaria</option>
                          <option value="BF">Burkina Faso</option>
                          <option value="BI">Burundi</option>
                          <option value="KH">Cambodia</option>
                          <option value="CM">Cameroon</option>
                          <option value="CA">Canada</option>
                          <option value="CV">Cape Verde</option>
                          <option value="KY">Cayman Islands</option>
                          <option value="CF">Central African Republic</option>
                          <option value="TD">Chad</option>
                          <option value="CL">Chile</option>
                          <option value="CN">China</option>
                          <option value="CX">Christmas Island</option>
                          <option value="CC">Cocos (Keeling) Islands</option>
                          <option value="CO">Colombia</option>
                          <option value="KM">Comoros</option>
                          <option value="CG">Congo (Brazzaville)</option>
                          <option value="CD">Congo (Kinshasa)</option>
                          <option value="CK">Cook Islands</option>
                          <option value="CR">Costa Rica</option>
                          <option value="HR">Croatia</option>
                          <option value="CU">Cuba</option>
                          <option value="CW">Curaçao</option>
                          <option value="CY">Cyprus</option>
                          <option value="CZ">Czech Republic</option>
                          <option value="DK">Denmark</option>
                          <option value="DJ">Djibouti</option>
                          <option value="DM">Dominica</option>
                          <option value="DO">Dominican Republic</option>
                          <option value="EC">Ecuador</option>
                          <option value="EG">Egypt</option>
                          <option value="SV">El Salvador</option>
                          <option value="GQ">Equatorial Guinea</option>
                          <option value="ER">Eritrea</option>
                          <option value="EE">Estonia</option>
                          <option value="ET">Ethiopia</option>
                          <option value="FK">Falkland Islands</option>
                          <option value="FO">Faroe Islands</option>
                          <option value="FJ">Fiji</option>
                          <option value="FI">Finland</option>
                          <option value="FR">France</option>
                          <option value="GF">French Guiana</option>
                          <option value="PF">French Polynesia</option>
                          <option value="TF">
                            French Southern Territories
                          </option>
                          <option value="GA">Gabon</option>
                          <option value="GM">Gambia</option>
                          <option value="GE">Georgia</option>
                          <option value="DE">Germany</option>
                          <option value="GH">Ghana</option>
                          <option value="GI">Gibraltar</option>
                          <option value="GR">Greece</option>
                          <option value="GL">Greenland</option>
                          <option value="GD">Grenada</option>
                          <option value="GP">Guadeloupe</option>
                          <option value="GU">Guam</option>
                          <option value="GT">Guatemala</option>
                          <option value="GG">Guernsey</option>
                          <option value="GN">Guinea</option>
                          <option value="GW">Guinea-Bissau</option>
                          <option value="GY">Guyana</option>
                          <option value="HT">Haiti</option>
                          <option value="HM">
                            Heard Island and McDonald Islands
                          </option>
                          <option value="HN">Honduras</option>
                          <option value="HK">Hong Kong</option>
                          <option value="HU">Hungary</option>
                          <option value="IS">Iceland</option>
                          <option value="IN">India</option>
                          <option value="ID">Indonesia</option>
                          <option value="IR">Iran</option>
                          <option value="IQ">Iraq</option>
                          <option value="IE">Ireland</option>
                          <option value="IM">Isle of Man</option>
                          <option value="IL">Israel</option>
                          <option value="IT">Italy</option>
                          <option value="CI">Ivory Coast</option>
                          <option value="JM">Jamaica</option>
                          <option value="JP">Japan</option>
                          <option value="JE">Jersey</option>
                          <option value="JO">Jordan</option>
                          <option value="KZ">Kazakhstan</option>
                          <option value="KE">Kenya</option>
                          <option value="KI">Kiribati</option>
                          <option value="KW">Kuwait</option>
                          <option value="KG">Kyrgyzstan</option>
                          <option value="LA">Laos</option>
                          <option value="LV">Latvia</option>
                          <option value="LB">Lebanon</option>
                          <option value="LS">Lesotho</option>
                          <option value="LR">Liberia</option>
                          <option value="LY">Libya</option>
                          <option value="LI">Liechtenstein</option>
                          <option value="LT">Lithuania</option>
                          <option value="LU">Luxembourg</option>
                          <option value="MO">Macao</option>
                          <option value="MG">Madagascar</option>
                          <option value="MW">Malawi</option>
                          <option value="MY">Malaysia</option>
                          <option value="MV">Maldives</option>
                          <option value="ML">Mali</option>
                          <option value="MT">Malta</option>
                          <option value="MH">Marshall Islands</option>
                          <option value="MQ">Martinique</option>
                          <option value="MR">Mauritania</option>
                          <option value="MU">Mauritius</option>
                          <option value="YT">Mayotte</option>
                          <option value="MX">Mexico</option>
                          <option value="FM">Micronesia</option>
                          <option value="MD">Moldova</option>
                          <option value="MC">Monaco</option>
                          <option value="MN">Mongolia</option>
                          <option value="ME">Montenegro</option>
                          <option value="MS">Montserrat</option>
                          <option value="MA">Morocco</option>
                          <option value="MZ">Mozambique</option>
                          <option value="MM">Myanmar</option>
                          <option value="NA">Namibia</option>
                          <option value="NR">Nauru</option>
                          <option value="NP">Nepal</option>
                          <option value="NL">Netherlands</option>
                          <option value="NC">New Caledonia</option>
                          <option value="NZ">New Zealand</option>
                          <option value="NI">Nicaragua</option>
                          <option value="NE">Niger</option>
                          <option value="NG">Nigeria</option>
                          <option value="NU">Niue</option>
                          <option value="NF">Norfolk Island</option>
                          <option value="KP">North Korea</option>
                          <option value="MK">North Macedonia</option>
                          <option value="MP">Northern Mariana Islands</option>
                          <option value="NO">Norway</option>
                          <option value="OM">Oman</option>
                          <option value="PK">Pakistan</option>
                          <option value="PS">Palestinian Territory</option>
                          <option value="PA">Panama</option>
                          <option value="PG">Papua New Guinea</option>
                          <option value="PY">Paraguay</option>
                          <option value="PE">Peru</option>
                          <option value="PH">Philippines</option>
                          <option value="PN">Pitcairn</option>
                          <option value="PL">Poland</option>
                          <option value="PT">Portugal</option>
                          <option value="PR">Puerto Rico</option>
                          <option value="QA">Qatar</option>
                          <option value="RE">Reunion</option>
                          <option value="RO">Romania</option>
                          <option value="RU">Russia</option>
                          <option value="RW">Rwanda</option>
                          <option value="BL">Saint Barthélemy</option>
                          <option value="SH">Saint Helena</option>
                          <option value="KN">Saint Kitts and Nevis</option>
                          <option value="LC">Saint Lucia</option>
                          <option value="SX">Saint Martin (Dutch part)</option>
                          <option value="MF">Saint Martin (French part)</option>
                          <option value="PM">Saint Pierre and Miquelon</option>
                          <option value="VC">
                            Saint Vincent and the Grenadines
                          </option>
                          <option value="WS">Samoa</option>
                          <option value="SM">San Marino</option>
                          <option value="ST">São Tomé and Príncipe</option>
                          <option value="SA">Saudi Arabia</option>
                          <option value="SN">Senegal</option>
                          <option value="RS">Serbia</option>
                          <option value="SC">Seychelles</option>
                          <option value="SL">Sierra Leone</option>
                          <option value="SG">Singapore</option>
                          <option value="SK">Slovakia</option>
                          <option value="SI">Slovenia</option>
                          <option value="SB">Solomon Islands</option>
                          <option value="SO">Somalia</option>
                          <option value="ZA">South Africa</option>
                          <option value="GS">
                            South Georgia/Sandwich Islands
                          </option>
                          <option value="KR">South Korea</option>
                          <option value="SS">South Sudan</option>
                          <option value="ES">Spain</option>
                          <option value="LK">Sri Lanka</option>
                          <option value="SD">Sudan</option>
                          <option value="SR">Suriname</option>
                          <option value="SJ">Svalbard and Jan Mayen</option>
                          <option value="SZ">Swaziland</option>
                          <option value="SE">Sweden</option>
                          <option value="CH">Switzerland</option>
                          <option value="SY">Syria</option>
                          <option value="TW">Taiwan</option>
                          <option value="TJ">Tajikistan</option>
                          <option value="TZ">Tanzania</option>
                          <option value="TH">Thailand</option>
                          <option value="TL">Timor-Leste</option>
                          <option value="TG">Togo</option>
                          <option value="TK">Tokelau</option>
                          <option value="TO">Tonga</option>
                          <option value="TT">Trinidad and Tobago</option>
                          <option value="TN">Tunisia</option>
                          <option value="TR">Turkey</option>
                          <option value="TM">Turkmenistan</option>
                          <option value="TC">Turks and Caicos Islands</option>
                          <option value="TV">Tuvalu</option>
                          <option value="UG">Uganda</option>
                          <option value="UA">Ukraine</option>
                          <option value="AE">United Arab Emirates</option>
                          <option value="GB">United Kingdom (UK)</option>
                          <option value="US">United States (US)</option>
                          <option value="UM">
                            United States (US) Minor Outlying Islands
                          </option>
                          <option value="UY">Uruguay</option>
                          <option value="UZ">Uzbekistan</option>
                          <option value="VU">Vanuatu</option>
                          <option value="VA">Vatican</option>
                          <option value="VE">Venezuela</option>
                          <option value="VN">Vietnam</option>
                          <option value="VG">Virgin Islands (British)</option>
                          <option value="VI">Virgin Islands (US)</option>
                          <option value="WF">Wallis and Futuna</option>
                          <option value="EH">Western Sahara</option>
                          <option value="YE">Yemen</option>
                          <option value="ZM">Zambia</option>
                          <option value="ZW">Zimbabwe</option>
                        </select>
                      </div>
                    </div>
                    <p
                      className="form-row address-field form-row-wide"
                      id="billing_address_2_field"
                      data-priority="60"
                    >
                      <label
                        htmlFor="billing_address_2"
                        className="screen-reader-text"
                      >
                        State
                      </label>
                      <span className="woocommerce-input-wrapper">
                        <input
                          type="text"
                          className="input-text"
                          name="billing_address_2"
                          id="billing_address_2"
                          placeholder="Enter State"
                          autoComplete="address-line2"
                          data-placeholder="Enter State"
                        />
                      </span>
                    </p>
                    <div
                      className="form-row form-row-wide address-field update_totals_on_change validate-required"
                      id="billing_country_field"
                      data-priority="40"
                    >
                      <label htmlFor="billing_country"> Country </label>
                      <div className="woocommerce-input-wrapper">
                        <select
                          name="billing_country"
                          id="billing_country"
                          className="country_to_state country_select select2-hidden-accessible"
                          autoComplete="country"
                          data-placeholder="Select a country / region…"
                          data-label="Country / Region"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <option selected>Select country</option>
                          <option value="AF">Afghanistan</option>
                          <option value="AX">Åland Islands</option>
                          <option value="AL">Albania</option>
                          <option value="DZ">Algeria</option>
                          <option value="AS">American Samoa</option>
                          <option value="AD">Andorra</option>
                          <option value="AO">Angola</option>
                          <option value="AI">Anguilla</option>
                          <option value="AQ">Antarctica</option>
                          <option value="AG">Antigua and Barbuda</option>
                          <option value="AR">Argentina</option>
                          <option value="AM">Armenia</option>
                          <option value="AW">Aruba</option>
                          <option value="AU">Australia</option>
                          <option value="AT">Austria</option>
                          <option value="AZ">Azerbaijan</option>
                          <option value="BS">Bahamas</option>
                          <option value="BH">Bahrain</option>
                          <option value="BD">Bangladesh</option>
                          <option value="BB">Barbados</option>
                          <option value="BY">Belarus</option>
                          <option value="PW">Belau</option>
                          <option value="BE">Belgium</option>
                          <option value="BZ">Belize</option>
                          <option value="BJ">Benin</option>
                          <option value="BM">Bermuda</option>
                          <option value="BT">Bhutan</option>
                          <option value="BO">Bolivia</option>
                          <option value="BQ">
                            Bonaire, Saint Eustatius and Saba
                          </option>
                          <option value="BA">Bosnia and Herzegovina</option>
                          <option value="BW">Botswana</option>
                          <option value="BV">Bouvet Island</option>
                          <option value="BR">Brazil</option>
                          <option value="IO">
                            British Indian Ocean Territory
                          </option>
                          <option value="BN">Brunei</option>
                          <option value="BG">Bulgaria</option>
                          <option value="BF">Burkina Faso</option>
                          <option value="BI">Burundi</option>
                          <option value="KH">Cambodia</option>
                          <option value="CM">Cameroon</option>
                          <option value="CA">Canada</option>
                          <option value="CV">Cape Verde</option>
                          <option value="KY">Cayman Islands</option>
                          <option value="CF">Central African Republic</option>
                          <option value="TD">Chad</option>
                          <option value="CL">Chile</option>
                          <option value="CN">China</option>
                          <option value="CX">Christmas Island</option>
                          <option value="CC">Cocos (Keeling) Islands</option>
                          <option value="CO">Colombia</option>
                          <option value="KM">Comoros</option>
                          <option value="CG">Congo (Brazzaville)</option>
                          <option value="CD">Congo (Kinshasa)</option>
                          <option value="CK">Cook Islands</option>
                          <option value="CR">Costa Rica</option>
                          <option value="HR">Croatia</option>
                          <option value="CU">Cuba</option>
                          <option value="CW">Curaçao</option>
                          <option value="CY">Cyprus</option>
                          <option value="CZ">Czech Republic</option>
                          <option value="DK">Denmark</option>
                          <option value="DJ">Djibouti</option>
                          <option value="DM">Dominica</option>
                          <option value="DO">Dominican Republic</option>
                          <option value="EC">Ecuador</option>
                          <option value="EG">Egypt</option>
                          <option value="SV">El Salvador</option>
                          <option value="GQ">Equatorial Guinea</option>
                          <option value="ER">Eritrea</option>
                          <option value="EE">Estonia</option>
                          <option value="ET">Ethiopia</option>
                          <option value="FK">Falkland Islands</option>
                          <option value="FO">Faroe Islands</option>
                          <option value="FJ">Fiji</option>
                          <option value="FI">Finland</option>
                          <option value="FR">France</option>
                          <option value="GF">French Guiana</option>
                          <option value="PF">French Polynesia</option>
                          <option value="TF">
                            French Southern Territories
                          </option>
                          <option value="GA">Gabon</option>
                          <option value="GM">Gambia</option>
                          <option value="GE">Georgia</option>
                          <option value="DE">Germany</option>
                          <option value="GH">Ghana</option>
                          <option value="GI">Gibraltar</option>
                          <option value="GR">Greece</option>
                          <option value="GL">Greenland</option>
                          <option value="GD">Grenada</option>
                          <option value="GP">Guadeloupe</option>
                          <option value="GU">Guam</option>
                          <option value="GT">Guatemala</option>
                          <option value="GG">Guernsey</option>
                          <option value="GN">Guinea</option>
                          <option value="GW">Guinea-Bissau</option>
                          <option value="GY">Guyana</option>
                          <option value="HT">Haiti</option>
                          <option value="HM">
                            Heard Island and McDonald Islands
                          </option>
                          <option value="HN">Honduras</option>
                          <option value="HK">Hong Kong</option>
                          <option value="HU">Hungary</option>
                          <option value="IS">Iceland</option>
                          <option value="IN">India</option>
                          <option value="ID">Indonesia</option>
                          <option value="IR">Iran</option>
                          <option value="IQ">Iraq</option>
                          <option value="IE">Ireland</option>
                          <option value="IM">Isle of Man</option>
                          <option value="IL">Israel</option>
                          <option value="IT">Italy</option>
                          <option value="CI">Ivory Coast</option>
                          <option value="JM">Jamaica</option>
                          <option value="JP">Japan</option>
                          <option value="JE">Jersey</option>
                          <option value="JO">Jordan</option>
                          <option value="KZ">Kazakhstan</option>
                          <option value="KE">Kenya</option>
                          <option value="KI">Kiribati</option>
                          <option value="KW">Kuwait</option>
                          <option value="KG">Kyrgyzstan</option>
                          <option value="LA">Laos</option>
                          <option value="LV">Latvia</option>
                          <option value="LB">Lebanon</option>
                          <option value="LS">Lesotho</option>
                          <option value="LR">Liberia</option>
                          <option value="LY">Libya</option>
                          <option value="LI">Liechtenstein</option>
                          <option value="LT">Lithuania</option>
                          <option value="LU">Luxembourg</option>
                          <option value="MO">Macao</option>
                          <option value="MG">Madagascar</option>
                          <option value="MW">Malawi</option>
                          <option value="MY">Malaysia</option>
                          <option value="MV">Maldives</option>
                          <option value="ML">Mali</option>
                          <option value="MT">Malta</option>
                          <option value="MH">Marshall Islands</option>
                          <option value="MQ">Martinique</option>
                          <option value="MR">Mauritania</option>
                          <option value="MU">Mauritius</option>
                          <option value="YT">Mayotte</option>
                          <option value="MX">Mexico</option>
                          <option value="FM">Micronesia</option>
                          <option value="MD">Moldova</option>
                          <option value="MC">Monaco</option>
                          <option value="MN">Mongolia</option>
                          <option value="ME">Montenegro</option>
                          <option value="MS">Montserrat</option>
                          <option value="MA">Morocco</option>
                          <option value="MZ">Mozambique</option>
                          <option value="MM">Myanmar</option>
                          <option value="NA">Namibia</option>
                          <option value="NR">Nauru</option>
                          <option value="NP">Nepal</option>
                          <option value="NL">Netherlands</option>
                          <option value="NC">New Caledonia</option>
                          <option value="NZ">New Zealand</option>
                          <option value="NI">Nicaragua</option>
                          <option value="NE">Niger</option>
                          <option value="NG">Nigeria</option>
                          <option value="NU">Niue</option>
                          <option value="NF">Norfolk Island</option>
                          <option value="KP">North Korea</option>
                          <option value="MK">North Macedonia</option>
                          <option value="MP">Northern Mariana Islands</option>
                          <option value="NO">Norway</option>
                          <option value="OM">Oman</option>
                          <option value="PK">Pakistan</option>
                          <option value="PS">Palestinian Territory</option>
                          <option value="PA">Panama</option>
                          <option value="PG">Papua New Guinea</option>
                          <option value="PY">Paraguay</option>
                          <option value="PE">Peru</option>
                          <option value="PH">Philippines</option>
                          <option value="PN">Pitcairn</option>
                          <option value="PL">Poland</option>
                          <option value="PT">Portugal</option>
                          <option value="PR">Puerto Rico</option>
                          <option value="QA">Qatar</option>
                          <option value="RE">Reunion</option>
                          <option value="RO">Romania</option>
                          <option value="RU">Russia</option>
                          <option value="RW">Rwanda</option>
                          <option value="BL">Saint Barthélemy</option>
                          <option value="SH">Saint Helena</option>
                          <option value="KN">Saint Kitts and Nevis</option>
                          <option value="LC">Saint Lucia</option>
                          <option value="SX">Saint Martin (Dutch part)</option>
                          <option value="MF">Saint Martin (French part)</option>
                          <option value="PM">Saint Pierre and Miquelon</option>
                          <option value="VC">
                            Saint Vincent and the Grenadines
                          </option>
                          <option value="WS">Samoa</option>
                          <option value="SM">San Marino</option>
                          <option value="ST">São Tomé and Príncipe</option>
                          <option value="SA">Saudi Arabia</option>
                          <option value="SN">Senegal</option>
                          <option value="RS">Serbia</option>
                          <option value="SC">Seychelles</option>
                          <option value="SL">Sierra Leone</option>
                          <option value="SG">Singapore</option>
                          <option value="SK">Slovakia</option>
                          <option value="SI">Slovenia</option>
                          <option value="SB">Solomon Islands</option>
                          <option value="SO">Somalia</option>
                          <option value="ZA">South Africa</option>
                          <option value="GS">
                            South Georgia/Sandwich Islands
                          </option>
                          <option value="KR">South Korea</option>
                          <option value="SS">South Sudan</option>
                          <option value="ES">Spain</option>
                          <option value="LK">Sri Lanka</option>
                          <option value="SD">Sudan</option>
                          <option value="SR">Suriname</option>
                          <option value="SJ">Svalbard and Jan Mayen</option>
                          <option value="SZ">Swaziland</option>
                          <option value="SE">Sweden</option>
                          <option value="CH">Switzerland</option>
                          <option value="SY">Syria</option>
                          <option value="TW">Taiwan</option>
                          <option value="TJ">Tajikistan</option>
                          <option value="TZ">Tanzania</option>
                          <option value="TH">Thailand</option>
                          <option value="TL">Timor-Leste</option>
                          <option value="TG">Togo</option>
                          <option value="TK">Tokelau</option>
                          <option value="TO">Tonga</option>
                          <option value="TT">Trinidad and Tobago</option>
                          <option value="TN">Tunisia</option>
                          <option value="TR">Turkey</option>
                          <option value="TM">Turkmenistan</option>
                          <option value="TC">Turks and Caicos Islands</option>
                          <option value="TV">Tuvalu</option>
                          <option value="UG">Uganda</option>
                          <option value="UA">Ukraine</option>
                          <option value="AE">United Arab Emirates</option>
                          <option value="GB">United Kingdom (UK)</option>
                          <option value="US">United States (US)</option>
                          <option value="UM">
                            United States (US) Minor Outlying Islands
                          </option>
                          <option value="UY">Uruguay</option>
                          <option value="UZ">Uzbekistan</option>
                          <option value="VU">Vanuatu</option>
                          <option value="VA">Vatican</option>
                          <option value="VE">Venezuela</option>
                          <option value="VN">Vietnam</option>
                          <option value="VG">Virgin Islands (British)</option>
                          <option value="VI">Virgin Islands (US)</option>
                          <option value="WF">Wallis and Futuna</option>
                          <option value="EH">Western Sahara</option>
                          <option value="YE">Yemen</option>
                          <option value="ZM">Zambia</option>
                          <option value="ZW">Zimbabwe</option>
                        </select>
                      </div>
                    </div>
                    <p
                      className="form-row address-field validate-required validate-postcode form-row-wide"
                      id="billing_passport_field"
                      data-priority="90"
                      data-o_class="form-row form-row-wide address-field validate-required validate-postcode"
                    >
                      <label htmlFor="billing_passport" className="">
                        Passport Number
                      </label>
                      <span className="woocommerce-input-wrapper">
                        <input
                          type="text"
                          className="input-text"
                          name="billing_passport"
                          id="billing_passport"
                          placeholder="000000"
                          autoComplete="postal-code"
                        />
                      </span>
                    </p>
                    <p
                      className="form-row address-field validate-required validate-postcode form-row-wide"
                      id="pass_exp_field"
                      data-priority="90"
                      data-o_class="form-row form-row-wide address-field validate-required validate-postcode"
                    >
                      <label htmlFor="pass_exp" className="">
                        Passport Expiration Date
                      </label>
                      <span className="woocommerce-input-wrapper">
                        <input
                          type="text"
                          className="input-text"
                          name="pass_exp"
                          id="pass_exp"
                          placeholder="000000"
                          autoComplete="postal-code"
                        />
                      </span>
                    </p>
                    <p
                      className="form-row address-field validate-required validate-postcode form-row-wide"
                      id="pass-issue_field"
                      data-priority="90"
                      data-o_class="form-row form-row-wide address-field validate-required validate-postcode"
                    >
                      <label htmlFor="pass-issue" className="">
                        Passport Issue Date
                      </label>
                      <span className="woocommerce-input-wrapper">
                        <input
                          type="text"
                          className="input-text"
                          name="pass-issue"
                          id="pass-issue"
                          placeholder="000000"
                          autoComplete="postal-code"
                        />
                      </span>
                    </p>
                    <p
                      className="form-row address-field validate-required form-row-wide"
                      id="birth_place_field"
                      data-priority="70"
                      data-o_class="form-row form-row-wide address-field validate-required"
                    >
                      <label htmlFor="birth_place" className="">
                        Place of Birth
                      </label>
                      <span className="woocommerce-input-wrapper">
                        <input
                          type="text"
                          className="input-text"
                          name="birth_place"
                          id="birth_place"
                          placeholder="Enter town/city"
                          autoComplete="address-level2"
                        />
                      </span>
                    </p>

                    <p
                      className="form-row address-field validate-required form-row-wide"
                      id="birth_date_field"
                      data-priority="70"
                      data-o_class="form-row form-row-wide address-field validate-required"
                    >
                      <label htmlFor="birth_date" className="">
                        Date of Birth
                      </label>
                      <span className="woocommerce-input-wrapper">
                        <input
                          type="text"
                          className="input-text"
                          name="birth_date"
                          id="birth_date"
                          autoComplete="address-level2"
                        />
                      </span>
                    </p>
                    <p
                      className="form-row address-field validate-required form-row-wide"
                      id="occupation_field"
                      data-priority="70"
                      data-o_class="form-row form-row-wide address-field validate-required"
                    >
                      <label htmlFor="occupation" className="">
                        Occupation
                      </label>
                      <span className="woocommerce-input-wrapper">
                        <input
                          type="text"
                          className="input-text"
                          name="occupation"
                          id="occupation"
                          placeholder="Enter town/city"
                          autoComplete="address-level2"
                        />
                      </span>
                    </p>
                    <p
                      className="form-row address-field validate-required form-row-wide"
                      id="work_place_field"
                      data-priority="70"
                      data-o_class="form-row form-row-wide address-field validate-required"
                    >
                      <label htmlFor="work_place" className="">
                        Place of Work
                      </label>
                      <span className="woocommerce-input-wrapper">
                        <input
                          type="text"
                          className="input-text"
                          name="work_place"
                          id="work_place"
                          placeholder="Enter town/city"
                          autoComplete="address-level2"
                        />
                      </span>
                    </p>
                    <div className="row mt-3">
                      <div className="col-xl-10">
                        <label className="rlr-form-label rlr-form-label--dark">
                          Have You ever been to Iran?
                        </label>
                        <ul className="rlr-radios">
                          <li className="form-check">
                            <input
                              type="radio"
                              required
                              className="form-check-input rlr-form-check-input"
                              name="was_in_iran"
                              id="tour_package"
                              value="Tour Package"
                            />
                            <label
                              className="rlr-form-label rlr-form-label--radio"
                              htmlFor="tour_package"
                            >
                              Yes
                            </label>
                          </li>
                          <li className="form-check">
                            <input
                              type="radio"
                              required
                              className="form-check-input rlr-form-check-input"
                              name="was_in_iran"
                              id="activity"
                              value="Activity"
                            />
                            <label
                              className="rlr-form-label rlr-form-label--radio"
                              htmlFor="activity"
                            >
                              No
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <div className="rlr-fieldrow">
                    <div className="rlr-fieldrow__form-element">
                      <div className="rlr-fieldrow__item js-fieldrow__item">
                        <label
                          className="rlr-form-label rlr-form-label--"
                          htmlFor="rlr_input_splide_photouploader"
                        >
                          Product Photos
                        </label>
                        <div className="rlr-drop-region js-rlr-drop-region">
                          <div className="rlr-drop-region__add-section">
                            <input
                              required
                              id="rlr_input_splide_photouploader"
                              className="rlr-drop-region__image-input js-rlr-drop-input"
                              type="file"
                              accept="file/zip"
                            />
                            <svg
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M24 1.928c12.144 0 22.072 9.928 22.072 22.072 0 12.144-9.928 22.072-22.072 22.072-12.144 0-22.072-9.928-22.072-22.072C1.928 11.856 11.856 1.928 24 1.928zM24 0A23.94 23.94 0 0 0 0 24c0 13.302 10.794 24 24 24 13.204 0 24-10.698 24-24A23.94 23.94 0 0 0 24 0z"
                                fill="#99A3AD"
                              />
                              <path
                                d="M22.844 11.374h1.928v25.06h-1.928v-25.06z"
                                fill="#99A3AD"
                              />
                              <path
                                d="M11.18 23.132h24.868v1.928H11.18v-1.928z"
                                fill="#99A3AD"
                              />
                            </svg>
                            <div className="type-lead rlr-drop-region__add-section__text">
                              Add Photos
                            </div>
                          </div>
                        </div>
                        <div
                          className="splide rlr-view-region"
                          id="rlr_js_splide_photouploader"
                        >
                          <div className="splide__track rlr-view-region__strack">
                            <ul
                              id="image-preview"
                              className="splide__list"
                            ></ul>
                          </div>
                        </div>
                        <div className="rlr-view-input rlr-view-input--js-hide js-rlr-view-input">
                          <span className="rlr-view-input__submit js-label-submit">
                            <svg
                              width="14"
                              height="12"
                              viewBox="0 0 14 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.394 11.123a.698.698 0 0 1-.99 0L.45 7.17a1.05 1.05 0 0 1 0-1.485l.495-.495a1.05 1.05 0 0 1 1.486 0l2.468 2.468 6.67-6.67a1.05 1.05 0 0 1 1.485 0l.495.496c.41.41.41 1.075 0 1.485l-8.155 8.155z"
                                fill="var(--white)"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  </div>
                  <h6 className="checkout__section-title">
                    <span> Choose File </span>
                  </h6>

                  <div id="payment" className="woocommerce-checkout-payment">
                    <div className="rlr-fieldrow">
                      <div className="rlr-fieldrow__form-element">
                        <div className="rlr-fieldrow__item js-fieldrow__item">
                          <label
                            className="rlr-form-label rlr-form-label--"
                            htmlFor="rlr_input_splide_photouploader"
                          >
                            Product File
                          </label>
                          <div className="rlr-drop-region js-rlr-drop-region">
                            <div className="rlr-drop-region__add-section">
                              <input
                                required
                                id="rlr_input_splide_photouploader"
                                className="rlr-drop-region__image-input js-rlr-drop-input"
                                type="file"
                                multiple
                                name="Attachments"
                                accept="file/zip"
                              />
                              <svg
                                width="48"
                                height="48"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M24 1.928c12.144 0 22.072 9.928 22.072 22.072 0 12.144-9.928 22.072-22.072 22.072-12.144 0-22.072-9.928-22.072-22.072C1.928 11.856 11.856 1.928 24 1.928zM24 0A23.94 23.94 0 0 0 0 24c0 13.302 10.794 24 24 24 13.204 0 24-10.698 24-24A23.94 23.94 0 0 0 24 0z"
                                  fill="#99A3AD"
                                />
                                <path
                                  d="M22.844 11.374h1.928v25.06h-1.928v-25.06z"
                                  fill="#99A3AD"
                                />
                                <path
                                  d="M11.18 23.132h24.868v1.928H11.18v-1.928z"
                                  fill="#99A3AD"
                                />
                              </svg>
                              <div className="type-lead rlr-drop-region__add-section__text">
                                Add File
                              </div>
                            </div>
                          </div>
                          <div
                            className="splide rlr-view-region"
                            id="rlr_js_splide_photouploader"
                          >
                            <div className="splide__track rlr-view-region__strack">
                              <ul
                                id="image-preview"
                                className="splide__list"
                              ></ul>
                            </div>
                          </div>
                          <div className="rlr-view-input rlr-view-input--js-hide js-rlr-view-input">
                            <span className="rlr-view-input__submit js-label-submit">
                              <svg
                                width="14"
                                height="12"
                                viewBox="0 0 14 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.394 11.123a.698.698 0 0 1-.99 0L.45 7.17a1.05 1.05 0 0 1 0-1.485l.495-.495a1.05 1.05 0 0 1 1.486 0l2.468 2.468 6.67-6.67a1.05 1.05 0 0 1 1.485 0l.495.496c.41.41.41 1.075 0 1.485l-8.155 8.155z"
                                  fill="var(--white)"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <input name="files" type="file" multiple /> */}
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="woocommerce-shipping-fields"></div>
              <div className="woocommerce-additional-fields">
                <h3>Additional information</h3>
                <div className="woocommerce-additional-fields__field-wrapper">
                  <p
                    className="form-row notes"
                    id="order_comments_field"
                    data-priority=""
                  >
                    <label htmlFor="order_comments" className="">
                      Order notes
                      <span className="optional"> (optional) </span>
                    </label>
                    <span className="woocommerce-input-wrapper">
                      <textarea
                        name="order_comments"
                        className="input-text"
                        id="order_comments"
                        placeholder="Notes about your order, e.g. special notes htmlFor delivery."
                        rows={2}
                        cols={5}
                      ></textarea>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div
          id="order_review"
          className="woocommerce-checkout-review-order shop_table"
        >
          <table className="shop_table woocommerce-checkout-review-order-table">
            <tbody>
              <tr className="cart_item">
                <td className="product-name">
                  <div className="rlr-sidebar--text mt-2">
                    <h4> {serviceInfo?.attributes?.Header}</h4>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: serviceInfo?.attributes?.Description || "",
                      }}
                    ></p>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <button
                    type="submit"
                    className="button alt"
                    name="woocommerce_checkout_place_order"
                    id="place_order"
                    value="Place order"
                    data-value="Place order"
                  >
                    Place Order
                  </button>
                  {status === "fail" && (
                    <p className="text-danger mt-2">An error accured!</p>
                  )}
                  {status === "success" && (
                    <p className="text-success mt-2">
                      We recieved your request. Thanks for your submission
                    </p>
                  )}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </form>
    </div>
  );
};

export default FormBookingComponent;
