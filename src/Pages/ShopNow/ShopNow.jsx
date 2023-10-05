import React, { useState } from 'react';
import axios from 'axios';

function Post() {
  const initialUserData = {
    fullName: '',
    mobileNumber: '',
    email: '',
    gender: '',
    countryCode: '',
  };

  const [userData, setUserData] = useState(initialUserData);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://node-realtime.mobiloitte.io/api/v1/user/signUp',
        userData
      );
      console.log('API response:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const initialResendOtpData = {
    email: '',
  };

  const [resendOtpData, setResendOtpData] = useState(initialResendOtpData);

  const handleResendOtpData = (e) => {
    setResendOtpData({ ...resendOtpData, [e.target.name]: e.target.value });
  };

  const handleResendOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        'https://node-realtime.mobiloitte.io/api/v1/user/put_user_resendOTP',
        resendOtpData
      );
      console.log('Resend OTP response:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const initialVerifyOtpData = {
    email: '',
    otp: '',
  };

  const [verifyOtpData, setVerifyOtpData] = useState(initialVerifyOtpData);

  const handleVerifyOtpData = (e) => {
    setVerifyOtpData({ ...verifyOtpData, [e.target.name]: e.target.value });
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        'https://node-realtime.mobiloitte.io/api/v1/user/patch_user_verifyOTP',
        verifyOtpData
      );
      console.log('Verify OTP response:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='Post'>
      <center>
        <h1>User Registration</h1>
        <label>Full Name:</label><br />
        <input
          type='text'
          name='fullName'
          value={userData.fullName}
          onChange={handleChange}
        /><br />
        <label>Mobile Number:</label><br />
        <input
          type='number'
          name='mobileNumber'
          value={userData.mobileNumber}
          onChange={handleChange}
        /><br />
        <label>Email:</label><br />
        <input
          type='text'
          name='email'
          value={userData.email}
          onChange={handleChange}
        /><br />
        <label>Gender:</label><br />
        <input
          type='text'
          name='gender'
          value={userData.gender}
          onChange={handleChange}
        /><br />
        <label>Country Code:</label><br />
        <input
          type='number'
          name='countryCode'
          value={userData.countryCode}
          onChange={handleChange}
        /><br />
        <button type='button' onClick={handleSubmit}>Register</button>
      </center>

      <br /><br />

      <center>
        <h1>Resend OTP</h1>
        <label>Email:</label><br />
        <input
          type='text'
          name='email'
          value={resendOtpData.email}
          onChange={handleResendOtpData}
        /><br />
        <button type='button' onClick={handleResendOtp}>Resend OTP</button>
      </center>

      <br /><br />

      <center>
        <h1>Verify OTP</h1>
        <label>Email:</label><br />
        <input
          type='text'
          name='email'
          value={verifyOtpData.email}
          onChange={handleVerifyOtpData}
        /><br />
        <label>OTP:</label><br />
        <input
          type='text'
          name='otp'
          value={verifyOtpData.otp}
          onChange={handleVerifyOtpData}
        /><br />
        <button type='button' onClick={handleVerifyOtp}>Verify OTP</button>
      </center>
    </div>
  );
}

export default Post;
